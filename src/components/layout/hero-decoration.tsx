'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animatedDecorations } from './hero-decoration.styles'

const HeroDecoration = () => (
  <div className='pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden'>
    {animatedDecorations.map((item, index) => (
      <div key={String(index)} className={item.rootClassName}>
        <motion.div
          initial={item.initial}
          animate={item.animate}
          transition={item.transition}
        >
          <div className={item.imgContainerClassName}>
            <Image
              src={item.image.imageUrl}
              width={item.image.width}
              height={item.image.height}
              quality={90}
              alt=''
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    ))}
  </div>
)

export default memo(HeroDecoration)
