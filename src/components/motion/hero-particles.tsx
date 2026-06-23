'use client'

import React, { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'

const Scene = dynamic(() => import('./hero-particles-scene'), { ssr: false })

const HeroParticles = () => {
  const reduced = usePrefersReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 899px)').matches
    setShow(!mobile && !reduced)
  }, [reduced])

  if (!show) return null

  return (
    <div className='pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-25'>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  )
}

export default HeroParticles
