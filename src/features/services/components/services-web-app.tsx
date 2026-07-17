import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Code, CheckCircle2 } from "lucide-react"

const WEB_APP_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAoR499gcL7K7lUXToCKaoJfog1tpAWmmm8R08Md0mC7X-Bpx3lNCwxxBlx_P88008tTO8vF6_UflhzDoLcYGHrBHYEMxun9uVniXdep0mOeiFHccv0KtJig_-J-txJyMPCdtwY2P0K-_pbnSlbnvjxT7c3btFaLEGvAKX4gHkuMWQJ-p9An1dusNDH2SmWVcuDAf2C3C5K6_rIuK-SFjn6WlBW-oyIna51igNZ-grXiZsQoEfTvSuB"

export function ServicesWebApp() {
  const features = [
    "Custom AI SaaS Solutions",
    "Responsive Web Applications",
    "High-Performance Landing Pages",
  ]

  return (
    <section className="py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <ScrollReveal>
            <div className="mb-12 lg:mb-0 rounded-[32px] overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-destructive/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <div className="w-full h-[500px] relative">
                <Image 
                  src={WEB_APP_IMG}
                  alt="Web development" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center justify-center p-3 bg-destructive/10 rounded-xl mb-6">
                <Code className="text-destructive size-8" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-[40px] leading-tight text-foreground mb-6 tracking-tight font-black">
                Web &amp; App Development
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We build robust, scalable, and visually stunning digital products. From sleek corporate websites to complex, custom AI SaaS platforms, our engineering team ensures optimal performance and seamless user experiences across all devices.
              </p>
            </ScrollReveal>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <ScrollReveal as="li" delay={300 + idx * 100} key={feature} className="flex items-start">
                  <CheckCircle2 className="text-destructive mr-3 mt-1 shrink-0" aria-hidden="true" />
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
