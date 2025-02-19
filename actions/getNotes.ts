"use server"

import clientPromise from "@/auth/adapter"
import { ObjectId } from "mongodb"


export const getNotes = async (id: any, userEmail: string, currentPage?: any, limit?: number | string) => {

    const client = await clientPromise
    const db = client.db()
    let notes
    let limitToNumber = limit && Number(limit) > 0 ? Number(limit) : 10

    if (id !== undefined) {

        const note = await db.collection('notes').findOne({
            _id: ObjectId.createFromHexString(id),

        })

        if (!note) {

            return ({ error: 'Nota no encontrada', status: 404 })

        }

        notes = [note]
    } else {

        const notesCursor = db.collection('notes')
            .find({ userEmail: userEmail })
            .sort({ "createdAt": -1 })
            .skip((currentPage - 1) * limitToNumber)
            .limit(limitToNumber)

        notes = await notesCursor.toArray()

        if (!notes || notes.length === 0 || limitToNumber === 0) {

            return ({ error: 'Notas no encontradas', status: 404, notes: [] })

        }
    }

    const totalNotes = await db.collection('notes').countDocuments({ userEmail: userEmail });
    const isLastPage = totalNotes <= ((Number(currentPage) || 1) * limitToNumber );


    const serializableNotes = notes.map(note => ({
        ...note,
        _id: note._id.toString(),
    }));


    return ({ error: "", status: 200, notes: serializableNotes, isLastPage })

}