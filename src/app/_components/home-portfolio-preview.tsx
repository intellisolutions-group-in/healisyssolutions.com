'use client'

import React from 'react'
import SectionHeader from '@/components/layout/section-header'
import PortfolioCard from '@/components/sections/portfolio-card'
import Container from '@/components/core/container'
import { Button } from '@/components/core'
import portfolio from '@/data/portfolio.json'

const HomePortfolioPreview = () => {
  const items = portfolio.slice(0, 3)

  return (
    <section className='bg-surface py-8 dark:bg-surface-dark md:py-12 lg:py-[72px]'>
      <Container>
        <SectionHeader
          sectionLabel='PORTFOLIO'
          title='Recent Project Highlights'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              type={item.type}
              title={item.title}
              challenge={item.challenge}
              compact
            />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <Button href='/portfolio/' variant='outlined' color='primary'>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default HomePortfolioPreview
