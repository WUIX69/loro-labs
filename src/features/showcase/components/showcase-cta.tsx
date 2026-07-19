"use client"

import { useState } from "react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { useMagnetic } from "@/hooks/use-magnetic"
import { NoiseOverlay } from "@/components/shared/noise-overlay"
import { ContactSheet } from "@/components/layout/contact-sheet"

export function ShowcaseCta() {
  const [contactOpen, setContactOpen] = useState(false)
  
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })
  const { ref: waitlistRef, onMouseMove: waitlistMove, onMouseLeave: waitlistLeave } = useMagnetic<HTMLButtonElement>(0.3)
  const { ref: demoRef, onMouseMove: demoMove, onMouseLeave: demoLeave } = useMagnetic<HTMLButtonElement>(0.3)

  return (
    <>
      <section className="py-24 px-6 bg-background">
        <div ref={containerRef} className="relative overflow-hidden rounded-[40px] bg-destructive px-8 py-24 text-center text-destructive-foreground max-w-6xl mx-auto shadow-2xl ring-1 ring-border/50">
          {/* Animated Background */}
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
            <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-tr from-destructive via-[var(--chart-4)] to-primary blur-[120px] animate-[blob-float_20s_infinite_alternate]"></div>
          </div>
          
          <NoiseOverlay opacity={0.3} />
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 data-reveal className="text-5xl font-black md:text-7xl tracking-tighter mb-8">
              Ready to find your voice?
            </h2>
            <p data-reveal className="text-xl md:text-2xl text-destructive-foreground/90 leading-relaxed font-medium mb-12">
              Join over 50,000 learners mastering English with the world&apos;s most
              creative tech studio.
            </p>
            <div data-reveal className="flex flex-wrap justify-center gap-6">
              <button
                ref={waitlistRef}
                onMouseMove={waitlistMove}
                onMouseLeave={waitlistLeave}
                onClick={() => setContactOpen(true)}
                type="button"
                className="bg-background text-destructive px-10 py-6 rounded-full text-lg font-black hover:scale-105 active:scale-95 transition-transform shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] will-change-transform uppercase tracking-wider"
              >
                Join the Waitlist
              </button>
              <button
                ref={demoRef}
                onMouseMove={demoMove}
                onMouseLeave={demoLeave}
                type="button"
                className="bg-destructive-foreground/10 text-destructive-foreground px-10 py-6 rounded-full text-lg font-black border border-destructive-foreground/30 backdrop-blur-md hover:bg-destructive-foreground/20 hover:scale-105 active:scale-95 transition-all shadow-lg will-change-transform uppercase tracking-wider"
              >
                Watch the Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
