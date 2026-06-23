import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import ProcessStepCard from '@/components/sections/process-step-card'
import Container from '@/components/core/container'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import company from '@/data/company.json'

const STEPS = [
  { step: '01', title: 'Discovery & Requirements', desc: 'We begin by understanding your business goals, users, technical constraints, and success criteria through structured workshops and documentation.' },
  { step: '02', title: 'Architecture & Planning', desc: 'Our team defines the technical architecture, technology stack, project milestones, and delivery timeline with clear acceptance criteria.' },
  { step: '03', title: 'Design & Prototyping', desc: 'UI/UX designs and interactive prototypes are created for review, ensuring the user experience aligns with your vision before development begins.' },
  { step: '04', title: 'Agile Development', desc: 'Development proceeds in sprints with regular demos, code reviews, and continuous integration to maintain quality and transparency.' },
  { step: '05', title: 'Testing & QA', desc: 'Comprehensive manual and automated testing validates functionality, performance, security, and compatibility across target environments.' },
  { step: '06', title: 'Deployment & Handover', desc: 'We deploy to production, provide documentation and knowledge transfer, and offer ongoing maintenance and support packages.' },
]

export const metadata: Metadata = createMetadata({
  title: 'Our Development Process',
  description: `Discover our agile software development methodology. Learn how ${company.brandName} takes your project from discovery and design to deployment.`,
  path: 'our-process',
})

export default function OurProcessPage(): JSX.Element {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Our Process', href: '/our-process/' },
  ])

  return (
    <InnerPageLayout ctaButtonText='Discuss Your Project'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge='Process'
        sectionLabel='OUR PROCESS'
        title='How We Deliver Projects'
        subtitle='A structured, transparent approach that keeps your project on track from start to finish.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Process' },
        ]}
      />

      <PageSection>
        <Container size='md'>
          <SectionHeader
            sectionLabel='METHODOLOGY'
            title='From Discovery to Deployment'
            description='Every project follows a proven workflow designed to reduce risk and maximise clarity at each stage.'
            className='mb-10'
          />
          {STEPS.map((s) => (
            <ProcessStepCard
              key={s.step}
              step={s.step}
              title={s.title}
              description={s.desc}
            />
          ))}
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
