'use client'

import React from "react"
const CreateNoteClient = React.lazy(() => import("./CreateNoteClient"))
const NoteList = React.lazy(() => import("./NoteList"))
const Paginator = React.lazy(() => import("./Paginator"))
import { useNotesContext } from "./NotesProvider"
import Loading from "../loading"


export default function () {

    const { loading, userEmail } = useNotesContext()

    return (
        loading ? <Loading /> : (
            userEmail &&
            <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-4 py-2 sm:py-4 xl:gap-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 h-full grid-rows-[250px_minmax(250px,_1fr)_250px]">
                <CreateNoteClient />
                <NoteList />
                <div className="grid grid-cols-subgrid grid-rows-subgrid col-start-4 row-start-3 ">
                    <Paginator />
                </div>
            </div>
        )
    )
    
}