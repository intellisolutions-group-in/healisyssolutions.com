'use client'

import React, { FC, useState } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  question: string
  answer: string
}

const Accordion: FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='mb-2 overflow-hidden rounded-xl bg-surface shadow-card dark:bg-surface-dark'>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-heading dark:text-heading-dark'
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={cn('h-5 w-5 shrink-0 transition-transform', open && 'rotate-180')}
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
        </svg>
      </button>
      {open && (
        <div className='border-t border-black/[0.06] px-5 pb-4 pt-2 dark:border-white/10'>
          <p className='text-sm leading-relaxed text-muted dark:text-muted-dark'>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
