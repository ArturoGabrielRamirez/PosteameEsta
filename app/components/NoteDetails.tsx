"use client"

import { useState } from "react"
import Buttons from "./Buttons"
import { editNote } from "../actions/editNote"
import { redirect } from "next/navigation"


export default function NoteDetails({ res }: { res: any }) {
    const [isActive, setIsActive] = useState<boolean>(true)
    const notes = res?.notes ? res.notes[0] : {title : "", postItNote: ""}
    const [title, setTitle] = useState(notes.title)
    const [postItNote, setPostItNote] = useState(notes.postItNote)
    if (!res || !res.notes) {
        return redirect("/")
    }

    const handleClickSave = async () => {
        const data = { title, postItNote }
        const req = await editNote(notes._id, data)
        setIsActive(true)
        return req
    }

    const eventOnChange = (e: any) => {
        const event = e.target.value
        if (e.target.id === "title") {
            return setTitle(event)
        } else {
            return setPostItNote(event)
        }
    }

    const editStates = { handleClickSave, setIsActive }

    return (
        <div className="border-8 rounded-md border-slate-500 m-4 flex flex-col h-screen">
            {!isActive ? (
                <>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => eventOnChange(e)}
                        readOnly={isActive}
                        className="bg-transparent text-7xl p-16 break-words overflow-hidden"
                    />
                    <textarea
                        id="postItNote"
                        value={postItNote}
                        onChange={(e) => eventOnChange(e)}
                        readOnly={isActive}
                        className="bg-transparent text-4xl p-16 break-words flex-1"
                        style={{ resize: "none" }}
                    />
                </>
            ) : (
                <>
                    <h1 id="title" className="text-7xl p-16 break-words overflow-hidden">{title}</h1>
                    <p id="postItNote" className="text-4xl p-16 break-words flex-1">{postItNote}</p>
                </>
            )
            }
            {isActive ? (
                <div className="flex justify-around">
                    <Buttons type="edit" editStates={editStates} />
                    <Buttons type="delete" data={notes} />
                </div>
            ) : (
                <div className="flex justify-around">
                    <Buttons type="cancel" editStates={editStates} />
                    <Buttons type="save" editStates={editStates} />
                </div>
            )}
        </div>
    )
}