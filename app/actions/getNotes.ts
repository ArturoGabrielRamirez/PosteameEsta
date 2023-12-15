"use server"

import clientPromise from "@/auth/adapter"

export const getNotes = async () => {
    const client = await clientPromise;
    const db = client.db();

    const notesCursor = db.collection('notes').find({});
    const notes = await notesCursor.toArray();

    if (!notes || notes.length === 0) {
        return ({ error: 'Notas no encontradas', status: 404, notes: [] });
    }

    return ({ error: "", status: 200, notes })
}