import { getServerSession } from "next-auth"
import PaperBG from "./components/PaperBG"
import NailGroup from "./components/NailGroup"
import NoteListContainer from "./components/NoteListContainer"
import BGTexture from './components/BGTexture'
/* import MiniPushPin from "./components/MiniPushPin" */


export default async function Home() {

  const session = await getServerSession()

  await new Promise((res) => { setTimeout(() => { res(null) }, 2000) })

  return (
    <main className="relative flex flex-col w-full grow bg-gradient-to-br justify-between shadow-md shadow-[rgba(0,0,0,0.8)]">
      <BGTexture />
      <NailGroup />
      {session ?
        <NoteListContainer />
        :
        <div className="relative flex grow items-center justify-center">
          <PaperBG>
            <h1 className="sm:text-4xl p-16 max-w-[600px] absolute">Bienvenido a &quot;Posteame Esta&quot;, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>
          </PaperBG>
        </div>
      }
      <NailGroup />
    </main >
  )
}