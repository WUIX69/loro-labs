import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { FileEdit, CheckCircle2 } from "lucide-react"

const AI_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnxsTfbT49WIIy61n3wMu66eeal5ThLhmBdbt8BvqClp-19ZZ3zjiBWyBmD0LwSQHGeC_XdEiHamb_n0iiDbWT5zpXyJdkAdbd1b4DCSMM8sECyfF8eXTtaCz3GMsUqsOgTkLyUa7n_CCyvfzP1q7MgU798LMX9eGpdwlI-xIxy69AT717fB27ocwsWnBsJemX_j0rCvdBiF0nb2SHLMw3tPVByEP_SrYg4rgHH5rteawTSCbfLO44"

const AI_FEATURES = [
  "Branded Copywriting",
  "Custom Image Generation",
  "Automated Video Production",
] as const

export function ServicesAi() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <ScrollReveal>
            <div className="mb-12 lg:mb-0 rounded-[32px] overflow-hidden shadow-2xl relative">
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
          </ScrollReveal>

          <div>
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center justify-center p-3 bg-[var(--chart-2)]/20 rounded-xl mb-6">
                <FileEdit className="text-[var(--chart-2)] size-8" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-[40px] leading-tight text-foreground mb-6 tracking-tight font-black">
                AI Content Creation
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Elevate your brand&apos;s voice with state-of-the-art AI generated content. We produce high-quality, branded text, compelling imagery, and engaging videos that resonate with your target audience at scale.
              </p>
            </ScrollReveal>
            
            <ul className="space-y-4">
              {AI_FEATURES.map((feature, idx) => (
                <ScrollReveal as="li" delay={300 + idx * 100} key={feature} className="flex items-start">
                  <CheckCircle2 className="text-[var(--chart-2)] mr-3 mt-1 shrink-0" aria-hidden="true" />
                  <span className="font-bold text-foreground text-lg">{feature}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
