import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'muted' | 'blue'
}

const PageSection: FC<Props> = ({
  children,
  className,
  id,
  variant = 'default',
}) => (
  <section
    id={id}
    className={cn(
      'w-full py-10 md:py-14 lg:py-[72px]',
      variant === 'default' && 'bg-surface dark:bg-surface-dark',
      variant === 'muted' && 'bg-background dark:bg-background-dark',
      variant === 'blue' && 'bg-[#087ae7] dark:bg-[#151733]',
      className
    )}
  >
    {children}
  </section>
)

export default PageSection
