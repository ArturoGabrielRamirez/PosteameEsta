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
    redirectPath: (e: any) => void,
    setNotes: (notes: Note[]) => void,
    isActive: boolean,
    setIsActive: (boolean: boolean) => void,
    notes: Note[],
    userEmail: string,
    limit: string,
    concatenatedPath: any,
    savePrevPath: () => void,
}

const NotesContext = createContext<NotesContextType>({
    currentPage: 1,
    handlePrevious: () => { },
    handleNext: () => { },
    redirectPath: () => { },
    setNotes: (_notes: Note[]) => { },
    isActive: false,
    setIsActive: () => { },
    notes: [],
    userEmail: '',
    limit: '',
    concatenatedPath: '',
    savePrevPath: () => { }
})

export function NotesProvider({ children }: { children: ReactNode }) {

    const pathname = usePathname()
    const searchParam = useSearchParams()
    const { replace } = useRouter()
    const pageParam = Number(searchParam.get('page')) || 1
    const limitParam = searchParam.get('limit') || '10' as string
    const [prevPathname, setPrevPathname] = useState<String>('/')
    const [currentPage, setCurrentPage] = useState<number>(pageParam)
    const [limit, _setLimit] = useState<string>(limitParam)
    const [notes, setNotes] = useState<Note[]>([])
    const [isActive, setIsActive] = useState<boolean>(false)
    const [concatenatedPath, setConcatenatedPath] = useState<any>('')
    const params = new URLSearchParams(searchParam)
    const { data: session } = useSession<boolean>()
    const userEmail = session?.user?.email as string


    useEffect(() => {
        const fetchNotes = async () => {
            const { notes: newNotes } = await getNotes(undefined, userEmail, currentPage, limit) as unknown as { notes: Note[] }
            setNotes(newNotes)
        }

        fetchNotes()
    }, [searchParam, userEmail, currentPage, limit])

    useEffect(() => {
        const newPathName = `${pathname}?${params.toString()}`;
        setConcatenatedPath(newPathName);
    }, [pathname, params]);

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

    const savePrevPath = () => {
        setPrevPathname(pathname)
    }

    const redirectPath = (e: any) => {
        e.preventDefault()
        const newValue = currentPage > 1 ? currentPage / currentPage : 1
        setCurrentPage(newValue)
        params.set('page', newValue.toString())
        params.set('limit', limit)
        const newPathName = replace(`${prevPathname}?${params.toString()}`)
        setConcatenatedPath(newPathName)
    }


    return (
        <NotesContext.Provider value={{
            currentPage,
            handlePrevious,
            handleNext,
            redirectPath,
            setNotes,
            isActive,
            setIsActive,
            notes,
            userEmail,
            limit,
            concatenatedPath,
            savePrevPath
        }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotesContext = () => {
    return useContext(NotesContext)
}