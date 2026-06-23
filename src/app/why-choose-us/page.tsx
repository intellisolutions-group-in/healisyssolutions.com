import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import ContentCard from '@/components/layout/content-card'
import Container from '@/components/core/container'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import company from '@/data/company.json'

const REASONS = [
  { title: 'Established Since 2010', desc: 'Over a decade of experience delivering software solutions for businesses across India.' },
  { title: 'End-to-End Expertise', desc: 'From discovery and design to development, testing, deployment, and ongoing support.' },
  { title: 'Transparent Communication', desc: 'Regular updates, clear milestones, and direct access to your project team throughout delivery.' },
  { title: 'Quality-Focused Delivery', desc: 'Clean code, thorough testing, and security-conscious development practices on every project.' },
  { title: 'Flexible Engagement', desc: 'Fixed-price and time-and-materials models to suit startups, SMEs, and enterprise clients.' },
  { title: 'India-Focused Understanding', desc: 'Experience with local payment gateways, compliance considerations, and regional business needs.' },
]

export const metadata: Metadata = createMetadata({
  title: 'Why Choose Us',
  description: `Discover what sets ${company.brandName} apart. Learn why businesses choose us as their trusted software development and IT partner in India.`,
  path: 'why-choose-us',
})

export default function WhyChooseUsPage(): JSX.Element {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Why Choose Us', href: '/why-choose-us/' },
  ])

  return (
    <InnerPageLayout ctaButtonText='Start a Conversation'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge='Why Us'
        sectionLabel='WHY CHOOSE US'
        title='Your Trusted Technology Partner'
        subtitle={`${company.brandName} combines technical expertise with a client-first approach to deliver software that works.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Why Choose Us' },
        ]}
      />

      <PageSection>
        <Container>
          <SectionHeader
            sectionLabel='OUR ADVANTAGES'
            title='What Sets Us Apart'
            description='We focus on practical delivery, transparent collaboration, and long-term value for every client engagement.'
            className='md:mb-12'
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {REASONS.map((r) => (
              <ContentCard key={r.title}>
                <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>{r.title}</h3>
                <p className='leading-relaxed text-muted dark:text-muted-dark'>{r.desc}</p>
              </ContentCard>
            ))}
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
