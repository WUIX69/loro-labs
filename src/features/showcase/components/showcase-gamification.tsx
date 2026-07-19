"use client"

import Image from "next/image"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const ARENA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDH-GNal391jkKwDyjYUZdSj5kMx2VRZARjQWkHzMyL7iHZ9QaobXOCw9o5bXiU2PMOEWhmdL3tHyNDVD7QW1G2qtQR4PKqxlB1AfHCe3vEH4UhEv3b_Ee9XXYNIk__Wa-xiG0rSsyFB_vj8Flndun61eGmsX2HypOFKhtebN7POo-AODfLdQalSh2xivWJVhKsaAeVROiWnEM98vLAaDIxWnH7sBovZzXtVFNvEMXtT5yNjMGjcKnH"

const TROPHY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbCmoYYW_2X5GI9n6vCXDJz2OfS_79Grp1LjmkUbSPu7ACsvn3avdPGa0GV6wgF_L8v3vKZRNkBoQEDibFNIvrKda3cZeMeNK6c1BoPVqjL4zYLVedMn8LHn7waMJ-z1NbgdDmuSj2pECKPGnr39WYmaXcN95qV_yxlu2brRUBLQqFej3K6kQfrd0g3gFevreh17S2LJ8OZbapxmSLYifp7XDJHMVGdMtTE8XoKev_E-Sjwt1z0wIz"

export function ShowcaseGamification() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className="px-6 py-24 md:px-10 relative bg-background overflow-hidden">
      <NoiseOverlay opacity={0.15} />
      
      <div ref={containerRef} className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 data-reveal className="text-4xl font-black tracking-tight text-foreground md:text-6xl mb-6">
            Gamified Skill-building
          </h2>
          <p data-reveal className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Learning doesn&apos;t have to be a chore. We&apos;ve built an ecosystem where
            consistency is rewarded and progress is genuinely fun.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div data-reveal className="relative group overflow-hidden rounded-[40px] bg-foreground/5 backdrop-blur-xl border border-border/50 aspect-[16/9] flex flex-col justify-end p-8 md:p-12 transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-destructive/30">
            <div className="absolute inset-0 bg-destructive/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <Image
              alt="Loro Labs Arena"
              src={ARENA_IMG}
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-destructive font-bold tracking-widest text-xs uppercase mb-4 block drop-shadow-md">
                Mastery League
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-background mb-4 tracking-tight drop-shadow-lg">
                Daily Quests
              </h3>
              <p className="text-background/80 max-w-md text-sm md:text-base leading-relaxed drop-shadow">
                Complete bite-sized challenges tailored to your level and earn daily
                experience points.
              </p>
            </div>
          </div>

          <div data-reveal className="relative group overflow-hidden rounded-[40px] bg-card/50 backdrop-blur-xl border border-border/50 aspect-[16/9] flex flex-col justify-end p-8 md:p-12 transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-[var(--chart-4)]/30">
            <div className="absolute inset-0 bg-[var(--chart-4)]/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <Image
              alt="Skill Trophies"
              src={TROPHY_IMG}
              fill
              className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-[var(--chart-4)] font-bold tracking-widest text-xs uppercase mb-4 block drop-shadow-md">
                Showcase | Loro Labs
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight drop-shadow-lg">
                Skill Trophies
              </h3>
              <p className="text-foreground/80 max-w-md text-sm md:text-base leading-relaxed drop-shadow">
                Unlock permanent badges and showcase your expertise to the community
                with verifiable proof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
