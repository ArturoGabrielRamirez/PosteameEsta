"use client"

import { deleteNote } from "../actions/deleteNote"
import Link from "next/link"


type ButtonType = 'view' | 'delete' | 'edit' | 'cancel' | 'save' | 'new'

export default function Buttons({ type, data, editStates }: { type: ButtonType, data?: any, editStates?: any }) {
    const { handleClickSave, setIsActive } = editStates || {}

    const handleClickDelete = async () => {
        const res = await deleteNote(data)
    }

    const handleClickToFalse = () => {
        setIsActive(false)
    }

    const handleClickToTrue = () => {
        setIsActive(true)
    }

    const buttonTypes = {
        'view': <Link href={`/note/${data}`} className="bg-cyan-800 rounded-md p-2">Veamos esta</Link>,
        'delete': <button onClick={handleClickDelete} className="bg-red-600 rounded-md p-2">Eliminame esta</button>,
        'edit': <button onClick={handleClickToTrue} className="bg-teal-400 rounded-md p-2 ">Editame esta</button>,
        'cancel': <button onClick={handleClickToFalse} className="bg-slate-700 rounded-md p-2">Cancelame esta</button>,
        'save': <button onClick={handleClickSave} className="bg-emerald-500 rounded-md p-2">Reposteame esta</button>,
        'new': <button onClick={handleClickToTrue} className="bg-emerald-600 rounded-sm p-2 absolute min-h-[100px] min-w-full"><p className="relative z-10">Hagamos una nueva nota</p></button>
    }

    return (
        <>
            {buttonTypes[type]}
        </>
    )
}