'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/core/container'
import { useApp } from '@/hooks'
import { useGsapContext } from '@/hooks/useGsapScroll.hook'
import { cn } from '@/lib/cn'
import { services } from '@/constants/service'
import { AppConfig } from '@/configs'

type ServiceItemProps = {
  item: IService
}

const HomeServiceItem = ({ item }: ServiceItemProps) => {
  return (
    <div className='service-card col-span-12 md:col-span-6 lg:col-span-4'>
      <Link
        href={`/services/${item.slug}/`}
        className='relative block overflow-hidden rounded-2xl bg-surface px-5 py-4 transition-all duration-[450ms] hover:-translate-y-1 hover:shadow-card-hover dark:bg-surface-dark no-underline'
        data-cursor='pointer'
      >
        <div className='mb-6 [&_img]:h-16 [&_img]:w-auto'>
          <Image src={item.image as string} alt={item.title} width={100} height={100} />
        </div>
        <h3 className='mb-2 text-lg font-semibold text-heading dark:text-heading-dark md:text-xl'>{item.title}</h3>
        <div className='h-[70px] overflow-hidden'>
          <p className='text-[15px] text-muted dark:text-muted-dark'>{item.description}</p>
        </div>
      </Link>
    </div>
  )
}

const HomeServices = () => {
  const { isDark } = useApp()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapContext(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.from('[data-services-header] > *', {
      opacity: 0,
      y: 36,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '[data-services-header]',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from('.service-card', {
      opacity: 0,
      y: 48,
      scale: 0.96,
      stagger: 0.06,
      duration: 0.55,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    })

    const mm = gsap.matchMedia()
    mm.add('(min-width: 900px)', () => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 20%',
        end: 'bottom 60%',
        onEnter: () => {
          gsap.to('[data-services-spotlight]', {
            opacity: 0.35,
            duration: 0.8,
          })
        },
        onLeaveBack: () => {
          gsap.to('[data-services-spotlight]', {
            opacity: 0,
            duration: 0.5,
          })
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='home-service'
      className={cn(
        'relative w-full overflow-hidden pb-6 pt-8 md:pb-12 md:pt-14',
        isDark ? 'bg-[#151733]' : 'bg-[#087ae7]'
      )}
    >
      <div
        data-services-spotlight
        className='pointer-events-none absolute inset-0 opacity-0'
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 70% 80%, rgba(51,151,255,0.2), transparent 40%)',
        }}
      />

      <Container size='md'>
        <div
          data-services-header
          className='mb-12 w-full text-center text-primary-contrast md:w-[70%] md:text-left'
        >
          <div className='mb-3 inline-block rounded bg-white/10 px-3.5 py-1.5 text-[#fbfbfb]'>
            <p className='text-xs uppercase tracking-wider'>OUR SERVICES</p>
          </div>
          <h2 className='mb-2 text-3xl font-extrabold capitalize leading-snug md:text-4xl lg:text-5xl'>
            What do you need to keep your business growing?
          </h2>
          <p className='mb-1 text-base text-[#ececec] md:text-[22px]'>
            We provides a wide range of services aimed at helping Businesses,
            Organizations.
          </p>
        </div>
      </Container>

      <Container className='relative overflow-x-hidden lg:overflow-x-visible'>
        <div className='absolute -left-4 -top-2.5'>
          <Image src='/images/shape-2-b.webp' width={70} height={100} alt='' />
        </div>
        <div className='absolute -right-5 top-10'>
          <Image src='/images/shape-1-a.webp' width={84} height={90} alt='' />
        </div>
        <div className='absolute -top-10 right-[420px] w-[60px]'>
          <Image src='/images/circle-b.svg' width={34} height={34} alt='' />
        </div>
        <div className='absolute -right-[46px] top-[500px]'>
          <Image src='/images/figure-shape-1-b.webp' width={26} height={26} alt='' />
        </div>
        <div className='absolute -top-[30px] right-28'>
          <Image src='/images/figure-shape-4-a.webp' width={43} height={38} alt='' />
        </div>
        <div className='absolute -left-10 top-[340px] rotate-[23deg]'>
          <Image src='/images/figure-shape-2.webp' width={43} height={38} alt='' />
        </div>

        <div className='services-grid grid grid-cols-12 gap-6'>
          {services.map((item) => (
            <HomeServiceItem item={item} key={item.title} />
          ))}
        </div>

        <div className='mt-5 text-center text-[#fbfbfb]'>
          <p>
            Since its establishment in 2010, {AppConfig.appName} has focused on
            delivering quality software solutions across India
          </p>
        </div>
      </Container>
    </section>
  )
}

export default HomeServices
