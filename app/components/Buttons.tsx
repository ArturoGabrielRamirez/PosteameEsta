"use client"

import { deleteNote } from "../actions/deleteNote"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenSquare, Eye, Trash2, PenLineIcon, Ban, Save } from "lucide-react"


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
        'view': <Button asChild className="bg-cyan-800 text-sm gap-2">
            <Link href={`/note/${data}`}>
                <Eye className="sm:hidden" />
                <p className="hidden sm:block">Veamos Esta</p>
            </Link>
        </Button>,
        'delete': <Button onClick={handleClickDelete} className="bg-red-600 text-sm gap-2">
            <Trash2 className="sm:hidden" />
            <p className="hidden sm:block">Eliminame Esta</p>
        </Button>,
        'edit': <Button onClick={handleClickToTrue} className="bg-teal-400 text-sm gap-2">
            <PenLineIcon className="sm:hidden" />
            <p className="hidden sm:block">Editame Esta</p>
        </Button>,
        'cancel': <Button onClick={handleClickToFalse} className="bg-slate-700 text-sm gap-2">
            <Ban className="sm:hidden"/>
            <p className="hidden sm:block">Cancelame Esta</p>
        </Button>,
        'save': <Button onClick={handleClickSave} className="bg-emerald-500 text-sm gap-2">
            <Save className="sm:hidden"/>
            <p className="hidden sm:block">Reposteame Esta</p></Button>,
        'new': <Button onClick={handleClickToTrue} className="xl:gap-2 bg-emerald-600 min-h-[100px] min-w-full">
            <PenSquare className="z-10 sm:font-extrabold" />
            <p className="text-xl md:text-2xl font-bold z-10">Escribime Esta</p>
        </Button>
    }

    return (
        <>
            {buttonTypes[type]}
        </>
    )
}