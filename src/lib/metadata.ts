import type { Metadata } from 'next'
import company from '@/data/company.json'

interface MetadataOptions {
  title: string
  description: string
  path?: string
  image?: string
}

export function createMetadata({
  title,
  description,
  path = '',
  image = '/images/og-image.png',
}: MetadataOptions): Metadata {
  const fullTitle = `${title} | ${company.brandName}`
  const url = path
    ? `${company.websiteUrl}/${path.replace(/^\//, '')}/`
    : `${company.websiteUrl}/`
  const imageUrl = image.startsWith('http') ? image : `${company.websiteUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords: [
      company.brandName,
      'software development',
      'IT services',
      'India',
      title,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brandName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Organization' as const,
    name: company.brandName,
    url: company.websiteUrl,
    email: company.email,
    foundingDate: String(company.establishedYear),
    description: company.description,
    areaServed: company.targetCountry,
    logo: `${company.websiteUrl}/images/logo-dark.png`,
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'WebSite' as const,
    name: company.brandName,
    url: company.websiteUrl,
    potentialAction: {
      '@type': 'SearchAction' as const,
      target: `${company.websiteUrl}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      ...(item.href
        ? {
            item: item.href.startsWith('http')
              ? item.href
              : `${company.websiteUrl}${item.href.startsWith('/') ? '' : '/'}${item.href}`,
          }
        : {}),
    })),
  }
}


