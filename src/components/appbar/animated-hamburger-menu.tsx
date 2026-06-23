'use client'

import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const strokeColor = '#3397FF'

  return (
    <Fragment>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex h-[42px] w-[42px] items-center justify-center border-none bg-transparent p-0'
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
    </Fragment>
  )
}

export default AnimatedHamburgerMenu
