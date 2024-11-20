import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import SesionProviders from '@/components/SesionProviders'
import './globals.css'
import AppBar from '@/components/AppBar'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner'
import { NotesProvider } from '@/components/NotesProvider'
import BackGroundThemeClient from '@/components/BackGroundThemeClient'
import { CurretThemeProvider } from '@/components/CurrentThemeProvider'


const inter = Open_Sans({ subsets: ['latin'] })

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
    <html lang="es" suppressHydrationWarning={true} className='min-w-[320px]'>
      <body className={`flex ${inter.className} min-w-[320px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <CurretThemeProvider>
            <SesionProviders>
              <NotesProvider>
                <div className='flex flex-col xl:flex-row min-h-dvh sm:w-full'>
                  <AppBar />
                  <BackGroundThemeClient>
                    {children}
                    <Footer />
                  </BackGroundThemeClient>
                </div>
              </NotesProvider>
            </SesionProviders>
            <Toaster richColors />
          </CurretThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
