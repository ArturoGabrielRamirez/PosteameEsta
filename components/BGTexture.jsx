'use client'

import Image from 'next/image';
import { useThemeContext } from "./CurrentThemeProvider";
import texture from '../public/image/texture.webp'; // Importa la imagen

export default function BGTexture() {
    const { currentTheme } = useThemeContext();
    const opacity = currentTheme === 'dark' ? 0.3 : 1;

    return (
        <Image
            src={texture}
            alt="Fondo de Corcho"
            fill
            style={{ objectFit: 'cover', opacity }}
            quality={75}
            priority
            sizes='(min-width: 1200px) 50vw, 100vw'
            placeholder='blur'
        />
    );
}