"use client"

import * as React from "react"
import { MoonStar, Sparkles, Cpu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="min-h-[60px] min-w-[60px] sm:h-[68px] sm:w-[68px] border-2 sm:border-4 border-orange-950 bg-gradient-to-b from-[#ffe501] via-[#fcc101] to-[#b29400]">
          <Sparkles className="h-[1.9rem] w-[1.9rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
          <MoonStar className="absolute h-[1.9rem] w-[1.9rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sparkles /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonStar /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Cpu /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}
