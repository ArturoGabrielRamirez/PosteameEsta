'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { createNewPost } from '@/app/actions/createNewPost'
import TextareaAutosize from 'react-textarea-autosize'
import { ObjectId } from 'mongodb'
import { Button } from '@/components/ui/button'
import Buttons from './Buttons'
import { CheckSquare } from 'lucide-react'
import { toast } from 'sonner'


type FormData = {
    title: string
    postItNote: string
}

interface Note {
    _id: string
    title: string
    postItNote: string
}

export default function Form({ userEmail, editStates }: any) {
    const [notes, setNotes] = useState<Array<{ _id: string | ObjectId; title: any; postItNote: any; } | Note>>([])

    const { setIsActive } = editStates
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        toast.loading('Guardando Nota')
        const { note } = await createNewPost(data, userEmail as string)
        const newNote = [...notes, note]
        setNotes(newNote as Array<Note>)
        reset()
        setIsActive(false)

    }

    return (
        <form className='flex flex-col justify-center min-w-full gap-2 sm:gap-3 sm:p-2' onSubmit={handleSubmit(onSubmit)}>
            <TextareaAutosize maxRows={2} maxLength={20} placeholder='Title' className='rounded-md sm:p-2 resize-none'  {...register('title', { required: true })} />
            {errors.title && <span className='text-red-600'>Este Campo es requerido</span>}
            <TextareaAutosize minRows={2} maxRows={4} placeholder='Post It' className='rounded-md sm:p-2 resize-none' {...register('postItNote', { required: true })} />
            {errors.postItNote && <span className='text-red-600'>Este Campo es requerido</span>}
            <div className='gap-2 overflow-hidden flex flex-col'>
                <Button className='bg-green-400'>
                    <CheckSquare />
                    <p className='hidden sm:block'>Posteame Esta!</p>
                </Button>
                <Buttons option='cancel' editStates={editStates} />
            </div>
        </form>
    )
}
