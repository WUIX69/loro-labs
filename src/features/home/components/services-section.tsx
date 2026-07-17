import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, BrainCircuit, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const BRAND_COLORS = {
  "destructive": "oklch(0.6356 0.2082 25.3782)",
  "chart-4": "oklch(0.6758 0.1453 238.462)",
  "primary": "oklch(0.6230 0.1688 149.178)",
  "secondary": "oklch(0.8611 0.1734 91.964)",
} as const

// 4×4 color grid pattern — inline styles to prevent Tailwind purge
const GRID_PATTERN = [
  "destructive","chart-4","primary","secondary",
  "chart-4","destructive","secondary","primary",
  "primary","secondary","destructive","chart-4",
  "secondary","primary","chart-4","destructive",
] as const

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Our <span style={{ color: 'oklch(0.6758 0.1453 238.462)' }}>Studio</span> Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            We provide full-spectrum digital creation services, from architecture to aesthetic.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" role="list">

          {/* Web & App Dev — 8/12 */}
          <article className="md:col-span-8" aria-label="Web & App Development service" role="listitem">
            <Card className={cn(
              "group bg-muted rounded-[32px] p-12 relative overflow-hidden min-h-[420px]",
              "flex flex-col justify-between hover:bg-destructive transition-all duration-500 border-0 h-full"
            )}>
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-sm">
                    <Code2 className="size-7 text-destructive" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-3 group-hover:text-white">
                    Web &amp; App{" "}
                    <span className="text-destructive group-hover:text-white">Development</span>
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 max-w-md text-sm leading-relaxed">
                    High-performance architectures tailored for scale. We build responsive, accessible,
                    and breathtaking digital platforms using modern tech stacks.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-6">
                  {["Next.js", "Tailwind", "React Native"].map(tag => (
                    <Badge
                      key={tag}
                      className="bg-white/20 backdrop-blur-md text-xs font-bold group-hover:bg-white group-hover:text-destructive transition-all rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </article>

          {/* AI Content — 4/12 */}
          <article className="md:col-span-4" aria-label="AI Content service" role="listitem">
            <Card className="rounded-[32px] p-12 flex flex-col items-start justify-end min-h-[420px] border-0 group hover:-translate-y-2 transition-all duration-500 shadow-lg h-full" style={{ backgroundColor: 'oklch(0.6758 0.1453 238.462)' }}>
              <CardContent className="p-0 w-full flex flex-col h-full">
                <div className="mb-auto pb-6">
                  <BrainCircuit className="size-14 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-3">
                    AI <span style={{ color: "oklch(0.6758 0.1453 238.462)", filter: "brightness(2)" }}>Content</span>
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Leveraging machine intelligence for generation, curation, and creative workflows that push boundaries.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-white font-semibold group-hover:gap-4 transition-all"
                  >
                    Explore AI Solutions <ArrowRight className="size-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Consulting — 6/12 */}
          <article className="md:col-span-6" aria-label="Creative Consulting service" role="listitem">
            <Card className="bg-primary rounded-[32px] p-12 flex flex-col justify-between border-0 group hover:shadow-xl transition-all duration-300 h-full min-h-[300px]">
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <Badge className="bg-background text-primary rounded-full px-3 py-1 text-xs font-bold mb-6">
                    STRATEGY
                  </Badge>
                  <h3 className="text-3xl font-extrabold text-primary-foreground mb-3">
                    <span className="text-primary-foreground/80">Creative</span> Consulting
                  </h3>
                  <p className="text-primary-foreground font-medium text-sm leading-relaxed">
                    Bridging the gap between business logic and creative vision. We help you find the
                    &ldquo;Why&rdquo; before we build the &ldquo;How&rdquo;.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex -space-x-3" aria-label="Partner avatars">
                    <Image src="https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM" alt="Sarah Avatar" width={56} height={56} className="w-14 h-14 rounded-full border-4 border-white object-cover object-[28%_30%]" />
                    <Image src="https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM" alt="David Avatar" width={56} height={56} className="w-14 h-14 rounded-full border-4 border-white object-cover object-[72%_30%]" />
                    <Image src="https://lh3.googleusercontent.com/aida/AP1WRLtkeyMxCo1QrbMVqadWNDyOk7IWS4HpsZX2TI0rac0JIaEzhFBB5yjccbqr50pMCIE2NTbxUbLBZ9LIe17k1Si6KPOVcxzE_JMb9svBl_BTEqy89p-T2dY18g33umPYWoLQB5Qu2SbxV2fihv06bprxDBoBFVhyFw-P-z-imgrR_NZ-JpKEv1kZG_SmbevFEVo-r7129dax3OgkglHiCj1G2i3IhUF_7cUHHn4DjlBpgnwiCRg5bUX3JdM" alt="Maria Avatar" width={56} height={56} className="w-14 h-14 rounded-full border-4 border-white object-cover object-[28%_70%]" />
                  </div>
                  <span className="font-black text-primary-foreground text-lg">32+ Partners</span>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Immersive Vision — 6/12 */}
          <article className="md:col-span-6" aria-label="Immersive Vision showcase" role="listitem">
            <Card className="bg-foreground rounded-[32px] p-12 text-background flex items-center justify-center relative overflow-hidden border-0 group shadow-lg min-h-[300px] h-full">
              <CardContent className="p-0 relative z-10 text-center">
                <div className="text-7xl font-black text-secondary mb-2 drop-shadow-lg">100%</div>
                <div className="text-3xl font-extrabold">
                  Immersive{" "}
                  <span className="text-4xl" style={{ color: '#ffc091' }}>Vision</span>
                </div>
              </CardContent>
              {/* Color grid — inline styles prevent Tailwind purge */}
              <div
                className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity"
                aria-hidden="true"
              >
                <div className="grid grid-cols-4 grid-rows-4 gap-3 w-full h-full p-6">
                  {GRID_PATTERN.map((color, i) => (
                    <div
                      key={i}
                      className="rounded-lg"
                      style={{ backgroundColor: BRAND_COLORS[color] }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </article>

        </div>
      </div>
    </section>
  )
}
