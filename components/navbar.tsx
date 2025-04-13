"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Github } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Download", href: "#download" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      // Simple jump to element without smooth behavior
      window.scrollTo(0, element.offsetTop - 70)
      if (isMenuOpen) setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#010102]/80 backdrop-blur-md border-b border-[#369CF3]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#369CF3]">WraithFlash</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="border-[#369CF3] text-[#369CF3] hover:bg-[#369CF3]/10 ml-2"
              onClick={() => window.open("https://github.com/Gyaanendra/wraithos", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#369CF3]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#010102] border-b border-[#369CF3]/20">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block py-2 text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-[#369CF3]/20">
              <Button
                variant="outline"
                className="w-full border-[#369CF3] text-[#369CF3] hover:bg-[#369CF3]/10 flex items-center justify-center"
                onClick={() => window.open("https://github.com/Gyaanendra/wraithos", "_blank")}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
