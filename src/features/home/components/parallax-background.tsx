"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { HERO_BG_URL } from "@/data/home"

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let isMounted = true
    let ctx: { revert?: () => void } = {}
    import("gsap").then(({ default: gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (!isMounted) return
        gsap.registerPlugin(ScrollTrigger)
        if (!containerRef.current) return
        ctx = gsap.context(() => {
          gsap.to(".bg-layer", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          })
        }, containerRef)
      })
    )
    return () => {
      isMounted = false
      ctx.revert?.()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-110">
      <div className="bg-layer relative w-full h-full will-change-transform">
        <Image
          src={HERO_BG_URL}
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-top -scale-100 opacity-100"
          priority
          aria-hidden="true"
        />
        {/* Cinematic dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-loro-ink/40 via-loro-ink/60 to-background" />
        
        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20" style={{ animation: "blob-float 23s ease-in-out infinite" }} aria-hidden="true" />
        <div className="absolute top-40 right-10 w-[30rem] h-[30rem] bg-chart-4 rounded-full blur-[120px] opacity-20" style={{ animation: "blob-float 19s ease-in-out infinite reverse", animationDelay: "2s" }} aria-hidden="true" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary rounded-full blur-[90px] opacity-15" style={{ animation: "blob-float 21s ease-in-out infinite", animationDelay: "5s" }} aria-hidden="true" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-destructive rounded-full blur-[80px] opacity-25" style={{ animation: "blob-float 15s ease-in-out infinite reverse", animationDelay: "1s" }} aria-hidden="true" />
      </div>
    </div>
  )
}
