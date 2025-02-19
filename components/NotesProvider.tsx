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
    setNotes: (_notes: Note[] | undefined) => { },
    isActive: false,
    setIsActive: () => { },
    notes: [],
    session: null,
    userEmail: '',
    limit: '',
    concatenatedPath: '',
    savePrevPath: () => { },
    loading: false,
    isEmptyPage: false,
    isLastPage: false,
    addNote: (_newNote: Note) => { }
})


export function NotesProvider({ children }: ProviderProps) {

    const pathname = usePathname()
    const searchParam = useSearchParams()
    const { replace } = useRouter()
    const pageParam = Number(searchParam.get('page') || 1)
    const limitParam = String(searchParam.get('limit') || 10)
    const [notes, setNotes] = useState<Note[] | undefined>(undefined)
    const [currentPage, setCurrentPage] = useState<number>(pageParam)
    const [prevPathname, setPrevPathname] = useState<string>('/')
    const [limit, _setLimit] = useState<string>(limitParam)
    const [concatenatedPath, setConcatenatedPath] = useState<string>('/')
    const [isActive, setIsActive] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [isEmptyPage, setIsEmptyPage] = useState<boolean>(false)
    const [isLastPage, setIsLastPage] = useState<boolean>(false)
    const params = new URLSearchParams(searchParam)
    const { data: session } = useSession<boolean>()
    const userEmail = session?.user?.email as string


    useEffect(() => {
        if (!userEmail) return
        const fetchNotes = async () => {
            setLoading(true)
            setIsActive(false)
            try {
                const response = await getNotes(undefined, userEmail, currentPage, limit) as NoteResponse
                setNotes(response.notes || [])
                setIsEmptyPage(response.notes?.length === 0)
                setIsLastPage(response.isLastPage)
            } catch (error) {
                console.error('Error al obtener notas:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchNotes()
    }, [searchParam, userEmail, currentPage, limit])

    useEffect(() => {
        setLoading(true)
        const newPathName = `${pathname}?${params.toString()}`
        setConcatenatedPath(newPathName)
        setLoading(false)

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
                newValue = currentPage + 1
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

    const addNote = (newNote: Note) => {
        setNotes((prevNotes) => [...(prevNotes || []), newNote])
    }


    return (
        <NotesContext.Provider value={{
            currentPage,
            handlePageChange,
            setNotes,
            isActive,
            setIsActive,
            notes: notes || [],
            session,
            userEmail,
            limit,
            concatenatedPath,
            savePrevPath,
            loading,
            isLastPage,
            isEmptyPage,
            addNote

        }}>
            {children}
        </NotesContext.Provider>
    )

}


export const useNotesContext = () => {
    return useContext(NotesContext)
}