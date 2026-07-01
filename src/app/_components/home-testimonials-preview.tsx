'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeader from '@/components/layout/section-header'
import TestimonialCard from '@/components/sections/testimonial-card'
import Container from '@/components/core/container'
import { Button } from '@/components/core'
import testimonials from '@/data/testimonials.json'

const HomeTestimonialsPreview = () => {
  const items = testimonials.slice(0, 3)

  return (
    <section className='bg-surface py-8 dark:bg-surface-dark md:py-12 lg:py-[72px]'>
      <Container>
        <SectionHeader
          sectionLabel='TESTIMONIALS'
          title='What Clients Say'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {items.map((t) => (
            <TestimonialCard
              key={t.id}
              text={t.text}
              name={t.name}
              designation={t.designation}
            />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <Link href='/testimonials/'>
            <Button variant='outlined' color='primary'>
              Read More
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default HomeTestimonialsPreview
