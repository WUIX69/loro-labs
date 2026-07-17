import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Zap, Apple, Smartphone } from "lucide-react"

const FEATHER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJMNXdCeXKAbSb3-zjgmwM5F5xZD-4j4k_8k_4ESbmlcXW42tP-Ci93Rhw6AdA4-IcbfnGHnCMvM2ps00Qrp_16dunHfztBIkajra428SA3gsiRQ62Ut4eaOTx6Oi21dZX6Lihyf-BeUK5B1lOdBORUd2Iut2thWbXgSQc3esGKn9aE8_NYAi3vvuKoGtICrGfozqNdhcDcB4SED7OWO0tumRowXO1JH2Cv3kmum3qzAduw6CT-KffCgalLoL6c2xiWQ"



export function ShowcaseHero() {
  return (
    <ScrollReveal>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Vibrant feather macro background"
            src={FEATHER_IMG}
            fill
            className="object-cover opacity-30 dark:opacity-40"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background dark:via-background/50 dark:to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <Zap className="size-4" aria-hidden="true" />
            NOW IN BETA
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tighter text-foreground md:text-7xl lg:text-8xl mb-8">
            Experience the{" "}
            <span className="text-destructive">Future</span> of Loro AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Master English naturally through immersive, real-time AI conversations
            designed to fit your unique learning style and professional goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-xl">
              <Apple className="size-8" aria-hidden="true" />
              <div className="text-left">
                <p className="text-[10px] uppercase leading-none opacity-70">Download on the</p>
                <p className="text-lg font-bold leading-tight">App Store</p>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-xl">
              <Smartphone className="size-8" aria-hidden="true" />
              <div className="text-left">
                <p className="text-[10px] uppercase leading-none opacity-70">GET IT ON</p>
                <p className="text-lg font-bold leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
