'use client'

import React, { FC } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  title: string
  align?: 'start' | 'end'
}

const FooterSectionTitle: FC<Props> = ({ title, align = 'start' }) => (
  <div
    className={cn(
      'mb-4 flex flex-col',
      align === 'end' ? 'items-start md:items-end' : 'items-start'
    )}
  >
    <p className='mb-2 text-xs font-medium uppercase tracking-wide text-muted dark:text-muted-dark'>
      {title}
    </p>
    <hr
      className={cn(
        'w-[50px] border-t border-black/10 dark:border-white/10',
        align === 'end' && 'md:ml-auto'
      )}
    />
  </div>
)

export default FooterSectionTitle
