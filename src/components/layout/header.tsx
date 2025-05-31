"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code, Briefcase, Users, MessageSquare, FileText, Info, Handshake } from "lucide-react"
import { useState } from "react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

const navLinks = [
  { href: "/services", label: "Services", icon: <Briefcase size={18} /> },
  { href: "/projects", label: "Projects", icon: <FileText size={18} /> },
  { href: "/careers", label: "Careers", icon: <Users size={18} /> },
  { href: "/open-source", label: "Open Source", icon: <Code size={18} /> },
  { href: "/blog", label: "Blog", icon: <MessageSquare size={18} /> },
  { href: "/about", label: "About Us", icon: <Info size={18} /> },
  { href: "/hire-us", label: "Hire Us", icon: <Handshake size={18} /> },
  { href: "/contact", label: "Contact", icon: <MessageSquare size={18} /> },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="backdrop-blur-md dark:bg-[#0a0a0a] bg-[#ffffff] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Smart Hive Labs
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isActive ? "text-amber-300 font-semibold underline " : "bg-amber-300  text-slate-900 rounded px-2 hover:text-amber-500"}`}
              >
                {link.label}
              </Link>
            )
          })}
          <DarkModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md  bg-background shadow-lg absolute w-full left-0 top-full">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${isActive ? "bg-primary text-white font-semibold" : "text-foreground hover:text-blue-500 hover:bg-primary"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}