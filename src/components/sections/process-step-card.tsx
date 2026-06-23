import React, { FC } from 'react'
import ContentCard from '@/components/layout/content-card'

interface Props {
  step: string
  title: string
  description: string
}

const ProcessStepCard: FC<Props> = ({ step, title, description }) => (
  <ContentCard hover={false} className='mb-6 flex gap-5 md:gap-6'>
    <p className='shrink-0 text-3xl font-extrabold text-primary md:text-[32px]'>{step}</p>
    <div>
      <h3 className='mb-2 text-lg font-bold text-heading dark:text-heading-dark'>{title}</h3>
      <p className='leading-relaxed text-muted dark:text-muted-dark'>{description}</p>
    </div>
  </ContentCard>
)

export default ProcessStepCard
