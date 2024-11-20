'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { getNotes } from '../actions/getNotes'
import { useSession } from 'next-auth/react'
import { Note, NoteResponse, ProviderProps } from '../interfaces/interfaces'
import { NotesContextType } from '../types/types'


const NotesContext = createContext<NotesContextType>({
    currentPage: 1,
    handlePageChange: () => { },
    setNotes: (_notes: Note[]) => { },
    isActive: false,
    setIsActive: () => { },
    notes: [],
    session: null,
    userEmail: '',
    limit: '',
    concatenatedPath: '',
    savePrevPath: () => { },
    loading: false
})


export function NotesProvider({ children }: ProviderProps) {

    const pathname = usePathname()
    const searchParam = useSearchParams()
    const { replace } = useRouter()
    const pageParam = Number(searchParam.get('page') || 1)
    const limitParam = String(searchParam.get('limit') || 10)
    const [notes, setNotes] = useState<Note[]>([])
    const [currentPage, setCurrentPage] = useState<number>(pageParam)
    const [prevPathname, setPrevPathname] = useState<string>('/')
    const [limit, _setLimit] = useState<string>(limitParam)
    const [concatenatedPath, setConcatenatedPath] = useState<string>('/')
    const [isActive, setIsActive] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const params = new URLSearchParams(searchParam as any)//Buscar necesidad de ese anu ahi
    const { data: session } = useSession<boolean>()
    const userEmail = session?.user?.email as string


    useEffect(() => {
        setLoading(true)
        setIsActive(false)
        const fetchNotes = async () => {
            const response = await getNotes(undefined, userEmail, currentPage, limit) as NoteResponse
            if (response.notes?.length !== 0) {
                setNotes(response.notes)
            } else {
                setNotes([])
            }
        }

        setLoading(false)
        userEmail && fetchNotes()
    }, [searchParam, userEmail, currentPage, limit])

    useEffect(() => {
        const newPathName = `${pathname}?${params.toString()}`
        setConcatenatedPath(newPathName)
    }, [pathname, params])


    const savePrevPath = () => {
        setPrevPathname(pathname)
    }

    const handlePageChange = (action: any) => {
        let newValue
        let queryString = `${params.toString()}`

        switch (action) {
            case 'previous':
                newValue = currentPage > 1 ? currentPage - 1 : 1
                break
            case 'next':
                newValue =
                    currentPage + 1
                break
            case 'redirect':
                newValue = currentPage > 1 ? currentPage / currentPage : 1
                break
            default:
                newValue = currentPage
        }

        setCurrentPage(newValue)
        params.set('page', newValue.toString())

        if (action === 'next' || action === 'redirect') {

            params.set('limit', limit)

        }
        if (action === 'redirect') {

            replace(`${prevPathname}?${params.toString()}`)

            setConcatenatedPath(`${prevPathname}?${queryString}`)

        } else {

            replace(`${pathname}?${queryString}`)

        }

    }


    return (
        <NotesContext.Provider value={{
            currentPage,
            handlePageChange,
            setNotes,
            isActive,
            setIsActive,
            notes,
            session,
            userEmail,
            limit,
            concatenatedPath,
            savePrevPath,
            loading
        }}>
            {children}
        </NotesContext.Provider>
    )

}


export const useNotesContext = () => {
    return useContext(NotesContext)
}