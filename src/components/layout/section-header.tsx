import React, { FC } from 'react'
import SectionTitle from '@/components/core/section-title'
import SectionBadge from '@/components/layout/section-badge'
import { cn } from '@/lib/cn'

interface Props {
  sectionLabel: string
  title: string
  description?: string
  badge?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

const SectionHeader: FC<Props> = ({
  sectionLabel,
  title,
  description,
  badge,
  align = 'left',
  light,
  className,
}) => (
  <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
    {badge && <SectionBadge light={light}>{badge}</SectionBadge>}
    <SectionTitle light={light}>{sectionLabel}</SectionTitle>
    <h2
      className={cn(
        'text-2xl font-extrabold leading-snug md:text-[32px]',
        light ? 'text-[#fbfbfb]' : 'text-heading dark:text-heading-dark'
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          'mt-3 max-w-2xl text-base leading-relaxed md:text-lg',
          align === 'center' && 'mx-auto',
          light ? 'text-[#ececec]' : 'text-muted dark:text-muted-dark'
        )}
      >
        {description}
      </p>
    )}
  </div>
)

export default SectionHeader
