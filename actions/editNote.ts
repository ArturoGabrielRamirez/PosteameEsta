"use server"

import clientPromise from "@/auth/adapter"
import { revalidatePath } from "next/cache"
import { ObjectId } from 'mongodb'


export const editNote = async (_id: any, data: any) => {

    const client = await clientPromise
    const db = client.db()
    const { title, postItNote } = data

    if (!title || !postItNote) {

        return {
            error: "Los campos Title y Post It son requeridos",
            status: 400,
            note: { _id: "" }
        }

    }

    try {

        const updatedNote = await db.collection("notes").updateOne({ _id: ObjectId.createFromTime(_id) }, { $set: { title, postItNote } })
        revalidatePath("/")

        if (updatedNote.matchedCount === 0) {

            return ({
                error: "No se encontró ninguna nota con el ID proporcionado",
                status: 404,
                note: { _id: "" }
            })

        } else {

            return ({
                note: { _id: _id, title, postItNote },
                status: 200,
                error: ""
            })

        }
    } catch {

        return ({
            error: "Ocurrio una respuesta inesperada del servidor",
            status: 500,
            note: { _id: "" }
        })

    }
}