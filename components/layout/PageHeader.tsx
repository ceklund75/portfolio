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
      <MotionDiv variants={fadeInUp}>
        <div className="h-0.5 w-8 bg-blue-500/50 dark:bg-blue-400/50"></div>
      </MotionDiv>
    </MotionDiv>
  )
}
