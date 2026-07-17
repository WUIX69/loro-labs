import type { Metadata } from "next"
import {
  HeroSection,
  ServicesSection,
  BrandShowcase,
  TestimonialsSection,
  CtaBanner,
} from "@/features/home/components"

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
      <HeroSection />
      <ServicesSection />
      <BrandShowcase />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
