// components
import HomeOutlinedIcon from '@/assets/icons/fluent--home-32-regular.svg'
import LayersOutlinedIcon from '@/assets/icons/fluent--layer-24-regular.svg'
import FolderOutlinedIcon from '@/assets/icons/fluent--folder-32-regular.svg'
import ContactOutlinedIcon from '@/assets/icons/fluent--contact-card-group-28-regular.svg'
import InfoOutlinedIcon from '@/assets/icons/jam--info.svg'
import PaperOutlinedIcon from '@/assets/icons/quill--paper.svg'
import ShieldOutlinedIcon from '@/assets/icons/hugeicons--shield-01.svg'
import WorkOutlinedIcon from '@/assets/icons/material-symbols--work-outline.svg'

const iconClass = 'h-[18px] w-auto'

export const companyMenus: IMenu[] = [
  { label: 'Home', path: '/', icon: <HomeOutlinedIcon className={iconClass} /> },
  { label: 'About', path: '/about', icon: <InfoOutlinedIcon className={iconClass} /> },
  { label: 'Services', path: '/services', icon: <LayersOutlinedIcon className='h-5 w-auto' /> },
  { label: 'Portfolio', path: '/portfolio', icon: <FolderOutlinedIcon className={iconClass} /> },
  { label: 'Contact', path: '/contact', icon: <ContactOutlinedIcon className={iconClass} /> },
  { label: 'Careers', path: '/careers', icon: <WorkOutlinedIcon className={iconClass} /> },
]

export const supportLinks: IMenu[] = [
  { label: 'Blog', path: '/blog', icon: <PaperOutlinedIcon className={iconClass} /> },
  { label: 'Why Choose Us', path: '/why-choose-us', icon: <InfoOutlinedIcon className={iconClass} /> },
  { label: 'Our Process', path: '/our-process', icon: <LayersOutlinedIcon className={iconClass} /> },
  { label: 'FAQ', path: '/faq', icon: <PaperOutlinedIcon className={iconClass} /> },
  { label: 'Testimonials', path: '/testimonials', icon: <ContactOutlinedIcon className={iconClass} /> },
  { label: 'Privacy Policy', path: '/privacy', icon: <ShieldOutlinedIcon className={iconClass} /> },
  { label: 'Terms of Service', path: '/terms', icon: <PaperOutlinedIcon className={iconClass} /> },
]
