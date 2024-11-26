'use client'

import Image from "next/image"
import bgForLogo from "@/public/image/bgForLogo.png"
import { ProviderProps } from "../interfaces/interfaces"
import { useThemeContext } from "./CurrentThemeProvider"


export default function PaperBG({ children, classProps }: ProviderProps & { classProps?: string }) {
    const { currentTheme } = useThemeContext()


    return (
        <div className={`flex sm:flex justify-center items-center ${currentTheme === 'light' ? '' : 'backdrop-blur-3xl backdrop-hue-rotate-180 backdrop-brightness-50'} ${classProps}`}>
            <Image
                alt="Fondo de papel"
                className={currentTheme === 'light' ? '' : ' opacity-20'}
                src={bgForLogo}
                style={{ objectFit: "cover" }}
                priority />
            {children}
        </div>
    )
}