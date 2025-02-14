'use client'

import { useThemeContext } from "./CurrentThemeProvider"

export default function BackGroundThemeClient({
    children,
}: {
    children: React.ReactNode
}) {

    const { currentTheme } = useThemeContext()


    return (
        <div className={`min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr xl:bg-gradient-to-br 
        ${currentTheme === 'light'
                ? 'light-gradient'
                : 'dark-gradient'} pl-4 py-4 pr-4 xl:py-8 xl:pr-8`}>
            {children}
        </div>
    )

}