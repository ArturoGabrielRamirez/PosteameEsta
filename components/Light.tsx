'use client'

import { useThemeContext } from "./CurrentThemeProvider"

function Light() {
    const { currentTheme } = useThemeContext()
    return (
        <div className={`${currentTheme === 'light' ? 'light size-[40px] rounded-full ' : 'darkPurpleLight size-[40px] bg-purple-900 rounded-full'}`} />
    )

}

export default Light