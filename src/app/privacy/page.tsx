import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import ContentCard from '@/components/layout/content-card'
import Container from '@/components/core/container'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import { createMetadata } from '@/lib/metadata'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${company.brandName}. Read how we collect, use, and protect your personal information on our website.`,
  path: 'privacy',
})

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'When you fill out a contact form, career application, or inquiry form, we may collect your name, email address, phone number, location, and any message or documents you voluntarily provide.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information you provide to respond to inquiries, process job applications, communicate about projects, and improve our services. We do not sell your personal information to third parties.',
  },
  {
    title: 'Data Security',
    body: 'We implement reasonable technical and organisational measures to protect your information. However, no method of transmission over the internet is completely secure.',
  },
]

export default function PrivacyPage(): JSX.Element {
  return (
    <InnerPageLayout showCta={false}>
      <PageHero
        badge='Legal'
        title='Privacy Policy'
        subtitle='How we collect, use, and protect your information when you visit our website or contact us.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />
      <PageSection variant='muted'>
        <Container size='md'>
          <ContentCard hover={false} padding='lg'>
            <p className='mb-6 text-sm text-muted dark:text-muted-dark'>Last updated: June 2026</p>
            <p className='mb-8 leading-relaxed text-muted dark:text-muted-dark'>
              {company.brandName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website{' '}
              {company.websiteUrl}. This Privacy Policy explains how we collect, use, and safeguard
              information when you visit our website or contact us.
            </p>
            {SECTIONS.map((s) => (
              <div key={s.title} className='mb-8'>
                <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>{s.title}</h3>
                <p className='leading-relaxed text-muted dark:text-muted-dark'>{s.body}</p>
              </div>
            ))}
            <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>Contact</h3>
            <p className='leading-relaxed text-muted dark:text-muted-dark'>
              For privacy-related questions, contact us at{' '}
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
