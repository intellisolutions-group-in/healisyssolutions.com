'use client'

import React, { FC, ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomCursor from './custom-cursor'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'

interface Props {
  children: ReactNode
}

const MotionProvider: FC<Props> = ({ children }) => {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [reduced])

  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}

export default MotionProvider
