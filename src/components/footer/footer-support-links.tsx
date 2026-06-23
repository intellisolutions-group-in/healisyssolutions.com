'use client'

import { supportLinks } from '@/constants/menus'
import FooterNavColumn from './footer-nav-column'

const FooterSupportLinks = () => (
  <FooterNavColumn title='Support' items={supportLinks} />
)

export default FooterSupportLinks
