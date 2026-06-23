import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import ContentCard from '@/components/layout/content-card'
import Container from '@/components/core/container'
import ContactForm from '@/components/ui/contact-form'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import { CompanyConfig } from '@/configs/company.config'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Contact Us',
  description: `Get in touch with ${company.brandName} for custom software development projects. Send us a message or email us at ${company.email}.`,
  path: 'contact',
})

export default function ContactPage(): JSX.Element {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact/' },
  ])

  return (
    <InnerPageLayout showCta={false}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge="Let's Talk"
        sectionLabel='CONTACT US'
        title="Let's make something great together."
        subtitle='We would love to hear about your project. Reach out and our team will respond within 24 hours.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <PageSection>
        <Container>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <div className='lg:col-span-5'>
              <SectionHeader
                sectionLabel='GET IN TOUCH'
                title='Contact Information'
                description='Reach us by email during business hours. We typically respond within one business day.'
              />
              <a
                href={`mailto:${CompanyConfig.email}`}
                className='group mb-6 flex items-start gap-3 no-underline transition-colors hover:text-primary'
              >
                <EmailIcon className='mt-0.5 h-6 w-6 shrink-0 text-heading group-hover:text-primary dark:text-heading-dark' />
                <div>
                  <p className='font-semibold text-heading dark:text-heading-dark'>{CompanyConfig.email}</p>
                  <p className='text-sm text-muted dark:text-muted-dark'>Response within 24 hrs</p>
                </div>
              </a>
              <ContentCard hover={false} className='mb-4'>
                <p className='mb-1 font-semibold text-heading dark:text-heading-dark'>Business Hours</p>
                <p className='text-sm text-muted dark:text-muted-dark'>{CompanyConfig.businessHours}</p>
              </ContentCard>
              <div className='rounded-2xl border border-dashed border-black/10 bg-background p-8 text-center dark:border-white/10 dark:bg-background-dark'>
                <p className='text-sm text-muted dark:text-muted-dark'>
                  Map placeholder — office location can be added when address is available.
                </p>
              </div>
            </div>
            <div className='lg:col-span-7'>
              <ContentCard hover={false} padding='lg'>
                <SectionHeader
                  sectionLabel='QUICK INQUIRY'
                  title='Send Us a Message'
                  className='mb-6'
                />
                <ContactForm />
              </ContentCard>
            </div>
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
