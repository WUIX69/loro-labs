import type { Metadata } from "next"
import {
  HeroSection,
  ServicesSection,
  BrandShowcase,
  TestimonialsSection,
  CtaBanner,
} from "@/features/home/components"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export const metadata: Metadata = {
  title: "Loro Labs — Creative Tech Studio",
  description:
    "Flight & Fueled by Imagination. Creative Tech Studio building immersive digital experiences. Precision in pixels, boldness in vision.",
  openGraph: {
    title: "Loro Labs — Creative Tech Studio",
    description: "Creative Tech Studio for Innovative Solutions.",
    siteName: "Loro Labs",
  },
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal delay={0}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <BrandShowcase />
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <CtaBanner />
      </ScrollReveal>
    </>
  )
}
