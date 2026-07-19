"use client"
import { useRef } from "react"

export function useMagnetic<T extends HTMLElement>(strength: number = 0.25) {
  const ref = useRef<T>(null)
  
  const onMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return
    
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    ref.current.style.transition = "none"
  }
  
  const onMouseLeave = () => {
    if (!ref.current) return
    
    ref.current.style.transform = `translate(0px, 0px)`
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
  }
  
  return { ref, onMouseMove, onMouseLeave }
}
