"use client"

import Image from "next/image"
import { FileEdit, CheckCircle2 } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const AI_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnxsTfbT49WIIy61n3wMu66eeal5ThLhmBdbt8BvqClp-19ZZ3zjiBWyBmD0LwSQHGeC_XdEiHamb_n0iiDbWT5zpXyJdkAdbd1b4DCSMM8sECyfF8eXTtaCz3GMsUqsOgTkLyUa7n_CCyvfzP1q7MgU798LMX9eGpdwlI-xIxy69AT717fB27ocwsWnBsJemX_j0rCvdBiF0nb2SHLMw3tPVByEP_SrYg4rgHH5rteawTSCbfLO44"

const AI_FEATURES = [
  "Branded Copywriting",
  "Custom Image Generation",
  "Automated Video Production",
] as const

export function ServicesAi() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <NoiseOverlay opacity={0.15} />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div data-reveal className="mb-12 lg:mb-0 rounded-[32px] overflow-hidden shadow-2xl relative group ring-1 ring-border/50 transition-shadow duration-700 hover:shadow-[var(--chart-2)]/20 hover:shadow-[0_0_60px_-15px]">
            <div className="w-full h-[500px] relative">
              <Image 
                src={AI_IMG}
                alt="AI generated parrot" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <div data-reveal className="inline-flex items-center justify-center p-3 bg-[var(--chart-2)]/20 rounded-xl mb-6 shadow-inner ring-1 ring-[var(--chart-2)]/30">
              <FileEdit className="text-[var(--chart-2)] size-8" aria-hidden="true" />
            </div>
            <h2 data-reveal className="text-4xl md:text-[40px] leading-tight text-foreground mb-6 tracking-tight font-black">
              AI Content Creation
            </h2>
            <p data-reveal className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Elevate your brand&apos;s voice with state-of-the-art AI generated content. We produce high-quality, branded text, compelling imagery, and engaging videos that resonate with your target audience at scale.
            </p>
            
            <ul className="space-y-4 p-6 bg-background/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
              {AI_FEATURES.map((feature) => (
                <li data-reveal key={feature} className="flex items-start">
                  <CheckCircle2 className="text-[var(--chart-2)] mr-3 mt-1 shrink-0" aria-hidden="true" />
                  <span className="font-bold text-foreground text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
