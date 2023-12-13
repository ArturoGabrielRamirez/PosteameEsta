"use client";

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { createNewPost } from "@/app/actions/createNewPost"

type FormData = {
    title: string
    postItNote: string
   
}

interface Note {
    title: string
    postItNote: string
}

export default function Form() {
    const [notes, setNotes] = useState<Note[]>([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const newNoteFromDB = await createNewPost(data)
        const newNote = [...notes, newNoteFromDB]
        setNotes(newNote)

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="text-black" {...register("title", { required: true })} />
            {errors.title && <span>Este Campo es requerido</span>}
            <input className="text-black" {...register("postItNote", { required: true })} />
            {errors.postItNote && <span>Este Campo es requerido</span>}
            <input type="submit" />
        </form>
    );
}
