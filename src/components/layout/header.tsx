"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code,
  Briefcase,
  Users,
  MessageSquare,
  FileText,
  Info,
  Handshake,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services", icon: <Briefcase size={18} /> },
  { href: "/projects", label: "Projects", icon: <FileText size={18} /> },
  { href: "/about", label: "About", icon: <Info size={18} /> },
  { href: "/careers", label: "Careers", icon: <Users size={18} /> },
  { href: "/blog", label: "Blog", icon: <MessageSquare size={18} /> },
  { href: "/open-source", label: "Open Source", icon: <Code size={18} /> },
  {
    href: "/merchandise",
    label: "Store",
    icon: <ShoppingBag size={18} />,
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">SH</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-indigo-600 transition-all duration-300">
            Smart Hive Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-105 group ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                    : "text-gray-700 hover:text-primary hover:bg-white/50 hover:shadow-md"
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-indigo-600/10 rounded-xl transition-all duration-300"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/hire-us">
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-primary/20 text-primary hover:border-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
            >
              <Handshake size={16} className="mr-2" />
              Hire Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg shadow-blue-500/25 rounded-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <MessageSquare size={16} className="mr-2" />
                Get Quote
                <ArrowRight
                  size={14}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isMobileMenuOpen
                ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                : "text-gray-700 hover:text-primary hover:bg-white/50 hover:shadow-md"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-xl">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary hover:shadow-md"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
            <div className="border-t border-gray-200/50 pt-4 mt-4 space-y-3">
              <Link href="/hire-us" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/20 text-primary hover:border-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold transition-all duration-300 hover:scale-[1.02] rounded-xl"
                >
                  <Handshake size={16} className="mr-2" />
                  Hire Us
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/25 rounded-xl">
                  <MessageSquare size={16} className="mr-2" />
                  Get Quote
                  <Sparkles size={14} className="ml-2" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
