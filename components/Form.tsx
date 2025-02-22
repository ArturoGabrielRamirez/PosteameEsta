'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { createNewPost } from '@/actions/createNewPost'
import Buttons from './Buttons'
import { toast } from 'sonner'
import { useNotesContext } from './NotesProvider'
import { Note } from '../interfaces/interfaces'
import { FormData } from '../types/types'
import { Textarea } from '@/components/ui/textarea'


export default function Form({ editStates }: any) {

    const { setIsActive } = editStates
    const { notes, setNotes, userEmail, limit } = useNotesContext()
    /* const { limit } = useNotesContext() */
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()


    const onSubmit: SubmitHandler<FormData> = async (data) => {
        toast.loading('Guardando Nota...')
        const { note } = await createNewPost(data, userEmail as string)
        const newNote = [note, ...(notes || [])].slice(0, Number(limit))
        setNotes(newNote as Note[])
        toast.dismiss()
        toast.success('Nota Guardada')
        reset()
        setIsActive(false)
    }

    return (
        <form className='flex flex-col justify-center w-full overflow-hidden gap-1' onSubmit={handleSubmit(onSubmit)}>
            <Textarea
                maxLength={40}
                placeholder='Titulo...'
                className='rounded-md sm:p-2 resize-none h-fit bg-transparent border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0'
                {...register('title', { required: true })} />
            {errors.title && <span className='text-red-600 text-sm'>Este Campo es requerido</span>}
            <Textarea
                placeholder='Post It...'
                className='rounded-md sm:p-2 resize-none bg-transparent border-none focus-visible:outline-none 
                focus-visible:ring-0 focus:outline-none focus:ring-0 focus-visible:ring-offset-0'
                {...register('postItNote', { required: true })} />
            {errors.postItNote && <span className='text-red-600 text-sm'>Este Campo es requerido</span>}
            <div className='flex justify-center items-center gap-4 sm:gap-6 overflow-hidden flex-row'>
                <Buttons option='create' editStates={editStates} />
                <Buttons option='cancel' editStates={editStates} />
            </div>
        </form>
    )
}
