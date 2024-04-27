'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Theme, ThemeTypes } from '../types/types'
import { ProviderProps } from '../interfaces/interfaces'
import { useTheme } from 'next-themes'



const ThemeContext = createContext<ThemeTypes>({
    currentTheme: ''
})

export function CurretThemeProvider({ children }: ProviderProps) {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [currentTheme, setCurrentTheme] = useState<Theme | null>(null)


    useEffect(() => {
        const newTheme = theme ?? resolvedTheme
        if (typeof newTheme === 'string') {
            setCurrentTheme(newTheme as Theme)
            setTheme(newTheme as Theme)
        }
        setMounted(true)
    }, [theme, currentTheme])


    if (!mounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={{
            currentTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}