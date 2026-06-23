'use client'

import React, { FC, ReactNode } from 'react'
import PageCTA from './page-cta'

interface Props {
  children: ReactNode
  showCta?: boolean
  ctaEyebrow?: string
  ctaTitle?: string
  ctaButtonText?: string
  ctaButtonHref?: string
}

const InnerPageLayout: FC<Props> = ({
  children,
  showCta = true,
  ctaEyebrow,
  ctaTitle,
  ctaButtonText,
  ctaButtonHref,
}) => (
  <>
    <div id='page-content'>{children}</div>
    {showCta && (
      <PageCTA
        eyebrow={ctaEyebrow}
        title={ctaTitle}
        buttonText={ctaButtonText}
        buttonHref={ctaButtonHref}
      />
    )}
  </>
)

export default InnerPageLayout
