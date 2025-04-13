"use client"

import { ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  type?: "fade" | "slide" | "scale" | "rotate"
  duration?: number
  once?: boolean
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "fade",
  duration = 0.5,
  once = true,
}: ScrollAnimationProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 40 }
      case "down":
        return { y: -40 }
      case "left":
        return { x: 40 }
      case "right":
        return { x: -40 }
      default:
        return { y: 0 }
    }
  }

  const getAnimationVariants = () => {
    const directionOffset = getDirectionOffset()
    
    switch (type) {
      case "fade":
        return {
          hidden: { opacity: 0, ...directionOffset },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8, ...directionOffset },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
      case "rotate":
        return {
          hidden: { 
            opacity: 0, 
            rotate: direction === "left" ? -10 : 10, 
            ...directionOffset 
          },
          visible: {
            opacity: 1,
            rotate: 0,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
      default:
        return {
          hidden: { opacity: 0, ...directionOffset },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}