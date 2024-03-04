import { getServerSession } from "next-auth"
import { Suspense } from "react"
import CreateNoteClient from "./components/CreateNoteClient"
import Nail from "./components/Nail"
import PaperBG from "./components/PaperBG"
import NoteList from "./components/NoteList"
import { ToastSuspense } from "./components/ToastSuspense"
import Paginator from "./components/Paginator"
import { NotesProvider } from "./components/NotesProvider"
import Loading from "./loading"


export default async function Home() {

  await new Promise((res) => { setTimeout(() => { res(null) }, 2000) })
  const session = await getServerSession()
  const userEmail = session?.user?.email as string

  return (
    <main className="granulated flex flex-col items-center justify-center bg-gradient-to-br sm:p-2 shadow-md shadow-[rgba(0,0,0,0.8)] h-full w-full flex-1">
      <div className="flex justify-between w-full">
        <Nail />
        <Nail />
      </div>
      {session ?
        <>
          <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-4 py-2 sm:py-4 xl:gap-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 grow">
            <NotesProvider >
              <Suspense fallback={<ToastSuspense ToastMethod="success" paramsToast="Notas Cargadas" />}>
                <CreateNoteClient userEmail={userEmail} />
                <NoteList />
              </Suspense>
               <Suspense fallback={<Loading/>}>
                <Paginator />
                </Suspense>

            </NotesProvider>
          </div>

        </> :
        <div className="relative flex w-full h-full">
          <PaperBG>
            <h1 className="sm:text-4xl p-16 max-w-[600px] absolute">Bienvenido a &quot;Posteame Esta&quot;, una aplicación de Post-It. Inicia sesión para disfrutar de una experiencia superior y mayor privacidad en tus notas.</h1>
          </PaperBG>
        </div>
      }
      <div className="flex justify-between w-full">
        <Nail />
        <Nail />
      </div>
    </main >
  )
}