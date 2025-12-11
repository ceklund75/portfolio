'use client'

import { ReactElement } from 'react'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { styles } from '@/lib/styles'

import { MotionArticle } from '@/components/motion'
import { scrollReveal } from '@/lib/animations'

type ProjectCardProps = {
  project: Project
  compact?: boolean
  index?: number //grid position
}

export function ProjectCard({
  project,
  compact = false,
  index = 0,
}: ProjectCardProps): ReactElement {
  const { title, role, summary, tech, links, slug, featured } = project
  //rounded-lg border border-slate-300 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/80
  return (
    <MotionArticle
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -4 }} // Lift 4px on hover
      viewport={{ once: true, margin: '-50px' }}
      variants={scrollReveal}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col gap-2 ${featured ? styles.card.featured : styles.card.base}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-semibold">
          <Link href={`/work/${slug}`}>{title}</Link>
        </h3>
        {!compact && role && (
          <p className="text-sm tracking-[0.16em] text-slate-950/60 uppercase dark:text-slate-50/60">
            {role}
          </p>
        )}
      </div>

      {!compact && <p className="text-xs text-slate-950/80 dark:text-slate-50/80">{summary}</p>}

      <div className="flex flex-wrap gap-1">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-200/40 px-2 py-0.5 text-[10px] tracking-[0.16em] text-slate-950/70 uppercase dark:bg-slate-800/40 dark:text-slate-50/70"
          >
            {item}
          </span>
        ))}
      </div>

      {!compact && (links?.live || links?.repo) && (
        <div className="mt-1 flex flex-wrap gap-3 text-xs font-medium">
          {links.live && (
            <a href={links.live} className={styles.link.tiny} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {links.repo && (
            <a href={links.repo} className={styles.link.tiny} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      )}
    </MotionArticle>
  )
}
