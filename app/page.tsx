import { getServerSession } from "next-auth"
import PaperBG from "./components/PaperBG"
import NailGroup from "./components/NailGroup"
import NoteListContainer from "./components/NoteListContainer"


export default async function Home() {

/*    await new Promise((res) => { setTimeout(() => { res(null) }, 2000) })
 */  const session = await getServerSession()

  return (
    <main className="granulated flex flex-col bg-gradient-to-br sm:p-2 shadow-md shadow-[rgba(0,0,0,0.8)] h-full w-full relative">
      <NailGroup />
      {session ?
        <>
          <NoteListContainer />
        </> :
        <div className="relative flex w-full h-full items-center justify-center">
          <PaperBG>
            <h1 className="sm:text-4xl p-16 max-w-[600px] absolute">Bienvenido a &quot;Posteame Esta&quot;, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>
          </PaperBG>
        </div>
      }
      <NailGroup />
    </main >
  )
}