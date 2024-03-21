'use client'

import PushPin from './PushPin'
import Buttons from './Buttons'
import { useNotesContext } from './NotesProvider'
import PaperBG from './PaperBG'
import MiniPushPinGroup from './MiniPushPinGroup'


export default function NoteList() {
    const { notes } = useNotesContext()

    return (
        <>
            {

                (notes?.length !== 0 ?
                    <></> :
                    <div className='relative flex justify-center items-center'>
                        <PaperBG>
                            <div className="flex justify-between absolute top-6 w-full p-1">
                                <MiniPushPinGroup />
                            </div>
                            <span className='absolute'>{'No hay mas notas para mostrar'}</span>
                            <div className="flex justify-between absolute bottom-6 w-full p-1">
                                <MiniPushPinGroup />
                            </div>
                        </PaperBG>
                    </div>
                )
            }
            {notes?.map((note) =>
            (
                <div className='postIt grow flex max-w-[300px] flex-col justify-between items-center rounded-sm p-1 max-h-[300px] overflow-hidden bg-gradient-to-br from-[#ffe501] via-[#fcc101] to-[#b29400] shadow-md shadow-[rgba(0,0,0,0.8)]' key={`${note._id}`}>
                    <PushPin />
                    <div className='p-2 self-start flex-1'>
                        <h3 className='text-4xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-1 pb-1 sm:pb-3'>{note.title}</h3>
                        <p className='text-xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-2'>{note.postItNote}</p>
                    </div>
                    <div className='flex gap-1 justify-around w-full p-2'>
                        <Buttons option='view' data={note._id} editStates={undefined} />
                        <Buttons option='delete' data={note._id} editStates={undefined} />
                    </div>
                </div>
            ))
            }
        </>
    )

}