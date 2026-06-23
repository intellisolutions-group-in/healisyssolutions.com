import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import Container from '@/components/core/container'
import JobCard from '@/components/ui/job-card'
import { createMetadata } from '@/lib/metadata'
import careers from '@/data/careers.json'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Careers',
  description: `Join the ${company.brandName} team! Explore open job positions in software development, mobile apps, UI/UX design, and QA in Vadodara or remote.`,
  path: 'careers',
})

export default function CareersPage(): JSX.Element {
  const jobPostingSchemas = careers.map((job) => ({
    '@context': 'https://schema.org' as const,
    '@type': 'JobPosting' as const,
    title: job.title,
    description: `<p>${job.description}</p><h3>Requirements:</h3><ul>${job.requirements.map((req) => `<li>${req}</li>`).join('')}</ul>`,
    datePosted: '2026-06-01',
    validThrough: '2026-12-31',
    employmentType: 'FULL_TIME' as const,
    hiringOrganization: {
      '@type': 'Organization' as const,
      name: company.brandName,
      sameAs: company.websiteUrl,
      logo: `${company.websiteUrl}/images/og-image.png`,
    },
    jobLocation: {
      '@type': 'Place' as const,
      address: {
        '@type': 'PostalAddress' as const,
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    jobLocationType: job.location.toLowerCase().includes('remote') ? ('TELECOMMUTE' as const) : undefined,
  }))

  return (
    <InnerPageLayout
      ctaEyebrow='Interested in joining our team?'
      ctaTitle='Apply today and grow with Healisys Solutions'
      ctaButtonText='Contact HR'
      ctaButtonHref={`mailto:${company.email}`}
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchemas) }}
      />
      <PageHero
        badge='Careers'
        sectionLabel='JOIN OUR TEAM'
        title='Build Your Career With Us'
        subtitle='Build your career with a team that values quality, collaboration, and continuous learning.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers' },
        ]}
      />

      <PageSection>
        <Container size='md'>
          <SectionHeader
            sectionLabel='OPEN POSITIONS'
            title='Current Job Openings'
            description='We are always looking for talented professionals. Browse openings below and apply for the role that matches your skills.'
            className='mb-10'
          />
          {careers.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
