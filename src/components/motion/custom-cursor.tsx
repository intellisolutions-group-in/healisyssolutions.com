'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'
import { cn } from '@/lib/cn'

const CustomCursor = () => {
  const reduced = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 280, damping: 28 })
  const ringY = useSpring(cursorY, { stiffness: 280, damping: 28 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const touch = window.matchMedia('(hover: none)').matches
    setEnabled(finePointer && !touch && !reduced)
  }, [reduced])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [data-cursor="pointer"], [data-cursor-label]'
      )
      if (!interactive) {
        setHovering(false)
        setLabel('')
        return
      }
      setHovering(true)
      const customLabel = interactive.getAttribute('data-cursor-label')
      setLabel(customLabel ?? '')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    document.body.classList.add('custom-cursor-active')

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [enabled, cursorX, cursorY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className='pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference'
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        aria-hidden
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50',
          'flex items-center justify-center text-[10px] font-semibold uppercase tracking-wider text-primary',
          hovering ? 'h-14 w-14 bg-primary/10 backdrop-blur-sm' : 'h-8 w-8'
        )}
        style={{ x: ringX, y: ringY }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {label && <span className='px-1 text-center leading-tight'>{label}</span>}
      </motion.div>
    </>
  )
}

export default CustomCursor
