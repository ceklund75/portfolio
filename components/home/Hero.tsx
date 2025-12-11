'use client'
import Link from 'next/link'
import { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import { MotionDiv } from '@/components/motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Hero(): ReactElement {
  return (
    <header>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className={`${styles.hero}`}
      >
        <MotionDiv variants={fadeInUp}>
          <p className={styles.eyebrow}>Portfolio</p>
        </MotionDiv>
        <MotionDiv variants={fadeInUp}>
          <h1 className={`${styles.heading.h1} max-w-4xl`}>
            Senior full-stack engineer focused on fast, SEO-critical web platforms.
          </h1>
        </MotionDiv>
        <MotionDiv variants={fadeInUp}>
          <p className={`${styles.text.lead} max-w-4xl`}>
            Senior full-stack engineer and technology lead building content-heavy web platforms for
            high-stakes communications, advocacy, litigation, and crisis work. I use React, Next.js,
            Node.js, WordPress, and Python to ship fast, reliable sites and tools that play nicely
            with search, analytics, and real-world reputation.
          </p>
        </MotionDiv>
        <MotionDiv variants={fadeInUp} className="flex gap-3 text-sm">
          <Link href="/work" className={styles.button.primary}>
            View projects
          </Link>
          <a href="/contact" className={styles.button.secondary}>
            Get in touch
          </a>
        </MotionDiv>
      </MotionDiv>
    </header>
  )
}
