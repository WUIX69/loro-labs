"use client"

import { useState } from "react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { useMagnetic } from "@/hooks/use-magnetic"
import { NoiseOverlay } from "@/components/shared/noise-overlay"
import { ContactSheet } from "@/components/layout/contact-sheet"

export function PricingCta() {
  const [contactOpen, setContactOpen] = useState(false)

  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })
  const { ref: scheduleRef, onMouseMove: scheduleMove, onMouseLeave: scheduleLeave } =
    useMagnetic<HTMLButtonElement>(0.3)
  const { ref: processRef, onMouseMove: processMove, onMouseLeave: processLeave } =
    useMagnetic<HTMLButtonElement>(0.3)

  return (
    <>
      <section className="mt-24 mb-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-[40px] bg-foreground px-8 py-24 text-center text-background max-w-6xl mx-auto shadow-2xl ring-1 ring-border/50"
        >
          <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-tr from-destructive via-[var(--chart-4)] to-primary blur-[120px] animate-[blob-float_20s_infinite_alternate]" />
          </div>

          <NoiseOverlay opacity={0.2} />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2
              data-reveal
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            >
              Need a Custom Solution?
            </h2>
            <p
              data-reveal
              className="text-lg text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Every project at Loro Labs is unique. If your requirements don&apos;t fit
              these tiers, our team will craft a bespoke proposal tailored to your specific
              goals.
            </p>
            <div data-reveal className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                ref={scheduleRef}
                onMouseMove={scheduleMove}
                onMouseLeave={scheduleLeave}
                onClick={() => setContactOpen(true)}
                type="button"
                className="bg-background text-foreground px-12 py-6 rounded-full text-base font-bold hover:scale-105 active:scale-95 transition-transform shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] will-change-transform"
              >
                Schedule Discovery Call
              </button>
              <button
                ref={processRef}
                onMouseMove={processMove}
                onMouseLeave={processLeave}
                type="button"
                className="bg-background/10 text-background px-12 py-6 rounded-full text-base font-bold border border-background/30 backdrop-blur-md hover:bg-background/20 hover:scale-105 active:scale-95 transition-all shadow-lg will-change-transform"
              >
                View Process
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
