'use client'

import Link from "next/link"
import Image from "next/image"
import { useNotesContext } from "./NotesProvider"
import PaperBG from "./PaperBG"
import MiniPushPin from "./MiniPushPin"
import logo from "@/public/image/logo.png"


export default function CatLogoWithBG() {

    const { concatenatedPath, handlePageChange, userEmail } = useNotesContext()

    
    const handleClick = (action: string, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(action)
    }

    return (
        <Link href={userEmail ? `${concatenatedPath}` : '/'}>
            <div className="rotate-3 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] relative max-w-[220px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[380px] xl:max-h-[300px] xl:-top-4" onClick={handleClick.bind(null, 'redirect')}>
                <PaperBG>
                    <div className="absolute top-2">
                        <MiniPushPin />
                    </div>
                    <div className="absolute max-w-[150px] min-h-[150px] sm:max-w-[200px] sm:min-h-[200px] md:max-w-[250px] md:min-h-[250px] xl:max-w-[250px] xl:min-h-[250px] w-full -bottom-3">
                        <Image alt="Imagen de gato enojado, logo de la pagina" src={logo} className="z-10 -rotate-3 h-full w-full absolute" />
                    </div>
                </PaperBG>
            </div>
        </Link>
    )

}