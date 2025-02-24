'use client'

import React, { lazy } from "react"
import { Suspense } from 'react'
const CreateNoteClient = lazy(() => import("./CreateNoteClient"))
const NoteList = lazy(() => import("./NoteList"))
const Paginator = lazy(() => import("./Paginator"))
import { useNotesContext } from "./NotesProvider"
import SkeletonArray from "./SkeletonArray"
import SkeletonTemplate from "./SkeletonTemplate"

export default function NoteListContainer() {
    const { limit, userEmail, notes, loading } = useNotesContext()
    const skeletonCondition = notes?.length > 10 || limit === '0' || Number(limit) > 10

    return (
        userEmail && (
            <div
                className={`grid px-10 customGrid min-[910px]:grid-cols-3 min-[1179px]:grid-cols-4 min-[1280px]:grid-cols-3 2xl:grid-cols-4 gap-4`}
                style={{
                    maxHeight: skeletonCondition ? 'calc(100vh - 100px)' : '100%',
                    overflowY: skeletonCondition ? 'scroll' : 'visible',
                }}
            >
                <Suspense fallback={<SkeletonTemplate type="createNote" />}>
                    <CreateNoteClient />
                </Suspense>

                {loading ? <SkeletonArray notes={notes} /> : <Suspense fallback={<SkeletonArray notes={notes} />}>
                    <NoteList />
                </Suspense>}

                <Suspense fallback={<SkeletonTemplate type="paginator" />}>
                    <Paginator />
                </Suspense>
            </div>
        )
    )
}
