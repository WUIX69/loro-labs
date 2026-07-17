"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Rocket } from "lucide-react"

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTGpmBeqYgGmseaHsvzAPJgYZbUb23ikU9QmY_QXIMv6-ZmDv9F8FpIflDzxoQjJ1od8QuKFSG57Y1xxLDG3-b2L4SxYx8RGnIpm8S88IIRZv6U7OLkWb0P3lQeyWp2VcZ5DYXitJYQeZV2yZ8pSNoam_OB1QJ9qvLdpaThNs-949ppMQNN9h89NP0dwo6l3_W0B59vHhHkLNG7_AY4XFmnAs7IAxCILfrz7VgEdxHe61CDMqQ-afQ9bk4KXrHEvKLOQ"

export function ServicesHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const section = sectionRef.current
      const parallax = parallaxRef.current

      if (section && parallax && scrolled < section.offsetHeight + 500) {
        parallax.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial call to set position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 md:px-12 bg-foreground overflow-hidden" 
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 scale-110 pointer-events-none">
        <div ref={parallaxRef} className="w-full h-full relative opacity-70">
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
      </div>
      
      <ScrollReveal className="relative z-10 max-w-5xl mx-auto py-24">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[var(--chart-2)] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
          <Rocket className="size-4" aria-hidden="true" />
          READY FOR TAKEOFF
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-[120px] lg:leading-[110px] font-black text-background mb-6 tracking-tighter">
          Our <span className="text-destructive">Expertise</span>
        </h1>
        <p className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto leading-relaxed">
          We blend cutting-edge AI with exceptional design to deliver digital solutions that stand out. Explore our core services tailored for modern businesses.
        </p>
      </ScrollReveal>
    </section>
  )
}
