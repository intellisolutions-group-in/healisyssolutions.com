'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import Container from '@/components/core/container'
import SectionHeader from '@/components/layout/section-header'
import { useGsapContext } from '@/hooks/useGsapScroll.hook'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.hook'
import timeline from '@/data/timeline.json'
import { cn } from '@/lib/cn'

const CompanyTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useGsapContext(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 900px)', () => {
      const scrollWidth = track.scrollWidth - section.offsetWidth

      gsap.to(track, {
        x: () => -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${scrollWidth + 200}`,
          invalidateOnRefresh: true,
        },
      })
    })

    mm.add('(max-width: 899px)', () => {
      gsap.utils.toArray<HTMLElement>('[data-timeline-item]').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -24,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} className='relative overflow-hidden py-4 md:py-0'>
      <Container className='md:py-16'>
        <SectionHeader
          sectionLabel='OUR JOURNEY'
          title='15+ Years of Building Software'
          description='From a small IT practice in 2010 to a trusted development partner serving businesses across India.'
          className='md:mb-10'
        />
      </Container>

      {/* Desktop: horizontal pinned scroll */}
      <div className='hidden md:block'>
        <div ref={trackRef} className='flex w-max gap-6 px-6 md:px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))]'>
          {timeline.map((item, index) => (
            <article
              key={item.year}
              data-timeline-item
              className={cn(
                'relative w-[320px] shrink-0 rounded-2xl border p-6 shadow-card lg:w-[360px]',
                'border-black/5 bg-surface dark:border-white/10 dark:bg-surface-dark'
              )}
            >
              <div className='mb-4 flex items-center gap-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-contrast'>
                  {index + 1}
                </span>
                <span className='text-2xl font-extrabold text-primary'>{item.year}</span>
              </div>
              <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>
                {item.title}
              </h3>
              <p className='text-sm leading-relaxed text-muted dark:text-muted-dark'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className='pointer-events-none absolute bottom-8 left-0 right-0 hidden md:block'>
          <Container>
            <div className='h-1 rounded-full bg-black/5 dark:bg-white/10'>
              <div className='h-full w-1/4 rounded-full bg-primary opacity-60' />
            </div>
            <p className='mt-2 text-xs text-muted dark:text-muted-dark'>
              Scroll to explore our journey →
            </p>
          </Container>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <Container className='md:hidden'>
        <div className='relative space-y-0 pl-8'>
          <div className='absolute bottom-0 left-[15px] top-0 w-px bg-primary/30' />
          {timeline.map((item) => (
            <article
              key={item.year}
              data-timeline-item
              className={cn(
                'relative pb-8',
                reduced && 'opacity-100'
              )}
            >
              <span className='absolute -left-8 top-1 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-primary bg-surface text-xs font-bold text-primary dark:bg-surface-dark'>
                {item.year.slice(2)}
              </span>
              <h3 className='mb-1 text-base font-bold text-heading dark:text-heading-dark'>
                {item.title}
              </h3>
              <p className='text-sm leading-relaxed text-muted dark:text-muted-dark'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CompanyTimeline
