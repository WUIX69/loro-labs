"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Zap, Apple, Smartphone } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { useMagnetic } from "@/hooks/use-magnetic"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const FEATHER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJMNXdCeXKAbSb3-zjgmwM5F5xZD-4j4k_8k_4ESbmlcXW42tP-Ci93Rhw6AdA4-IcbfnGHnCMvM2ps00Qrp_16dunHfztBIkajra428SA3gsiRQ62Ut4eaOTx6Oi21dZX6Lihyf-BeUK5B1lOdBORUd2Iut2thWbXgSQc3esGKn9aE8_NYAi3vvuKoGtICrGfozqNdhcDcB4SED7OWO0tumRowXO1JH2Cv3kmum3qzAduw6CT-KffCgalLoL6c2xiWQ"

export function ShowcaseHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15, y: 50 })
  
  const { ref: appleRef, onMouseMove: appleMove, onMouseLeave: appleLeave } = useMagnetic<HTMLButtonElement>(0.3)
  const { ref: playRef, onMouseMove: playMove, onMouseLeave: playLeave } = useMagnetic<HTMLButtonElement>(0.3)

  useEffect(() => {
    if (typeof window === "undefined") return
    let isMounted = true
    let ctx: { revert?: () => void } = {}
    
    import("gsap").then(({ default: gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (!isMounted) return
        gsap.registerPlugin(ScrollTrigger)
        if (!parallaxRef.current || !sectionRef.current) return
        
        ctx = gsap.context(() => {
          gsap.to(parallaxRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          })
        }, sectionRef)
      })
    )
    
    return () => {
      isMounted = false
      ctx.revert?.()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 scale-110 pointer-events-none">
        <div ref={parallaxRef} className="w-full h-full relative opacity-40 will-change-transform">
          <Image
            alt="Vibrant feather macro background"
            src={FEATHER_IMG}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>
      
      <NoiseOverlay opacity={0.3} />

      <div ref={contentRef} className="container mx-auto px-6 relative z-10 text-center max-w-5xl py-32">
        <div data-reveal className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-6 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-destructive/20 shadow-lg backdrop-blur-md">
          <Zap className="size-4" aria-hidden="true" />
          NOW IN BETA
        </div>
        <h1 data-reveal className="text-6xl font-black leading-tight tracking-tighter text-foreground md:text-7xl lg:text-8xl mb-8">
          Experience the{" "}
          <span className="bg-[length:200%_auto] animate-[gradient-sweep_4s_linear_infinite] bg-gradient-to-r from-destructive via-[var(--chart-4)] to-destructive text-transparent bg-clip-text">Future</span>
          <br />of Loro AI
        </h1>
        <p data-reveal className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Master English naturally through immersive, real-time AI conversations
          designed to fit your unique learning style and professional goals.
        </p>
        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            ref={appleRef}
            onMouseMove={appleMove}
            onMouseLeave={appleLeave}
            type="button" 
            className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] will-change-transform"
          >
            <Apple className="size-8" aria-hidden="true" />
            <div className="text-left">
              <p className="text-[10px] uppercase leading-none opacity-70">Download on the</p>
              <p className="text-lg font-bold leading-tight">App Store</p>
            </div>
          </button>
          <button 
            ref={playRef}
            onMouseMove={playMove}
            onMouseLeave={playLeave}
            type="button" 
            className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] will-change-transform"
          >
            <Smartphone className="size-8" aria-hidden="true" />
            <div className="text-left">
              <p className="text-[10px] uppercase leading-none opacity-70">GET IT ON</p>
              <p className="text-lg font-bold leading-tight">Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
