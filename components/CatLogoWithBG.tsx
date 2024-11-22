'use client'

import Link from "next/link"
import Image from "next/image"
import { useNotesContext } from "./NotesProvider"

import MiniPushPin from "./MiniPushPin"
import logo from "@/public/image/logo.png"
import PaperBG from "./PaperBG"


export default function CatLogoWithBG() {

    const { concatenatedPath, handlePageChange, userEmail } = useNotesContext()


    const handleClick = (action: string, e: React.MouseEvent) => {
        e.preventDefault()
        handlePageChange(action)
    }

    return (
        <Link href={userEmail ? `${concatenatedPath}` : '/'}>
            <div className="rotate-3 z-10 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] relative max-w-[200px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[370px] xl:max-w-[350px] xl:-top-4 min-w-[200px]" onClick={handleClick.bind(null, 'redirect')}>
                <PaperBG>
                    <div className="absolute top-2">
                        <MiniPushPin />
                    </div>
                    <div className="absolute max-w-[120px] sm:max-w-[200px] md:max-w-[230px] lg:max-w-[250px] xl:max-w-[230px] w-full -bottom-3">
                        <Image alt="Imagen de gato enojado, logo de la pagina" priority src={logo} className="z-10 -rotate-3 absolute bottom-0" />
                    </div>
                </PaperBG>
            </div>
        </Link>
    )

}