'use client'

import React, { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/cn'

interface Props {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const Modal: FC<Props> = ({ open, onClose, children, className }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className='fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 p-4'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
    >
      <div
        className={cn(
          'relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-surface p-6 shadow-2xl',
          'dark:bg-surface-dark',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
