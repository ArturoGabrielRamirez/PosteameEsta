'use client'

import { useTheme } from "next-themes"
import { useThemeContext } from "./CurrentThemeProvider"

export default function BackGroundThemeClient({
    children,
}: {
    children: React.ReactNode
}) {

    const { currentTheme } = useThemeContext()


    return (
        <div className={`flex flex-col grow relative items-center justify-center bg-gradient-to-tr xl:bg-gradient-to-br ${currentTheme === 'light' ? 'light-gradient' : 'dark-gradient'} px-4 py-2`}>
            {children}
        </div>
    )

}