'use client'

import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'contained' | 'outlined' | 'text'
type ButtonColor = 'primary' | 'secondary' | 'dark' | 'light'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  rounded?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-sm',
  large: 'px-5 py-3.5 text-sm',
}

const outlinedSizeClasses: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1.5 text-sm',
  medium: 'px-3.5 py-1.5 text-sm',
  large: 'px-[18px] py-3 text-sm',
}

const colorVariantClasses: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    contained:
      'bg-primary text-primary-contrast hover:-translate-y-0.5',
    outlined:
      'border-2 border-primary text-primary bg-transparent hover:-translate-y-0.5',
    text: 'text-primary bg-transparent hover:-translate-y-0.5',
  },
  secondary: {
    contained:
      'bg-secondary text-primary-contrast hover:-translate-y-0.5',
    outlined:
      'border-2 border-secondary text-secondary bg-transparent hover:-translate-y-0.5',
    text: 'text-secondary bg-transparent hover:-translate-y-0.5',
  },
  dark: {
    contained: 'bg-[#313d56] text-primary-contrast hover:-translate-y-0.5',
    outlined:
      'border-2 border-[#313d56] text-[#313d56] bg-transparent hover:-translate-y-0.5',
    text: 'text-[#313d56] bg-transparent hover:-translate-y-0.5',
  },
  light: {
    contained: 'bg-primary-contrast text-[#444] hover:-translate-y-0.5',
    outlined:
      'border-2 border-[#313d56] text-[#313d56] bg-transparent hover:-translate-y-0.5',
    text: 'text-primary-contrast bg-transparent hover:-translate-y-0.5',
  },
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  rounded = false,
  startIcon,
  endIcon,
  className,
  type = 'button',
  ...rest
}) => {
  const padding =
    variant === 'outlined' ? outlinedSizeClasses[size] : sizeClasses[size]

  return (
    <button
      type={type}
      className={cn(
        'inline-flex min-w-10 cursor-pointer items-center justify-center font-medium tracking-wide',
        'relative overflow-hidden border-none whitespace-nowrap outline-none transition-all duration-300',
        'select-none [-webkit-tap-highlight-color:transparent]',
        'before:pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full',
        rounded ? 'rounded-4xl' : 'rounded-lg',
        padding,
        colorVariantClasses[color][variant],
        className
      )}
      {...rest}
    >
      {startIcon && (
        <span className='mr-1 -ml-0.5 inline-flex [&_svg]:text-xl'>{startIcon}</span>
      )}
      <span>{children}</span>
      {endIcon && (
        <span className='ml-1 -mr-0.5 inline-flex [&_svg]:text-xl'>{endIcon}</span>
      )}
    </button>
  )
}

export default Button
