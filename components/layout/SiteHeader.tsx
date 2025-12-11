'use client'
import { ReactElement, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { styles } from '@/lib/styles'
import { MotionDiv, MotionNav } from '@/components/motion'
import { fadeIn, fadeInUp } from '@/lib/animations'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleMenuButtonClick = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/40 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-950 dark:text-slate-50"
        >
          CE
        </Link>

        {/*desktop nav - hide on mobile*/}
        <nav className="hidden items-center gap-6 text-sm md:flex">
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

        {/*mobile nav - hide on desktop */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleMenuButtonClick}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white/80 p-1 text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/*desktop theme toggle - hide on mobile */}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>
      </MotionDiv>

      {/* mobile menu panel */}
      {mobileMenuOpen && (
        <MotionNav
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="absolute top-full right-0 left-0 border-t border-slate-200 bg-slate-50/95 px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950/95"
        >
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${isActive ? styles.link.navActive : styles.link.nav} block py-2`}
                    onClick={() => setMobileMenuOpen(false)} // close menu on navigation
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </MotionNav>
      )}
    </header>
  )
}
