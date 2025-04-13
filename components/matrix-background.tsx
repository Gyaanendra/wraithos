"use client"

import { useEffect, useRef } from "react"

interface MatrixBackgroundProps {
  delay?: number
}

const MatrixBackground = ({ delay = 0 }: MatrixBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix characters
    const characters =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height)
    }

    // Drawing the characters
    const draw = () => {
      // Add semi-transparent black rectangle on top of previous frame
      ctx.fillStyle = "rgba(1, 1, 2, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set the color and font for the characters
      ctx.fillStyle = "#369CF3"
      ctx.font = `${fontSize}px monospace`

      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        
        // x coordinate of the character (column * fontSize)
        const x = i * fontSize
        
        // y coordinate of the character (drops[i] * fontSize)
        const y = drops[i] * fontSize
        
        // Draw the character
        ctx.fillText(text, x, y)
        
        // Move the drop down
        drops[i]++
        
        // Reset the drop when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    // Delay the animation start if specified
    let animationId: number
    const startAnimation = () => {
      const animate = () => {
        draw()
        animationId = requestAnimationFrame(animate)
      }
      animate()
    }

    if (delay) {
      setTimeout(startAnimation, delay)
    } else {
      startAnimation()
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [delay])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

export default MatrixBackground
