"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { createNewPost } from "@/app/actions/createNewPost"
import TextareaAutosize from 'react-textarea-autosize'

type FormData = {
    title: string
    postItNote: string
}

interface Note {
    title: string
    postItNote: string
}

export default function Form() {
    const [notes, setNotes] = useState<Note[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const newNoteFromDB = await createNewPost(data)
        const newNote = [...notes, newNoteFromDB]
        setNotes(newNote)
        console.log(newNote)
        reset()
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" className="text-black rounded-md p-2" {...register("title", { required: true })} />
            {errors.title && <span>Este Campo es requerido</span>}
            <TextareaAutosize placeholder="Post It" className="text-black rounded-md p-2" {...register("postItNote", { required: true })} />
            {errors.postItNote && <span>Este Campo es requerido</span>}
            <input className="p-4 bg-green-400 rounded-md" type="submit" />
        </form>
    );
}