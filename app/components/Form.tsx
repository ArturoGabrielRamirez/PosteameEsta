"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { createNewPost } from "@/app/actions/createNewPost"
import TextareaAutosize from 'react-textarea-autosize'
import { ObjectId } from "mongodb"
import Buttons from "./Buttons"


type FormData = {
    title: string
    postItNote: string
}

interface Note {
    _id: string;
    title: string;
    postItNote: string;
}

export default function Form({ userEmail, editStates }: any) {
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
            <TextareaAutosize maxRows={2} placeholder="Title" className="text-black rounded-md p-2" {...register("title", { required: true })} />
            {errors.title && <span className="text-red-500">Este Campo es requerido</span>}
            <TextareaAutosize minRows={2} maxRows={4} placeholder="Post It" className="text-black rounded-md p-2" {...register("postItNote", { required: true })} />
            {errors.postItNote && <span className="text-red-600">Este Campo es requerido</span>}
            <div className="flex justify-between gap-2">
                <input className="p-4 bg-green-400 rounded-md" type="submit" value="Posteame Esta!" />
                <Buttons type="cancel" editStates={editStates} />
            </div>
        </form>
    )
}
