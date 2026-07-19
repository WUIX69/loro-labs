"use client"
import { useState, useEffect } from "react"

/**
 * Returns the current window.pageYOffset, updating on every scroll frame.
 * Passive listener — does not block scrolling.
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

/**
 * Returns true when window.pageYOffset exceeds `threshold`.
 * Fires state updates ONLY when the boolean flips — no per-pixel re-renders.
 *
 * Use this instead of useScrollY when you only need a binary scroll breakpoint.
 * @example
 *   const isScrolled = useScrollThreshold(50)
 */
export function useScrollThreshold(threshold: number): boolean {
  const [exceeded, setExceeded] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.pageYOffset > threshold : false
  )

  useEffect(() => {
    const handleScroll = () => {
      const next = window.pageYOffset > threshold
      // Identity check — skip setState entirely if the boolean hasn't changed
      setExceeded(prev => (prev === next ? prev : next))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return exceeded
}
