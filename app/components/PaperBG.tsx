import Image from "next/image"
import bgForLogo from "@/public/image/bgForLogo.png"
import { ProviderProps } from "../interfaces/interfaces"


export default function PaperBG({ children }: ProviderProps) {

    return (
        <div className="flex justify-center items-center">
            {children}
            <Image alt="Fondo de papel para logo con gato adentro" src={bgForLogo} objectFit="cover" />
        </div>
    )

}