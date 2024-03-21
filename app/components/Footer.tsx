import {
    Instagram,
    Facebook,
    Linkedin
} from 'lucide-react'
import Link from 'next/link'


export default function Footer() {
    
    return (
        <div className='flex justify-around w-full gap-2 pt-4'>
            <div className="bg-transparent">
                ©2023-2024 Arturo Gabriel Ramirez
            </div>
            <div className='flex gap-4'>
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
    )
    
}