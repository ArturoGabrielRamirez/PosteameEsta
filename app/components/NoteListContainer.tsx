'use client'

import React from "react"
const CreateNoteClient = React.lazy(() => import("./CreateNoteClient"))
const NoteList = React.lazy(() => import("./NoteList"))
const Paginator = React.lazy(() => import("./Paginator"))
import { useNotesContext } from "./NotesProvider"
import Loading from "../loading"


export default function NoteListContainer() {

    const { loading, userEmail } = useNotesContext()

    return (
        loading ? <Loading /> : (
            userEmail &&
            <div className="grid px-10 grid-cols-1 customGrid min-[910px]:grid-cols-3 min-[1179px]:grid-cols-4 min-[1280px]:grid-cols-3 2xl:grid-cols-4 gap-3">
                <CreateNoteClient />
                <NoteList />
                <div className="flex justify-center items-center">
                    <Paginator />
                </div>
            </div>
        )
    )

}