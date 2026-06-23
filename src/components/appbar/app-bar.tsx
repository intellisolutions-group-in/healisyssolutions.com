'use client'

import React, { FC, Fragment, useCallback, useMemo, useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { CompanyConfig } from '@/configs/company.config'
import { cn } from '@/lib/cn'
import AppBarNavigation from './app-bar-navigations'
import AppBarSwitchDarkMode from './switch-dark-mode'
import AnimatedHamburgerMenu from './animated-hamburger-menu'
import Container from '@/components/core/container'

const AppBar: FC = () => {
  const { y: scrollY } = useWindowScroll()
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const pathName = usePathname()

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const shouldFloating = useMemo(() => scrollY > 120, [scrollY])

  const onClickLogo = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (pathName === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        router.push('/')
      }
    }
  }, [pathName, router])

  return (
    <Fragment>
      <div className='fixed left-1/2 top-0 z-[1100] w-full -translate-x-1/2 text-center md:max-w-[1200px]'>
        <Container className='px-4 pt-2 md:px-0 md:pt-0'>
          <div
            className={cn(
              'flex items-center rounded-4xl transition-all duration-300',
              shouldFloating
                ? 'mt-3 bg-white/80 px-4 py-3 shadow-nav backdrop-blur-md dark:bg-black/80 md:px-5 md:py-3.5'
                : 'mt-2 bg-transparent md:mt-6'
            )}
          >
            <button
              type='button'
              onClick={onClickLogo}
              aria-label='Back to home'
              className='flex cursor-pointer items-center border-none bg-transparent p-0'
            >
              {/* Light Mode Logo */}
              <Image
                src={CompanyConfig.logoPathLight}
                alt={CompanyConfig.brandName}
                width={200}
                height={50}
                className={cn(
                  'w-auto object-contain transition-all dark:hidden',
                  shouldFloating ? 'h-[30px]' : 'h-[36px]'
                )}
                priority
              />
              {/* Dark Mode Logo */}
              <Image
                src={CompanyConfig.logoPathDark}
                alt={CompanyConfig.brandName}
                width={200}
                height={50}
                className={cn(
                  'hidden w-auto object-contain transition-all dark:block',
                  shouldFloating ? 'h-[30px]' : 'h-[36px]'
                )}
                priority
              />
            </button>
            {isMobile ? (
              <div className='ml-auto flex items-center'>
                <AnimatedHamburgerMenu />
              </div>
            ) : (
              <>
                <AppBarNavigation />
                <AppBarSwitchDarkMode />
              </>
            )}
          </div>
        </Container>
      </div>
    </Fragment>
  )
}

export default AppBar
