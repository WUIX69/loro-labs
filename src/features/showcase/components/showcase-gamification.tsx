import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const ARENA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDH-GNal391jkKwDyjYUZdSj5kMx2VRZARjQWkHzMyL7iHZ9QaobXOCw9o5bXiU2PMOEWhmdL3tHyNDVD7QW1G2qtQR4PKqxlB1AfHCe3vEH4UhEv3b_Ee9XXYNIk__Wa-xiG0rSsyFB_vj8Flndun61eGmsX2HypOFKhtebN7POo-AODfLdQalSh2xivWJVhKsaAeVROiWnEM98vLAaDIxWnH7sBovZzXtVFNvEMXtT5yNjMGjcKnH"

const TROPHY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbCmoYYW_2X5GI9n6vCXDJz2OfS_79Grp1LjmkUbSPu7ACsvn3avdPGa0GV6wgF_L8v3vKZRNkBoQEDibFNIvrKda3cZeMeNK6c1BoPVqjL4zYLVedMn8LHn7waMJ-z1NbgdDmuSj2pECKPGnr39WYmaXcN95qV_yxlu2brRUBLQqFej3K6kQfrd0g3gFevreh17S2LJ8OZbapxmSLYifp7XDJHMVGdMtTE8XoKev_E-Sjwt1z0wIz"

export function ShowcaseGamification() {
  return (
    <section className="px-6 py-24 md:px-10">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Gamified Skill-building
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Learning doesn&apos;t have to be a chore. We&apos;ve built an ecosystem where
            consistency is rewarded and progress is genuinely fun.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        <ScrollReveal delay={100}>
          <div className="relative group overflow-hidden rounded-[32px] bg-foreground aspect-[16/9] flex flex-col justify-end p-8 md:p-12">
            <Image
              alt="Loro Labs Arena"
              src={ARENA_IMG}
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
            <div className="relative z-10">
              <span className="text-destructive font-bold tracking-widest text-xs uppercase mb-4 block">
                Mastery League
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-background mb-4 tracking-tight">
                Daily Quests
              </h3>
              <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
                Complete bite-sized challenges tailored to your level and earn daily
                experience points.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative group overflow-hidden rounded-[32px] bg-card border border-border aspect-[16/9] flex flex-col justify-end p-8 md:p-12">
            <Image
              alt="Skill Trophies"
              src={TROPHY_IMG}
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="text-destructive font-bold tracking-widest text-xs uppercase mb-4 block">
                Showcase | Loro Labs
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
                Skill Trophies
              </h3>
              <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
                Unlock permanent badges and showcase your expertise to the community
                with verifiable proof.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
