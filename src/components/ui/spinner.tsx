import React, { FC } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  className?: string
  size?: number
}

const Spinner: FC<Props> = ({ className, size = 22 }) => (
  <svg
    className={cn('animate-spin text-current', className)}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    />
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
    />
  </svg>
)

export default Spinner
