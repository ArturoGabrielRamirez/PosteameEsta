"use client"

import Form from "./Form"
import Buttons from "./Buttons"
import { useState } from "react"
import Image from "next/image"
import test2 from "@/public/image/test2.png"

export default function CreateNoteClient({ userEmail }: any) {
    const [isActivo, setIsActive] = useState<boolean>(false)

    const editStates = { setIsActive }

    if (!isActivo) {
        return (
            <div className="flex relative items-center justify-center rounded-sm text-4xl overflow-hidden bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400] min-h-[250px]">
                <Buttons type="new" editStates={editStates} />
                <Image priority={true} className="absolute pointer-events-none" src={test2} width={400} height={400} alt="imagen de gato enojado en un boton para crear una nota"></Image>
            </div>
        )
    } else {
        return (
            <div className="flex items-center justify-center rounded-sm overflow-hidden bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400]">
                <Form userEmail={userEmail} editStates={editStates} />
            </div>
        )
    }
}