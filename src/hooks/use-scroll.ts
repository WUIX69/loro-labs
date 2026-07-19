"use client"
import { useState, useEffect } from "react"

/**
 * Returns the current window.pageYOffset, updating on every scroll frame.
 * Passive listener — does not block scrolling.
 */
function useScrollY(): number {
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
  const [exceeded, setExceeded] = useState<boolean>(false)

  useEffect(() => {
    // Initial check on mount to avoid SSR hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExceeded(window.pageYOffset > threshold)

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
