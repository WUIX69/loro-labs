"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactSheet } from "@/components/layout/contact-sheet"
import { NoiseOverlay } from "@/components/shared/noise-overlay"
import { useMagnetic } from "@/hooks/use-magnetic"

export function CtaBanner() {
  const [contactOpen, setContactOpen] = useState(false)
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>(0.25)

  return (
    <>
      <section className="py-24 px-4 md:px-12" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto rounded-[64px] bg-[#0e0f0c] text-white px-8 md:px-24 py-24 text-center relative overflow-hidden shadow-2xl">
          {/* Gradient glow */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="w-full h-full blur-[120px] living-gradient-animate" style={{ backgroundImage: 'linear-gradient(to top right, oklch(0.6356 0.2082 25.3782), oklch(0.6758 0.1453 238.462), oklch(0.6230 0.1688 149.178))' }} />
          </div>
          <NoiseOverlay opacity={0.04} />
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              Ready to give your ideas{" "}
              <span className="text-primary">wings</span>?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join forces with Loro Labs and let&apos;s build the future of tech together.
              We&apos;re ready for takeoff.
            </p>
            <Button
              ref={ref}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              onClick={() => setContactOpen(true)}
              className="bg-destructive text-destructive-foreground px-14 py-6 rounded-full text-base font-extrabold active:scale-95 shadow-2xl shadow-destructive/30 hover:bg-destructive/90"
              aria-haspopup="dialog"
            >
              Let&apos;s Talk Business
            </Button>
          </div>
        </div>
      </section>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
