'use client'

import { FC, ReactNode, useEffect } from 'react'
import { PREFERRED_MODE_KEY } from '@/constants'
import { useApp } from '@/hooks'

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDark } = useApp()

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const stored = window.localStorage.getItem(PREFERRED_MODE_KEY)
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return <>{children}</>
}

export default ThemeProvider
