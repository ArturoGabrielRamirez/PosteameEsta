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
            <div className='flex justify-center w-full relative'>
                <p>
                    ©2023-2024 Arturo Gabriel Ramirez
                </p>
                <div className='flex justify-items-end gap-4 absolute right-10'>
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