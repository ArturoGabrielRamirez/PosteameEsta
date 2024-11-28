'use client'

import PushPin from './PushPin'
import Buttons from './Buttons'
import { useNotesContext } from './NotesProvider'
import PaperBG from './PaperBG'
import MiniPushPinGroup from './MiniPushPinGroup'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
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
    const { notes } = useNotesContext()
    const { currentTheme } = useThemeContext()

    return (
        <>
            {notes?.map((note) =>
            (
                <Card key={note._id} className={`postIt flex flex-col items-center rounded-sm overflow-hidden bg-gradient-to-br ${currentTheme === 'light' ? 'post-it-light-gradient' : 'post-it-dark-gradient'} shadow-md shadow-[rgba(0,0,0,0.8)] border-none z-10 h-[250px] max-w-[500px] w-full`}>
                    <div className='pt-2'>
                        <PushPin />
                    </div>
                    <CardHeader className='w-full text-center p-2'>
                        <CardTitle className='overflow-hidden break-words text-ellipsis whitespace-nowrap text-lg'>{note.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-center grow w-full'>
                        <CardDescription className='overflow-hidden text-ellipsis whitespace-nowrap text-sm' >
                            {note.postItNote}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='gap-4 lg:gap-6'>
                        <Buttons option='view' data={note._id} editStates={undefined} />
                        <Buttons option='delete' data={note._id} editStates={undefined} />
                    </CardFooter>
                </Card>
            ))
            }
        </>
    )

}