"use client"

import { signIn, signOut, useSession } from 'next-auth/react'

const SigninButton = () => {

    const { data: session } = useSession()


    return (
        <button className={`border-2 rounded-md p-2 ${session && session.user ? "bg-red-400 border-red-600" : "bg-cyan-400 border-cyan-600"}`} onClick={() => session && session.user ? signOut() : signIn()}>{session && session.user ? "Cerrar sesión" : "Iniciar Sesión"}</button>
    )

}
export default SigninButton