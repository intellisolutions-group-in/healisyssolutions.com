'use client'

import React, { FC, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  open: boolean
  message: string
  onClose: () => void
  autoCloseMs?: number
}

const ThankYouModal: FC<Props> = ({
  open,
  message,
  onClose,
  autoCloseMs = 3000,
}) => {
  useEffect(() => {
    if (!open) return
    const timer = setTimeout(onClose, autoCloseMs)
    return () => clearTimeout(timer)
  }, [open, onClose, autoCloseMs])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className='relative w-full max-w-[420px] rounded-2xl bg-surface p-8 text-center shadow-2xl dark:bg-surface-dark'
          >
            <button
              type='button'
              onClick={onClose}
              className='absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-none bg-transparent text-heading hover:bg-black/5 dark:text-heading-dark'
              aria-label='Close'
            >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
              </svg>
            </button>
            <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50'>
              <svg width='28' height='28' viewBox='0 0 24 24' fill='#2e7d32'>
                <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
              </svg>
            </div>
            <h6 className='text-lg font-semibold text-heading dark:text-heading-dark'>{message}</h6>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThankYouModal
