import Image from "next/image"
import bgForLogo from "@/public/image/bgForLogo.png"
import React, { ReactNode } from 'react'

interface PaperBGProps {
    children: ReactNode
}

export default function PaperBG({ children }: PaperBGProps) {
    return (
        <div className="relative bgLogo flex justify-center items-center">
            {children}
            <Image alt="Fondo de papel para logo con gato adentro" src={bgForLogo} objectFit="cover"/>
        </div>
    )
}