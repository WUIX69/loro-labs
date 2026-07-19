"use client"
import { useEffect, useRef } from "react"

type Options = { stagger?: number; y?: number; duration?: number; start?: string }

export function useGsapReveal<T extends HTMLElement>(opts: Options = {}) {
  const ref = useRef<T>(null)
  
  useEffect(() => {
    if (typeof window === "undefined") return
    
    let isMounted = true
    let ctx: { revert?: () => void } = {}
    import("gsap").then(({ default: gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (!isMounted) return
        gsap.registerPlugin(ScrollTrigger)
        if (!ref.current) return
        ctx = gsap.context(() => {
          gsap.from(ref.current!.querySelectorAll("[data-reveal]"), {
            y: opts.y ?? 30,
            opacity: 0,
            duration: opts.duration ?? 0.8,
            stagger: opts.stagger ?? 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: opts.start ?? "top 85%",
            },
          })
        }, ref)
      })
    )
    return () => {
      isMounted = false
      ctx.revert?.()
    }
  }, [opts.stagger, opts.y, opts.duration, opts.start])
  
  return ref
}
