import React, { FC } from 'react'
import { getTechIconUrl } from '@/constants/tech-icons'
import { cn } from '@/lib/cn'
import TechIcon from '@/components/sections/tech-icon'

interface Props {
  label: string
  variant?: 'filled' | 'outlined'
  className?: string
  showTechIcon?: boolean
}

const Chip: FC<Props> = ({
  label,
  variant = 'filled',
  className,
  showTechIcon = false,
}) => {
  const iconUrl = showTechIcon ? getTechIconUrl(label) : null

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'filled'
          ? 'bg-primary text-primary-contrast'
          : 'border border-black/10 text-heading dark:border-white/20 dark:text-heading-dark',
        className
      )}
    >
      {iconUrl && (
        <TechIcon name={label} size={16} />
      )}
      {label}
    </span>
  )
}

export default Chip
