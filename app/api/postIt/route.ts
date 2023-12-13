import clientPromise from "@/auth/adapter";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db();
    const { title, postItNote } = await request.json();

    if (!title || !postItNote) return NextResponse.json({ error: "Los campos Title y PostIt son requeridos" }, {
        status: 400
    })

    try {
        const newNote = await db.collection("notes").insertOne({ title, postItNote })
        return NextResponse.json({ note: { _id: newNote.insertedId } })
    } catch {
        return NextResponse.json({ error: "algo salio mal" }, { status: 500 })
    }

}