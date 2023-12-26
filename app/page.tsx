import { getServerSession } from "next-auth";
import { getNotes } from "./actions/getNotes"
import Buttons from "./components/Buttons"
import Form from "./components/Form"


interface Note {
  _id: string;
  title: string;
  postItNote: string;
}

export default async function Home() {
  const session = await getServerSession()
  const userEmail = session?.user?.email as string
  console.log(userEmail)
  const id = null
  const { notes } = await getNotes(id as any, userEmail) as unknown as { notes: Note[] }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {session ? <><Form userEmail={userEmail} />
        <div className="grid grid-cols-1 gap-6 p-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-h-screen">
          {notes?.map((note: Note) => (
            <div className="flex flex-col justify-between border-2 border-slate-500 rounded-sm p-3 w-full h-96 overflow-hidden" key={`${note._id}`}>
              <div>
                <h3 className="text-3xl truncate">{note.title}</h3>
                <p className="text-xl truncate">{note.postItNote}</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Buttons type="view" data={note._id} editStates={undefined} />
                <Buttons type="delete" data={note} editStates={undefined} />
              </div>
            </div>
          ))}
        </div></> : <h1 className="text-4xl">Bienvenido a ‘Posteame Esta’, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>}
    </main>
  )
}