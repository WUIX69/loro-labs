import { Metadata } from "next"
import {
  ServicesHero,
  ServicesWebApp,
  ServicesConsulting,
  ServicesAi,
  ServicesCta,
} from "@/features/services/components"

export const metadata: Metadata = {
  title: "Services | Loro Labs",
  description: "Explore our core services tailored for modern businesses.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesWebApp />
      <ServicesConsulting />
      <ServicesAi />
      <ServicesCta />
    </>
  )
}
