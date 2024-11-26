'use client'

import { useState } from 'react'
import Buttons from './Buttons'
import { editNote } from '@/actions/editNote'
import { redirect } from 'next/navigation'
import PushPin from './PushPin'
import { useThemeContext } from './CurrentThemeProvider'
import { Textarea } from "@nextui-org/input"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
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
            <Card className={`rounded-md shadow-md shadow-[rgba(0,0,0,0.8)] shadow-black flex flex-col sm:justify-between bg-gradient-to-b ${currentTheme === 'light' ? 'post-it-light-gradient' : 'post-it-dark-gradient'} size-full`}>
                <div className='flex justify-between p-2'>
                    <PushPin />
                    <PushPin />
                </div>
                <div className='flex flex-col grow '>
                    {isActive ? (
                        <>
                            <CardHeader>
                                <Textarea
                                    id='title'
                                    value={title}
                                    onChange={(e) => eventOnChange(e)}
                                    className='text-lg bg-transparent'
                                />
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    id='postItNote'
                                    value={postItNote}
                                    onChange={(e) => eventOnChange(e)}
                                    className='bg-transparent text-sm'
                                   /*  maxRows={18} */
                                />
                            </CardContent>
                        </>
                    ) : (
                        <>
                            <CardHeader>
                                <Textarea
                                    isReadOnly
                                    id='title'
                                    value={title}
                                    className='text-lg'
                                />
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    isReadOnly
                                    id='postItNote'
                                    value={postItNote}
                                    className='text-sm'
                                   /*  maxRows={18} */
                                />
                            </CardContent>
                        </>
                    )
                    }
                </div>
                <div>
                    {!isActive ? (
                        <CardFooter className='flex justify-around p-1 sm:p-4'>
                            <Buttons option='edit' editStates={editStates} />
                            <Buttons option='delete' data={notes._id} />
                        </CardFooter>
                    ) : (
                        <CardFooter className='flex justify-around p-1 sm:p-4'>
                            <Buttons option='cancel' editStates={editStates} />
                            <Buttons option='save' editStates={editStates} />
                        </CardFooter>
                    )}
                    <div className='flex justify-between p-2'>
                        <PushPin />
                        <PushPin />
                    </div>
                </div>
            </Card>
        </div>
    )

}