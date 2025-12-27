'use client'
import Link from 'next/link'
import { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import { MotionDiv } from '@/components/motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { homeContent } from '@/content/pages/home'

export function Hero(): ReactElement {
  const { hero } = homeContent
  return (
    <header>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className={`${styles.hero}`}
      >
        <MotionDiv variants={fadeInUp}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
        </MotionDiv>
        <MotionDiv variants={fadeInUp}>
          <h1 className={`${styles.heading.h1} max-w-4xl`}>{hero.headline}</h1>
        </MotionDiv>
        <MotionDiv variants={fadeInUp}>
          <p className={`${styles.text.lead} max-w-4xl`}>{hero.description}</p>
        </MotionDiv>

        <MotionDiv variants={fadeInUp}>
          <h2 className={styles.heading.h2}>{homeContent.hero.services.title}</h2>
        </MotionDiv>
        <ul className={`${styles.text.body} grid max-w-4xl gap-8`}>
          {homeContent.hero.services.items &&
            homeContent.hero.services.items.map((item, idx) => {
              return (
                <MotionDiv key={idx} variants={fadeInUp}>
                  <li className={`${styles.text.strong}`}>{item}</li>
                </MotionDiv>
              )
            })}
        </ul>
        <MotionDiv variants={fadeInUp} className="flex gap-3 text-sm">
          <Link href={hero.cta.primary.href} className={styles.button.primary}>
            {hero.cta.primary.label}
          </Link>
          <a href={hero.cta.secondary.href} className={styles.button.secondary}>
            {hero.cta.secondary.label}
          </a>
        </MotionDiv>
      </MotionDiv>
    </header>
  )
}
