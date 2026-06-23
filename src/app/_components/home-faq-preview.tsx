'use client'

import React from 'react'

import { SectionTitle, Button } from '@/components/core'
import Container from '@/components/core/container'
import FAQItem from '@/components/ui/faq-item'
import faqData from '@/data/faq.json'

const HomeFaqPreview = () => {
  const items = faqData.categories[0].items.slice(0, 4)

  return (
    <section className='bg-background py-8 dark:bg-background-dark md:py-12'>
      <Container size='md'>
        <SectionTitle>FAQ</SectionTitle>
        <h2 className='mb-4 text-2xl font-extrabold md:text-[32px]'>
          Frequently Asked Questions
        </h2>
        {items.map((item) => (
          <FAQItem key={item.question} item={item} />
        ))}
        <div className='mt-4 text-center'>
          <Button href='/faq/' variant='contained' color='primary'>
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default HomeFaqPreview
