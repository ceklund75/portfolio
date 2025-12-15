import type { Metadata, Viewport } from 'next'

import { Geist, Geist_Mono, TASA_Orbiter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/context/ThemeContext'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Christopher Eklund – Full-Stack Engineer',
  description: 'Full-stack engineer focused on fast, SEO-critical web platforms.',
  openGraph: {
    type: 'website',
    url: 'https://cmeklund.com',
    title: 'Christopher Eklund – Full-Stack Engineer',
    description: 'Full-stack engineer focused on fast, SEO-critical web platforms.',
    siteName: 'Christopher Eklund Portfolio',
    images: ['https://cmeklund.com/christopher-eklund-fse-og.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Eklund – Full-Stack Engineer',
    description: 'Full-stack engineer focused on fast, SEO-critical web platforms.',
    images: ['https://cmeklund.com/christopher-eklund-fse-og.webp'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            const storageKey = 'portfolio-theme-mode';
            const storedMode = localStorage.getItem(storageKey);
            const mode = storedMode || 'system';
            const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            let resolvedTheme;
            if(mode === 'system') {
              resolvedTheme = systemIsDark ? 'dark' : 'light';
            } else {
              resolvedTheme = mode;
            }
            
            const root = document.documentElement;
            if(resolvedTheme === 'dark') {
              root.classList.add('dark');
            } else {
              root.classList.remove('dark');
            }
            
            root.setAttribute('data-theme-mode', mode);
            root.setAttribute('data-resolved-theme', resolvedTheme);            
         })()`,
          }}
        />
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="gradient-bg absolute inset-0 z-0" />
          <ThemeProvider>
            <SiteHeader />
            <main className="relative z-10 flex-1">{children}</main>
            <SiteFooter />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
