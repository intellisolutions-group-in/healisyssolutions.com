/**
 * Convert raster images under public/ to WebP and update source references.
 *
 * Usage:
 *   node scripts/convert-images-to-webp.js
 *   node scripts/convert-images-to-webp.js --remove-originals
 *   node scripts/convert-images-to-webp.js --quality 90 --dry-run
 *
 * Options:
 *   --quality N          WebP quality (default: 85)
 *   --remove-originals   Delete PNG/JPG files after successful conversion
 *   --skip-refs          Only convert files; do not update src/ or scripts/
 *   --dry-run            Print actions without writing files
 */

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT, 'public')
const REF_DIRS = [
  path.join(ROOT, 'src'),
  path.join(ROOT, 'scripts'),
]
const REF_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json'])
const SOURCE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.bmp'])

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const removeOriginals = args.includes('--remove-originals')
const skipRefs = args.includes('--skip-refs')
const qualityArg = args.find((arg) => arg.startsWith('--quality='))
const quality = qualityArg ? Number(qualityArg.split('=')[1]) : 85

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function walkFiles(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, predicate, results)
    } else if (predicate(fullPath)) {
      results.push(fullPath)
    }
  }

  return results
}

function toPublicUrl(filePath) {
  const relative = path.relative(PUBLIC_DIR, filePath).split(path.sep).join('/')
  return `/${relative}`
}

function swapExtension(urlPath, nextExt) {
  return urlPath.replace(/\.(png|jpe?g|gif|bmp)$/i, nextExt)
}

async function convertImage(filePath) {
  const webpPath = `${filePath.replace(/\.[^.]+$/, '')}.webp`
  const inputSize = fs.statSync(filePath).size

  if (dryRun) {
    return {
      input: filePath,
      output: webpPath,
      inputSize,
      outputSize: 0,
      skipped: false,
      dryRun: true,
    }
  }

  await sharp(filePath)
    .webp({ quality, effort: 4 })
    .toFile(webpPath)

  const outputSize = fs.statSync(webpPath).size

  return {
    input: filePath,
    output: webpPath,
    inputSize,
    outputSize,
    skipped: false,
    dryRun: false,
  }
}

function collectReferenceFiles() {
  const files = []
  for (const dir of REF_DIRS) {
    walkFiles(
      dir,
      (filePath) => REF_EXTENSIONS.has(path.extname(filePath).toLowerCase())
    ).forEach((filePath) => files.push(filePath))
  }
  return files
}

function updateReferences(conversions) {
  const replacements = new Map()

  for (const item of conversions) {
    if (item.skipped) continue
    const fromUrl = toPublicUrl(item.input)
    const toUrl = toPublicUrl(item.output)
    replacements.set(fromUrl, toUrl)
  }

  const refFiles = collectReferenceFiles()
  let updatedFiles = 0
  let totalReplacements = 0

  for (const filePath of refFiles) {
    let content = fs.readFileSync(filePath, 'utf8')
    let fileChanged = false

    for (const [fromUrl, toUrl] of replacements) {
      if (!content.includes(fromUrl)) continue

      const nextContent = content.split(fromUrl).join(toUrl)
      if (nextContent !== content) {
        const count = (content.length - nextContent.length + toUrl.length - fromUrl.length)
        content = nextContent
        fileChanged = true
        totalReplacements += (content.match(new RegExp(toUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
      }
    }

    if (fileChanged) {
      updatedFiles += 1
      if (!dryRun) {
        fs.writeFileSync(filePath, content, 'utf8')
      }
      console.log(`  updated refs: ${path.relative(ROOT, filePath)}`)
    }
  }

  return { updatedFiles, totalReplacements }
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Public directory not found: ${PUBLIC_DIR}`)
    process.exit(1)
  }

  const imageFiles = walkFiles(PUBLIC_DIR, (filePath) =>
    SOURCE_EXTENSIONS.has(path.extname(filePath).toLowerCase())
  )

  if (imageFiles.length === 0) {
    console.log('No raster images found under public/.')
    return
  }

  console.log(`Found ${imageFiles.length} image(s) to convert (quality: ${quality})`)
  if (dryRun) console.log('Dry run — no files will be written.\n')

  const conversions = []
  let inputTotal = 0
  let outputTotal = 0

  for (const filePath of imageFiles) {
    const relative = path.relative(ROOT, filePath)
    try {
      const result = await convertImage(filePath)
      conversions.push(result)
      inputTotal += result.inputSize
      outputTotal += result.outputSize || 0

      if (result.dryRun) {
        console.log(`  [dry-run] ${relative} -> ${path.relative(ROOT, result.output)}`)
      } else {
        const saved = result.inputSize - result.outputSize
        const pct = ((saved / result.inputSize) * 100).toFixed(1)
        console.log(
          `  converted ${relative} (${formatBytes(result.inputSize)} -> ${formatBytes(result.outputSize)}, -${pct}%)`
        )

        if (removeOriginals) {
          fs.unlinkSync(filePath)
          console.log(`    removed original: ${relative}`)
        }
      }
    } catch (error) {
      console.error(`  failed ${relative}: ${error.message}`)
    }
  }

  if (!skipRefs && conversions.length > 0) {
    console.log('\nUpdating source references...')
    const { updatedFiles } = updateReferences(conversions)
    console.log(`  ${updatedFiles} file(s) updated`)
  }

  console.log('\nSummary')
  console.log(`  converted: ${conversions.length}`)
  if (!dryRun) {
    console.log(`  total size: ${formatBytes(inputTotal)} -> ${formatBytes(outputTotal)}`)
    if (inputTotal > 0) {
      const savedPct = (((inputTotal - outputTotal) / inputTotal) * 100).toFixed(1)
      console.log(`  saved: ${formatBytes(inputTotal - outputTotal)} (${savedPct}%)`)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
