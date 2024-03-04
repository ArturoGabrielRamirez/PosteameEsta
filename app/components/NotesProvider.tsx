'use client'

import React, { ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { getNotes } from '../actions/getNotes'
import { useSession } from 'next-auth/react'


interface Note {
    _id: string,
    postItNote: string;
    title: string;
    userEmail: string;
}
type NotesContextType = {
    currentPage: number,
    handlePrevious: (e: any) => void,
    handleNext: (e: any) => void,
    setNotes: (notes: Note[]) => void,
    notes: Note[],
    userEmail: string,
    limit: string,
}

const NotesContext = createContext<NotesContextType>({
    currentPage: 1,
    handlePrevious: () => { },
    handleNext: () => { },
    setNotes: (_notes: Note[]) => { },
    notes: [],
    userEmail: '',
    limit: ''
})

export function NotesProvider({ children }: { children: ReactNode }) {

    const searchParam = useSearchParams()
    const pageParam = Number(searchParam.get('page')) || 1
    const limitParam = searchParam.get('limit') || '10'
    const [currentPage, setCurrentPage] = useState(pageParam)
    const [limit, setLimit] = useState(limitParam)
    const [notes, setNotes] = useState<Note[]>([])
    const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParam)
    const { data: session } = useSession()
    const id = undefined
    const userEmail = session?.user?.email as string


    useEffect(() => {
        const fetchNotes = async () => {

            const { notes: newNotes } = await getNotes(id as any, userEmail, currentPage, limit) as unknown as { notes: Note[] }

            setNotes(newNotes)
        }

        fetchNotes()
    }, [searchParam])

    const handlePrevious = (e: any) => {
        e.preventDefault()
        const newValue = currentPage > 1 ? currentPage - 1 : 1
        setCurrentPage(newValue)
        params.set('page', newValue.toString())

        replace(`${pathname}?${params.toString()}`)
    }

    const handleNext = (e: any) => {
        e.preventDefault()
        const newValue = currentPage + 1
        setCurrentPage(newValue)
        params.set('page', newValue.toString())
        params.set('limit', limit)

        replace(`${pathname}?${params.toString()}`)
    }


    return (
        <NotesContext.Provider value={{ currentPage, handlePrevious, handleNext, setNotes, notes, userEmail, limit }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => {
    return useContext(NotesContext)
}