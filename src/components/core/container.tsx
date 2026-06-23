import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Container: FC<Props> = ({ children, className, size = 'lg' }) => {
  const maxWidth = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-[1200px]',
  }[size]

  return (
    <div className={cn('container mx-auto w-full px-4 md:px-6', maxWidth, className)}>
      {children}
    </div>
  )
}

export default Container
