'use client'

import React, { FC } from 'react'
import { useApp } from '@/hooks'

const FooterWaves: FC = () => {
  const { isDark } = useApp()

  return (
    <div
      className='pointer-events-none absolute bottom-0 left-1/2 w-[150%] -translate-x-1/2 translate-y-1 md:w-[125%]'
      aria-hidden='true'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'
        className='block h-auto w-full'
      >
        <path
          fill={isDark ? '#1c1b18' : '#f5f5f9'}
          d='M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,197.3C672,171,768,117,864,106.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />
      </svg>
    </div>
  )
}

export default FooterWaves
