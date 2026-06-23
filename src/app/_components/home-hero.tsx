'use client'

import React from 'react'

import { useApp } from '@/hooks'
import { cn } from '@/lib/cn'

import HomeHeroContent from './home-hero/home-hero-content'
import HeroDecoration from '@/components/layout/hero-decoration'
import { HeroParticles } from '@/components/motion'

const HomeHero = () => {
  const { isDark } = useApp()

  return (
    <section
      id='home-hero'
      className={cn(
        'relative min-h-screen w-full overflow-hidden',
        isDark ? 'bg-[#1b2b3c]' : 'bg-[#e8f3ff]'
      )}
    >
      <div className='ambient-gradient absolute inset-0 z-0' />
      <HeroParticles />
      <HeroDecoration />
      <HomeHeroContent />
    </section>
  )
}

export default HomeHero
