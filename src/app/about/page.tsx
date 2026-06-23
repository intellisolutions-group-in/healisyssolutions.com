import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import ContentCard from '@/components/layout/content-card'
import StatCard from '@/components/sections/stat-card'
import CompanyTimeline from '@/components/motion/company-timeline'
import Container from '@/components/core/container'
import { createMetadata, getOrganizationSchema, getBreadcrumbSchema } from '@/lib/metadata'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'About Us',
  description: `Learn about ${company.brandName} — a trusted software development and IT services company in India since 2010. Meet our team and see our growth story.`,
  path: 'about',
})

const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '200+', label: 'Projects Delivered' },
]

export default function AboutPage(): JSX.Element {
  const schema = getOrganizationSchema()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about/' },
  ])

  return (
    <InnerPageLayout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge='About'
        sectionLabel='WHO WE ARE'
        title='About Healisys Solutions'
        subtitle={company.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      <PageSection>
        <Container>
          <div className='mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
              <SectionHeader
                sectionLabel='COMPANY OVERVIEW'
                title='Trusted Software Partner Since 2010'
                description={`${company.brandName} has been delivering software development services since ${company.establishedYear}. Our domain was registered on ${company.domainRegisteredDate}, marking the beginning of our journey across ${company.targetCountry}.`}
              />
              <p className='leading-relaxed text-muted dark:text-muted-dark'>
                We specialise in web development, mobile applications, custom software,
                enterprise systems, and technology consulting — helping organisations
                digitise operations and build products that scale.
              </p>
            </div>
            <ContentCard hover={false}>
              <p className='mb-4 font-bold text-heading dark:text-heading-dark'>At a Glance</p>
              <dl className='space-y-3 text-sm'>
                <div><dt className='inline font-semibold text-heading dark:text-heading-dark'>Established: </dt><dd className='inline text-muted dark:text-muted-dark'>{company.establishedYear}</dd></div>
                <div><dt className='inline font-semibold text-heading dark:text-heading-dark'>Industry: </dt><dd className='inline text-muted dark:text-muted-dark'>{company.industry}</dd></div>
                <div><dt className='inline font-semibold text-heading dark:text-heading-dark'>Country: </dt><dd className='inline text-muted dark:text-muted-dark'>{company.targetCountry}</dd></div>
                <div><dt className='inline font-semibold text-heading dark:text-heading-dark'>Email: </dt><dd className='inline text-muted dark:text-muted-dark'>{company.email}</dd></div>
                <div><dt className='inline font-semibold text-heading dark:text-heading-dark'>Domain Registered: </dt><dd className='inline text-muted dark:text-muted-dark'>{company.domainRegisteredDate}</dd></div>
              </dl>
            </ContentCard>
          </div>
        </Container>
      </PageSection>

      <PageSection variant='muted' className='!py-0 md:!py-0'>
        <CompanyTimeline />
      </PageSection>

      <PageSection variant='muted'>
        <Container>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {[
              { title: 'Mission', text: company.mission },
              { title: 'Vision', text: company.vision },
              { title: 'Values', text: company.values.join(' · ') },
            ].map((item) => (
              <ContentCard key={item.title}>
                <h3 className='mb-3 text-lg font-bold text-heading dark:text-heading-dark'>{item.title}</h3>
                {item.title === 'Values' ? (
                  <ul className='list-disc space-y-1 pl-5 text-sm text-muted dark:text-muted-dark'>
                    {company.values.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                ) : (
                  <p className='text-sm leading-relaxed text-muted dark:text-muted-dark'>{item.text}</p>
                )}
              </ContentCard>
            ))}
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
