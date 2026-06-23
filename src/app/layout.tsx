import { JSX } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { AppConfig } from '@/configs'
import company from '@/data/company.json'
import Footer from '@/components/footer/footer'
import AppBar from '@/components/appbar/app-bar'
import { AppContextProvider } from '@/contexts'
import ThemeProvider from '@/components/providers/theme-provider'
import MotionProvider from '@/components/motion/motion-provider'
import { getWebSiteSchema } from '@/lib/metadata'
import './globals.css'

const plugJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: AppConfig.appName,
    template: `%s | ${AppConfig.appName}`,
  },
  description: AppConfig.appDescription,
  metadataBase: new URL(company.websiteUrl),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: company.websiteUrl,
    siteName: company.brandName,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: company.brandName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: AppConfig.appName,
      template: `%s | ${AppConfig.appName}`,
    },
    description: AppConfig.appDescription,
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={plugJakartaSans.variable}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <AppContextProvider>
          <ThemeProvider>
            <MotionProvider>
              <AppBar />
              {children}
              <Footer />
            </MotionProvider>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}

