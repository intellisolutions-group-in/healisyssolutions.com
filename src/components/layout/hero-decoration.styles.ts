import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'

type AnimateDecoration = {
  rootClassName: string
  imgContainerClassName: string
  initial: TargetAndTransition | VariantLabels | boolean
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean
  transition: Transition
  image: {
    imageUrl: string
    width: number
    height: number
  }
}

export const animatedDecorations: Array<AnimateDecoration> = [
  {
    rootClassName: 'absolute -top-[30px] right-10',
    imgContainerClassName: 'w-[330px]',
    initial: { rotate: -20, opacity: 0, scale: 2, x: 200 },
    animate: { rotate: 0, opacity: 1, scale: 1, x: 0 },
    transition: { delay: 0.35, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/flowerpot.webp', width: 550, height: 471 },
  },
  {
    rootClassName: 'absolute top-0 left-0',
    imgContainerClassName: 'w-[250px]',
    initial: { rotate: 10, opacity: 0, scale: 1.25, x: -100 },
    animate: { rotate: 0, opacity: 1, scale: 1, x: 0 },
    transition: { delay: 0.35, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/camera.webp', width: 458, height: 309 },
  },
  {
    rootClassName: 'absolute left-[234px] bottom-[272px] -rotate-45',
    imgContainerClassName: 'w-10',
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: { delay: 0.52, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/paperclip.webp', width: 100, height: 90 },
  },
  {
    rootClassName: 'absolute left-[274px] bottom-[216px] rotate-[13deg]',
    imgContainerClassName: 'w-10',
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: { delay: 0.52, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/paperclip.webp', width: 100, height: 90 },
  },
  {
    rootClassName: 'absolute -left-[110px] -bottom-[160px]',
    imgContainerClassName: 'w-[520px]',
    initial: { rotate: 0, opacity: 0, y: 300 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: { delay: 0.35, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/papers.webp', width: 900, height: 1000 },
  },
  {
    rootClassName: 'absolute left-[270px] bottom-[106px]',
    imgContainerClassName: 'w-[148px]',
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: { delay: 0.52, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/edding.webp', width: 217, height: 320 },
  },
  {
    rootClassName: 'absolute bottom-0 left-[100px]',
    imgContainerClassName: 'w-[200px]',
    initial: { rotate: -50, opacity: 0, y: 400 },
    animate: { rotate: 0, opacity: 1, y: 0 },
    transition: { delay: 0.48, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/marker.webp', width: 200, height: 300 },
  },
  {
    rootClassName: 'absolute -right-[60px] -bottom-[84px]',
    imgContainerClassName: 'w-[460px]',
    initial: { rotate: 0, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -32, opacity: 1, scale: 1, x: 0 },
    transition: { delay: 0.35, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/mac.webp', width: 500, height: 480 },
  },
  {
    rootClassName: 'absolute -bottom-[90px] right-[320px]',
    imgContainerClassName: 'w-[206px]',
    initial: { rotate: 20, opacity: 0, scale: 1.1, x: 200 },
    animate: { rotate: -6, opacity: 1, scale: 1, x: 0 },
    transition: { delay: 0.2, type: 'spring', bounce: 0 },
    image: { imageUrl: '/images/hero/smartphone.webp', width: 500, height: 500 },
  },
]
