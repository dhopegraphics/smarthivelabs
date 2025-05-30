"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button" // Assuming shadcn/ui button is available
import { useEffect, useState } from "react"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder or null during server rendering and initial client mount
    return <div style={{ width: "24px", height: "24px" }} />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  )
}
