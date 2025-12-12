import { ReactElement } from 'react'
import { siteContent } from '@/content/site'

export function SiteFooter(): ReactElement {
  return (
    <footer className="relative border-t border-slate-300 bg-slate-200 text-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/50">
      <div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-4 py-4 sm:flex-row sm:items-center">
        <div className="text-slate-600 dark:text-slate-400">
          {siteContent.copyright} {siteContent.name}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            {siteContent.contact.email}
          </a>
          <a
            href={siteContent.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            LinkedIn
          </a>
          <a
            href={siteContent.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
