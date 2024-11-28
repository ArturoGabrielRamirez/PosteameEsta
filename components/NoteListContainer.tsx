'use client'

import React from "react"
const CreateNoteClient = React.lazy(() => import("./CreateNoteClient"))
const NoteList = React.lazy(() => import("./NoteList"))
const Paginator = React.lazy(() => import("./Paginator"))
import { useNotesContext } from "./NotesProvider"
import Loading from "@/app/loading"



export default function NoteListContainer() {

    const { loading, userEmail, notes } = useNotesContext()

    return (
        loading ? <Loading /> : (
            userEmail &&
            <div className={` ${notes?.length !== 0 ? 'grid px-10 grid-cols-1 customGrid min-[910px]:grid-cols-3 min-[1179px]:grid-cols-4 min-[1280px]:grid-cols-3 2xl:grid-cols-4 gap-3' : ''}`}>
                {notes?.length !== 0 && <CreateNoteClient />}
                <NoteList />
                <div className={`shadow-md shadow-[rgba(0,0,0,0.8)] ${notes?.length !== 0 ? 'md:col-start-2 min-[550px]:col-start-2 min-[910px]:col-start-3 min-[1179px]:col-start-4 min-[1280px]:col-start-3 2xl:col-start-4 xl:row-start-3' : 'flex justify-center items-center'}`}>
                    <Paginator />
                </div>
            </div>
        )
    )

}