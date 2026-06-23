'use client'

import React, { FC } from 'react'
import Accordion from './accordion'

interface FAQItemData {
  question: string
  answer: string
}

interface Props {
  item: FAQItemData
}

const FAQItem: FC<Props> = ({ item }) => (
  <Accordion question={item.question} answer={item.answer} />
)

export default FAQItem
