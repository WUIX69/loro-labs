"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ContactSheet } from "@/components/layout/contact-sheet"

export function PricingCta() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <ScrollReveal>
        <section className="mt-24 mb-24 px-4 md:px-12 max-w-7xl mx-auto">
          <div className="bg-muted rounded-[32px] p-12 md:p-24 text-center shadow-sm">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Every project at Loro Labs is unique. If your requirements don&apos;t fit these tiers,
              our team will craft a bespoke proposal tailored to your specific goals.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button
                onClick={() => setContactOpen(true)}
                className="rounded-full bg-destructive text-destructive-foreground px-12 py-6 text-base font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-destructive/20"
              >
                Schedule Discovery Call
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-foreground text-foreground px-12 py-6 text-base font-bold hover:bg-foreground hover:text-background transition-all"
              >
                View Process
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
