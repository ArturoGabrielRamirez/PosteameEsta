import PushPin from './PushPin'
import Buttons from './Buttons'
import { getNotes } from '../actions/getNotes'
import { getServerSession } from 'next-auth'

interface Note {
    _id: string;
    title: string;
    postItNote: string;
}

export default async function NoteList() {
    const session = await getServerSession()
    const id = null
    const userEmail = session?.user?.email as string

    const { notes } = await getNotes(id as any, userEmail) as unknown as { notes: Note[] }

    return (
        notes?.map((note: Note) => (
            <div className='postIt grow flex max-w-[300px] flex-col justify-between items-center rounded-sm p-1 max-h-[300px] overflow-hidden bg-gradient-to-br from-[#ffe501] via-[#fcc101] to-[#b29400] shadow-md shadow-[rgba(0,0,0,0.8)]' key={`${note._id}`}>
                <PushPin />
                <div className='p-2 self-start flex-1'>
                    <h3 className='text-4xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-1 pb-1 sm:pb-3'>{note.title}</h3>
                    <p className='text-xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-2'>{note.postItNote}</p>
                </div>
                <div className='flex gap-1 justify-around w-full p-2'>
                    <Buttons option='view' data={note._id} editStates={undefined} />
                    <Buttons option='delete' data={note} editStates={undefined} />
                </div>
            </div>
        ))
    )
}