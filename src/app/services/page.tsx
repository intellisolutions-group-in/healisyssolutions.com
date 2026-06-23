import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import ServiceCard from '@/components/sections/service-card'
import Container from '@/components/core/container'
import { createMetadata } from '@/lib/metadata'
import { services } from '@/constants/service'

export const metadata: Metadata = createMetadata({
  title: 'Services',
  description: `Explore our comprehensive software development services, including custom web design, mobile apps, enterprise applications, and cloud solutions.`,
  path: 'services',
})

export default function ServicesPage(): JSX.Element {
  return (
    <InnerPageLayout
      ctaTitle='Need a custom software solution for your business?'
      ctaButtonText='Discuss Your Project'
    >
      <PageHero
        badge='Services'
        sectionLabel='OUR SERVICES'
        title='What do you need to keep your business growing?'
        subtitle='Comprehensive IT and software development services tailored for businesses across India.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      <PageSection>
        <Container>
          <SectionHeader
            sectionLabel='WHAT WE OFFER'
            title='End-to-End Software Development'
            description='From web and mobile apps to enterprise systems, we deliver solutions built for reliability and scale.'
            className='md:mb-12'
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
