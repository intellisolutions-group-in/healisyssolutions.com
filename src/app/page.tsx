import { JSX } from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { LogoMarquee } from '@/components/motion'
import PageLoader from '@/components/section-loader'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'IT & Software Development Company India',
  description: 'Healisys Solutions is a premier IT and software development company in India since 2010, specializing in custom web platforms, mobile apps, and enterprise solutions.',
  path: '',
})

const HomeHero = dynamic(() => import('./_components/home-hero'), {
  loading: () => <PageLoader />,
})
const HomeAbout = dynamic(() => import('./_components/home-about'), {
  loading: () => <PageLoader />,
})
const HomeMotivation = dynamic(
  () => import('./_components/home-our-motivation'),
  { loading: () => <PageLoader /> }
)
const HomeServices = dynamic(() => import('./_components/home-services'), {
  loading: () => <PageLoader />,
})
const HomePortfolioPreview = dynamic(
  () => import('./_components/home-portfolio-preview'),
  { loading: () => <PageLoader /> }
)
const HomeProcessPreview = dynamic(
  () => import('./_components/home-process-preview'),
  { loading: () => <PageLoader /> }
)
const HomeTestimonialsPreview = dynamic(
  () => import('./_components/home-testimonials-preview'),
  { loading: () => <PageLoader /> }
)
const HomeFaqPreview = dynamic(() => import('./_components/home-faq-preview'), {
  loading: () => <PageLoader />,
})
const HomeCTA = dynamic(() => import('./_components/home-cta'), {
  loading: () => <PageLoader />,
})
const HomeInquiryForm = dynamic(
  () => import('./_components/home-inquiry-form'),
  { loading: () => <PageLoader /> }
)
const HomeContact = dynamic(() => import('./_components/home-contact'), {
  loading: () => <PageLoader />,
})

const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <HomeHero />
      <LogoMarquee />
      <HomeAbout />
      <HomeMotivation />
      <HomeServices />
      <HomeProcessPreview />
      <HomePortfolioPreview />
      <HomeTestimonialsPreview />
      <HomeFaqPreview />
      <HomeCTA />
      <HomeContact />
    </div>
  )
}

export default HomePage
