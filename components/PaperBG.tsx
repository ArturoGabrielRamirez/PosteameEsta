'use client'

import Image from "next/image"
import bgForLogo from "@/public/image/bgForLogo.webp"
import { ProviderProps } from "../interfaces/interfaces"
import { useThemeContext } from "./CurrentThemeProvider"


export default function PaperBG({ children, classProps }: ProviderProps & { classProps?: string }) {
    const { currentTheme } = useThemeContext()


    return (
        <div className={`flex sm:flex justify-center items-center backdrop-brightness-50 ${currentTheme === 'light'
            ? ''
            : 'backdrop-blur-3xl backdrop-hue-rotate-180'} ${classProps}`}>
            <Image
                alt="Fondo de papel"
                className={currentTheme === 'light' ? '' : ' opacity-20'}
                src={bgForLogo}
                style={{ objectFit: "cover" }}
                placeholder="blur"
                sizes="(min-width: 1200px) 50vw, 100vw"
                priority />
            {children}
        </div>
    )
}