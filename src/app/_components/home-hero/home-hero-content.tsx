'use client'

import React, { memo, useEffect, useState } from 'react'

import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

import MouseIcon from '@/assets/icons/iconamoon--mouse-light.svg'
import { CompanyConfig } from '@/configs/company.config'

const HomeHeroContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const SERVICES_TEXTS = [
    'Web Development',
    'Mobile App Development',
    'Custom Software',
    'Cloud Applications',
    'Enterprise Solutions',
    'UI/UX Design',
    'API Development',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES_TEXTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [SERVICES_TEXTS.length])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.15,
        type: 'spring',
        bounce: 0.15,
      }}
    >
      <div className='relative flex min-h-screen flex-col items-center justify-center'>
        <div className='mb-2 flex flex-row transition-all duration-500 [&_div]:transition-all [&_div]:duration-500'>
          <div>
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentIndex}
                variants={{
                  initial: { y: 20 },
                  animate: { y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                }}
                className='text-[17px] font-semibold text-primary md:text-lg'
              >
                {SERVICES_TEXTS[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='mb-4 text-[32px] font-extrabold leading-normal md:text-[40px] lg:text-[52px]'>
            {CompanyConfig.brandName}
            <br />
            Software Development Partner
          </h1>
          <p className='mb-4 text-sm font-medium leading-loose text-muted dark:text-muted-dark md:text-[17px]'>
            An India-based IT company specialising in{' '}
            <strong>Web Development</strong>, <strong>Mobile Apps</strong>,{' '}
            <strong>Custom Software</strong>, and{' '}
            <strong>Enterprise Solutions</strong> since {CompanyConfig.establishedYear}.
          </p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            bounce: 0,
          }}
        >
          <div className='-mb-[120px] mt-[120px] text-center'>
            <Link
              to='home-about'
              offset={0}
              spy={true}
              smooth={true}
              duration={400}
              style={{ display: 'block' }}
            >
              <MouseIcon className='mx-auto h-[50px] w-[50px] text-muted dark:text-muted-dark' />
              <p className='mt-1.5 text-xs font-medium text-muted/60 dark:text-muted-dark/60'>
                Scroll for more
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default memo(HomeHeroContent)
