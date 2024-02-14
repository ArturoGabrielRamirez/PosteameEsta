'use client'

import Form from './Form'
import Buttons from './Buttons'
import { useState } from 'react'
import Image from 'next/image'
import bgNewNote from '@/public/image/bgNewNote.png'

export default function CreateNoteClient({ userEmail }: any) {
    const [isActive, setIsActive] = useState<boolean>(false)

    const editStates = { setIsActive }

    if (!isActive) {
        return (
            <div className='flex relative items-center justify-center rounded-sm text-4xl bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400] max-h-[300px] max-w-[300px] overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)]'>
                <Buttons option='new' editStates={editStates} />
                <Image className='absolute pointer-events-none opacity-50' src={bgNewNote} width={400} height={400} alt='imagen de gato enojado en un boton para crear una nota'></Image>
            </div>
        )
    } else {
        return (
            <div className='flex rounded-sm bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400] max-h-[300px] max-w-[300px] shadow-md shadow-[rgba(0,0,0,0.8)] '>
                <Form userEmail={userEmail} editStates={editStates} />
            </div>
        )
    }
}