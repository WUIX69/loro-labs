import type { Metadata } from "next"
import {
  ShowcaseHero,
  ShowcaseIntelligence,
  ShowcaseGamification,
  ShowcaseCta,
} from "@/features/showcase/components"

export const metadata: Metadata = {
  title: "Showcase — Loro AI",
  description:
    "Experience the future of Loro AI. Master English naturally through immersive, real-time AI conversations.",
  openGraph: {
    title: "Showcase — Loro AI",
    description: "Experience the future of Loro AI.",
    siteName: "Loro Labs",
  },
}

export default function ShowcasePage() {
  return (
    <>
      <ShowcaseHero />
      <ShowcaseIntelligence />
      <ShowcaseGamification />
      <ShowcaseCta />
    </>
  )
}
