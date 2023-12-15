"use server"

import clientPromise from "@/auth/adapter"
import { revalidatePath } from "next/cache"
import { ObjectId } from "mongodb"


export const deleteNote = async (data: any) => {
    const client = await clientPromise
    const db = client.db()
    /* const { _id } = data */

    console.log(data.data)

    /* if (!_id) return {
        error: "El id de la nota no se encuentra",
        status: 400
    } */

    try {
        const deleteResult = await db.collection("notes").deleteOne({ _id: new ObjectId(data.data) })
        revalidatePath("/")
        return ({ result: deleteResult })
    } catch {
        return ({ error: "Ocurrio una respuesta inesperada del servidor", status: 500 })
    }
}