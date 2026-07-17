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
