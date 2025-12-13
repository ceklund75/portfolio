import Link from 'next/link'
import { ReactElement } from 'react'

export default function NotFound(): ReactElement {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-4 px-4">
      <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
        404 – Page not found
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
        This page doesn’t exist.
      </h1>
      <p className="max-w-xl text-slate-700 dark:text-slate-300">
        The link you followed may be broken, or the page may have been moved. You can go back to the
        homepage or explore recent work.
      </p>
      <div className="flex gap-3">
        <Link href="/" className="underline-offset-2 hover:underline">
          Back to home
        </Link>
        <Link href="/work" className="underline-offset-2 hover:underline">
          View projects
        </Link>
      </div>
    </div>
  )
}
