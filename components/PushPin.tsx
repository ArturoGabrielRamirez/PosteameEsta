'use client'

import { useThemeContext } from "./CurrentThemeProvider"

export default function PushPin() {
    const { currentTheme } = useThemeContext()

    return (
        <div className={`rounded-full bg-gradient-to-br shadow-md shadow-[rgba(0,0,0,0.8)] 
        ${currentTheme === 'light'
                ? 'bg-pin-light'
                : "bg-pin-dark"} 
                h-4 w-4 md:h-6 md:w-6`
            }
        />)
}