import { ReactNode } from 'react'

export interface ProviderProps {
    children: ReactNode
}

export interface Note {
    _id?: string,
    postItNote: string,
    title: string,
    userEmail: string
}

export interface NoteResponse {
    error: string,
    status: number,
    notes: Note[]
}