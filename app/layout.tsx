import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, TASA_Orbiter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/context/ThemeContext'
import { SiteHeader } from '@/components/layout/SiteHeader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Christopher Eklund - Portfolio',
  description: 'Senior full-stack engineer focused on fast, SEO-critical web platforms.',
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
    <html lang="en" suppressHydrationWarning>
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
        <div className="relative min-h-screen w-full">
          <div className="gradient-bg absolute inset-0 z-0" />
          <ThemeProvider>
            <SiteHeader />
            <main className="relative z-10">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
