'use client'

import React from 'react'

import { SectionTitle } from '@/components/core'
import Container from '@/components/core/container'
import ContactForm from '@/components/ui/contact-form'

const HomeInquiryForm = () => (
  <section
    id='home-inquiry'
    className='border-t border-black/10 bg-surface py-8 dark:border-white/10 dark:bg-surface-dark md:py-12'
  >
    <Container size='md'>
      <SectionTitle>QUICK INQUIRY</SectionTitle>
      <h2 className='mb-1 text-2xl font-extrabold md:text-[32px]'>
        Send Us a Message
      </h2>
      <p className='mb-8 leading-loose text-muted dark:text-muted-dark'>
        Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
      </p>
      <ContactForm />
    </Container>
  </section>
)

export default HomeInquiryForm
