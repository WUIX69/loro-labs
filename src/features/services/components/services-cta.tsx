"use client"

import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { useMagnetic } from "@/hooks/use-magnetic"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

export function ServicesCta() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })
  const { ref: magneticRef, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>(0.3)

  return (
    <section className="bg-background relative py-24">
      <div ref={containerRef} className="max-w-5xl mx-auto rounded-[40px] bg-foreground text-background p-12 md:p-[96px] text-center relative overflow-hidden shadow-2xl ring-1 ring-border">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-tr from-destructive via-[var(--chart-4)] to-[var(--chart-2)] blur-[100px] animate-[blob-float_20s_infinite_alternate]"></div>
        </div>
        
        <NoiseOverlay opacity={0.5} />
        
        <div className="relative z-10">
          <h2 data-reveal className="text-5xl md:text-[60px] leading-tight mb-8 font-black uppercase tracking-tight">
            Ready to Transform Your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-destructive">Digital Presence</span>?
          </h2>
          <p data-reveal className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto mb-12 font-medium">
            Let&apos;s discuss how our expertise can help you achieve your business goals. Get in touch for a custom quote tailored to your specific needs.
          </p>
          <div data-reveal className="inline-block">
            <button
              ref={magneticRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              type="button"
              className="bg-background text-foreground px-[56px] py-6 rounded-full text-base font-black hover:scale-105 transition-transform active:scale-95 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] uppercase will-change-transform"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
