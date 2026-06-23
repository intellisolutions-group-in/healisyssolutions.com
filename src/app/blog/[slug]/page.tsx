import { JSX } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/layout/page-hero'
import PageSection from '@/components/layout/page-section'
import InnerPageLayout from '@/components/layout/inner-page-layout'
import BlogCard from '@/components/sections/blog-card'
import Container from '@/components/core/container'
import Chip from '@/components/ui/chip'
import { createMetadata, getBreadcrumbSchema } from '@/lib/metadata'
import blogsData from '@/data/blogs.json'
import company from '@/data/company.json'

interface Props {
  params: Promise<{ slug: string }>
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogsData.find((p) => p.slug === slug)
  if (!post) return {}
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `blog/${slug}`,
  })
}

export default async function BlogDetailPage({
  params,
}: Props): Promise<JSX.Element> {
  const { slug } = await params
  const post = blogsData.find((p) => p.slug === slug)
  if (!post) notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: post.title, href: `/blog/${slug}/` },
  ])

  const blogSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'BlogPosting' as const,
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${company.websiteUrl}${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      '@type': 'Person' as const,
      name: post.author,
    },
    publisher: {
      '@type': 'Organization' as const,
      name: company.brandName,
      url: company.websiteUrl,
      logo: {
        '@type': 'ImageObject' as const,
        url: `${company.websiteUrl}/images/logo-dark.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage' as const,
      '@id': `${company.websiteUrl}/blog/${post.slug}/`,
    },
  }

  const related = blogsData
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  const fallbackRelated = blogsData
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  const relatedPosts = related.length > 0 ? related : fallbackRelated

  return (
    <InnerPageLayout showCta={false}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge={post.category}
        sectionLabel='BLOG'
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: post.title },
        ]}
      />

      <PageSection>
        <Container>
          <div className='mx-auto max-w-3xl'>
            <div className='mb-8 flex flex-wrap items-center gap-3'>
              <Chip label={post.category} />
              <span className='text-sm text-muted dark:text-muted-dark'>
                {formatDate(post.publishedDate)} · {post.readTime}
              </span>
              <span className='text-sm text-muted dark:text-muted-dark'>
                By {post.author}
              </span>
            </div>

            {post.content.split('\n\n').map((para) => (
              <p
                key={para.slice(0, 40)}
                className='mb-6 leading-[1.9] text-muted dark:text-muted-dark'
              >
                {para}
              </p>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className='mt-16'>
              <h3 className='mb-6 text-xl font-bold text-heading dark:text-heading-dark'>
                Related Articles
              </h3>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {relatedPosts.map((r) => (
                  <BlogCard
                    key={r.slug}
                    title={r.title}
                    slug={r.slug}
                    excerpt={r.excerpt}
                    image={r.image}
                    category={r.category}
                    publishedDate={r.publishedDate}
                    readTime={r.readTime}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </PageSection>
    </InnerPageLayout>
  )
}
