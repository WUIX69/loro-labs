"use client"

import Image from "next/image"
import { MessageCircle, Sparkles, ChevronRight } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const CHAT_UI_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWa2kCg44izVUJm8UfI8DRTsuDv0-jU_IvY5p3bCFDoGYPKqn4qOFkg8GyDP3D6Kwqs6ZGu7p8x8iJdKNMvfaG3s0y4j6U8mDyuMqa5cwKxjmVvtzqkM8baDcPCoG8Zojxxv2RuUWaOZJlx_Os3koRXWZmSiwoznBP4YFYuJ-1yriRjQosXaGzIkQWMl0e0XKin33c4noZwpDFrRLoB3KTmpNIgq-HqrOkZ9nwNidV-yUkZ0TNW0q0"

export function ShowcaseIntelligence() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <NoiseOverlay opacity={0.15} />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 data-reveal className="text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
            Intelligence in <br />Every Syllable.
          </h2>
          <p data-reveal className="max-w-md text-xl text-muted-foreground leading-relaxed mb-2">
            Traditional apps give you flashcards. Loro gives you a voice.
            Experience a linguistic leap forward with our intelligent tutor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-reveal className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-[40px] p-8 md:p-12 flex flex-col h-full transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-[var(--chart-4)]/20 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[var(--chart-4)]/10 ring-1 ring-[var(--chart-4)]/30 group-hover:bg-[var(--chart-4)]/20 transition-colors">
                <MessageCircle className="size-8 text-[var(--chart-4)]" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-black text-foreground tracking-tight">AI Conversations</h3>
            </div>
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
              Engage in spontaneous, context-aware dialogues. Our AI understands nuance,
              corrects grammar subtly, and adapts its complexity to your performance.
            </p>
            <div className="mt-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 relative">
              <div className="absolute inset-0 bg-[var(--chart-4)]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <Image
                alt="Mobile chat interface"
                src={CHAT_UI_IMG}
                width={600}
                height={400}
                className="w-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          <div data-reveal className="bg-foreground text-background rounded-[40px] p-8 md:p-12 flex flex-col h-full transition-shadow duration-700 hover:shadow-[0_0_60px_-15px] hover:shadow-secondary/30 relative overflow-hidden group">
            {/* Ambient glow inside the dark card */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-secondary/20 blur-[100px] rounded-full group-hover:bg-secondary/30 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-secondary ring-1 ring-secondary-foreground/20 group-hover:scale-105 transition-transform">
                  <Sparkles className="size-8 text-secondary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-black tracking-tight">Personalized Paths</h3>
              </div>
              <p className="text-background/80 mb-12 text-lg leading-relaxed">
                No two journeys are the same. We analyze your vocabulary gaps and interests
                to build a custom curriculum that evolves with you daily.
              </p>
              <div className="space-y-4">
                {["Business English Module", "Public Speaking Mastery", "Grammar Refinement"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-background/10 backdrop-blur-md border border-background/10 rounded-2xl p-5 flex items-center justify-between group/item hover:bg-background/20 transition-colors cursor-pointer"
                    >
                      <span className="text-lg font-bold">{item}</span>
                      <ChevronRight className="size-5 opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
