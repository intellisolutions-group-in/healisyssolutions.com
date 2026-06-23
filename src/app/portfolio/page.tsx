import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import PortfolioFilterGrid from '@/components/motion/portfolio-filter-grid'
import Container from '@/components/core/container'
import { createMetadata } from '@/lib/metadata'
import portfolio from '@/data/portfolio.json'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Portfolio',
  description: `Explore our portfolio of custom web platforms, mobile applications, and enterprise systems delivered by ${company.brandName} since 2010.`,
  path: 'portfolio',
})

export default function PortfolioPage(): JSX.Element {
  return (
    <InnerPageLayout ctaButtonText='Start Your Project'>
      <PageHero
        badge='Portfolio'
        sectionLabel='OUR WORK'
        title='Recent Project Highlights'
        subtitle='A selection of project examples showcasing our software development capabilities.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <PageSection>
        <Container>
          <SectionHeader
            sectionLabel='CASE STUDIES'
            title='Projects We Have Delivered'
            description='Generic project examples demonstrating our approach to solving real business challenges.'
            className='md:mb-12'
          />
          <PortfolioFilterGrid items={portfolio} />
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
