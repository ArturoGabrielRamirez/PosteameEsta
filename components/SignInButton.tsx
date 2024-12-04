"use client"

import { signIn, signOut } from 'next-auth/react'
import { LogIn, LogOut } from "lucide-react"
import { useNotesContext } from './NotesProvider'
import { Button } from './ui/button'

const SigninButton = ({ className }: { className?: string }) => {
    const { session } = useNotesContext()
  
    return (
        <Button className={`bg-transparent text-primary hover:text-primary-foreground ${className}`} onClick={() => session && session.user ? signOut({ redirect: true, callbackUrl: '/' }) : signIn()}>
            <LogIn className={`size-[23px] ${session && session.user ? "hidden" : "block"}`} />
            <LogOut className={`size-[23px] ${session && session.user ? "block" : "hidden"}`} />
        </Button>
    )
}
export default SigninButton
