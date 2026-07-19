import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { TESTIMONIALS, TESTIMONIALS_BG_URL } from "@/data/home"
import { cn } from "@/lib/utils"

const BORDER_MAP = {
  "green-500": "border-green-500",
  "blue-500":  "border-blue-500",
  "destructive": "border-destructive",
} as const

// Duplicate cards for seamless infinite loop with stable keys
const TESTIMONIAL_CARDS = [
  ...TESTIMONIALS.map(t => ({ ...t, _key: `${t.id}-1` })),
  ...TESTIMONIALS.map(t => ({ ...t, _key: `${t.id}-2` }))
]

export function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={TESTIMONIALS_BG_URL}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            What Our <span style={{ color: 'oklch(0.6758 0.1453 238.462)' }}>Partners</span> Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Success stories from teams who gave their ideas wings with Loro Labs.
          </p>
        </header>
      </div>

      {/* Ticker — pause-on-hover via CSS class in globals.css */}
      <div className="relative w-full overflow-hidden testimonials-ticker">
        <div
          className="flex gap-6 w-max py-4 testimonials-track"
          style={{ animation: "infinite-scroll 30s linear infinite" }}
        >
          {TESTIMONIAL_CARDS.map((t) => (
            <Card
              key={t._key}
              className="w-[400px] rounded-[32px] shrink-0 border border-white/10 shadow-xl bg-background/75 backdrop-blur-xl"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className={cn("w-16 h-16 border-2", BORDER_MAP[t.avatarBorder])}>
                    <AvatarImage src={t.avatarUrl} alt={`Photo of ${t.name}`} />
                    <AvatarFallback className="bg-muted text-foreground font-bold">
                      {t.avatarFallback}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{t.name}</h3>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
