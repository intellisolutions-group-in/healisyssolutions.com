import { MetadataRoute } from 'next'
import company from '@/data/company.json'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.brandName,
    short_name: company.brandName,
    description: company.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#087ae7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
