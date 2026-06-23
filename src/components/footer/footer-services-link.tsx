'use client'

import React from 'react'
import Link from 'next/link'
import { FooterSectionTitle } from '@/components/footer'
import { services } from '@/constants/service'
import ArrowIcon from '@/assets/icons/material-symbols--call-made.svg'

const FOOTER_SERVICE_LIMIT = 6

const FooterServicesLink = () => {
  const featured = services.slice(0, FOOTER_SERVICE_LIMIT)

  return (
    <div>
      <FooterSectionTitle title='Services' />
      <nav aria-label='Footer services'>
        {featured.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}/`}
            className='group -ml-2 mb-0.5 flex h-8 items-center overflow-hidden text-sm font-medium text-heading no-underline transition-colors hover:text-primary dark:text-heading-dark'
          >
            <ArrowIcon className='h-[18px] w-[18px] shrink-0 -translate-x-4 transition-transform duration-200 group-hover:translate-x-0' />
            <span className='translate-x-[-8px] transition-transform duration-200 group-hover:translate-x-1'>
              {item.title}
            </span>
          </Link>
        ))}
        <Link
          href='/services/'
          className='group -ml-2 mt-2 flex h-8 items-center overflow-hidden text-sm font-semibold text-primary no-underline'
        >
          <ArrowIcon className='h-[18px] w-[18px] shrink-0 -translate-x-4 transition-transform duration-200 group-hover:translate-x-0' />
          <span className='translate-x-[-8px] transition-transform duration-200 group-hover:translate-x-1'>
            View All Services
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default FooterServicesLink
