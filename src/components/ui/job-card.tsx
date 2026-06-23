'use client'

import React, { FC, useState } from 'react'
import { Button } from '@/components/core'
import Chip from './chip'
import CareerForm from './career-form'

interface Job {
  id: number
  title: string
  department: string
  location: string
  description: string
  requirements: string[]
}

interface Props {
  job: Job
}

const JobCard: FC<Props> = ({ job }) => {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <div className='mb-6 rounded-2xl bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover dark:bg-surface-dark'>
        <h3 className='mb-2 text-xl font-bold text-heading dark:text-heading-dark'>{job.title}</h3>
        <div className='mb-4 flex flex-wrap gap-2'>
          <Chip label={job.department} />
          <Chip label={job.location} variant='outlined' />
        </div>
        <p className='mb-4 leading-relaxed text-muted dark:text-muted-dark'>{job.description}</p>
        <p className='mb-2 font-semibold text-heading dark:text-heading-dark'>Requirements:</p>
        <ul className='mb-6 list-disc pl-5'>
          {job.requirements.map((req) => (
            <li key={req} className='mb-1 text-sm text-muted dark:text-muted-dark'>{req}</li>
          ))}
        </ul>
        <Button variant='contained' color='primary' onClick={() => setFormOpen(true)}>
          Apply
        </Button>
      </div>
      <CareerForm job={job} open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  )
}

export default JobCard
