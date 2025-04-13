"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t) => t, // Linear easing (no animation)
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: false, // Disable smooth scrolling
      smoothTouch: false,
      touchMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}