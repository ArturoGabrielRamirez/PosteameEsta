import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import SesionProviders from '@/components/SesionProviders'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import { NotesProvider } from '@/components/NotesProvider'
import { CurretThemeProvider } from '@/components/CurrentThemeProvider'
import BackGroundThemeClient from '@/components/BackGroundThemeClient'
import Light from '@/components/Light'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'




const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
    <html lang="es-Ar en-Us" suppressHydrationWarning={true}>
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <CurretThemeProvider>
            <SesionProviders>
              <NotesProvider>
                <div className="flex justify-between items-center absolute z-10 w-full -top-7 h-[40px]">
                  <Light />
                  <Light />
                  <Light />
                </div>
                <div className='flex flex-col xl:flex-row min-h-dvh w-full'>
                  <AppBar />
                  <BackGroundThemeClient>
                    {children}
                    <Footer className='sm:hidden' />
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
