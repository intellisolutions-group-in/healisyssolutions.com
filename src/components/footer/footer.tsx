'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import {
  FooterWaves,
  FooterCompanyLinks,
  FooterContactInfo,
  FooterServicesLink,
  FooterSupportLinks,
} from '@/components/footer'
import HeartIcon from '@/assets/icons/ion--heart-sharp.svg'
import { AppConfig } from '@/configs'
import { CompanyConfig } from '@/configs/company.config'
import Container from '@/components/core/container'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden bg-surface dark:bg-surface-dark'>
      <Container className='relative z-[1] px-4 pb-12 pt-16 md:px-0 md:pb-20 md:pt-20'>
        {/* Top link grid — matches original 5 / 7 column split */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6 lg:gap-8'>
          <div className='md:col-span-4 lg:col-span-5'>
            <FooterContactInfo />
          </div>

          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-8 lg:col-span-7 lg:grid-cols-3 lg:gap-6'>
            <FooterServicesLink />
            <FooterCompanyLinks />
            <FooterSupportLinks />
          </div>
        </div>

        {/* Brand + copyright */}
        <div className='mt-14 border-t border-black/[0.06] pt-10 dark:border-white/[0.08] md:mt-16 md:pt-12'>
          <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-2'>
            <div className='text-center md:text-left'>
              <div className='mb-4 flex justify-center md:justify-start'>
                {/* Light Mode Logo */}
                <Image
                  src={CompanyConfig.logoPathLight}
                  alt={CompanyConfig.brandName}
                  width={200}
                  height={50}
                  className='h-10 w-auto object-contain dark:hidden'
                />
                {/* Dark Mode Logo */}
                <Image
                  src={CompanyConfig.logoPathDark}
                  alt={CompanyConfig.brandName}
                  width={200}
                  height={50}
                  className='hidden h-10 w-auto object-contain dark:block'
                />
              </div>
              <p className='mx-auto max-w-md text-sm leading-relaxed text-muted dark:text-muted-dark md:mx-0 md:max-w-[70%]'>
                {AppConfig.appDescription}
              </p>
            </div>

            <div className='flex flex-col items-center justify-end md:items-end'>
              {/* Social media — uncomment when available */}
              <p className='flex items-center text-sm font-medium text-heading dark:text-heading-dark'>
                © {year} {CompanyConfig.brandName} | Made with
                <HeartIcon className='mx-0.5 h-[18px] w-[18px] text-[#ff0808]' />
              </p>
            </div>
          </div>
        </div>
      </Container>

      <FooterWaves />
    </footer>
  )
}

export default Footer
