'use client'

import { useEffect, type DependencyList } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'

export function useGsapContext(
  setup: () => void | (() => void),
  deps: DependencyList = []
) {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)

    let cleanup: void | (() => void)
    const ctx = gsap.context(() => {
      cleanup = setup()
    })

    return () => {
      cleanup?.()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps])
}
