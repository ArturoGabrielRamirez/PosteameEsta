"use client"

import { useSession } from "next-auth/react"
import SigninButton from "./SignInButton"

export default function AppBar() {
    const { data: session } = useSession()

    console.log(session)

    let sessionBolean = session && session.user ? true : false

    return (
        <SigninButton />
    )
}