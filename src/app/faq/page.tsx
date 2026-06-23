import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import Container from '@/components/core/container'
import FAQItem from '@/components/ui/faq-item'
import { createMetadata } from '@/lib/metadata'
import faqData from '@/data/faq.json'

export const metadata: Metadata = createMetadata({
  title: 'FAQ',
  description: 'Get answers to frequently asked questions about software development processes, timelines, pricing, and tech stacks at Healisys Solutions.',
  path: 'faq',
})

export default function FAQPage(): JSX.Element {
  const faqSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'FAQPage' as const,
    mainEntity: faqData.categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question' as const,
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: item.answer,
        },
      }))
    ),
  }

  return (
    <InnerPageLayout ctaButtonText='Ask Us a Question'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        badge='FAQ'
        sectionLabel='FREQUENTLY ASKED'
        title='Frequently Asked Questions'
        subtitle='Find answers to common questions about our services and how we work.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <PageSection>
        <Container size='md'>
          <SectionHeader
            sectionLabel='HELP CENTER'
            title='Got Questions? We Have Answers'
            className='mb-10'
          />
          {faqData.categories.map((cat) => (
            <div key={cat.name} className='mb-10'>
              <h2 className='mb-4 text-lg font-bold text-heading dark:text-heading-dark'>
                {cat.name}
              </h2>
              {cat.items.map((item) => (
                <FAQItem key={item.question} item={item} />
              ))}
            </div>
          ))}
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
