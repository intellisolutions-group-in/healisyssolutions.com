'use client'

import React, { FC, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PortfolioCard from '@/components/sections/portfolio-card'
import { cn } from '@/lib/cn'
import { premiumEase } from '@/lib/motion/easing'

interface PortfolioItem {
  id: number
  title: string
  type: string
  challenge: string
  solution?: string
  technologies?: string[]
  outcome?: string
}

interface Props {
  items: PortfolioItem[]
}

const PortfolioFilterGrid: FC<Props> = ({ items }) => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.type)))],
    [items]
  )
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.type === active)),
    [active, items]
  )

  return (
    <>
      <div className='mb-8 flex flex-wrap gap-2'>
        {categories.map((cat) => (
          <button
            key={cat}
            type='button'
            data-cursor='pointer'
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              active === cat
                ? 'border-primary bg-primary text-primary-contrast shadow-md'
                : 'border-black/10 bg-surface text-muted hover:border-primary/40 dark:border-white/10 dark:bg-surface-dark dark:text-muted-dark'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <AnimatePresence mode='popLayout'>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.45, ease: premiumEase }}
            >
              <PortfolioCard
                type={item.type}
                title={item.title}
                challenge={item.challenge}
                solution={item.solution}
                technologies={item.technologies}
                outcome={item.outcome}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default PortfolioFilterGrid
