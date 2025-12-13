'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-4 px-4">
          <p className="text-sm font-medium tracking-wide text-slate-400 uppercase">
            Something went wrong
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            There was an error loading this page.
          </h1>
          <p className="max-w-xl text-slate-300">
            Try again, or go back to the homepage. If this keeps happening, feel free to reach out.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Try again
            </button>
            <a href="/" className="underline-offset-2 hover:underline">
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
