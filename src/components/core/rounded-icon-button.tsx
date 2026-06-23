'use client'

import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}

const sizeMap = { small: 36, medium: 40, large: 44 }

const RoundedIconButton: FC<Props> = ({
  children,
  size = 'medium',
  className,
  ...rest
}) => {
  const px = sizeMap[size]

  return (
    <button
      type='button'
      className={cn(
        'animate-click-ripple relative inline-flex items-center justify-center rounded-full',
        'text-heading transition-colors hover:text-primary dark:text-heading-dark',
        'before:absolute before:left-0 before:top-0 before:z-[1] before:scale-0 before:rounded-full',
        'before:bg-primary before:transition-all before:duration-250',
        'focus:before:animate-[click_animation_0.5s_cubic-bezier(0.4,0,0.2,1)_1]',
        className
      )}
      style={{ width: px, height: px }}
      {...rest}
    >
      <span className='relative z-[2] leading-none [&_svg]:h-5 [&_svg]:w-5'>
        {children}
      </span>
    </button>
  )
}

export default RoundedIconButton
