
import Link from "next/link"
import Image from "next/image"
import MiniPushPin from "./MiniPushPin"
import logo from "@/public/image/logo.webp"
import PaperBG from "./PaperBG"

export default function CatLogoWithBG() {

    return (
        <Link
            href={'/'}
            className="outline-none">
            <div className="rotate-3 z-10 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] relative 
            max-w-[300px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[370px] xl:max-w-[350px] xl:-top-4 min-w-[200px]"
            >
                <PaperBG>
                    <div className="absolute top-2">
                        <MiniPushPin />
                    </div>
                    <div className="absolute max-w-[200px] sm:max-w-[200px] md:max-w-[230px] lg:max-w-[250px] xl:max-w-[200px]
                     w-full -bottom-3">
                        <Image alt="Imagen de gato enojado, logo de la pagina"
                            src={logo}
                            className="z-10 -rotate-3 absolute bottom-0"
                            priority
                        />
                    </div>
                </PaperBG>
            </div>
        </Link>
    )

}