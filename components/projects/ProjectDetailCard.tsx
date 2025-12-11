'use client'
import { ReactElement } from 'react'
import { styles } from '@/lib/styles'
import type { Project } from '@/data/projects'
import { MotionSection, MotionDiv } from '@/components/motion'
import { fadeIn, staggerContainer } from '@/lib/animations'
import { delay } from 'motion'

type ProjectDetailCardProps = {
  project: Project
}

export default function ProjectDetailCard({ project }: ProjectDetailCardProps): ReactElement {
  return (
    <MotionSection
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={styles.card.ghost}
    >
      <MotionDiv variants={fadeIn} className="space-y-4">
        <h2 className={styles.heading.h2}>Role & Stack</h2>
        <p className={styles.text.muted}>{project.role}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-400/40 px-2 py-0.5 text-[10px] tracking-[0.16em] text-slate-950 uppercase dark:bg-slate-700/40 dark:text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
      </MotionDiv>

      <MotionDiv variants={fadeIn} className="space-y-4">
        <h2 className={styles.heading.h2}>Highlights</h2>
        <ul className={styles.text.muted}>
          {project.highlights.map((item) => (
            <li key={item} className="list-inside list-disc pl-4">
              {item}
            </li>
          ))}
        </ul>
      </MotionDiv>

      {project.links && (project.links.live || project.links.repo) && (
        <MotionDiv variants={fadeIn} className="space-y-4">
          <h2 className={styles.heading.h2}>Links</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {project.links.live && (
              <a
                href={project.links.live}
                className={styles.link.tiny}
                target="_blank"
                rel="noreferrer"
              >
                View live site
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                className={styles.link.default}
                target="_blank"
                rel="noreferrer"
              >
                View source
              </a>
            )}
          </div>
        </MotionDiv>
      )}
    </MotionSection>
  )
}
