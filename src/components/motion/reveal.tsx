'use client'

import React, { FC, ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'
import { cn } from '@/lib/cn'
import { revealItem, revealTransition } from '@/lib/motion/easing'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: 'div' | 'section' | 'article'
}

const Reveal: FC<Props> = ({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}) => {
  const reduced = usePrefersReducedMotion()
  const Component = motion[as]

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { ...revealTransition, delay },
    },
  }

  return (
    <Component
      className={cn(className)}
      initial='hidden'
      whileInView='show'
      viewport={{ once, margin: '-60px' }}
      variants={variants}
    >
      {children}
    </Component>
  )
}

export const RevealStagger: FC<{
  children: ReactNode
  className?: string
  once?: boolean
}> = ({ children, className, once = true }) => {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='show'
      viewport={{ once, margin: '-40px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={revealItem}>
      {children}
    </motion.div>
  )
}

export default Reveal
