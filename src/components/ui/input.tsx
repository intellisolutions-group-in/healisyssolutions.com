import React, { FC, InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input: FC<Props> = ({ label, error, className, id, ...rest }) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={inputId}
          className='mb-1.5 block text-sm font-medium text-heading dark:text-heading-dark'
        >
          {label}
          {rest.required && <span className='text-red-500'> *</span>}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full rounded-lg border border-black/[0.12] bg-surface px-4 py-3 text-sm text-heading',
          'outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20',
          'dark:border-white/10 dark:bg-surface-dark dark:text-heading-dark',
          error && 'border-red-500',
          className
        )}
        {...rest}
      />
      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
    </div>
  )
}

export default Input
