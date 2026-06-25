import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import ContentCard from '@/components/layout/content-card'
import Container from '@/components/core/container'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service',
  description: `Terms of Service for ${company.brandName}. Read the terms and conditions governing the use of our website and services.`,
  path: 'terms',
})

const SECTIONS = [
  {
    title: 'Use of Website',
    body: 'You may use this website for lawful purposes only. You agree not to misuse the website, attempt unauthorised access, or interfere with its operation.',
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website is the property of ${company.brandName} unless otherwise stated. You may not reproduce content without prior written permission.`,
  },
  {
    title: 'Services',
    body: `Information on this website about our services is provided for general purposes. Specific project terms are defined in separate agreements between ${company.brandName} and the client.`,
  },
  {
    title: 'Limitation of Liability',
    body: `${company.brandName} is not liable for any indirect, incidental, or consequential damages arising from the use of this website. The website is provided on an "as is" basis.`,
  },
]

export default function TermsPage(): JSX.Element {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Terms of Service', href: '/terms/' },
  ])

  return (
    <InnerPageLayout showCta={false}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge='Legal'
        title='Terms of Service'
        subtitle='Terms and conditions for using our website and engaging with our services.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service' },
        ]}
      />
      <PageSection variant='muted'>
        <Container size='md'>
          <ContentCard hover={false} padding='lg'>
            <p className='mb-8 leading-relaxed text-muted dark:text-muted-dark'>
              By accessing and using the {company.brandName} website at {company.websiteUrl}, you
              agree to these Terms of Service. If you do not agree, please do not use our website.
            </p>
            {SECTIONS.map((s) => (
              <div key={s.title} className='mb-8'>
                <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>{s.title}</h3>
                <p className='leading-relaxed text-muted dark:text-muted-dark'>{s.body}</p>
              </div>
            ))}
            <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>Contact</h3>
            <p className='leading-relaxed text-muted dark:text-muted-dark'>
              For questions about these terms, contact us at{' '}
              <a href={`mailto:${company.email}`} className='text-primary no-underline hover:underline'>
                {company.email}
              </a>.
            </p>
          </ContentCard>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
