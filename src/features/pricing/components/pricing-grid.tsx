"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Smartphone, Lightbulb, Sparkles, CheckCircle } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { Button } from "@/components/ui/button"

const FEATHER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHG2-BHCkZVqcFh3P0BqPUE7Xm3A5rU9lh-BktBhyvP212SKkyJFyrZtYTxjbEVqtlW3gj9wEw3kXNFPS8setpUz5Yn4gT4Jp2UFlSO0_bY4euaT1GLVq_GojgZMu-8kHkp_cN-_m5meE2D7dT0K6kr_ud9WSACxCio7Rez9x3NXVd795zKS2KYYTZCutOh-9-tk6O9PAcnAu2erK5G62PB2RI4MKNfXclfkeO64mszRJAFELbtPFp"

const MONTHLY = {
  web: "₱49,999",
  app: "₱199,999",
  consulting: "₱2,999",
  content: "₱4,999",
}

const ANNUAL = {
  web: "₱499,999",
  app: "₱1,999,999",
  consulting: "₱2,999",
  content: "₱4,999",
}

const TAGS_WEB = ["React/Next.js", "LLM Integration", "Cloud Architecture"]
const TAGS_CONSULTING = ["60-min Deep Dive", "Strategy Report"]

export function PricingGrid() {
  const [isAnnual, setIsAnnual] = useState(false)
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  useEffect(() => {
    if (typeof window === "undefined") return
    let isMounted = true
    let ctx: { revert?: () => void } = {}
    import("gsap").then(({ default: gsap }) => {
      if (!isMounted) return
      const prices = containerRef.current?.querySelectorAll("[data-price]")
      if (!prices?.length) return
      ctx = gsap.context(() => {
        gsap.from(prices, {
          y: -10,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        })
      })
    })
    return () => {
      isMounted = false
      ctx.revert?.()
    }
  }, [isAnnual, containerRef])

  const prices = isAnnual ? ANNUAL : MONTHLY

  return (
    <section className="px-4 md:px-12 max-w-7xl mx-auto relative">
      <div data-reveal className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-muted p-1.5 rounded-full">
          <button
            onClick={() => setIsAnnual(false)}
            type="button"
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              !isAnnual
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            type="button"
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              isAnnual
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Annual{" "}
            <span className="text-destructive text-xs ml-1">Save 20%</span>
          </button>
        </div>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Web & AI Platform — 8/12 */}
        <div data-reveal className="md:col-span-8">
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 p-12 rounded-[32px] flex flex-col justify-between transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-primary/30 group h-full">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="size-7 text-destructive" aria-hidden="true" />
                    <h3 className="text-3xl font-black text-foreground">Web &amp; AI Platform</h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    Full-stack modern web solutions integrated with custom AI models to
                    automate workflows and enhance user engagement.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    {isAnnual ? "Per year" : "Starts at"}
                  </p>
                  <div data-price className="text-4xl font-black text-foreground mt-1">
                    {prices.web}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {TAGS_WEB.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium group-hover:bg-destructive/10 group-hover:text-destructive transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* App Development (FEATURED) — 4/12 */}
        <div data-reveal className="md:col-span-4">
          <div className="bg-foreground text-background p-12 rounded-[32px] flex flex-col justify-between transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-destructive/30 group h-full relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
              <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-tr from-destructive via-[var(--chart-4)] to-primary blur-[120px] animate-[blob-float_20s_infinite_alternate]" />
            </div>
            <div
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700 bg-destructive/20"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold mb-6 shadow-sm">
                MOST POPULAR
              </span>
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="size-7" style={{ color: "var(--chart-4)" }} aria-hidden="true" />
                <h3 className="text-3xl font-black">App Development</h3>
              </div>
              <p className="text-sm text-background/80 leading-relaxed mb-12">
                Bespoke iOS and Android experiences built with Flutter or React Native for
                maximum performance and reach.
              </p>
            </div>
            <div className="relative z-10 mt-auto">
              <div data-price className="text-4xl font-black text-destructive mb-4">
                {prices.app}
                <span className="block text-xs font-medium text-background/60 mt-1">
                  {isAnnual ? "per year" : "per project"}
                </span>
              </div>
              <Button className="w-full rounded-full bg-destructive text-destructive-foreground py-6 text-base font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-destructive/20">
                Start Project
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Consulting — 5/12 */}
        <div data-reveal className="md:col-span-5">
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 p-12 rounded-[32px] flex flex-col justify-between transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-primary/30 group h-full relative overflow-hidden">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="size-7 text-primary" aria-hidden="true" />
                <h3 className="text-3xl font-black text-foreground">Tech Consulting</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High-level strategic sessions for CTOs and founders to roadmap their
                technical infrastructure and AI adoption.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-4">
                <span data-price className="text-3xl font-black text-foreground">
                  {prices.consulting}
                </span>
                <span className="text-sm text-muted-foreground font-medium">/ session</span>
              </div>
              <div className="h-px w-full bg-foreground/10 mb-4" />
              <ul className="space-y-3 text-sm font-medium text-foreground">
                {TAGS_CONSULTING.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-primary shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* AI Content — 7/12 */}
        <div data-reveal className="md:col-span-7">
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 p-12 rounded-[32px] flex flex-col md:flex-row gap-6 transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-primary/30 group h-full">
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="size-7 text-secondary" aria-hidden="true" />
                  <h3 className="text-3xl font-black text-foreground">AI Content</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scalable creative campaigns leveraging generative AI for stunning visuals
                  and copy.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-baseline gap-1">
                  <span data-price className="text-3xl font-black text-foreground">
                    {prices.content}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">/ campaign</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[240px] rounded-2xl overflow-hidden shadow-inner mt-4 md:mt-0">
              <div className="absolute inset-0 bg-foreground/5 z-10 transition-colors group-hover:bg-transparent" />
              <Image
                src={FEATHER_IMG}
                alt="Close up high-resolution macro photography of vibrant tropical parrot feathers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
