'use client'

import NailGroup from "./NailGroup"
import CatLogoWithBG from "./CatLogoWithBG"
import SessionOptionBar from "./SessionOptionBar"
import BGTexture from "./BGTexture"
import { useThemeContext } from "./CurrentThemeProvider"
import { useNotesContext } from "./NotesProvider"
import LowResolutionSessionBar from "./LowResolutionSessionBar"

export default function AppBar() {
    const { currentTheme } = useThemeContext()

    return (
        <header className={`lg:min-w-[400px] flex bg-gradient-to-br xl:bg-gradient-to-bl ${currentTheme === 'light' ? 'light-gradient' : 'dark-gradient'} pl-4 py-4 pr-4 xl:py-8 xl:pl-8 max-h-dvh`}>
            <div className="relative size-full min-sm:justify-center xl:flex xl:flex-col shadow-md shadow-[rgba(0,0,0,0.8)]">
                <BGTexture />
                <NailGroup />
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around xl:flex-col grow gap-2">
                    <CatLogoWithBG />
                    <div className="relative min-w-[190px] max-w-[190px] sm:max-w-[300px] md:max-w-[360px] xl:max-w-[350px] shadow-md shadow-[rgba(0,0,0,0.8)]">
                        <SessionOptionBar />
                    </div>
                    <LowResolutionSessionBar />
                </div>
                <NailGroup />
            </div>
        </header>
    )

}