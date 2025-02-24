"use client"

import * as React from "react"
import { SunMoon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useThemeContext } from "./CurrentThemeProvider"

export default function ModeToggle() {
  const { setTheme } = useTheme()
  const { currentTheme } = useThemeContext()

  return (
    <Button 
    className="bg-transparent text-primary hover:text-primary-foreground"
    aria-label={`Cambiar a modo ${currentTheme === 'light' ? 'oscuro' : 'claro'}`}
    onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}>
      <SunMoon className={`size-[23px] ${currentTheme === 'dark' ? 'block' : 'hidden'}`} />
      <Sun className={`size-[23px] ${currentTheme === 'light' ? 'block' : 'hidden'}`} />
    </Button>
  )

}
