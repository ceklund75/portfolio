'use client'
import { styles } from '@/lib/styles'
import PageHeader from '@/components/layout/PageHeader'
import { MotionSection, MotionDiv } from '@/components/motion'
import { fadeIn } from '@/lib/animations'
import { jsonLd } from '@/content/site'
import { ReactElement } from 'react'
import { contactContent } from '@/content/pages/contact'

export function ContactContent(): ReactElement {
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.contactJsonLd) }}
      />
      <PageHeader
        title={contactContent.pageHeader.title}
        description={contactContent.pageHeader.description}
      />
      <MotionSection
        variants={fadeIn}
        className={`${[styles.section, styles.text.body].join(' ')}`}
      >
        {contactContent.paragraphs &&
          contactContent.paragraphs.map((paragraph, idx) => {
            return (
              <MotionDiv key={idx} variants={fadeIn}>
                <p>{paragraph}</p>
              </MotionDiv>
            )
          })}

        {contactContent.links && (
          <MotionDiv
            variants={fadeIn}
            className={`${[styles.section, styles.card.ghost].join(' ')}`}
          >
            <ul className="grid space-y-4 sm:grid-cols-3">
              {contactContent.links.map((link, idx) => {
                return (
                  <li key={idx} className="space-y-1">
                    <p className="font-medium">{link.label}</p>
                    <a
                      href={link.url}
                      className="underline underline-offset-4"
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.linkName}
                    </a>
                  </li>
                )
              })}
            </ul>
          </MotionDiv>
        )}
      </MotionSection>
    </div>
  )
}
