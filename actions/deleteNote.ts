"use server"

import clientPromise from "@/auth/adapter"
import { revalidatePath } from "next/cache"
import { ObjectId } from "mongodb"


export const deleteNote = async (data: any) => {

    const client = await clientPromise
    const db = client.db()

    try {

        const deleteResult = await db.collection("notes").deleteOne({ _id: ObjectId.createFromHexString(data) })
        revalidatePath("/")

        return ({ result: deleteResult })

    } catch {

        return ({ error: "Ocurrio una respuesta inesperada del servidor", status: 500 })

    }
}