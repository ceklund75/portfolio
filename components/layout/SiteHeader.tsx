'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactElement } from 'react'
import { ThemeToggle } from './ThemeToggle'

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
    <header className="sticky top-0 z-20 border-b border-[rgb(var(--border-subtle))] bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          CE
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'font-semibold'
                    : 'text-[rgb(var(--fg))]/70 hover:text-[rgb(var(--fg))]'
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}