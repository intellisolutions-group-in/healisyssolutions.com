import { JSX } from 'react'
import { Metadata } from 'next'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import SectionHeader from '@/components/layout/section-header'
import BlogCard from '@/components/sections/blog-card'
import Container from '@/components/core/container'
import { createMetadata } from '@/lib/metadata'
import { blogs } from '@/constants/blog'
import company from '@/data/company.json'

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description: `Stay updated with software development insights, IT trends, and digital business strategies from the engineering experts at ${company.brandName}.`,
  path: 'blog',
})

export default function BlogPage(): JSX.Element {
  return (
    <InnerPageLayout ctaButtonText='Discuss Your Project'>
      <PageHero
        badge='Blog'
        sectionLabel='INSIGHTS'
        title='Software Development Insights'
        subtitle='Practical articles on technology, process, and building software that supports business growth.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <PageSection>
        <Container>
          <SectionHeader
            sectionLabel='LATEST ARTICLES'
            title='From Our Team'
            description='Thoughts and guidance for businesses planning their next software initiative.'
            className='md:mb-12'
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {blogs.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                publishedDate={post.publishedDate}
                readTime={post.readTime}
              />
            ))}
          </div>
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
