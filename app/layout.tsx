import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SesionProviders from './components/SesionProviders'
import './globals.css'
import AppBar from './components/AppBar'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posteame Esta',
  description: 'App para Post-It',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="es">
      <body className={`flex ${inter.className} min-h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className='flex flex-col xl:flex-row w-full'>
            <SesionProviders>
              <div className='flex bg-gradient-to-bl from-[#92410ee9] via-[#733007] to-[#532508] border-t-8 border-r-0 border-b-8 border-l-8 border-t-[#7c370fde] border-orange-950 border-double p-4'>
                <AppBar />
              </div>
              <div className='flex flex-col w-full items-center justify-center bg-gradient-to-br from-[#92410ee9] via-[#733007] to-[#532508] p-4 border-t-8 border-r-8 border-b-8 border-l-0 border-t-[#7c370fde] border-orange-950 border-double'>
                {children}
                <Footer />
              </div>
            </SesionProviders>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
