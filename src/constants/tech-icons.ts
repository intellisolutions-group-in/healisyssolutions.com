/** Maps technology labels to filenames under /public/tech-icons/ */
export const TECH_ICON_FILES: Record<string, string> = {
  React: 'react.png',
  'React Native': 'react-native.png',
  'Next.js': 'next-js.png',
  TypeScript: 'typescript.png',
  'Node.js': 'Nodejs.png',
  '.NET': 'NET.png',
  'NET Core': 'NET.png',
  Python: 'python.png',
  Django: 'Django.png',
  PostgreSQL: 'PostgresSQL.png',
  MongoDB: 'MongoDB.png',
  AWS: 'AWS.png',
  'AWS Lambda': 'AWS.png',
  Azure: 'Azure.png',
  Docker: 'docker.png',
  Kubernetes: 'Kubernetes.png',
  Flutter: 'Flutter.png',
  GraphQL: 'graphql.png',
  'Tailwind CSS': 'Tailwind.png',
  Angular: 'Angular.png',
  Firebase: 'Firebase.png',
  Figma: 'figma.png',
  Redis: 'Redis.png',
}

/** Featured stack for home marquee (order preserved) */
export const MARQUEE_TECH: Array<{ name: string; file: string }> = [
  { name: 'React', file: 'react.png' },
  { name: 'Next.js', file: 'next-js.png' },
  { name: 'TypeScript', file: 'typescript.png' },
  { name: 'Node.js', file: 'Nodejs.png' },
  { name: '.NET', file: 'NET.png' },
  { name: 'Python', file: 'python.png' },
  { name: 'PostgreSQL', file: 'PostgresSQL.png' },
  { name: 'MongoDB', file: 'MongoDB.png' },
  { name: 'AWS', file: 'AWS.png' },
  { name: 'Azure', file: 'Azure.png' },
  { name: 'Docker', file: 'docker.png' },
  { name: 'Kubernetes', file: 'Kubernetes.png' },
  { name: 'Flutter', file: 'Flutter.png' },
  { name: 'React Native', file: 'react-native.png' },
  { name: 'GraphQL', file: 'graphql.png' },
  { name: 'Tailwind CSS', file: 'Tailwind.png' },
  { name: 'Angular', file: 'Angular.png' },
  { name: 'Django', file: 'Django.png' },
  { name: 'Firebase', file: 'Firebase.png' },
  { name: 'Figma', file: 'figma.png' },
]

export function getTechIconUrl(name: string): string | null {
  const file = TECH_ICON_FILES[name]
  if (!file) return null
  return `/tech-icons/${encodeURIComponent(file)}`
}

export function techIconSrc(file: string): string {
  return `/tech-icons/${encodeURIComponent(file)}`
}

/** Unique icon filenames referenced by the site */
export function getUsedTechIconFiles(): string[] {
  const files = new Set<string>()
  Object.values(TECH_ICON_FILES).forEach((f) => files.add(f))
  MARQUEE_TECH.forEach((t) => files.add(t.file))
  return [...files].sort()
}
