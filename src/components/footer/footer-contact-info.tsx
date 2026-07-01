'use client'

import React, { FC, ReactNode } from 'react'
import { FooterSectionTitle } from '@/components/footer'
import { CompanyConfig } from '@/configs/company.config'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'

interface ContactInfoItemProps {
  icon: ReactNode
  value: string
  link: string
}

const ContactInfoItem: FC<ContactInfoItemProps> = ({
  icon,
  value,
  link,
}) => (
  <a
    href={link}
    className='group mb-5 block max-w-[360px] text-heading no-underline transition-colors hover:text-primary dark:text-heading-dark'
  >
    <div className='flex items-start gap-3'>
      <span className='mt-0.5 shrink-0 text-heading transition-colors group-hover:text-primary dark:text-heading-dark [&_svg]:h-[22px] [&_svg]:w-[22px]'>
        {icon}
      </span>
      <div className='min-w-0'>
        <p className='text-[15px] font-semibold leading-snug'>{value}</p>
        {/* <p className='mt-1 text-sm text-muted dark:text-muted-dark'>{label}</p> */}
      </div>
    </div>
  </a>
)

const FooterContactInfo: FC = () => (
  <div>
    <FooterSectionTitle title='Contact Info' />
    <ContactInfoItem
      value={CompanyConfig.email}
      link={`mailto:${CompanyConfig.email}`}
      icon={<EmailIcon />}
    />
    {/* Phone — uncomment when available
    <ContactInfoItem ... />
    */}
    {/* Office address — uncomment when available
    <ContactInfoItem ... />
    */}
  </div>
)

export default FooterContactInfo
