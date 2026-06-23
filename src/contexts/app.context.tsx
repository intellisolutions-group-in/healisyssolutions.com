'use client'

import React, { FC, ReactNode, useState, createContext, useEffect } from 'react'
import { PREFERRED_MODE_KEY } from '@/constants'

export const AppContext = createContext<AppState>({} as AppState)

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(PREFERRED_MODE_KEY)
    setIsDark(stored === 'dark')
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <AppContext.Provider value={{ isDark: false, setIsDark }}>
        {children}
      </AppContext.Provider>
    )
  }

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  )
}
