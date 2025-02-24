'use client'

import { useState, useEffect, useMemo } from 'react'
import loader1 from "@/public/image/loader1.webp"
import loader2 from "@/public/image/loader2.webp"
import loader3 from "@/public/image/loader3.webp"
import loader4 from "@/public/image/loader4.webp"
import Image from 'next/image'
import BGTexture from '@/components/BGTexture'
import NailGroup from '@/components/NailGroup'

export default function Loading() {
    const [actualImage, setActualImage] = useState(0)
    const imagenes = useMemo(() => [loader1, loader2, loader3, loader4], [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualImage((prevImage) => (prevImage + 1) % imagenes.length);
        }, 300);
        return () => clearInterval(intervalId);
    }, [imagenes]);

    return (
        <div className='relative flex-1 grid place-content-center size-full shadow-md shadow-[rgba(0,0,0,0.8)]'>
            <BGTexture />
            <div className='absolute grow w-full'>
                <NailGroup />
            </div>
            <Image
                className="z-10"
                alt="loader"
                priority
                src={imagenes[actualImage]}
                width={100}
                height={100}
                sizes='(min-width: 1200px) 50vw, 100vw' />
            <div className='absolute bottom-0 w-full'>
                <NailGroup />
            </div>
        </div>
    )
}