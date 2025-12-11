'use client'
import type { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import PageHeader from '@/components/layout/PageHeader'
import { MotionSection, MotionDiv } from '@/components/motion'
import { fadeIn } from '@/lib/animations'

export default function ContactPage(): ReactElement {
  return (
    <div className={styles.container}>
      <PageHeader
        title="Contact"
        //description="Open to senior individual contributor roles and select freelance projects."
      />
      <MotionSection
        variants={fadeIn}
        className={`${[styles.section, styles.text.body].join(' ')}`}
      >
        <MotionDiv variants={fadeIn}>
          <p>
            The easiest way to reach me is by email. If you'd like to talk about a role, a project,
            or how I can help with performance, SEO, or technical architecture for high-stakes web
            platforms, feel free to get in touch.
          </p>
        </MotionDiv>
        <MotionDiv variants={fadeIn} className={`${[styles.section, styles.card.ghost].join(' ')}`}>
          <ul className="grid sm:grid-cols-2">
            <li className="space-y-1">
              <p className="font-medium">Email</p>
              <a href="mailto:chris@cmeklund.com" className="underline underline-offset-4">
                chris@cmeklund.com
              </a>
            </li>

            <li className="space-y-1">
              <p className="font-medium">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/cmeklund"
                className="underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/cmeklund
              </a>
            </li>
          </ul>
        </MotionDiv>
      </MotionSection>
    </div>
  )
}
