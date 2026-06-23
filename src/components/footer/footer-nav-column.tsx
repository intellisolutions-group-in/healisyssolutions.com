'use client'

import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { FooterSectionTitle } from '@/components/footer'
import { cn } from '@/lib/cn'

interface LinkItemProps {
  label: string
  path: string
  icon?: ReactNode
}

const FooterNavLink: FC<LinkItemProps> = ({ label, path, icon }) => (
  <Link
    href={path}
    className={cn(
      'group mb-1 flex min-h-7 items-center gap-2 text-sm font-medium text-heading no-underline',
      'justify-start transition-colors hover:text-primary dark:text-heading-dark',
      'md:justify-end'
    )}
  >
    <span className='md:order-1'>{label}</span>
    {icon && (
      <span className='relative hidden h-7 w-7 shrink-0 items-center justify-center md:order-2 md:flex'>
        <span className='absolute inset-0 z-0 scale-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-100' />
        <span className='relative z-[1] text-inherit transition-colors group-hover:text-white [&_svg]:h-[18px] [&_svg]:w-[18px]'>
          {icon}
        </span>
      </span>
    )}
  </Link>
)

interface Props {
  title: string
  items: { label: string; path: string; icon?: ReactNode }[]
}

const FooterNavColumn: FC<Props> = ({ title, items }) => (
  <div>
    <FooterSectionTitle title={title} align='end' />
    <nav aria-label={title}>
      {items.map((item, index) => (
        <FooterNavLink
          key={item.label + String(index)}
          label={item.label}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </nav>
  </div>
)

export default FooterNavColumn
