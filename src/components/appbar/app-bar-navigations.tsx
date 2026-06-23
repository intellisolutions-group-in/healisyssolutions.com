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
}

const LinkItem: FC<LinkItemProps> = ({ label, path, icon }) => {
  const pathName = usePathname()
  const isActive = pathName === path

  return (
    <Link
      href={path}
      className={cn(
        'group relative mx-1.5 inline-block cursor-pointer overflow-hidden rounded-4xl px-4 py-2',
        'text-sm font-semibold no-underline transition-colors',
        isActive
          ? 'bg-primary text-primary-contrast'
          : 'text-heading hover:bg-primary hover:text-primary-contrast dark:text-heading-dark'
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

const AppBarNavigation: FC = () => (
  <nav className='mx-auto'>
    <ul className='m-0 list-none p-0 leading-none'>
      {companyMenus.map((item, index) => (
        <li key={String(index)} className='inline-block'>
          <MemoizedLinkItem
            label={item.label}
            path={item.path}
            icon={item.icon}
          />
        </li>
      ))}
    </ul>
  </nav>
)

export default memo(AppBarNavigation)
