'use client'

import { useState } from 'react'
import Buttons from './Buttons'
import { editNote } from '@/actions/editNote'
import { redirect } from 'next/navigation'
import PushPin from './PushPin'
import { useThemeContext } from './CurrentThemeProvider'
import { Textarea } from "@/components/ui/textarea"
import { useNotesContext } from './NotesProvider'



export default function NoteDetails({ res }: { res: any }) {
    const { isActive, setIsActive } = useNotesContext()
    const notes = res?.notes ? res.notes[0] : { title: '', postItNote: '' }
    const [title, setTitle] = useState(notes.title)
    const [postItNote, setPostItNote] = useState(notes.postItNote)
    const { currentTheme } = useThemeContext()

    if (!res || !res.notes) {
        return redirect('/')
    }

    const handleClickSave = async () => {
        const data = { title, postItNote }
        const req = await editNote(notes._id, data)
        setIsActive(false)
        return req
    }

    const eventOnChange = (e: any) => {
        const event = e.target.value
        if (e.target.id === 'title') {
            return setTitle(event)
        } else {
            return setPostItNote(event)
        }
    }

    const editStates = { handleClickSave, isActive, setIsActive }

    return (
        <div className='w-full rounded-md h-full'>
            <div className={`rounded-md shadow-md shadow-[rgba(0,0,0,0.8)] shadow-black flex flex-col sm:justify-between bg-gradient-to-b 
                ${currentTheme === 'light' ? 'post-it-light-gradient' : 'post-it-dark-gradient'} size-full`}>
                <div className='flex justify-between p-2'>
                    <PushPin />
                    <PushPin />
                </div>
                <div className='flex flex-col grow h-dvh overflow-hidden'>
                    {isActive ? (
                        <>
                            <Textarea
                                id='title'
                                value={title}
                                onChange={(e) => eventOnChange(e)}
                                className='bg-transparent border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 resize-none px-10 text-center'
                            />
                            <Textarea
                                id='postItNote'
                                value={postItNote}
                                onChange={(e) => eventOnChange(e)}
                                className='text-sm p-2 shadcn-textarea resize-none bg-transparent  
                                md:px-20 2xl:px-52 px-8 h-fit py-2 border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0'
                                rows={50}
                            />
                        </>
                    ) : (
                        <>
                            <Textarea
                                disabled
                                id='title'
                                value={title}
                                className='bg-transparent resize-none border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 px-10 text-center'
                            />
                            <Textarea
                                disabled
                                id='postItNote'
                                value={postItNote}
                                rows={50}
                                className='text-sm p-2 shadcn-textarea resize-none bg-transparent border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0 
                                md:px-20 2xl:px-52 px-8 h-fit py-2'
                            />
                        </>
                    )
                    }
                </div>
                <div>
                    {!isActive ? (
                        <div className='flex justify-around p-1 sm:p-4'>
                            <Buttons option='edit' editStates={editStates} />
                            <Buttons option='delete' data={notes._id} />
                        </div>
                    ) : (
                        <div className='flex justify-around p-1 sm:p-4'>
                            <Buttons option='cancel' editStates={editStates} />
                            <Buttons option='save' editStates={editStates} />
                        </div>
                    )}
                    <div className='flex justify-between p-2'>
                        <PushPin />
                        <PushPin />
                    </div>
                </div>
            </div>
        </div>
    )

}