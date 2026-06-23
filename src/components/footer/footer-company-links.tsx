'use client'

import { companyMenus } from '@/constants/menus'
import FooterNavColumn from './footer-nav-column'

const FooterCompanyLinks = () => (
  <FooterNavColumn title='Company' items={companyMenus} />
)

export default FooterCompanyLinks
