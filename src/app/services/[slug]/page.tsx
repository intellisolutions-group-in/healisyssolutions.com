import { JSX } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import ContentCard from '@/components/layout/content-card'
import ServiceCard from '@/components/sections/service-card'
import Container from '@/components/core/container'
import { Button } from '@/components/core'
import Chip from '@/components/ui/chip'
import { createMetadata } from '@/lib/metadata'
import servicesData from '@/data/services.json'
import company from '@/data/company.json'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `services/${slug}`,
  })
}

export default async function ServiceDetailPage({
  params,
}: Props): Promise<JSX.Element> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'Service' as const,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization' as const,
      name: company.brandName,
      url: company.websiteUrl,
      logo: `${company.websiteUrl}/images/og-image.png`,
    },
    areaServed: company.targetCountry,
    hasOfferCatalog: {
      '@type': 'OfferCatalog' as const,
      name: service.title,
      itemListElement: service.features.map((feature) => ({
        '@type': 'Offer' as const,
        itemOffered: {
          '@type': 'Service' as const,
          name: feature,
        },
      })),
    },
  }

  const related = servicesData
    .filter((s) => s.slug !== slug && s.category === service.category)
    .slice(0, 3)

  return (
    <InnerPageLayout showCta={false}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        badge={service.category}
        sectionLabel='SERVICE DETAIL'
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services/' },
          { label: service.title },
        ]}
      />

      <PageSection>
        <Container>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
            <div className='lg:col-span-8'>
              {service.longDescription.split('\n\n').map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className='mb-6 leading-[1.9] text-muted dark:text-muted-dark'
                >
                  {para}
                </p>
              ))}
              <h3 className='mb-4 mt-4 text-xl font-bold text-heading dark:text-heading-dark'>
                Development Process
              </h3>
              <ol className='mb-4 list-decimal space-y-2 pl-6'>
                {service.process.map((step) => (
                  <li key={step} className='text-muted dark:text-muted-dark'>{step}</li>
                ))}
              </ol>
            </div>
            <div className='lg:col-span-4'>
              <ContentCard hover={false} className='sticky top-28'>
                <p className='mb-4 font-bold text-heading dark:text-heading-dark'>Key Benefits</p>
                <ul className='mb-6 list-disc space-y-2 pl-5'>
                  {service.features.map((f) => (
                    <li key={f} className='text-sm text-muted dark:text-muted-dark'>{f}</li>
                  ))}
                </ul>
                <p className='mb-3 font-bold text-heading dark:text-heading-dark'>Technologies</p>
                <div className='mb-6 flex flex-wrap gap-2'>
                  {service.technologies.map((t) => (
                    <Chip key={t} label={t} showTechIcon />
                  ))}
                </div>
                <Link href='/contact/'>
                  <Button variant='contained' color='primary' size='large'>
                    Get a Quote
                  </Button>
                </Link>
              </ContentCard>
            </div>
          </div>

          {related.length > 0 && (
            <div className='mt-16'>
              <h3 className='mb-6 text-xl font-bold text-heading dark:text-heading-dark'>
                Related Services
              </h3>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {related.map((r) => (
                  <ServiceCard
                    key={r.slug}
                    title={r.title}
                    slug={r.slug}
                    description={r.description}
                    image={r.image}
                    showButton={false}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
