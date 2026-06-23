'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import { Button } from '@/components/core'
import Container from '@/components/core/container'
import { AppConfig } from '@/configs'

interface Props {
  eyebrow?: string
  title?: string
  buttonText?: string
  buttonHref?: string
}

const PageCTA: FC<Props> = ({
  eyebrow = 'Ready to create something amazing ?',
  title = `Start your business journey better with ${AppConfig.appName}`,
  buttonText = 'Work With Us',
  buttonHref = '/contact/',
}) => (
  <section className='w-full bg-surface py-6 dark:bg-surface-dark md:py-8 lg:py-12'>
    <Container>
      <div
        className='noise-overlay relative rounded-[32px] bg-cover bg-center bg-no-repeat text-[#fbfbfb]'
        style={{ backgroundImage: "url('/images/bg3.webp')" }}
      >
        <div className='glass-panel absolute inset-0 rounded-[32px] opacity-30' />
        <div className='relative z-[1] mx-auto flex w-full flex-col items-center px-4 py-8 text-center md:w-[720px] md:py-10'>
          <p className='mb-2 text-lg leading-snug'>{eyebrow}</p>
          <h2 className='mb-6 text-2xl font-bold leading-relaxed md:text-3xl lg:text-4xl'>
            {title}
          </h2>
          <Link href={buttonHref} data-cursor='pointer'>
            <Button variant='contained' color='light' size='large'>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>
)

export default PageCTA
