'use client'

import React, { ReactNode } from 'react'

import Image from 'next/image'
import { SectionTitle } from '@/components/core'
import Container from '@/components/core/container'
import { useApp } from '@/hooks'

interface Data {
  id: number
  title: string
  icon?: ReactNode
  color: string
}

export const data: Data[] = [
  {
    id: 1,
    title: 'Web Development',
    icon: null,
    color: '#ff3700',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    icon: null,
    color: '#ff9e1d',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    icon: null,
    color: '#3397ff',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    icon: null,
    color: '#5cb460',
  },
]

interface ItemProps {
  item: {
    id: number
    title: string
    icon?: ReactNode
    color: string
  }
}

const FeatureItem = ({ item }: ItemProps) => {
  return (
    <div className='group mb-6 md:mb-0'>
      <div
        className='circle flex h-11 w-11 items-center justify-center rounded-full transition-[border-radius] duration-300 group-hover:rounded-lg [&_svg]:text-[22px]'
        style={{ backgroundColor: item.color || '#3397FF', color: '#fbfbfb' }}
      >
        {item.icon}
      </div>
      <p className='mt-[13.6px] text-[13px] font-semibold'>{item.title}</p>
    </div>
  )
}

const HomeAbout = () => {
  const { isDark } = useApp()

  return (
    <section
      id='home-about'
      className='flex w-full flex-col items-center justify-center bg-surface py-10 dark:bg-surface-dark md:py-14 lg:py-[72px]'
    >
      <Container>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 pr-0 md:col-span-7 md:pr-6'>
            <div className='relative w-full md:w-[400px]'>
              <SectionTitle>ABOUT US ?</SectionTitle>
              <h2 className='mb-3 text-4xl font-bold md:text-5xl'>Who Are We?</h2>
            </div>
            <div className='relative z-[2]'>
              <p className='mb-2 text-[19px] font-semibold text-heading dark:text-heading-dark md:text-2xl'>
                Transforming ideas into reliable software since 2010.
              </p>
              <p className='mb-8 text-base leading-relaxed text-muted dark:text-muted-dark md:text-lg'>
                Healisys Solutions is an IT and software development company
                serving businesses across India with custom applications, web
                platforms, and enterprise software.
              </p>
            </div>
            <div>
              <div className='relative z-[2] grid grid-cols-12 gap-2'>
                {data.map((item, index) => (
                  <div key={String(item.id + index)} className='col-span-6 md:col-span-3'>
                    <FeatureItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-5'>
            <div className='relative overflow-x-hidden md:overflow-x-visible'>
              <div className='absolute -top-[100px] right-[132px]'>
                <svg
                  width='600'
                  height='600'
                  viewBox='0 0 1358 1089'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <linearGradient
                      id='figure_moving'
                      x1='0%'
                      x2='86.603%'
                      y1='50%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        stopColor={isDark ? '#171717' : 'rgb(252,253,253)'}
                        stopOpacity='1'
                      />
                      <stop
                        offset='99%'
                        stopColor={isDark ? '#171717' : 'rgb(248,250,251)'}
                        stopOpacity='1'
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d='M1357.57 464.94C1357.57 605.537 1180.32 1063.16 848.987 1088.34C505.565 1088.34 591.877 719.737 426.004 719.737C311.195 719.737 0 831.507 0 525.037C0 218.566 368.288 0.336304 674.758 0.336304C981.229 0.336304 1357.57 158.47 1357.57 464.94Z'
                    fill='url(#figure_moving)'
                  />
                </svg>
              </div>
              <div className='absolute right-[300px] top-6 overflow-hidden rounded-lg leading-none'>
                <Image
                  src='/images/dotted-1.webp'
                  width={125}
                  height={125}
                  quality={97}
                  alt=''
                />
              </div>
              <div className='absolute -right-8 top-[252px] overflow-hidden rounded-lg leading-none'>
                <Image
                  src='/images/shape-2-b.webp'
                  width={60}
                  height={100}
                  quality={97}
                  alt=''
                />
              </div>
              <div className='absolute -top-2.5 right-0 h-[330px] w-[330px] overflow-hidden rounded-lg leading-none'>
                <Image
                  src='/images/about-1.webp'
                  width={350}
                  height={350}
                  quality={100}
                  alt='Healisys Solutions software development team collaborating on a custom application project'
                />
              </div>
              <div className='absolute right-40 top-[120px] h-[290px] w-[290px] overflow-hidden rounded-lg leading-none'>
                <Image
                  src='/images/about-2.webp'
                  width={330}
                  height={330}
                  quality={100}
                  alt='Modern collaborative tech workspace at Healisys Solutions office'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeAbout
