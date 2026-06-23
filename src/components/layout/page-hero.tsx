'use client'

import React, { FC, memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import HeroDecoration from '@/components/layout/hero-decoration'
import { useApp } from '@/hooks'
import { cn } from '@/lib/cn'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  sectionLabel?: string
  badge?: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  fullHeight?: boolean
}

const PageHero: FC<Props> = ({
  sectionLabel,
  badge,
  title,
  subtitle,
  breadcrumbs,
  fullHeight = true,
}) => {
  const { isDark } = useApp()

  const scrollToContent = () => {
    const el = document.getElementById('page-content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[75vh]',
        isDark ? 'bg-[#1b2b3c]' : 'bg-[#e8f3ff]'
      )}
    >
      <HeroDecoration />

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          aria-label='Breadcrumb'
          className='absolute left-0 right-0 top-24 z-[2] px-4 text-center text-xs text-muted dark:text-muted-dark md:top-28'
        >
          {breadcrumbs.map((b, i) => (
            <span key={b.label}>
              {i > 0 && <span className='mx-1.5'>/</span>}
              {b.href ? (
                <Link
                  href={b.href}
                  className='text-muted no-underline transition-colors hover:text-primary dark:text-muted-dark'
                >
                  {b.label}
                </Link>
              ) : (
                <span className='font-medium text-heading dark:text-heading-dark'>
                  {b.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', bounce: 0.15 }}
        className={cn(
          'relative z-[1] flex flex-col items-center justify-center px-4 text-center',
          fullHeight ? 'min-h-screen' : 'min-h-[75vh] py-24'
        )}
      >
        {(badge || sectionLabel) && (
          <p className='mb-2 text-[17px] font-semibold text-primary md:text-lg'>
            {badge || sectionLabel}
          </p>
        )}

        <h1 className='mb-4 max-w-4xl text-[32px] font-extrabold leading-snug text-heading dark:text-heading-dark md:text-[40px] lg:text-[52px]'>
          {title}
        </h1>

        {subtitle && (
          <p className='mx-auto mb-4 max-w-2xl text-sm font-medium leading-loose text-muted dark:text-muted-dark md:text-[17px]'>
            {subtitle}
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, type: 'spring', bounce: 0 }}
          className='mt-16 md:mt-24'
        >
          <button
            type='button'
            onClick={scrollToContent}
            className='cursor-pointer border-none bg-transparent p-0 text-center'
            aria-label='Scroll to page content'
          >
            <MouseIcon className='mx-auto h-[50px] w-[50px] text-muted dark:text-muted-dark' />
            <p className='mt-1.5 text-xs font-medium text-muted/60 dark:text-muted-dark/60'>
              Scroll for more
            </p>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(PageHero)
