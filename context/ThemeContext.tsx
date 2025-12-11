'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'

/**
 * User-facing theme mode:
 * - 'light'  → always light
 * - 'dark'   → always dark
 * - 'system' → follow OS preference (prefers-color-scheme)
 */
export type ThemeMode = 'light' | 'dark' | 'system'

/**
 * The actual theme applied to the UI after resolving 'system':
 * always either 'light' or 'dark'.
 */
export type ResolvedTheme = 'light' | 'dark'

/**
 * Value exposed via context and useTheme().
 */
export type ThemeContextValue = {
  mode: ThemeMode // user choice
  resolvedMode: ResolvedTheme // final applied theme
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-theme-mode'

type ThemeProviderProps = {
  children: ReactNode
}

/**
 * Read the current OS-level theme.
 */
function getSystemPreference(): ResolvedTheme {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * ThemeProvider
 * - Tracks user preference (mode) and resolved mode (applied theme).
 * - Persists preference to localStorage.
 * - Applies a `dark` class to <html> when resolvedMode === 'dark'.
 */
export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system'

    const root = document.documentElement
    const attributeMode = root.getAttribute('data-theme-mode') as ThemeMode | null
    return attributeMode || 'system'
  })

  const [resolvedMode, setResolvedMode] = useState<ResolvedTheme>(() => {
    if (typeof window === 'undefined') return 'light'

    const root = document.documentElement
    const attributeResolved = root.getAttribute('data-resolved-theme') as ResolvedTheme | null
    return attributeResolved || 'light'
  })

  /**
   * Respond to OS theme changes when in "system" mode.
   * - Listens to prefers-color-scheme changes.
   * - Only updates resolvedMode if mode === 'system'.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      if (mode !== 'system') return
      setResolvedMode(media.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [mode])

  /**
   * Apply resolved theme to <html> via the "dark" class.
   * - Tailwind and global CSS use this to switch themes.
   */
  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    if (resolvedMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [resolvedMode])

  /**
   * Update the user preference:
   * - Update state.
   * - Persist to localStorage.
   * - Immediately compute resolvedMode.
   */
  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode)
    if (typeof window === 'undefined') return

    window.localStorage.setItem(STORAGE_KEY, newMode)
    const system = getSystemPreference()
    setResolvedMode(newMode === 'system' ? system : newMode)
  }

  const value: ThemeContextValue = {
    mode,
    resolvedMode,
    setMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * Hook to consume the theme context.
 * Throws if used outside ThemeProvider.
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
