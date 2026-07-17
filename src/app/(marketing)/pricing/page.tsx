import type { Metadata } from "next"
import { PricingHero } from "@/features/pricing/components/pricing-hero"
import { PricingGrid } from "@/features/pricing/components/pricing-grid"
import { PricingCta } from "@/features/pricing/components/pricing-cta"

export const metadata: Metadata = {
  title: "Pricing | Loro Labs — Creative Tech Studio",
  description:
    "Transparent, high-impact pricing for businesses that value creative precision and technical excellence.",
  openGraph: {
    title: "Pricing | Loro Labs",
    description: "Transparent, high-impact pricing.",
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <PricingCta />
    </>
  )
}
