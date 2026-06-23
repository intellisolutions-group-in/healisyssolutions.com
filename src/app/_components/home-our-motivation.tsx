'use client'

import React from 'react'

import Image from 'next/image'
import { SectionTitle } from '@/components/core'
import Container from '@/components/core/container'
import { useApp } from '@/hooks'
import { cn } from '@/lib/cn'

const CONTENT = [
  {
    value: '15+',
    description: 'Years of Experience',
    image: '/images/medal.webp',
  },
  {
    value: '100+',
    description: 'Satisfied Clients',
    image: '/images/smile.webp',
  },
  {
    value: '200+',
    description: 'Projects Delivered',
    image: '/images/success.webp',
  },
]

const HomeOurMotivation = () => {
  const { isDark } = useApp()

  return (
    <section
      id='home-motivation'
      className='w-full bg-surface pb-8 pt-8 dark:bg-surface-dark md:pb-16 md:pt-2 lg:pb-20'
    >
      <Container>
        <div className='grid grid-cols-12 gap-12'>
          <div className='col-span-12 pr-0 md:col-span-4 md:pr-4'>
            <SectionTitle>WE WORK HARD, WE PLAY HARD</SectionTitle>
            <h3 className='mb-3 text-xl leading-snug md:text-[26px] lg:text-[32px] font-bold text-heading dark:text-heading-dark'>
              We are motivated by a desire to achieve.
            </h3>
            <p className='text-sm leading-loose text-muted dark:text-muted-dark md:text-[17px]'>
              We deliver dependable software solutions for businesses across India.
            </p>
          </div>
          <div className='col-span-12 md:col-span-8'>
            <div className='flex h-full flex-col justify-center'>
              <div className='grid grid-cols-12 gap-2 sm:gap-6'>
                {CONTENT.map((item, index) => (
                  <div key={String(index)} className='col-span-6 md:col-span-4'>
                    <div
                      className={cn(
                        'relative rounded-2xl p-3.5 shadow-card transition-all duration-[250ms] hover:-translate-y-[5px] hover:text-[#fbfbfb] sm:p-7 sm:px-8',
                        isDark
                          ? 'bg-[#090e22] hover:bg-black'
                          : 'bg-[#D1E7FE] hover:bg-primary'
                      )}
                    >
                      <p className='mb-8 text-4xl font-extrabold'>{item.value}</p>
                      <div className='h-auto w-[72px]'>
                        <Image
                          src={item.image}
                          width={80}
                          height={80}
                          alt={item.description}
                        />
                      </div>
                      <hr className='my-4 w-9 border-current opacity-30' />
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeOurMotivation
