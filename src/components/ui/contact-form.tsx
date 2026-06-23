'use client'

import React, { FC, useState, FormEvent } from 'react'
import { Button } from '@/components/core'
import Input from './input'
import Textarea from './textarea'
import ThankYouModal from './thank-you-modal'
import Spinner from './spinner'

interface Props {
  showSubject?: boolean
}

const ContactForm: FC<Props> = ({ showSubject = true }) => {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setModalOpen(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Input
          label='Full Name'
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label='Email'
          type='email'
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          label='Phone'
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {showSubject && (
          <Input
            label='Subject'
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        )}
        <div className='md:col-span-2'>
          <Textarea
            label='Message'
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className='md:col-span-2'>
          <Button type='submit' variant='contained' color='primary' size='large'>
            {loading ? <Spinner /> : 'Send Message'}
          </Button>
        </div>
      </form>
      <ThankYouModal
        open={modalOpen}
        message='Thank you! We will reach you soon.'
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default ContactForm
