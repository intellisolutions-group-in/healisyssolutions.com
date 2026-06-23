'use client'

import React from 'react'
import Link from 'next/link'

import { SectionTitle, Button } from '@/components/core'
import Container from '@/components/core/container'
import { useApp } from '@/hooks'
import { cn } from '@/lib/cn'

const STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understand your goals, users, and technical requirements.' },
  { step: '02', title: 'Planning', desc: 'Define architecture, milestones, and delivery timeline.' },
  { step: '03', title: 'Development', desc: 'Build iteratively with regular demos and feedback.' },
  { step: '04', title: 'Launch & Support', desc: 'Deploy, test, and provide ongoing maintenance.' },
]

const HomeProcessPreview = () => {
  const { isDark } = useApp()

  return (
    <section
      className={cn(
        'py-8 text-[#fbfbfb] md:py-12',
        isDark ? 'bg-[#151733]' : 'bg-[#087ae7]'
      )}
    >
      <Container>
        <SectionTitle light>OUR PROCESS</SectionTitle>
        <h2 className='mb-4 text-2xl font-extrabold md:text-[32px]'>
          How We Deliver Projects
        </h2>
        <div className='grid grid-cols-12 gap-6'>
          {STEPS.map((s) => (
            <div key={s.step} className='col-span-12 sm:col-span-6 md:col-span-3'>
              <div className='rounded-xl bg-white/10 p-6'>
                <p className='mb-1 text-[28px] font-extrabold opacity-70'>{s.step}</p>
                <p className='mb-1 font-bold'>{s.title}</p>
                <p className='text-sm leading-relaxed opacity-90'>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-4 text-center'>
          <Link href='/our-process/'>
            <Button variant='contained' color='light'>
              Learn More
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default HomeProcessPreview
