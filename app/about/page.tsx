'use client'
import type { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import PageHeader from '@/components/layout/PageHeader'
import { MotionSection, MotionDiv } from '@/components/motion'
import { fadeIn, staggerContainer } from '@/lib/animations'

export default function AboutPage(): ReactElement {
  return (
    <div className={`${styles.container}`}>
      <PageHeader
        title="About Christopher Eklund"
        description="Senior full-stack engineer building content-heavy platforms for crisis communications and reputation management."
      />

      <MotionSection
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className={`${[styles.section, styles.text.body].join(' ')}`}
      >
        <MotionDiv variants={fadeIn}>
          <p>
            I'm Chris Eklund, a senior full-stack engineer and technology lead who builds
            content-heavy web platforms for work that can't afford to break—corporate
            communications, advocacy campaigns, litigation matters, and crisis response. Over the
            last 15+ years, I've designed and maintained sites and tools that need to be fast,
            stable, and reliable even when timelines are tight and the subject matter is sensitive.
          </p>
        </MotionDiv>
        <MotionDiv variants={fadeIn}>
          <p>
            Most of my work sits where modern web development meets search and reputation. I use
            React, Next.js, Node.js, WordPress, and Python to ship sites, automations, and
            dashboards, then tie them into SEO, analytics, and social listening so teams can see how
            their message is actually landing.
          </p>
        </MotionDiv>
        <MotionDiv variants={fadeIn}>
          <p>
            I'm used to picking up projects when the brief is fuzzy and the stakes are high.
            Executives, lawyers, and communications teams hand me complex requirements, and my job
            is to turn that into a practical technical plan—standing up a new campaign site, wiring
            up monitoring and reporting, or hardening an existing system so it behaves predictably
            under load.
          </p>
        </MotionDiv>
        <MotionDiv variants={fadeIn}>
          <p>
            Earlier in my career, I built operations and data tools for telecom companies and led
            software development and SEO at PR and crisis firms. That mix of infrastructure,
            product, and search experience shapes how I think about performance, reliability, and
            what shows up when someone types a name into a search bar.
          </p>
        </MotionDiv>
      </MotionSection>

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
            <li>Full-stack web engineering with Next.js, TypeScript, and Node.js</li>
            <li>Headless WordPress and content-driven architectures</li>
            <li>Performance tuning and Core Web Vitals</li>
            <li>SEO, search landscape, and lead capture flows</li>
          </ul>
        </MotionDiv>
      </MotionSection>
    </div>
  )
}
