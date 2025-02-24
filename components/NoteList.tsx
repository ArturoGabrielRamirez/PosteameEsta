'use client'

import PushPin from './PushPin'
import Buttons from './Buttons'
import { useNotesContext } from './NotesProvider'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useThemeContext } from './CurrentThemeProvider'

export default function NoteList() {
    const { notes, limit } = useNotesContext()
    const { currentTheme } = useThemeContext()

    const limitToNumber = Number(limit)
    const remainder = notes.length % limitToNumber
    const missingNotes = remainder === 0 ? 0 : limitToNumber - remainder
    const notesSubstitute = Array(missingNotes).fill({ isPlaceholder: true })
    const finalNotes = [...notes, ...notesSubstitute]

    return (
        <>
            {finalNotes?.map((note, i) => (
                note.isPlaceholder ? (
                    <div key={`placeholder-${i}`} className="max-h-[calc(30vh-30px)] min-h-[240px] w-full z-10" />
                ) : (
                    <Card
                        key={note._id || `note-${i}`}
                        className={`postIt group flex flex-col items-center rounded-sm overflow-hidden bg-gradient-to-br 
                                   ${currentTheme === 'light' ? 'post-it-light-gradient' : 'post-it-dark-gradient'}
                                   shadow-md shadow-[rgba(0,0,0,0.8)] border-none z-10 w-full max-h-[calc(30vh-30px)] min-h-[240px]`}>
                        <div className='pt-2'>
                            <PushPin />
                        </div>
                        <CardHeader className='w-full text-center p-2'>
                            <CardTitle
                                className='overflow-hidden truncate break-words text-lg'>
                                {note.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center grow w-full'>
                            <CardDescription className='overflow-hidden truncate break-words text-sm' >
                                {note.postItNote}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className='gap-4 lg:gap-6 hidden group-hover:flex'>
                            <Buttons option='view' data={note._id} editStates={undefined} />
                            <Buttons option='delete' data={note._id} editStates={undefined} />
                        </CardFooter>
                    </Card>
                )
            ))}
        </>
    )
}