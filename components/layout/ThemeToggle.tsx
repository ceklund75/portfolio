'use client'
import {ReactElement} from "react"
import { useTheme, type ThemeMode } from "@/context/ThemeContext"

export function ThemeToggle(): ReactElement {
    const { mode, setMode } = useTheme()

    const handleClick = (newMode: ThemeMode) => {
        setMode(newMode)
    }

    const base =
    'px-2 py-0.5 rounded-full text-xs transition-colors hover:bg-[rgb(var(--border-subtle))]'
  const active = 'bg-[rgb(var(--fg))] text-[rgb(var(--bg))]'
  const inactive = 'opacity-60'

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border-subtle))] p-0.5">
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