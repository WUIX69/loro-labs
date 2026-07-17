import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { BRAND_PARROT_URL } from "@/data/home"

const BRAND_FEATURES = [
  {
    color: "primary" as const,
    title: "Smart Automation",
    body: "Streamlining workflows with intelligent parrot-fast logic.",
  },
  {
    color: "blue-500" as const,
    title: "Global Reach",
    body: "Designed in Quezon City, scaled for the world.",
  },
]

type BrandColor = "primary" | "blue-500"

const BG_MAP: Record<BrandColor, string> = {
  "primary": "bg-primary",
  "blue-500": "bg-blue-500",
}

export function BrandShowcase() {
  return (
    <section id="showcase" className="py-24 px-4 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Text side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
            Intelligence meets{" "}
            <span className="text-primary">vibrancy</span>.
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Just like our mascot, we thrive in diverse environments, bringing color and sharp
            vision to every project we touch. We don&apos;t just solve problems; we imagine possibilities.
          </p>
          <ul className="space-y-6" aria-label="Key capabilities">
            {BRAND_FEATURES.map(f => (
              <li key={f.title} className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-1 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-md",
                    BG_MAP[f.color]
                  )}
                  aria-hidden="true"
                >
                  <Check className="size-5" />
                </div>
                <div>
                  <h3 className="font-black text-foreground text-lg">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image side — rainbow-pulse animated circle */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative aspect-square w-full max-w-md rounded-full border-8 p-2"
            style={{ animation: "rainbow-pulse 4s infinite linear" }}
            aria-hidden="true"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
              <Image
                src={BRAND_PARROT_URL}
                alt="Intelligent parrot at a holographic screen representing Loro Labs' vision"
                fill
                className="object-cover scale-110"
                sizes="(max-width: 768px) 90vw, 448px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
