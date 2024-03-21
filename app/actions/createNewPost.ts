"use server"

import clientPromise from "@/auth/adapter"
import { revalidatePath } from "next/cache"


export const createNewPost = async (data: any, userEmail: string) => {
    
    const client = await clientPromise
    const db = client.db()
    const { title, postItNote } = data
    const createdAt = new Date()


    if (!title || !postItNote) {

        return {
            error: "Los campos Title y Post It son requeridos",
            status: 400,
            note: { _id: "" }
        }

    }

    try {
        const newNote = await db.collection("notes").insertOne({ title, postItNote, userEmail, createdAt })
        revalidatePath("/")

        return ({
            note: { _id: newNote.insertedId.toString(), title, postItNote, userEmail, createdAt },
            status: 200,
            error: ""
        })

    } catch {

        return ({
            error: "Ocurrio una respuesta inesperada del servidor",
            status: 500,
            note: { _id: "" }
        })

    }

}