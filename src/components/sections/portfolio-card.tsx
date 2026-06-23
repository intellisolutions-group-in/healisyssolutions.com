import React, { FC } from 'react'
import ContentCard from '@/components/layout/content-card'
import Chip from '@/components/ui/chip'

interface Props {
  type: string
  title: string
  challenge: string
  solution?: string
  technologies?: string[]
  outcome?: string
  compact?: boolean
}

const PortfolioCard: FC<Props> = ({
  type,
  title,
  challenge,
  solution,
  technologies,
  outcome,
  compact = false,
}) => (
  <ContentCard>
    <Chip label={type} className='mb-3' />
    <h3 className='mb-3 text-lg font-bold text-heading dark:text-heading-dark md:text-xl'>
      {title}
    </h3>
    <p className='mb-1 text-sm font-semibold text-heading dark:text-heading-dark'>Challenge</p>
    <p className='mb-4 text-sm leading-relaxed text-muted dark:text-muted-dark'>
      {compact ? `${challenge.slice(0, 120)}...` : challenge}
    </p>
    {!compact && solution && (
      <>
        <p className='mb-1 text-sm font-semibold text-heading dark:text-heading-dark'>Solution</p>
        <p className='mb-4 text-sm leading-relaxed text-muted dark:text-muted-dark'>{solution}</p>
      </>
    )}
    {!compact && technologies && (
      <>
        <p className='mb-2 text-sm font-semibold text-heading dark:text-heading-dark'>Technologies</p>
        <div className='mb-4 flex flex-wrap gap-2'>
          {technologies.map((t) => (
            <Chip key={t} label={t} variant='outlined' showTechIcon />
          ))}
        </div>
      </>
    )}
    {!compact && outcome && (
      <>
        <p className='mb-1 text-sm font-semibold text-heading dark:text-heading-dark'>Outcome</p>
        <p className='text-sm leading-relaxed text-muted dark:text-muted-dark'>{outcome}</p>
      </>
    )}
  </ContentCard>
)

export default PortfolioCard
