import Image from "next/image"
import { Globe, Smartphone, Lightbulb, Sparkles, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const FEATHER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHG2-BHCkZVqcFh3P0BqPUE7Xm3A5rU9lh-BktBhyvP212SKkyJFyrZtYTxjbEVqtlW3gj9wEw3kXNFPS8setpUz5Yn4gT4Jp2UFlSO0_bY4euaT1GLVq_GojgZMu-8kHkp_cN-_m5meE2D7dT0K6kr_ud9WSACxCio7Rez9x3NXVd795zKS2KYYTZCutOh-9-tk6O9PAcnAu2erK5G62PB2RI4MKNfXclfkeO64mszRJAFELbtPFp"

export function PricingGrid() {
  return (
    <section className="px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Web & AI Platform — 8/12 */}
        <ScrollReveal delay={100} className="md:col-span-8">
          <div className="bg-card border border-border p-12 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="size-7 text-destructive" aria-hidden="true" />
                    <h3 className="text-3xl font-black text-foreground">Web &amp; AI Platform</h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    Full-stack modern web solutions integrated with custom AI models to automate workflows and enhance user engagement.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Starts at</p>
                  <div className="text-4xl font-black text-foreground mt-1">₱49,999</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["React/Next.js", "LLM Integration", "Cloud Architecture"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium group-hover:bg-destructive/10 group-hover:text-destructive transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* App Development (FEATURED) — 4/12 */}
        <ScrollReveal delay={200} className="md:col-span-4">
          <div className="bg-foreground text-background p-12 rounded-[32px] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group h-full relative overflow-hidden">
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
                Bespoke iOS and Android experiences built with Flutter or React Native for maximum performance and reach.
              </p>
            </div>
            <div className="relative z-10 mt-auto">
              <div className="text-4xl font-black text-destructive mb-4">₱199,999</div>
              <Button className="w-full rounded-full bg-destructive text-destructive-foreground py-6 text-base font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-destructive/20">
                Start Project
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Tech Consulting — 5/12 */}
        <ScrollReveal delay={300} className="md:col-span-5">
          <div className="bg-muted p-12 rounded-[32px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="size-7 text-primary" aria-hidden="true" />
                <h3 className="text-3xl font-black text-foreground">Tech Consulting</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High-level strategic sessions for CTOs and founders to roadmap their technical infrastructure and AI adoption.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black text-foreground">₱2,999</span>
                <span className="text-sm text-muted-foreground font-medium">/ session</span>
              </div>
              <div className="h-px w-full bg-foreground/10 mb-4" />
              <ul className="space-y-3 text-sm font-medium text-foreground">
                {["60-min Deep Dive", "Strategy Report"].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-primary shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* AI Content — 7/12 */}
        <ScrollReveal delay={400} className="md:col-span-7">
          <div className="bg-card border border-border p-12 rounded-[32px] flex flex-col md:flex-row gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="size-7 text-secondary" aria-hidden="true" />
                  <h3 className="text-3xl font-black text-foreground">AI Content</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scalable creative campaigns leveraging generative AI for stunning visuals and copy.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-foreground">₱4,999</span>
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
        </ScrollReveal>

      </div>
    </section>
  )
}
