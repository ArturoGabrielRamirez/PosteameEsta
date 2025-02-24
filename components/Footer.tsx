import {
    Instagram,
    Facebook,
    Linkedin
} from 'lucide-react'
import Link from 'next/link'
import version from '@/package.json'


export default function Footer({ className }: { className?: string }) {

    return (
        <footer className={`${className} flex flex-col w-fit gap-2`}>
            <div className='flex items-end sm:items-center sm:justify-center w-full flex-col sm:flex-row sm:relative sm:gap-4 gap-2 pt-8'>
                <p className='text-xs text-muted-foreground'>
                    ©2023-2024 Arturo Gabriel Ramirez
                </p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <p className='text-xs text-muted-foreground'>
                    v{version.version}
                </p>
                <div className='flex gap-2'>
                    <Link href={'https://www.facebook.com/gabriel.b.soad'}>
                        <Facebook
                            aria-label='Cuenta de Facebook del creador de la pagina'
                            className='size-[16px]' />
                    </Link>
                    <Link href={'https://www.instagram.com/gab_khada_jhin/'}>
                        <Instagram
                            aria-label='Cuenta de Instagram del creador de la pagina'
                            className='size-[16px]' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/arturo-ramirez-84b345277/'}>
                        <Linkedin
                            aria-label='Cuenta de LinkedIn del creador de la pagina'
                            className='size-[16px]' />
                    </Link>
                </div>
            </div>
        </footer>
    )

}