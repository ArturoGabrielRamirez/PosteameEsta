"use client"

import { useState, useEffect } from 'react'
import loader1 from "@/public/image/test-loader1.png"
import loader2 from "@/public/image/test-loader2.png"
import loader3 from "@/public/image/test-loader3.png"
import loader4 from "@/public/image/test-loader4.png"
import Image from 'next/image'

export default function Loading() {
    const [actualImage, setActualImage] = useState(0)
    const imagenes = [loader1, loader2, loader3, loader4]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualImage((actualImage + 1) % imagenes.length)
        }, 300)
        return () => clearInterval(intervalId)
    }, [actualImage, imagenes])

    return (
        <div className='grow grid place-content-center'>
            <Image priority={true} className="" alt="loader" src={imagenes[actualImage]} width={200} height={200} />
        </div>
    )
}