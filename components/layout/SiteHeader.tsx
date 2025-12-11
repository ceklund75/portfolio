'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { styles } from '@/lib/styles'
import { MotionDiv, MotionNav } from '@/components/motion'
import { fadeIn, fadeInUp, slideInLeft } from '@/lib/animations'

export type NavItem = {
  href: string
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader(): ReactElement {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/40 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
        className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50"
        >
          CE
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={` ${isActive ? styles.link.navActive : styles.link.nav} `}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <ThemeToggle />
      </MotionDiv>
    </header>
  )
}
