'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import { getTechIconUrl } from '@/constants/tech-icons'
import { cn } from '@/lib/cn'

interface Props {
  name: string
  size?: number
  className?: string
  showLabel?: boolean
  labelClassName?: string
}

const TechIcon: FC<Props> = ({
  name,
  size = 32,
  className,
  showLabel = false,
  labelClassName,
}) => {
  const src = getTechIconUrl(name)

  if (!src) {
    if (!showLabel) return null
    return (
      <span className={cn('text-sm font-semibold', labelClassName)}>{name}</span>
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className='h-auto w-auto object-contain'
        style={{ width: size, height: size }}
      />
      {showLabel && (
        <span className={cn('text-sm font-semibold', labelClassName)}>{name}</span>
      )}
    </span>
  )
}

export default TechIcon
