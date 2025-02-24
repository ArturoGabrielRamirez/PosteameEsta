"use client"

import Image from "next/image"
import { useNotesContext } from "./NotesProvider"
import SigninButton from "./SignInButton"
import ModeToggle from "./ModeToggle"
import bgNewNote from "@/public/image/bgNewNote.webp"

function LowResolutionSessionBar() {

    const { session } = useNotesContext()
    return (
        <div className="sm:hidden">
            <div className="w-fit">
                <div className="flex w-full items-center gap-2 pl-4">
                    <Image 
                    alt="User Image" 
                    className="rounded-full relative p-1 min-[380px]:p-0 max-[639px]:min-h-[50px] max-[639px]:max-w-[50px] 
                    md:w-[60px] md:min-h-[60px]" 
                    height={50} 
                    src={session?.user?.image || bgNewNote} 
                    width={50} priority/>
                    <div className="flex flex-col justify-center w-full">
                        <h2 className="text-lg pr-4 w-fit z-10">{session ? session?.user?.name : "Bienvenido"}</h2>
                        <div className="flex ga-2 items-center justify-center w-full z-10 pr-3">
                            <SigninButton />
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowResolutionSessionBar