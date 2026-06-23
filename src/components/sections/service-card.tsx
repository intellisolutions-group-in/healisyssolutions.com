'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContentCard from '@/components/layout/content-card'
import TiltCard from '@/components/motion/tilt-card'

interface Props {
  title: string
  slug: string
  description: string
  image?: string
  showButton?: boolean
}

const ServiceCard: FC<Props> = ({
  title,
  slug,
  description,
  image = '/icons/mobile-app.webp',
  showButton = true,
}) => (
  <TiltCard>
    <ContentCard className='cursor-pointer' padding='md'>
      <Link
        href={`/services/${slug}/`}
        className='block no-underline'
        data-cursor='pointer'
        data-cursor-label='View'
      >
      <div className='mb-6 [&_img]:h-16 [&_img]:w-auto'>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark md:text-xl'>
        {title}
      </h3>
      <p className='mb-4 line-clamp-3 text-[15px] leading-relaxed text-muted dark:text-muted-dark'>
        {description}
      </p>
      {showButton && (
        <div className='inline-flex min-w-10 items-center justify-center font-medium tracking-wide relative overflow-hidden border-2 border-primary text-primary bg-transparent rounded-lg px-2.5 py-1.5 text-sm transition-all duration-300 select-none hover:-translate-y-0.5'>
          Learn More
        </div>
      )}
      </Link>
    </ContentCard>
  </TiltCard>
)

export default ServiceCard
