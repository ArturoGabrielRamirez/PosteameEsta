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
            {
                (notes?.length !== 0 ?
                    <></> :
                    <div className='relative flex justify-center items-center w-full'>
                        <AspectRatio ratio={16 / 11}>
                            <PaperBG>
                                <div className="flex absolute w-full top-4 px-2">
                                    <MiniPushPinGroup />
                                </div>
                                <span className='absolute text-center'>{'No hay mas notas para mostrar'}</span>
                                <div className="flex absolute w-full bottom-5 px-2">
                                    <MiniPushPinGroup />
                                </div>
                            </PaperBG>
                        </AspectRatio>
                    </div>
                )
            }
            {notes?.map((note) =>
            (
                <Card key={note._id} className={`postIt flex flex-col items-center rounded-sm overflow-hidden bg-gradient-to-br ${currentTheme === 'light' ? 'post-it-light-gradient' : 'post-it-dark-gradient'} shadow-md shadow-[rgba(0,0,0,0.8)] border-none z-10 h-[250px]`}>
                    <div className='pt-2'>
                        <PushPin />
                    </div>
                    <CardHeader className='w-full text-center'>
                        <CardTitle className='overflow-hidden break-words text-ellipsis whitespace-nowrap'>{note.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-center grow w-full'>
                        <CardDescription className='overflow-hidden text-ellipsis whitespace-nowrap' >
                            {note.postItNote}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='gap-16 sm:gap-1'>
                        <Buttons option='view' data={note._id} editStates={undefined} />
                        <Buttons option='delete' data={note._id} editStates={undefined} />
                    </CardFooter>
                </Card>
            ))
            }
        </>
    )

}