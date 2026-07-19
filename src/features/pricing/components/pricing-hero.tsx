"use client"

import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"
import { Badge } from "@/components/ui/badge"

export function PricingHero() {
  const containerRef = useGsapReveal<HTMLElement>({ stagger: 0.15 })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-4 md:px-12 max-w-7xl mx-auto mb-24 pt-24"
    >
      <NoiseOverlay opacity={0.15} />

      <div
        className="absolute top-20 -left-20 w-96 h-96 bg-destructive rounded-full blur-[120px] opacity-20 animate-[blob-float_23s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center md:text-left max-w-4xl">
        <Badge
          data-reveal
          className="inline-flex px-3 py-4 bg-primary/20 rounded-full text-primary font-bold mb-6 shadow-sm uppercase tracking-widest text-xs"
        >
          Our Pricing Model
        </Badge>
        <h1
          data-reveal
          className="text-5xl md:text-7xl lg:text-[120px] lg:leading-[110px] font-black text-foreground mb-6 tracking-tighter"
        >
          Investment in{" "}
          <span className="bg-gradient-to-r from-destructive via-[var(--chart-4)] to-primary bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>
        <p
          data-reveal
          className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Transparent, high-impact pricing designed for businesses that value creative
          precision and technical excellence. Let&apos;s build the future together.
        </p>
      </div>
    </section>
  )
}
