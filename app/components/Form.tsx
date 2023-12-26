"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { createNewPost } from "@/app/actions/createNewPost"
import TextareaAutosize from 'react-textarea-autosize'
import { ObjectId } from "mongodb"


type FormData = {
    title: string
    postItNote: string
}

interface Note {
    _id: string;
    title: string;
    postItNote: string;
}

export default function Form({ userEmail }: any) {
    const [notes, setNotes] = useState<Array<{ _id: string | ObjectId; title: any; postItNote: any; } | Note>>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const { note } = await createNewPost(data, userEmail as string)
        const newNote = [...notes, note]
        setNotes(newNote as Array<Note>)
        reset()
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" className="text-black rounded-md p-2" {...register("title", { required: true })} />
            {errors.title && <span>Este Campo es requerido</span>}
            <TextareaAutosize placeholder="Post It" className="text-black rounded-md p-2" {...register("postItNote", { required: true })} />
            {errors.postItNote && <span>Este Campo es requerido</span>}
            <input className="p-4 bg-green-400 rounded-md" type="submit" value="Guardar Nota" />
        </form>
    )
}
