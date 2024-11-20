'use client'

import NailGroup from "./NailGroup"
import CatLogoWithBG from "./CatLogoWithBG"
import Title from "./Title"
import SessionOptionBar from "./SessionOptionBar"
import BGTexture from "./BGTexture"
import { useThemeContext } from "./CurrentThemeProvider"

export default function AppBar() {
    const { currentTheme } = useThemeContext()


    return (
        <div className={`min-w-[400px] flex bg-gradient-to-br xl:bg-gradient-to-bl ${currentTheme === 'light' ? 'light-gradient' : 'dark-gradient'} p-4 xl:p-2`}>
            <div className="relative size-full xl:flex xl:flex-col xl:justify-between w-full shadow-md shadow-[rgba(0,0,0,0.9)] ">
                <BGTexture />
                <NailGroup />
                <div className="flex items-center flex-row justify-between xl:flex-col grow">
                    <CatLogoWithBG />
                    <Title />
                    <div className="relative max-w-[190px] sm:max-w-[300px] md:max-w-[360px] xl:max-w-[350px] shadow-md shadow-[rgba(0,0,0,0.8)]">
                        <SessionOptionBar />
                    </div>
                </div>
                <NailGroup />
            </div>
        </div>
    )

}