import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  light?: boolean
}

const SectionTitle: FC<Props> = ({ children, className, light }) => {
  return (
    <p
      className={cn(
        'relative mb-2 pl-8 text-sm font-semibold tracking-wide',
        light ? 'text-white before:bg-white' : 'text-primary before:bg-primary',
        'before:absolute before:left-0 before:top-1/2 before:block before:h-[0.05rem] before:w-5 before:-translate-y-[60%] before:content-[""]',
        className
      )}
    >
      {children}
    </p>
  )
}

export default SectionTitle
