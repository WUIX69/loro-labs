import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Badge } from "@/components/ui/badge"

export function PricingHero() {
  return (
    <ScrollReveal>
      <section className="px-4 md:px-12 max-w-7xl mx-auto mb-24 pt-24">
        <div className="text-center md:text-left max-w-4xl">
          <Badge className="inline-flex px-3 py-4 bg-primary/20 rounded-full text-primary font-bold mb-6 shadow-sm uppercase tracking-widest text-xs">
            Our Pricing Model
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-[120px] lg:leading-[110px] font-black text-foreground mb-6 tracking-tighter">
            Investment in{" "}
            <span
              className="bg-gradient-to-r from-destructive via-[var(--chart-4)] to-primary bg-clip-text text-transparent"
            >
              Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Transparent, high-impact pricing designed for businesses that value creative precision
            and technical excellence. Let&apos;s build the future together.
          </p>
        </div>
      </section>
    </ScrollReveal>
  )
}
