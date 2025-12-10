'use client'
import { ReactElement, useEffect, useState } from 'react'
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
    'px-2 py-0.5 rounded-full text-xs transition-colors hover:bg-slate-200 dark:hover:bg-slate-700'
  const active = 'bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 font-semibold'
  const inactive = 'opacity-60'

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-slate-300 p-0.5 dark:border-slate-800">
      <button
        type="button"
        onClick={() => handleClick('light')}
        className={`${base} ${mode === 'light' ? active : inactive}`}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => handleClick('dark')}
        className={`${base} ${mode === 'dark' ? active : inactive}`}
      >
        Dark
      </button>
      <button
        type="button"
        onClick={() => handleClick('system')}
        className={`${base} ${mode === 'system' ? active : inactive}`}
      >
        Sys
      </button>
    </div>
  )
}
