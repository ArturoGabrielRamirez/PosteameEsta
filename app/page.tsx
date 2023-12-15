import { getNotes } from "./actions/getNotes";
import ButtonsCards from "./components/ButtonsCards";
import Form from "./components/Form";

export default async function Home() {
  const { notes } = await getNotes()

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Form />
      <div className="grid grid-cols-1 gap-6 p-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 min-h-screen">
        {notes.map((note) => (
          <div className="flex flex-col justify-between border-2 border-slate-500 rounded-sm p-3 w-full h-auto max-h-96 overflow-hidden" key={`${note._id}`}>
            <div>
              <h3 className="text-3xl truncate">{note.title}</h3>
              <p className="text-xl truncate">{note.postItNote}</p>
            </div>
            <ButtonsCards data={`${note._id}`} />
          </div>
        ))}
      </div>
    </main>
  )
}
