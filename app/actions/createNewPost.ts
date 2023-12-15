"use server"

import clientPromise from "@/auth/adapter";
import { revalidatePath } from "next/cache";

export const createNewPost = async (data: any) => {
    const client = await clientPromise;
    const db = client.db();
    const { title, postItNote } = await data;

    if (!title || !postItNote) return data({ error: "Los campos Title y Post It son requeridos" }, { status: 400 })

    try {
        const newNote = await db.collection("notes").insertOne({ title, postItNote });
        revalidatePath("/")
        return ({ note: { _id: newNote.insertedId } })
    } catch {
        return ({ error: "Ocurrio una respuesta inesperada del servidor", status: 500 })
    }
};