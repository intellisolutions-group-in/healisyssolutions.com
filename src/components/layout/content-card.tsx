import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const ContentCard: FC<Props> = ({
  children,
  className,
  hover = true,
  padding = 'md',
}) => (
  <div
    className={cn(
      'h-full rounded-2xl bg-surface shadow-card dark:bg-surface-dark',
      padding === 'sm' && 'p-4',
      padding === 'md' && 'p-6',
      padding === 'lg' && 'p-8',
      hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
      className
    )}
  >
    {children}
  </div>
)

export default ContentCard
