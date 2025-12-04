'use client'

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactElement,
    type ReactNode,
} from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

export type ResolvedTheme = 'light' | 'dark'

export type ThemeContextValue = {
    mode: ThemeMode
    resolvedMode: ResolvedTheme
    setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-theme-mode'

type ThemeProviderProps = {
    children: ReactNode
}

function getSystemPreference(): ResolvedTheme {
    if (typeof window === 'undefined' || !window.matchMedia) {
        return 'light'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({children}: ThemeProviderProps): ReactElement {
    const [mode, setModeState] = useState<ThemeMode>('system')
    const [resolvedMode, setResolvedMode] = useState<ResolvedTheme>('light')

    //initialize mode from localStorage
    useEffect(() => {
        if (typeof window === 'undefined') return

        const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null
        const initialMode: ThemeMode = stored ?? 'system'
        const system = getSystemPreference()

        setModeState(initialMode)
        setResolvedMode(initialMode === 'system' ? system : initialMode)

        const media = window.matchMedia('(prefers-color-scheme: dark)')

        const handleChange = () => {
            setResolvedMode((current) => {
                if(mode !== 'system') return current

                return media.matches ? 'dark' : 'light'
            })
        }

        media.addEventListener('change', handleChange)
        
        return () => media.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if(typeof document === 'undefined') return

        const root = document.documentElement
        root.dataset.theme = resolvedMode
    }, [resolvedMode])

    const setMode = useCallback((newMode: ThemeMode) => {
        setModeState(newMode)
        if(typeof window === 'undefined') return

        window.localStorage.setItem(STORAGE_KEY, newMode)
        const system = getSystemPreference()
        setResolvedMode(newMode === 'system' ? system : newMode)
    }, [])

    const value: ThemeContextValue = {
        mode,
        resolvedMode,
        setMode,    
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}