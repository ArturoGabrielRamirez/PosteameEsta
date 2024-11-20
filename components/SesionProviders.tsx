"use client"

import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "../interfaces/interfaces"


const SesionProviders = (props: ProviderProps) => {

    return (
        <SessionProvider>
            {props.children}
        </SessionProvider>
    )

}

export default SesionProviders