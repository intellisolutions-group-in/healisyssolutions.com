'use client'

import React, { FC, ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'
import { cn } from '@/lib/cn'

interface Props {
  children: ReactNode
  className?: string
  maxTilt?: number
}

const TiltCard: FC<Props> = ({ children, className, maxTilt = 8 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 260,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 260,
    damping: 22,
  })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn('transform-gpu', className)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
