import { getServerSession } from "next-auth"
import { getNotes } from "./actions/getNotes"
import Buttons from "./components/Buttons"
import CreateNoteClient from "./components/CreateNoteClient"
import PushPin from "./components/PushPin"
import Nail from "./components/Nail"
import PaperBG from "./components/PaperBG"


interface Note {
  _id: string;
  title: string;
  postItNote: string;
}

export default async function Home() {

  await new Promise((res) => { setTimeout(() => { res(null) }, 2000) })
  const session = await getServerSession()
  const userEmail = session?.user?.email as string
  const id = null
  const { notes } = await getNotes(id as any, userEmail) as unknown as { notes: Note[] }

  return (
    <main className="granulated flex flex-col items-center justify-center bg-gradient-to-br sm:p-2 shadow-md shadow-[rgba(0,0,0,0.8)] h-full w-full flex-1">
      <div className="flex justify-between w-full grow">
        <Nail />
        <Nail />
      </div>
      {session ?
        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-4 py-2 sm:py-4 xl:gap-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 grow">
          <CreateNoteClient userEmail={userEmail} />
          {notes?.map((note: Note) => (
            <div className="postIt grow flex min-w-full flex-col justify-between items-center rounded-sm p-1 min-h-[250px] overflow-hidden bg-gradient-to-br from-[#ffe501] via-[#fcc101] to-[#b29400] shadow-md shadow-[rgba(0,0,0,0.8)]" key={`${note._id}`}>
              <PushPin></PushPin>
              <div className="p-2 self-start flex-1">
                <h3 className="text-4xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-1 pb-1 sm:pb-3">{note.title}</h3>
                <p className="text-xl text-black sm:font-extrabold font-sans text-ellipsis line-clamp-2">{note.postItNote}</p>
              </div>
              <div className="flex gap-1 justify-around w-full p-2">
                <Buttons type="view" data={note._id} editStates={undefined} />
                <Buttons type="delete" data={note} editStates={undefined} />
              </div>
            </div>
          ))}
        </div> :
        <div className="relative flex w-full h-full">
          <PaperBG>
            <h1 className="sm:text-4xl p-16 max-w-[600px] absolute">Bienvenido a ‘Posteame Esta’, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>
          </PaperBG>
        </div>
      }
      <div className="flex justify-between w-full">
        <Nail />
        <Nail />
      </div>
    </main>
  )
}