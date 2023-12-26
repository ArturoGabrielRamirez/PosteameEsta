"use server"

import clientPromise from "@/auth/adapter"
import { ObjectId } from "mongodb"


export const getNotes = async (id: any, userEmail: string) => {
    const client = await clientPromise
    const db = client.db()

    let notes

    if (id !== null) {
        const note = await db.collection('notes').findOne({
            _id: new ObjectId(id),
        },
        )
        if (!note) {
            return ({ error: 'Nota no encontrada', status: 404 })
        }
        notes = [note]
    } else {
        const notesCursor = db.collection('notes').find({ userEmail: userEmail })
        notes = await notesCursor.toArray()
        if (!notes || notes.length === 0) {
            return ({ error: 'Notas no encontradas', status: 404, notes: [] })
        }
    }

    const serializableNotes = notes.map(note => ({
        ...note,
        _id: note._id.toString(),
    }));

    return ({ error: "", status: 200, notes: serializableNotes })
}