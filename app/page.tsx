import { getServerSession } from "next-auth"
import { getNotes } from "./actions/getNotes"
import Buttons from "./components/Buttons"
import CreateNoteClient from "./components/CreateNoteClient"


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
    <main className="flex flex-col items-center justify-center pt-4 xl:pt-0">
      {session ?
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 pt-4 xl:gap-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          <CreateNoteClient userEmail={userEmail} />
          {notes?.map((note: Note) => (
            <div className="flex flex-col justify-between rounded-sm p-6 min-h-[250px] overflow-hidden bg-gradient-to-br from-[#ffe501] via-[#fcc101] to-[#b29400]" key={`${note._id}`}>
              <div>
                <h3 className="text-4xl text-black font-extrabold font-sans truncate pb-4">{note.title}</h3>
                <p className="text-xl text-black font-extrabold font-sans truncate p-4">{note.postItNote}</p>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <Buttons type="view" data={note._id} editStates={undefined} />
                <Buttons type="delete" data={note} editStates={undefined} />
              </div>
            </div>
          ))}
        </div> :
        <h1 className="text-4xl p-16 min-w-[800px]">Bienvenido a ‘Posteame Esta’, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>}
    </main>
  )
}