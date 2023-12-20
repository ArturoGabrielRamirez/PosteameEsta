"use client"

import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const SesionProviders = (props: Props) => {
    return (
        <SessionProvider>
            {props.children}
        </SessionProvider>
    )
};

export default SesionProviders