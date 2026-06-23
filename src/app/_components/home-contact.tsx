'use client'

import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/core'
import Container from '@/components/core/container'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import SendIcon from '@/assets/icons/picon--send.svg'
import { CompanyConfig } from '@/configs/company.config'

const HomeContact = () => {
  return (
    <section
      id='home-contact'
      className='relative border-b border-black/10 bg-surface dark:border-white/10 dark:bg-surface-dark'
    >
      <div className='absolute left-0 top-0 h-full w-full' />
      <div className='relative pb-8 pt-5 md:pb-12 md:pt-8'>
        <Container
          size='md'
          className='text-center md:text-left'
        >
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-7'>
              <div className='mb-3 inline-block rounded bg-primary-light px-3.5 py-1.5 text-primary'>
                <p className='text-xs uppercase tracking-wider'>Let&apos;s talk</p>
              </div>
              <h2 className='mb-2 text-[22px] font-extrabold md:text-[28px] lg:text-4xl'>
                Let&apos;s make something
                <br /> great together.
              </h2>
              <p className='mb-2 text-lg font-semibold leading-loose text-muted dark:text-muted-dark'>
                We&apos;re excited to hear from you! Whether you have a
                question about our services, want to discuss a new project.
              </p>
            </div>
            <div className='relative col-span-12 mb-0 flex items-end justify-center self-end md:col-span-5 md:mb-4 md:justify-end'>
              <div className='absolute -top-2 right-0 md:-top-[90px] [&_img]:w-auto md:[&_img]:w-[500px]'>
                <Image src='/images/envelope-1.svg' alt='Contact illustration envelope' width={300} height={300} />
              </div>
              <div className='mt-4'>
                <Button
                  href='/contact/'
                  variant='contained'
                  size='large'
                  color='primary'
                  endIcon={<SendIcon className='mr-1 h-[18px] w-[18px]' />}
                >
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <Container size='md'>
          <hr className='my-8 w-full border-black/10 dark:border-white/10' />
        </Container>

        <Container size='md' className='text-center md:text-left'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-7'>
              <a
                href={`mailto:${CompanyConfig.email}`}
                className='font-medium text-heading no-underline transition-colors hover:text-primary dark:text-heading-dark'
              >
                <div className='flex items-center justify-center md:justify-start'>
                  <EmailIcon className='mr-1 h-[26px] w-[26px]' />
                  <span className='text-xl font-semibold'>{CompanyConfig.email}</span>
                </div>
                <p className='text-base text-muted dark:text-muted-dark'>
                  Response within 24 hrs
                </p>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HomeContact
