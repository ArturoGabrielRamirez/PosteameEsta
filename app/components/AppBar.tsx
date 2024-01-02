"use client"

import { useSession } from "next-auth/react"
import SigninButton from "./SignInButton"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/image/logo.png"
import ModeToggle from "./ModeToggle"


export default function AppBar() {
    const { data: session } = useSession()

    let sessionBoolean = session && session.user ? true : false


    return (
        <div className="border-b-4 border-slate-700 gap-4 p-4 xl:border-b-0 xl:border-r-4 xl:flex xl:flex-col xl:justify-between">
            {sessionBoolean ?
                <div className="flex items-center justify-between xl:flex-col xl:h-screen">
                    <Link href="/" className="flex gap-10 items-center justify-between xl:flex-col xl:gap-28">
                        <Image priority={true} alt="Imagen de sesion cerrada" className="max-w-[200px] lg:max-w-[250px] xl:max-w-[300px]" height={300} src={logo} width={300}></Image>
                        <h1 className="font-bold max-w-[400px] md:text-2xl md:text-white text-transparent lg:text-4xl xl:text-7xl">POSTEAME ESTA!</h1>
                    </Link>
                    <div className="flex flex-col gap-2 items-stretch">
                        <div className="flex gap-2 justify-between">
                            <Image priority={true} alt="User Image" className="rounded-full" height={100} src={session?.user?.image || ""} width={100}></Image>
                            <h2 className="font-bold max-w-[146px] text-2xl">Bienvenido {session?.user?.name}</h2>
                        </div>
                        <div className="flex lg:gap-2">
                            <SigninButton />
                            <ModeToggle />
                        </div>
                    </div>
                </div> :
                <div className="flex items-center justify-between xl:flex-col xl:h-screen">
                    <Image priority={true} alt="Imagen de sesion cerrada" className="p-8 xl:p-0" height={300} src={logo} width={300}></Image>
                    <h2 className="font-bold text-4xl xl:text-5xl min-w-screen">Inicie sesión para poder guardar notas personales.</h2>
                    <div className="flex items-center gap-2">
                        <SigninButton />
                        <ModeToggle />
                    </div>
                </div>
            }
        </div>
    )
}