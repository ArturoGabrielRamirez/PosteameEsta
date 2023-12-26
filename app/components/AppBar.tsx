"use client"

import { useSession } from "next-auth/react"
import SigninButton from "./SignInButton"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/image/logo.png"


export default function AppBar() {
    const { data: session } = useSession()

    let sessionBoolean = session && session.user ? true : false


    return (

        <div className="flex justify-between p-4 pl-8 pr-8 border-b-4 border-slate-700 min-h-[222px]">
            {sessionBoolean ? <><h1 className="text-xl font-bold"><Link href="/" className="flex flex-col items-center gap-2" >{<Image alt="Imagen de sesion cerrada" width={150} height={150} src={logo}>
            </Image>}POSTEAME ESTA!</Link></h1><div className="flex items-center space-x-4">
                    <h2 className="text-lg font-semibold">Bienvenido {session?.user?.name}</h2>
                    <Image /* priority={true} */ className="rounded-full" width={100} height={100} src={session?.user?.image || ""} alt="User Image"></Image>
                    <SigninButton />
                </div></> : <><h1 className="flex items-center text-xl font-bold">POSTEAME ESTA!</h1><div className="flex items-center space-x-4">
                    <h2 className="text-lg font-semibold">Inicie Sesio Para poder guardar notas personales</h2>
                    <Image className="rounded-full" alt="Imagen de sesion cerrada" width={100} height={100} src={logo}></Image>
                    <SigninButton />
                </div></>}
        </div>
    )
}