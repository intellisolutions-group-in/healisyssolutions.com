'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import { MARQUEE_TECH, techIconSrc } from '@/constants/tech-icons'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'
import { cn } from '@/lib/cn'

interface Props {
  className?: string
  light?: boolean
}

const LogoMarquee: FC<Props> = ({ className, light }) => {
  const reduced = usePrefersReducedMotion()
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH]

  return (
    <div
      className={cn(
        'relative overflow-hidden border-y py-6',
        light
          ? 'border-white/10 bg-white/5'
          : 'border-black/5 bg-surface/50 dark:border-white/10 dark:bg-surface-dark/50',
        className
      )}
    >
      <div
        className={cn(
          'flex w-max items-center gap-12 md:gap-16',
          !reduced && 'animate-marquee'
        )}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className='flex shrink-0 items-center gap-3'
            title={tech.name}
          >
            <Image
              src={techIconSrc(tech.file)}
              alt={tech.name}
              width={36}
              height={36}
              className='h-9 w-9 object-contain'
            />
            <span
              className={cn(
                'whitespace-nowrap text-sm font-semibold tracking-wide md:text-base',
                light ? 'text-white/80' : 'text-muted dark:text-muted-dark'
              )}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoMarquee
