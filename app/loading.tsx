'use client'

import { useState, useEffect, useMemo } from 'react'
import loader1 from "@/public/image/test-loader1.png"
import loader2 from "@/public/image/test-loader2.png"
import loader3 from "@/public/image/test-loader3.png"
import loader4 from "@/public/image/test-loader4.png"
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
            <Image className="z-10" alt="loader" priority src={imagenes[actualImage]} width={150} height={150} />
            <div className='absolute bottom-0 w-full'>
                <NailGroup />
            </div>
        </div>
    )
}