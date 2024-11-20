'use client'

import { useThemeContext } from "./CurrentThemeProvider"

export default function BGTexture() {
    const { currentTheme } = useThemeContext()
    const opacity = currentTheme === 'dark' ? 0.3 : 1

    return (
        <div className="granulated" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            opacity: opacity,
            position: 'absolute',
            width: '100%',
            height: '100%'
        }} />
    )
    
}