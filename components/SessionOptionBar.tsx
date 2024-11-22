'use client'

import Image from "next/image"
import MiniPushPinGroup from "./MiniPushPinGroup"
import PaperBG from "./PaperBG"
import SigninButton from "./SignInButton"
import ModeToggle from "./ModeToggle"
import { useNotesContext } from "./NotesProvider"
import bgNewNote from "@/public/image/bgNewNote.png"

export default function SessionOptionBar() {

    const { session } = useNotesContext()

    return (
        <PaperBG>
            <div className="p-2 absolute w-full top-1">
                <MiniPushPinGroup />
            </div>
            <div className="absolute rounded-md flex flex-col max-[639px]:flex-col sm:flex-col gap-1 md:gap-2 sm:items-stretch xl:m-4 sm:max-w-[250px] md:max-w-[280px]">
                <div className="flex gap-1 border-2 sm:border-4 rounded-md sm:gap-2 justify-center sm:justify-between items-center bg-gradient-to-b border-orange-950 from-[#ffe501] via-[#fcc101] to-[#b29400] md:max-h-[100px]">
                    <Image alt="User Image" className="rounded-full relative p-1 min-[380px]:p-0 max-[639px]:min-h-[50px] max-[639px]:max-w-[50px] md:w-[60px] md:min-h-[60px]" height={50} src={session?.user?.image || bgNewNote} width={50} priority></Image>
                    <h2 className="hidden sm:block max-w-[130px] sm:text-lg pr-4">Bienvenido {session?.user?.name}</h2>
                </div>
                <div className="flex max-[639px]:flex-row sm:gap-2 xl:justify-between">
                    <SigninButton />
                    <ModeToggle />
                </div>
            </div>
            <div className="p-2 absolute w-full bottom-1">
                <MiniPushPinGroup />
            </div>
        </PaperBG>
    )
}