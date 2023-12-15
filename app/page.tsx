import { getNotes } from "./actions/getNotes";
import Form from "./components/Form";


export default async function Home() {

  const { notes } = await getNotes()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {notes.map((note) => (
        <div key={`${note._id}`}>
          {note.title}
        </div>
      ))}
      <Form></Form>
    </main>
  )
}