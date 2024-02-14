"use client"

import { useSession } from "next-auth/react"
import SigninButton from "./SignInButton"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/image/logo.png"
import ModeToggle from "./ModeToggle"
import PaperBG from "./PaperBG"
import Nail from "./Nail"
import MiniPushPin from "./MiniPushPin"


export default function AppBar() {
    const { data: session } = useSession()

    let sessionBoolean = session && session.user ? true : false


    return (
        <div className="granulated xl:flex xl:flex-col xl:justify-between w-full shadow-md shadow-[rgba(0,0,0,0.9)]">
            <div className="flex justify-between p-2">
                <Nail />
                <Nail />
            </div>
            {sessionBoolean ?
                <div className="flex items-center flex-row justify-between xl:flex-col flex-1">
                    <Link href="/" className="">
                        <div className="flex items-center justify-center rotate-3 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] relative max-w-[220px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[380px] xl:max-h-[300px] xl:-top-4">
                            <PaperBG>
                                <div className="absolute top-2">
                                    <MiniPushPin />
                                </div>
                                <div className="absolute max-w-[150px] min-h-[150px] sm:max-w-[200px] sm:min-h-[200px] md:max-w-[250px] md:min-h-[250px]  xl:max-w-[250px] xl:min-h-[250px] w-full -bottom-3">
                                    <Image alt="Imagen de gato enojado, logo de la pagina" src={logo} fill className="self-end xl:self-center p-1 sm:pl-2 xl:pl-0 z-10 -rotate-3 h-full w-full absolute"/>
                                </div>
                            </PaperBG>
                        </div>
                    </Link>
                    <div className="mx-10 hidden min-[1145px]:block relative shadow-md shadow-[rgba(0,0,0,0.8)] lg:max-w-[300px] xl:max-w-[500px]">
                        <PaperBG>
                            <div className="absolute flex flex-col justify-between p-2 w-full h-full ">
                                <div className="flex justify-between w-full">
                                    <MiniPushPin />
                                    <MiniPushPin />
                                </div>
                                <h1 className="font-bold md:text-5xl min-w-full relative pl-4 text-black">POSTEAME ESTA!</h1>
                                <div className="flex justify-between w-full">
                                    <MiniPushPin />
                                    <MiniPushPin />
                                </div>
                            </div>
                        </PaperBG>
                    </div>
                    <div className="relative rotate-90 sm:rotate-0 max-w-[190px] sm:max-w-[300px] md:max-w-[360px] xl:max-w-[350px] shadow-md shadow-[rgba(0,0,0,0.8)]">
                        <PaperBG>
                            <div className="flex justify-between p-1 md:p-2 absolute w-full top-1">
                                <MiniPushPin />
                                <MiniPushPin />
                            </div>
                            <div className="absolute -rotate-90 sm:rotate-0 rounded-md p-1 md:p-2 lg:p-4 xl:p-6 flex max-[639px]:flex-col sm:flex-col gap-1 md:gap-2 sm:items-stretch xl:m-4 sm:max-w-[250px] md:max-w-[300px]">
                                <div className="flex border-4 border-orange-950 gap-1 rounded-md sm:gap-2 justify-center sm:justify-between items-center bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400]">
                                    <Image alt="User Image" className="rounded-full relative p-1 min-[380px]:p-0 max-[639px]:min-h-[50px] max-[639px]:max-w-[50px] md:w-[80px] md:min-h-[80px]" height={100} src={session?.user?.image || ""} width={100}></Image>
                                    <h2 className="hidden sm:block font-bold max-w-[146px] sm:text-lg xl:text-2xl">Bienvenido {session?.user?.name}</h2>
                                </div>
                                <div className="flex gap-1 flex-col sm:flex-row sm:gap-2 xl:justify-between">
                                    <SigninButton />
                                    <ModeToggle />
                                </div>
                            </div>
                            <div className="flex justify-between p-2 absolute w-full bottom-1">
                                <MiniPushPin />
                                <MiniPushPin />
                            </div>
                        </PaperBG>
                    </div>
                </div> :
                <div className="flex xl:flex-col justify-between items-center grow gap xl:max-w-[500px]">
                    <Link href="/">
                        <div className="flex items-center justify-center rotate-3 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] relative max-w-[220px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[450px] xl:-top-4">
                            <PaperBG>
                                <div className="absolute top-2">
                                    <MiniPushPin />
                                </div>
                                <div className="absolute max-w-[150px] min-h-[150px] sm:max-w-[200px] sm:min-h-[200px] md:max-w-[250px] md:min-h-[250px]  xl:max-w-[280px] xl:min-h-[280px] w-full -bottom-3">
                                    <Image alt="Imagen de gato enojado, logo de la pagina" src={logo} fill className="self-end xl:self-center p-1 sm:pl-2 xl:pl-0 z-10 -rotate-3 h-full w-full absolute" />
                                </div>
                            </PaperBG>
                        </div>
                    </Link>
                    <h1 className="hidden lg:block font-bold lg:text-6xl xl:text-6xl p-2">POSTEAME ESTA!</h1>
                    <div className="flex gap-1 flex-col lg:flex-row sm:gap-2 granulated rounded-md p-1 md:p-2 lg:p-4 xl:p6 max-[380px]:flex-col sm:flex-col sm:items-stretch">
                        <SigninButton />
                        <ModeToggle />
                    </div>
                </div>
            }
            <div className="flex justify-between p-2">
                <Nail />
                <Nail />
            </div>
        </div>
    )
}