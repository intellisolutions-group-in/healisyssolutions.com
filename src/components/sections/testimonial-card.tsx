import React, { FC } from 'react'
import ContentCard from '@/components/layout/content-card'

interface Props {
  text: string
  name: string
  designation: string
  company?: string
}

const TestimonialCard: FC<Props> = ({ text, name, designation, company }) => (
  <ContentCard>
    <p className='mb-6 text-base leading-[1.9] text-muted dark:text-muted-dark'>
      &ldquo;{text}&rdquo;
    </p>
    <p className='font-bold text-heading dark:text-heading-dark'>{name}</p>
    <p className='text-sm text-muted dark:text-muted-dark'>
      {designation}
      {company ? `, ${company}` : ''}
    </p>
  </ContentCard>
)

export default TestimonialCard
