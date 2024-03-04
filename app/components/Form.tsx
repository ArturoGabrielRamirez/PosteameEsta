'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { createNewPost } from '@/app/actions/createNewPost'
import TextareaAutosize from 'react-textarea-autosize'
import Buttons from './Buttons'
import { toast } from 'sonner'
import { useNotesContext } from './NotesProvider'


type FormData = {
    title: string
    postItNote: string
}

interface Note {
    _id: string,
    postItNote: string;
    title: string;
    userEmail: string;
}

export default function Form({ userEmail, editStates }: any) {
    const { setIsActive } = editStates
    const { notes, setNotes } = useNotesContext()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        toast.loading('Guardando Nota...')
        const { note } = await createNewPost(data, userEmail as string)
        toast.dismiss()
        toast.success('Nota Guardada')
        const newNote = [...notes, note]
        setNotes(newNote as Note[])
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
                <Buttons option='create' editStates={setIsActive} />
                <Buttons option='cancel' editStates={editStates} />
            </div>
        </form>
    )
}
