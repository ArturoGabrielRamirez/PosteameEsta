"use client"

import { signIn, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { LogIn, LogOut } from "lucide-react"
import { useEffect, useState } from 'react'
import { useNotesContext } from './NotesProvider'

const SigninButton = () => {
    const { session } = useNotesContext()
    const [isLowResolution, setIsLowResolution] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 639px)')
        setIsLowResolution(mediaQuery.matches)

        const handler = (e: any) => {
            setIsLowResolution(e.matches)
        };

        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    return (
        <Button className={`min-h-[60px] max-w-[60px] sm:min-h-[68px] lg:min-h-[68px] border-2 sm:border-4 rounded-md text-2xl bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400] ${session && session.user ? " border-red-950 text-red-700 sm:min-w-[165px] xl:mr-0" : "border-cyan-950 text-cyan-700 sm:min-w-[160px]"}`} onClick={() => session && session.user ? signOut({ redirect: true, callbackUrl: '/' }) : signIn()}>{session && session.user ? (isLowResolution ? <LogOut /> : "Cerrar Sesión") : (isLowResolution ? <LogIn /> : "Iniciar Sesión")}</Button>
    )
}
export default SigninButton
