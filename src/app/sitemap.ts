import company from '@/data/company.json'
import servicesData from '@/data/services.json'
import blogsData from '@/data/blogs.json'

export const dynamic = 'force-static'

const staticPages = [
  '',
  'about',
  'services',
  'contact',
  'careers',
  'portfolio',
  'why-choose-us',
  'our-process',
  'faq',
  'testimonials',
  'blog',
  'privacy',
  'terms',
]

export default function sitemap() {
  const base = company.websiteUrl
  const servicePages = servicesData.map((s) => `services/${s.slug}`)
  const blogPages = blogsData.map((b) => `blog/${b.slug}`)

  const allPages = [...staticPages, ...servicePages, ...blogPages]

  return allPages.map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
