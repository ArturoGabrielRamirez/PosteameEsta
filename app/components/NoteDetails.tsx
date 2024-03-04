'use client'

import { useState } from 'react'
import Buttons from './Buttons'
import { editNote } from '../actions/editNote'
import { redirect } from 'next/navigation'
import TextareaAutosize from 'react-textarea-autosize'
import PushPin from './PushPin'


export default function NoteDetails({ res }: { res: any }) {
    const [isActive, setIsActive] = useState<boolean>(false)
    const notes = res?.notes ? res.notes[0] : { title: '', postItNote: '' }
    const [title, setTitle] = useState(notes.title)
    const [postItNote, setPostItNote] = useState(notes.postItNote)

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

    const editStates = { handleClickSave, setIsActive }

    return (
        <div className='granulated relative h-full w-full'>
            <div className='rounded-md shadow-md shadow-black flex flex-col sm:justify-between bg-gradient-to-b from-[#ffe601da] via-[#fcc101] to-[#b29400] sm:gap-8 absolute h-full w-full'>
                <div className='flex justify-between p-2'>
                    <PushPin />
                    <PushPin />
                </div>
                <div className='flex w-full flex-col flex-1 p-4 sm:p-8'>
                    {isActive ? (
                        <>
                            <TextareaAutosize
                                id='title'
                                value={title}
                                onChange={(e) => eventOnChange(e)}
                                className='text-2xl xl:text-7xl bg-transparent break-words sm:font-extrabold font-sans'
                                style={{ resize: 'none' }}
                            />

                            <TextareaAutosize
                                id='postItNote'
                                value={postItNote}
                                onChange={(e) => eventOnChange(e)}
                                className='text-xl xl:text-4xl bg-transparent break-words sm:font-extrabold font-sans'
                                style={{ resize: 'none' }}
                            />
                        </>
                    ) : (
                        <>
                            <h3 id='title' className='text-2xl xl:text-7xl break-words sm:font-extrabold font-sans min-h-[84px]'>{title}</h3>
                            <p id='postItNote' className='text-xl xl:text-4xl break-words sm:font-extrabold font-sans'>{postItNote}</p>
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