'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { createNewPost } from '@/app/actions/createNewPost'
/* import TextareaAutosize from 'react-textarea-autosize'  */
import Buttons from './Buttons'
import { toast } from 'sonner'
import { useNotesContext } from './NotesProvider'
import { Note } from '../interfaces/interfaces'
import { FormData } from '../types/types'
import { Textarea } from '@nextui-org/input'


export default function Form({ editStates }: any) {

    const { setIsActive } = editStates
    const { notes, setNotes, userEmail } = useNotesContext()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        toast.loading('Guardando Nota...')
        const { note } = await createNewPost(data, userEmail as string)
        const newNote = notes ? [note, ...notes.slice(0, notes.length - 1)] : [note]
        setNotes(newNote as Note[])
        toast.dismiss()
        toast.success('Nota Guardada')
        reset()
        setIsActive(false)
    }

    return (
        <form className='flex flex-col justify-center w-full md:gap-2 sm:gap-3 sm:p-2' onSubmit={handleSubmit(onSubmit)}>
            <Textarea
                maxRows={1}
                maxLength={40}
                placeholder='Title'
                className='rounded-md sm:p-2 resize-none'
                {...register('title', { required: true })} />
            {errors.title && <span className='text-red-600'>Este Campo es requerido</span>}
            <Textarea maxRows={1} placeholder='Post It' className='rounded-md sm:p-2 resize-none' {...register('postItNote', { required: true })} />
            {errors.postItNote && <span className='text-red-600'>Este Campo es requerido</span>}
            <div className='gap-2 overflow-hidden flex flex-col'>
                <Buttons option='create' editStates={editStates} />
                <Buttons option='cancel' editStates={editStates} />
            </div>
        </form>
    )

}
