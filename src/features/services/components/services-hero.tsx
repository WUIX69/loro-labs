"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Rocket } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTGpmBeqYgGmseaHsvzAPJgYZbUb23ikU9QmY_QXIMv6-ZmDv9F8FpIflDzxoQjJ1od8QuKFSG57Y1xxLDG3-b2L4SxYx8RGnIpm8S88IIRZv6U7OLkWb0P3lQeyWp2VcZ5DYXitJYQeZV2yZ8pSNoam_OB1QJ9qvLdpaThNs-949ppMQNN9h89NP0dwo6l3_W0B59vHhHkLNG7_AY4XFmnAs7IAxCILfrz7VgEdxHe61CDMqQ-afQ9bk4KXrHEvKLOQ"

export function ServicesHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15, y: 50 })

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
    <section 
      ref={sectionRef}
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 md:px-12 bg-foreground overflow-hidden" 
    >
      <div className="absolute inset-0 z-0 scale-110 pointer-events-none">
        <div ref={parallaxRef} className="w-full h-full relative opacity-70 will-change-transform">
          <Image
            src={HERO_IMG}
            alt="Vibrant feather background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/90"></div>
        {/* Floating blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20" style={{ animation: "blob-float 23s ease-in-out infinite" }} aria-hidden="true" />
        <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-chart-4 rounded-full blur-[120px] opacity-20" style={{ animation: "blob-float 19s ease-in-out infinite reverse", animationDelay: "2s" }} aria-hidden="true" />
      </div>
      
      <NoiseOverlay opacity={0.3} />

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto py-24">
        <div data-reveal className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[var(--chart-2)] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 shadow-xl">
          <Rocket className="size-4" aria-hidden="true" />
          READY FOR TAKEOFF
        </div>
        <h1 data-reveal className="text-5xl md:text-6xl lg:text-[120px] lg:leading-[110px] font-black text-background mb-6 tracking-tighter">
          Our <span className="bg-[length:200%_auto] animate-[gradient-sweep_4s_linear_infinite] bg-gradient-to-r from-destructive via-[var(--chart-4)] to-destructive text-transparent bg-clip-text">Expertise</span>
        </h1>
        <p data-reveal className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto leading-relaxed">
          We blend cutting-edge AI with exceptional design to deliver digital solutions that stand out. Explore our core services tailored for modern businesses.
        </p>
      </div>
    </section>
  )
}
