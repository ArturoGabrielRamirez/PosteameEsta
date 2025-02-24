import { getServerSession } from "next-auth"
import PaperBG from "../components/PaperBG"
import NailGroup from "../components/NailGroup"
import NoteListContainer from "../components/NoteListContainer"
import BGTexture from '../components/BGTexture'
import SigninButton from "@/components/SignInButton"

export default async function Home() {

  const session = await getServerSession()

  return (
    <main className="relative flex flex-col w-full grow bg-gradient-to-br justify-between shadow-md shadow-[rgba(0,0,0,0.8)]">
      <BGTexture />
      <NailGroup />
      {session ?
        <NoteListContainer />
        :
        <div className="relative flex grow items-center justify-center px-4">
          <PaperBG>
            <h1 className="sm:text-xl p-16 max-w-[600px] absolute">Bienvenido a &quot;Posteame Esta&quot;, una aplicación de Post-It. Inicia sesión acá {<SigninButton className="bg-secondary-foreground text-secondary hover:text-secondary-foreground"/>} para disfrutar de una mayor privacidad en tus notas.</h1>
          </PaperBG>
        </div>
      }
      <NailGroup />
    </main >
  )
}