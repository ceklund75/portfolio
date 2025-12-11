'use client'
import { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import { MotionDiv } from '@/components/motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

type PageHeaderProps = {
  title: string
  description?: string
  eyebrow?: string
}

export default function PageHeader({ title, description, eyebrow }: PageHeaderProps): ReactElement {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={`${styles.header}`}
    >
      {eyebrow && (
        <MotionDiv variants={fadeInUp}>
          <p className={styles.eyebrow}>{eyebrow}</p>
        </MotionDiv>
      )}

      <MotionDiv variants={fadeInUp}>
        <h1 className={styles.heading.h1}>{title}</h1>
      </MotionDiv>

      <MotionDiv variants={fadeInUp}>
        <p className={styles.text.lead}>{description}</p>
      </MotionDiv>
    </MotionDiv>
  )
}
