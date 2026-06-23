'use client'

import React, { FC } from 'react'
import AnimatedCounter from '@/components/motion/animated-counter'
import { useApp } from '@/hooks'
import { cn } from '@/lib/cn'

interface Props {
  value: string
  label: string
  image?: string
}

const StatCard: FC<Props> = ({ value, label }) => {
  const { isDark } = useApp()

  return (
    <div
      className={cn(
        'rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:text-[#fbfbfb] sm:p-8',
        isDark ? 'bg-[#090e22] hover:bg-black' : 'bg-[#D1E7FE] hover:bg-primary'
      )}
    >
      <p className='mb-6 text-4xl font-extrabold'>
        <AnimatedCounter value={value} />
      </p>
      <hr className='my-4 w-9 border-current opacity-30' />
      <p className='text-sm font-medium md:text-base'>{label}</p>
    </div>
  )
}

export default StatCard
