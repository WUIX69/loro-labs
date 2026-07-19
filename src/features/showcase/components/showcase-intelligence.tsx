import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MessageCircle, Sparkles, ChevronRight } from "lucide-react"

const CHAT_UI_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWa2kCg44izVUJm8UfI8DRTsuDv0-jU_IvY5p3bCFDoGYPKqn4qOFkg8GyDP3D6Kwqs6ZGu7p8x8iJdKNMvfaG3s0y4j6U8mDyuMqa5cwKxjmVvtzqkM8baDcPCoG8Zojxxv2RuUWaOZJlx_Os3koRXWZmSiwoznBP4YFYuJ-1yriRjQosXaGzIkQWMl0e0XKin33c4noZwpDFrRLoB3KTmpNIgq-HqrOkZ9nwNidV-yUkZ0TNW0q0"

export function ShowcaseIntelligence() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
              Intelligence in <br />Every Syllable.
            </h2>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Traditional apps give you flashcards. Loro gives you a voice.
              Experience a linguistic leap forward with our intelligent tutor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-card border border-border rounded-[32px] p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--chart-4)" }}>
                  <MessageCircle className="size-7 text-background" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-foreground tracking-tight">AI Conversations</h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Engage in spontaneous, context-aware dialogues. Our AI understands nuance,
                corrects grammar subtly, and adapts its complexity to your performance.
              </p>
              <div className="mt-auto rounded-xl overflow-hidden shadow-lg">
                <Image
                  alt="Mobile chat interface"
                  src={CHAT_UI_IMG}
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-foreground text-background rounded-[32px] p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary">
                  <Sparkles className="size-7 text-secondary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">Personalized Paths</h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                No two journeys are the same. We analyze your vocabulary gaps and interests
                to build a custom curriculum that evolves with you daily.
              </p>
              <div className="space-y-3">
                {["Business English Module", "Public Speaking Mastery", "Grammar Refinement"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-background/5 border border-background/10 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{item}</span>
                      <ChevronRight className="size-4 opacity-50" aria-hidden="true" />
                    </div>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
