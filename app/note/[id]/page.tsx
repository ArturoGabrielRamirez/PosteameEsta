"use server"

import NoteDetails from "../../components/NoteDetails"
import { getNotes } from "@/app/actions/getNotes"


export default async function NoteDetailsContainer({ params }: { params: { id: any } }) {
    const { id } = params
    const res = await getNotes(id)

    return (
        <NoteDetails res={res} />
    )
}