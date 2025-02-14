'use client'

import React from "react"
import { lazy } from "react"
const CreateNoteClient = lazy(() => import("./CreateNoteClient"))
const NoteList = lazy(() => import("./NoteList"))
const Paginator = lazy(() => import("./Paginator"))
import { useNotesContext } from "./NotesProvider"
import RenderSuspense from "./RenderSuspense"
import SkeletonArray from "./SkeletonArray"
import SkeletonTemplate from "./SkeletonTemplate"


export default function NoteListContainer() {
    const { limit, userEmail, notes, isLastPage, loading, isEmptyPage } = useNotesContext()

    const skeletonCondition = notes?.length > 10 || limit === '0' || Number(limit) > 10

    return (
        userEmail && (
            isEmptyPage ? (

                <div className="grid px-10 customGrid min-[910px]:grid-cols-3 min-[1179px]:grid-cols-4 min-[1280px]:grid-cols-3 2xl:grid-cols-4 gap-4">
                    <div className="">
                        <RenderSuspense component={CreateNoteClient} fallback={<SkeletonTemplate isLastPage={isLastPage} loading={loading} notes={notes} />} />
                    </div>
                    <div className="">
                        <RenderSuspense component={Paginator} fallback={<SkeletonArray notes={notes}/>} />
                    </div>

                </div>
            ) : (
                <div className={`grid px-10 customGrid min-[910px]:grid-cols-3 min-[1179px]:grid-cols-4 min-[1280px]:grid-cols-3 2xl:grid-cols-4 gap-4`}
                    style={{
                        maxHeight: skeletonCondition ? 'calc(100vh - 100px)' : '100%',
                        overflowY: skeletonCondition ? 'scroll' : 'visible'
                    }}>
                    <div className="z-10">
                        <RenderSuspense component={CreateNoteClient} fallback={<SkeletonTemplate isLastPage={isLastPage} loading={loading} notes={notes} />} />
                    </div>
                    <RenderSuspense component={NoteList} fallback={<SkeletonArray notes={notes}/>} />
                    <div className="">
                        <RenderSuspense component={Paginator} fallback={<SkeletonTemplate isLastPage={isLastPage} loading={loading} notes={notes} />} />
                    </div>
                </div>
            )
        )
    )
}