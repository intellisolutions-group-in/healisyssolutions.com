'use client'

import React, { FC } from 'react'
import { cn } from '@/lib/cn'

export const socialLinks: ISocialLink[] = [
  { name: 'Facebook', link: 'https://www.facebook.com' },
  { name: 'Instagram', link: 'https://www.instagram.com' },
]

interface SocialLinkItemProps {
  item: ISocialLink
  icon: React.ReactNode
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item, icon }) => (
  <li className='inline-block [&_svg]:h-5 [&_svg]:w-5'>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={item.link}
      className='flex h-9 w-9 items-center justify-center rounded-full text-inherit no-underline transition-colors hover:bg-white/20'
    >
      {icon}
    </a>
  </li>
)

interface Props {
  className?: string
}

const SocialLinks: FC<Props> = ({ className }) => (
  <div className={cn(className)}>
    <ul className='m-0 list-none rounded-xl p-0 leading-none'>
      {socialLinks.map((item) => {
        let icon: React.ReactNode
        switch (item.name.toLowerCase()) {
          case 'facebook':
            icon = (
              <svg fill='currentColor' viewBox='0 0 24 24' width='20' height='20'>
                <path d='M12 2C6.49 2 2 6.49 2 12c0 5.51 4.49 10 10 10 5.51 0 10-4.49 10-10 0-5.51-4.49-10-10-10zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
              </svg>
            )
            break
          case 'instagram':
            icon = (
              <svg fill='currentColor' viewBox='0 0 24 24' width='20' height='20'>
                <path d='M8 3C5.24 3 3 5.24 3 8v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H8zm0 2h8c1.65 0 3 1.35 3 3v8c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3V8c0-1.65 1.35-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z' />
              </svg>
            )
            break
          default:
            icon = null
        }
        return icon ? <SocialLinkItem key={item.name} item={item} icon={icon} /> : null
      })}
    </ul>
  </div>
)

export default SocialLinks
