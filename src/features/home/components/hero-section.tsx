import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { ParallaxBackground } from "./parallax-background"
import { HeroCarousel } from "./hero-carousel"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 md:px-12 bg-background overflow-hidden pb-12"
    >
      {/* GPU-composited parallax (client leaf) */}
      <ParallaxBackground />

      {/* Static content — stays server */}
      <div className="relative z-10 max-w-5xl mx-auto py-24">
        <Badge className="inline-flex gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-green-500 border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
          <Rocket className="size-4" aria-hidden="true" />
          Ready for Takeoff
        </Badge>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          Flight &amp; Fueled by{" "}
          <span className="text-primary">Imagination</span>
        </h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Creative Tech Studio for Innovative Solutions. We blend the precision of engineering
          with the vibrant colors of creativity to build digital experiences that soar.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button className="rounded-full bg-primary text-white px-12 py-6 text-base font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/30">
            Start Your Project
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-2 border-white text-white px-12 py-6 text-base font-bold hover:bg-white hover:text-foreground transition-all backdrop-blur-sm bg-transparent"
          >
            View Showcase
          </Button>
        </div>

        {/* Carousel with ambient glow blobs */}
        <div className="relative w-full">
          <HeroCarousel />
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-500 rounded-full blur-[80px] opacity-30 animate-pulse pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-30 animate-pulse pointer-events-none"
            style={{ animationDelay: "700ms" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
