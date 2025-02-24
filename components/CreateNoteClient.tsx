'use client'

import Form from './Form'
import Buttons from './Buttons'
import Image from 'next/image'
import bgNewNote from '@/public/image/bgNewNote.webp'
import { useNotesContext } from './NotesProvider'
import { Card } from '@/components/ui/card'
import { useThemeContext } from './CurrentThemeProvider'

export default function CreateNoteClient() {
    const { isActive, setIsActive } = useNotesContext()
    const editStates = { isActive, setIsActive }
    const { currentTheme } = useThemeContext()


        return !isActive ? (
            <Card className={`flex max-h-[calc(30vh-30px)] min-h-[240px] relative items-center justify-center rounded-sm text-4xl bg-gradient-to-br  
            ${currentTheme === 'light' ? 'post-it-light-gradient'
                    : 'post-it-dark-gradient'} overflow-hidden shadow-md shadow-[rgba(0,0,0,0.8)] border-none`}>
                <Buttons
                    option='new'
                    editStates={editStates} />
                <Image
                    className='absolute pointer-events-none opacity-50'
                    src={bgNewNote} width={200}
                    height={200}
                    alt='imagen de gato enojado en un boton para crear una nota'
                    priority 
                    sizes='(min-width: 1200px) 50vw, 100vw'
                    placeholder='blur'/>
            </Card>
        ) : (
            <Card className={`flex max-h-[calc(30vh-30px)] min-h-[240px] z-10 rounded-sm bg-gradient-to-br 
            ${currentTheme === 'light' 
            ? 'post-it-light-gradient' 
            : 'post-it-dark-gradient'} shadow-md shadow-[rgba(0,0,0,0.8)] border-none`}>
                <Form editStates={editStates} />
            </Card>
        )
    
   
}
