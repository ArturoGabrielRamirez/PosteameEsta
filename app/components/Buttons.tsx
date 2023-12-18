"use client"

import { deleteNote } from "../actions/deleteNote"
import Link from "next/link"


type ButtonType = 'view' | 'delete' | 'edit' | 'cancel' | 'save'

export default function Buttons({ type, data, editStates }: { type: ButtonType, data?: any, editStates?: any }) {
    const { handleClickSave, setIsActive } = editStates || {}

    const handleClickDelete = async () => {
        const res = await deleteNote(data)
    }

    const handleClickEdit = () => {
        setIsActive(false)
    }

    const handleClickCancel = () => {
        setIsActive(true)
    }

    const buttonTypes = {
        'view': <Link href={`/note/${data}`} className="bg-cyan-700 rounded-sm p-2 px-5">View</Link>,
        'delete': <button onClick={handleClickDelete} className="bg-red-600 rounded-sm p-2">Delete</button>,
        'edit': <button onClick={handleClickEdit} className="bg-teal-400 rounded-sm p-2 px-5">Edit</button>,
        'cancel': <button onClick={handleClickCancel} className="bg-slate-700 rounded-sm p-2 px-5">Cancel</button>,
        'save': <button onClick={handleClickSave} className="bg-green-400 rounded-sm p-2">Save</button>
    }

    return (
        <div className="flex justify-around">
            {buttonTypes[type]}
        </div>
    )
}