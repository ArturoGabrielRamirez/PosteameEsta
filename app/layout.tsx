import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SesionProviders from './components/SesionProviders'
import './globals.css'
import AppBar from './components/AppBar'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer'
import { Toaster } from 'sonner'
import { NotesProvider } from './components/NotesProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posteame Esta',
  description: 'App de Post-It',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-screen" lang="es">
      <body className={`flex ${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SesionProviders>
            <NotesProvider>
              <div className='flex flex-col xl:flex-row w-screen max-h-screen'>
                <AppBar />
                <div className='flex relative flex-col w-screen items-center justify-center bg-gradient-to-br from-[#92410ee9] via-[#733007] to-[#532508] p-4 border-t-8 border-r-8 border-b-8 border-l-0 border-t-[#7c370fde] border-orange-950 border-double'>
                  {children}
                  <Footer />
                </div>
              </div>
            </NotesProvider>
          </SesionProviders>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
