'use client'

import { useThemeContext } from "./CurrentThemeProvider"

export default function BackGroundThemeClient({
    children,
}: {
    children: React.ReactNode
}) {

    const { currentTheme } = useThemeContext()


    return (
        <div className={`min-h-screen xl:max-h-dvh w-full flex flex-col relative items-center justify-center bg-gradient-to-tr xl:bg-gradient-to-br ${currentTheme === 'light' ? 'light-gradient' : 'dark-gradient'} pl-4 py-4 pr-4 xl:py-8 xl:pr-8`}>
            {children}
        </div>
    )

}