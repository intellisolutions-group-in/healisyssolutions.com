export const premiumEase = [0.22, 1, 0.36, 1] as const

export const revealTransition = {
  duration: 0.7,
  ease: premiumEase,
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const revealItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
}
