"use client"

import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  type?: "fade" | "slide" | "scale" | "rotate"
  duration?: number
  once?: boolean
}

// This is a no-op version of ScrollAnimation that just renders children immediately
export const ScrollAnimation = ({
  children,
  className = "",
}: ScrollAnimationProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};