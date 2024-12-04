'use client'

import Image from "next/image"
import MiniPushPinGroup from "./MiniPushPinGroup"
import PaperBG from "./PaperBG"
import SigninButton from "./SignInButton"
import ModeToggle from "./ModeToggle"
import { useNotesContext } from "./NotesProvider"
import bgNewNote from "@/public/image/bgNewNote.png"
import Footer from "./Footer"

export default function SessionOptionBar() {

    const { session } = useNotesContext()

    return (
        <PaperBG classProps="hidden sm:block">
            <div className="p-2 absolute w-full top-1">
                <MiniPushPinGroup />
            </div>
            <div className="absolute rounded-md flex flex-col max-[639px]:flex-col sm:flex-col sm:items-stretch xl:m-4 sm:max-w-[250px] md:max-w-[280px] w-fit">
                <div className="flex gap-2 items-center justify-center">
                    <Image alt="User Image" className="rounded-full relative p-1 min-[380px]:p-0 max-[639px]:min-h-[50px] max-[639px]:max-w-[50px] md:w-[60px] md:min-h-[60px]" height={50} src={session?.user?.image || bgNewNote} width={50} priority></Image>
                    <div className="flex flex-col">
                        <h2 className="hidden sm:block sm:text-lg pr-4 w-fit">{session ? session?.user?.name : "Bienvenido"}</h2>
                        <div className="flex gap-2 items-center justify-center w-full">
                            <SigninButton />
                            <ModeToggle />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 max-[639px]:flex-row sm:gap-2 xl:justify-around flex-col w-full">
                    <Footer />
                </div>
            </div>
            <div className="p-2 absolute w-full bottom-1">
                <MiniPushPinGroup />
            </div>
        </PaperBG>
    )
}