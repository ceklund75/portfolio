'use client'

import type { ReactElement } from 'react'
import Image from 'next/image'
import { styles } from '@/lib/styles'
import PageHeader from '@/components/layout/PageHeader'
import { MotionSection, MotionDiv } from '@/components/motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import { jsonLd } from '@/content/site'
import { aboutContent } from '@/content/pages/about'

export function AboutContent(): ReactElement {
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.personJsonLd) }}
      />
      <PageHeader
        title={aboutContent.pageHeader.title}
        description={aboutContent.pageHeader.description}
      />
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <MotionDiv variants={fadeIn} className="md:hidden">
          <Image
            src={aboutContent.images.mobile.source}
            alt={aboutContent.images.mobile.alt}
            width={aboutContent.images.mobile.height}
            height={aboutContent.images.mobile.width}
            sizes={aboutContent.images.mobile.sizes}
            className={aboutContent.images.mobile.className}
          />
        </MotionDiv>
        <MotionSection
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={'hidden md:block md:w-1/3'}
        >
          <MotionDiv variants={fadeIn}>
            <Image
              src={aboutContent.images.desktop.source}
              alt={aboutContent.images.desktop.alt}
              width={aboutContent.images.desktop.height}
              height={aboutContent.images.desktop.width}
              sizes={aboutContent.images.desktop.sizes}
              className={aboutContent.images.desktop.className}
            />
          </MotionDiv>
        </MotionSection>
        <MotionSection
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={`${[styles.section, styles.text.body].join(' ')} space-y-4 md:w-2/3`}
        >
          {aboutContent.paragraphs &&
            aboutContent.paragraphs.map((paragraph, idx) => {
              return (
                <MotionDiv key={idx} variants={fadeIn}>
                  <p>{paragraph}</p>
                </MotionDiv>
              )
            })}
        </MotionSection>
      </div>

      <MotionSection
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className={`${[styles.section, styles.card.ghost].join(' ')}`}
      >
        <MotionDiv variants={fadeIn}>
          <h2 className={styles.heading.h2}>Focus Areas</h2>
        </MotionDiv>
        <MotionDiv variants={fadeIn}>
          <ul className={`${styles.text.small} grid gap-8 md:grid-cols-2`}>
            <li>Full-stack web development with Next.js, TypeScript, and Node.js</li>
            <li>Headless WordPress and content-driven architectures</li>
            <li>Performance tuning and Core Web Vitals</li>
            <li>SEO, search landscape, and lead capture flows</li>
          </ul>
        </MotionDiv>
      </MotionSection>
    </div>
  )
}
