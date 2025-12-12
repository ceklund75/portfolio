import { ReactElement } from 'react'
import Link from 'next/link'
import CE from '@/public/CE.svg'

export function Logo(): ReactElement {
  return (
    <Link href="/" aria-label="Christopher Eklund - Full-Stack Engineer - Home">
      <CE className="h-6 w-6 fill-black sm:h-8 sm:w-8 dark:fill-white" />
    </Link>
  )
}
