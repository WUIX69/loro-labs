"use client"

import Image from "next/image"
import { Code, CheckCircle2 } from "lucide-react"
import { useGsapReveal } from "@/hooks/use-gsap-reveal"
import { NoiseOverlay } from "@/components/shared/noise-overlay"

const WEB_APP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAoR499gcL7K7lUXToCKaoJfog1tpAWmmm8R08Md0mC7X-Bpx3lNCwxxBlx_P88008tTO8vF6_UflhzDoLcYGHrBHYEMxun9uVniXdep0mOeiFHccv0KtJig_-J-txJyMPCdtwY2P0K-_pbnSlbnvjxT7c3btFaLEGvAKX4gHkuMWQJ-p9An1dusNDH2SmWVcuDAf2C3C5K6_rIuK-SFjn6WlBW-oyIna51igNZ-grXiZsQoEfTvSuB"

const WEB_APP_FEATURES = [
  "Custom AI SaaS Solutions",
  "Responsive Web Applications",
  "High-Performance Landing Pages",
] as const

export function ServicesWebApp() {
  const containerRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      <NoiseOverlay opacity={0.15} />
      
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div data-reveal className="mb-12 lg:mb-0 rounded-[32px] overflow-hidden shadow-2xl relative group ring-1 ring-border/50 transition-all duration-700 hover:shadow-destructive/20 hover:shadow-[0_0_60px_-15px]">
            <div className="absolute inset-0 bg-destructive/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <div className="w-full h-[500px] relative transition-all duration-700 ease-in-out">
              <Image 
                src={WEB_APP_IMG}
                alt="Web development" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <div data-reveal className="inline-flex items-center justify-center p-3 bg-destructive/10 rounded-xl mb-6 shadow-inner ring-1 ring-destructive/20">
              <Code className="text-destructive size-8" aria-hidden="true" />
            </div>
            <h2 data-reveal className="text-4xl md:text-[40px] leading-tight text-foreground mb-6 tracking-tight font-black">
              Web &amp; App Development
            </h2>
            <p data-reveal className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We build robust, scalable, and visually stunning digital products. From sleek corporate websites to complex, custom AI SaaS platforms, our engineering team ensures optimal performance and seamless user experiences across all devices.
            </p>
            
            <ul className="space-y-4 p-6 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
              {WEB_APP_FEATURES.map((feature) => (
                <li data-reveal key={feature} className="flex items-start">
                  <CheckCircle2 className="text-destructive mr-3 mt-1 shrink-0" aria-hidden="true" />
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
