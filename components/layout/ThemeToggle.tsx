'use client'
import { ReactElement, useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, type ThemeMode } from '@/context/ThemeContext'

export function ThemeToggle(): ReactElement {
  const [mounted, setMounted] = useState(false)
  const { mode, setMode } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <div className="h-6 w-20" />
  }

  const handleClick = (newMode: ThemeMode) => {
    setMode(newMode)
  }

  const base =
    'inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] transition-colors'
  const active = 'bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900'
  const inactive =
    'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-100/80 p-0.5 dark:bg-slate-800/80">
      <button
        type="button"
        onClick={() => handleClick('light')}
        aria-pressed={mode === 'light'}
        aria-label="Use light theme"
        className={`${base} ${mode === 'light' ? active : inactive}`}
      >
        <Sun className="h-3 w-3" />
      </button>

      <button
        type="button"
        onClick={() => handleClick('system')}
        aria-pressed={mode === 'system'}
        aria-label="Use system theme"
        className={`${base} ${mode === 'system' ? active : inactive}`}
      >
        <Monitor className="h-3 w-3" />
      </button>

      <button
        type="button"
        onClick={() => handleClick('dark')}
        aria-pressed={mode === 'dark'}
        aria-label="Use dark theme"
        className={`${base} ${mode === 'dark' ? active : inactive}`}
      >
        <Moon className="h-3 w-3" />
      </button>
    </div>
  )
}
