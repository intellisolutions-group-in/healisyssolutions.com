'use client'

import React, { FC, memo, ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { companyMenus } from '@/constants/menus'
import { cn } from '@/lib/cn'

interface LinkItemProps {
  label: string
  path: string
  icon?: ReactElement
  isMobile?: boolean
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon, isMobile }) => {
  const pathName = usePathname()
  // Ensure that Home ('/') is only active on the exact path
  // and other paths are active if the current pathName starts with them
  const isActive =
    path === '/'
      ? pathName === '/'
      : pathName === path || pathName.startsWith(`${path}/`)

  return (
    <Link
      href={path}
      className={cn(
        'group relative inline-block cursor-pointer overflow-hidden rounded-4xl px-4 py-2',
        'text-sm font-semibold no-underline transition-colors',
        isActive
          ? 'bg-primary text-primary-contrast'
          : 'text-heading hover:bg-primary hover:text-primary-contrast dark:text-heading-dark',
        isMobile ? 'my-1 w-full text-center text-lg py-3' : 'mx-1.5'
      )}
    >
      {icon && (
        <span className='absolute top-2 -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 [&_svg]:h-[18px] [&_svg]:w-[18px]'>
          {icon}
        </span>
      )}
      <span className='inline-block transition-[margin] duration-300 group-hover:ml-6'>
        {label}
      </span>
    </Link>
  )
}

const MemoizedLinkItem = memo(LinkItem)

const AppBarNavigation: FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <nav className={cn('mx-auto', isMobile ? 'w-full' : '')}>
    <ul className={cn('m-0 list-none p-0 leading-none', isMobile ? 'flex flex-col' : '')}>
      {companyMenus.map((item, index) => (
        <li key={String(index)} className={cn(isMobile ? 'block w-full' : 'inline-block')}>
          <MemoizedLinkItem
            label={item.label}
            path={item.path}
            icon={item.icon}
            isMobile={isMobile}
          />
        </li>
      ))}
    </ul>
  </nav>
)

export default memo(AppBarNavigation)
