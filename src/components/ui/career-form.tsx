'use client'

import React, { FC, useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/core'
import Input from './input'
import Textarea from './textarea'
import Modal from './modal'
import ThankYouModal from './thank-you-modal'
import Spinner from './spinner'
import { CompanyConfig } from '@/configs/company.config'

interface Job {
  id: number
  title: string
}

interface Props {
  job: Job
  open: boolean
  onClose: () => void
}

const CareerForm: FC<Props> = ({ job, open, onClose }) => {
  const [loading, setLoading] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    coverLetter: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [resumeError, setResumeError] = useState('')

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowed.includes(file.type)) {
      setResumeError('Only PDF or DOC files are allowed')
      setResume(null)
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError('File must be under 5MB')
      setResume(null)
      return
    }
    setResumeError('')
    setResume(file)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.location || !resume) return
    setLoading(true)
    try {
      await fetch(`https://${CompanyConfig.domain}/api/career-application`, {
        method: 'POST',
        body: JSON.stringify({ ...form, jobId: job.id }),
      })
    } catch {
      // ignore per spec
    }
    setLoading(false)
    onClose()
    setSuccessOpen(true)
    setForm({ name: '', email: '', phone: '', location: '', coverLetter: '' })
    setResume(null)
  }

  return (
    <>
      <Modal open={open} onClose={onClose} className='max-w-[520px]'>
        <div className='mb-6 flex items-center justify-between'>
          <h3 className='text-lg font-bold text-heading dark:text-heading-dark'>
            Apply: {job.title}
          </h3>
          <button
            type='button'
            onClick={onClose}
            className='flex h-8 w-8 items-center justify-center rounded-full border-none bg-transparent'
            aria-label='Close'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input label='Full Name' required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label='Email' type='email' required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input label='Phone' required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input label='Current Location' required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          <div>
            <p className='mb-2 text-sm font-medium'>Resume (PDF/DOC, max 5MB) *</p>
            <input type='file' accept='.pdf,.doc,.docx' onChange={handleResumeChange} required className='text-sm' />
            {resumeError && <p className='mt-1 text-xs text-red-500'>{resumeError}</p>}
          </div>
          <Textarea label='Cover Letter (optional)' rows={3} value={form.coverLetter} onChange={(e) => setForm({ ...form, coverLetter: e.target.value })} />
          <Button type='submit' variant='contained' color='primary'>
            {loading ? <Spinner /> : 'Submit Application'}
          </Button>
        </form>
      </Modal>
      <ThankYouModal
        open={successOpen}
        message='Thank you! Our team will review your application and reach you soon.'
        onClose={() => setSuccessOpen(false)}
      />
    </>
  )
}

export default CareerForm
