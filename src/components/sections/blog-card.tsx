'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContentCard from '@/components/layout/content-card'
import Chip from '@/components/ui/chip'

interface Props {
  title: string
  slug: string
  excerpt: string
  image?: string
  category: string
  publishedDate: string
  readTime: string
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const BlogCard: FC<Props> = ({
  title,
  slug,
  excerpt,
  image = '/icons/mobile-app.webp',
  category,
  publishedDate,
  readTime,
}) => (
  <ContentCard className='cursor-pointer' padding='md'>
    <Link href={`/blog/${slug}/`} className='block no-underline'>
      <div className='mb-4 [&_img]:h-16 [&_img]:w-auto'>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <div className='mb-3 flex flex-wrap items-center gap-2'>
        <Chip label={category} />
        <span className='text-xs text-muted dark:text-muted-dark'>
          {formatDate(publishedDate)} · {readTime}
        </span>
      </div>
      <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark md:text-xl'>
        {title}
      </h3>
      <p className='line-clamp-3 text-[15px] leading-relaxed text-muted dark:text-muted-dark'>
        {excerpt}
      </p>
    </Link>
  </ContentCard>
)

export default BlogCard
