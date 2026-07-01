'use client'

import React, { Fragment, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import AppBarNavigation from './app-bar-navigations'
import AppBarSwitchDarkMode from './switch-dark-mode'

const AnimatedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  const strokeColor = '#3397FF'

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathName])

  return (
    <Fragment>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='relative z-50 flex h-[42px] w-[42px] items-center justify-center border-none bg-transparent p-0'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg width='32' height='32' viewBox='0 0 32 32'>
          <motion.line
            x1='6' y1='10' x2='26' y2='10'
            stroke={strokeColor} strokeWidth='2' strokeLinecap='round'
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.line
            x1='6' y1='16' x2='26' y2='16'
            stroke={strokeColor} strokeWidth='2' strokeLinecap='round'
            animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.line
            x1='6' y1='22' x2='26' y2='22'
            stroke={strokeColor} strokeWidth='2' strokeLinecap='round'
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute left-4 right-4 top-[calc(100%+0.5rem)] z-40 rounded-3xl bg-white p-6 shadow-xl dark:bg-black/95 dark:backdrop-blur-md md:hidden'
            style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className='flex flex-col items-center space-y-4'>
              <AppBarNavigation isMobile />
              <div className='mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 w-full flex justify-center'>
                <AppBarSwitchDarkMode />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export default AnimatedHamburgerMenu
