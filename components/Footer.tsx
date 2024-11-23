import {
    Instagram,
    Facebook,
    Linkedin
} from 'lucide-react'
import Link from 'next/link'
import version from '@/package.json'


export default function Footer() {

    return (
        <div className='flex w-full gap-2 pt-4 relative'>
            <p>
                v{version.version}
            </p>
            <div className='flex items-end sm:items-center sm:justify-center w-full flex-col sm:flex-row sm:relative sm:gap-4 gap-2'>
                <p>
                    ©2023-2024 Arturo Gabriel Ramirez
                </p>
                <div className='flex gap-4 sm:absolute sm:right-0 '>
                    <Link href={'https://www.facebook.com/gabriel.b.soad'}>
                        <Facebook />
                    </Link>
                    <Link href={'https://www.instagram.com/gab_khada_jhin/'}>
                        <Instagram />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/arturo-ramirez-84b345277/'}>
                        <Linkedin />
                    </Link>
                </div>
            </div>
        </div>
    )

}