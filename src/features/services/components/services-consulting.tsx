"use client"

import Image from "next/image"
import { Lightbulb, CheckCircle2 } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const CONSULTING_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqDhFMBM1_D02DXs6rXgbWK_T9SeTeCl6ra8QraBsxHX-rGWH_tHYxeIRsaW8MK-oCReCnzoytNF85oRM1zmWsQ4MrznpYaddXXHSsvxFKmBaKfh4MTzXrLlVPQ_6KtMm-bRu6kjM29fhB2H3020822BNwRJYfchLH5xoLKWcV8puA6pa4sL82ZihYZGjQuSxEWRYPvtoiYpVpoHIUOdiZRWJ4ZKFpcVTyhZLaakFPaWMdUmt9xEIu"

const CONSULTING_FEATURES = [
  "Digital Strategy & Roadmap",
  "System Architecture Design",
  "AI Integration & Setup",
] as const

export function ServicesConsulting() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <NoiseOverlay opacity={0.15} />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center flex-col-reverse flex">
          
          <div className="mt-12 lg:mt-0">
            <div data-reveal className="inline-flex items-center justify-center p-3 bg-[var(--chart-4)]/10 rounded-xl mb-6 shadow-inner ring-1 ring-[var(--chart-4)]/30">
              <Lightbulb className="text-[var(--chart-4)] size-8" aria-hidden="true" />
            </div>
            <h2 data-reveal className="text-4xl md:text-[40px] leading-tight text-foreground mb-6 tracking-tight font-black">
              Consulting Services
            </h2>
            <p data-reveal className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Navigate the complex landscape of digital transformation with confidence. We offer expert guidance on technology strategy, system architecture, and seamless AI integration to future-proof your business operations.
            </p>
            
            <ul className="space-y-4 p-6 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
              {CONSULTING_FEATURES.map((feature) => (
                <li data-reveal key={feature} className="flex items-start">
                  <CheckCircle2 className="text-[var(--chart-4)] mr-3 mt-1 shrink-0" aria-hidden="true" />
                  <span className="font-bold text-foreground text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-reveal className="w-full">
            <div className="rounded-[32px] overflow-hidden shadow-2xl relative group ring-1 ring-border/50 transition-shadow duration-700 hover:shadow-[var(--chart-4)]/20 hover:shadow-[0_0_60px_-15px]">
              <div className="w-full h-[500px] relative">
                <Image 
                  src={CONSULTING_IMG}
                  alt="Modern architecture" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
