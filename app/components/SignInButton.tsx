"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"

const SigninButton = () => {

    const { data: session } = useSession()


    return (
        <Button className={`border-4 rounded-md text-2xl ${session && session.user ? "bg-red-500 border-red-600 min-h-[72px] min-w-[140px] mr-10 xl:mr-0" : "bg-cyan-500 border-cyan-600 min-h-[72px] min-w-[140px]"}`} onClick={() => session && session.user ? signOut() : signIn()}>{session && session.user ? "Cerrar Sesión" : "Iniciar Sesión"}</Button>
    )

}
export default SigninButton