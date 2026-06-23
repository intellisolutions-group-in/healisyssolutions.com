'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'

interface Props {
  value: string
  className?: string
}

function parseValue(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: raw }
  return { target: Number(match[1]), suffix: match[2] ?? '' }
}

const AnimatedCounter: FC<Props> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = usePrefersReducedMotion()
  const { target, suffix } = parseValue(value)
  const [display, setDisplay] = useState(reduced ? target : 0)

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(target)
      return
    }

    let frame = 0
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, target])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
