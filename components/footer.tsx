"use client"

import Link from "next/link"
import { Github } from "lucide-react"

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      // Simple jump to element without smooth behavior
      window.scrollTo(0, element.offsetTop - 70)
    }
  }

  return (
    <footer className="bg-[#010102] border-t border-[#369CF3]/20 py-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#369CF3]">WraithFlash</h2>
            <p className="text-gray-400 mt-2">Breathe new life into old devices</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <div className="flex space-x-4">
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer relative z-10"
              >
                About
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleSmoothScroll(e, "#features")}
                className="text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer relative z-10"
              >
                Features
              </a>
              <a 
                href="#tech-stack" 
                onClick={(e) => handleSmoothScroll(e, "#tech-stack")}
                className="text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer relative z-10"
              >
                Tech Stack
              </a>
              <a 
                href="#download" 
                onClick={(e) => handleSmoothScroll(e, "#download")}
                className="text-gray-300 hover:text-[#369CF3] transition-colors duration-200 cursor-pointer relative z-10"
              >
                Download
              </a>
            </div>

            <a
              href="https://github.com/Gyaanendra/wraithos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-[#369CF3] transition-colors duration-200 relative z-10"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#369CF3]/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WraithFlash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
