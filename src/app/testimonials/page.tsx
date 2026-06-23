import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import TestimonialCard from '@/components/sections/testimonial-card'
import Container from '@/components/core/container'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import testimonials from '@/data/testimonials.json'

export const metadata: Metadata = createMetadata({
  title: 'Testimonials',
  description: `Read client testimonials and reviews about our custom software development services and IT solutions delivered across India.`,
  path: 'testimonials',
})

export default function TestimonialsPage(): JSX.Element {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Testimonials', href: '/testimonials/' },
  ])

  return (
    <InnerPageLayout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge='Testimonials'
        sectionLabel='CLIENT FEEDBACK'
        title='What Clients Say'
        subtitle='Feedback from professionals who have worked with our team.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials' },
        ]}
      />

      <PageSection>
        <Container>
          <SectionHeader
            sectionLabel='TESTIMONIALS'
            title='Trusted by Businesses Across India'
            className='md:mb-12'
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                text={t.text}
                name={t.name}
                designation={t.designation}
              />
            ))}
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
