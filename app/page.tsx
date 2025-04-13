"use client"

import Image from "next/image"
import { Server, GitBranch, HardDrive, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import MatrixBackground from "@/components/matrix-background"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Matrix background with delay */}
      <MatrixBackground delay={1500} />
      
      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-[#010102]/70 to-[#030308]/70 relative z-10">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <ScrollAnimation type="fade" direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Welcome to <span className="text-[#369CF3] font-extrabold">WraithFlash</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade" direction="up" delay={0.4}>
            <p className="text-xl text-gray-300 max-w-3xl mb-10">
              A lightweight, powerful operating system designed to breathe new life into old hardware.
              Fast, secure, and customizable.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade" direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#369CF3] hover:bg-[#369CF3]/80 text-white px-8 py-6 relative z-20"
                onClick={() => window.open("https://drive.google.com/file/d/1CEAedc23ggH43wmVG24HAIo6b2nmiyr-/view?usp=sharing", "_blank")}
              >
                Download Now
              </Button>
              <Button 
                variant="outline" 
                className="border-[#369CF3] text-[#369CF3] hover:bg-[#369CF3]/10 px-8 py-6 relative z-20"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('about');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 70,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-[#030308] to-[#050510] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              About <span className="text-[#369CF3]">WraithFlash</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="fade" direction="left" delay={0.2}>
              <div className="bg-[#0A0A0A]/70 backdrop-blur-sm p-6 rounded-lg border border-[#369CF3]/20 shadow-lg shadow-[#369CF3]/5">
                <h3 className="text-2xl font-semibold text-[#369CF3] mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  WraithFlash was created with a simple mission: to extend the life of older hardware through
                  efficient software design. We believe that technology should be accessible to everyone,
                  regardless of their ability to purchase the latest hardware.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="fade" direction="right" delay={0.4}>
              <div className="bg-[#0A0A0A]/70 backdrop-blur-sm p-6 rounded-lg border border-[#369CF3]/20 shadow-lg shadow-[#369CF3]/5">
                <h3 className="text-2xl font-semibold text-[#369CF3] mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  We envision a world where electronic waste is minimized, where computers have longer
                  lifespans, and where software is designed with efficiency and user experience as top
                  priorities.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-gradient-to-b from-[#050510] to-[#030308]">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Key <span className="text-[#369CF3]">Features</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightweight",
                description: "Runs smoothly on hardware with as little as 512MB RAM and a single-core processor."
              },
              {
                title: "Secure",
                description: "Built with security in mind, featuring regular updates and a minimal attack surface."
              },
              {
                title: "Customizable",
                description: "Tailor the system to your needs with a wide range of customization options."
              },
              {
                title: "Compatible",
                description: "Supports a wide range of hardware, including older devices abandoned by mainstream OS."
              },
              {
                title: "Modern UI",
                description: "Clean, intuitive interface that doesn't sacrifice performance for aesthetics."
              },
              {
                title: "Open Source",
                description: "Fully open source, allowing community contributions and transparency."
              }
            ].map((feature, index) => (
              <ScrollAnimation 
                key={index} 
                type="scale" 
                delay={0.1 * index}
                className="bg-[#0A0A0A]/70 backdrop-blur-sm p-6 rounded-lg border border-[#369CF3]/20 shadow-lg shadow-[#369CF3]/5 hover:border-[#369CF3]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#369CF3] mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full py-20 bg-gradient-to-b from-[#030308] to-[#050510] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Tech <span className="text-[#369CF3]">Stack</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Linux Kernel", "Custom Shell", "Optimized Drivers", "Minimal Runtime",
              "Efficient Package Manager", "Secure Boot", "Memory Management", "Power Optimization"
            ].map((tech, index) => (
              <ScrollAnimation 
                key={index} 
                type="fade" 
                direction={index % 2 === 0 ? "left" : "right"} 
                delay={0.1 * index}
                className="bg-[#0A0A0A]/70 backdrop-blur-sm p-4 rounded-lg border border-[#369CF3]/20 text-center shadow-lg shadow-[#369CF3]/5"
              >
                <p className="text-[#369CF3]">{tech}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="w-full py-20 bg-gradient-to-b from-[#050510] to-[#010102] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fade" direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-[#369CF3]">Try WraithFlash</span>?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade" direction="up" delay={0.2}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Download WraithFlash today and experience the perfect balance of performance and usability.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade" direction="up" delay={0.4}>
            <Button className="bg-[#369CF3] hover:bg-[#369CF3]/80 text-white px-8 py-6 text-lg" 
            onClick={() => window.open("https://drive.google.com/file/d/1CEAedc23ggH43wmVG24HAIo6b2nmiyr-/view?usp=sharing", "_blank")}>
              Download WraithFlash
            </Button>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade" direction="up" delay={0.6}>
            <p className="text-sm text-gray-400 mt-6">
              Version 1.0.0 | Released October 2023 | 800MB
            </p>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* And update the download button in the download section */}
    </main>
  )
}
