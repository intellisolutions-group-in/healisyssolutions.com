import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  light?: boolean
}

const SectionBadge: FC<Props> = ({ children, className, light }) => (
  <div
    className={cn(
      'mb-3 inline-block rounded px-3.5 py-1.5',
      light
        ? 'bg-white/10 text-[#fbfbfb]'
        : 'bg-primary-light text-primary',
      className
    )}
  >
    <p className='text-xs font-medium uppercase tracking-wider'>{children}</p>
  </div>
)

export default SectionBadge
