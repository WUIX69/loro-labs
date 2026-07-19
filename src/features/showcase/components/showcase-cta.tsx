"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ContactSheet } from "@/components/layout/contact-sheet"

export function ShowcaseCta() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-destructive px-8 py-20 text-center text-destructive-foreground max-w-6xl mx-auto">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-4xl font-black md:text-6xl tracking-tighter">
                Ready to find your voice?
              </h2>
              <p className="mt-6 text-lg text-destructive-foreground/90 md:text-xl leading-relaxed">
                Join over 50,000 learners mastering English with the world&apos;s most
                creative tech studio.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => setContactOpen(true)}
                  className="rounded-xl bg-background px-10 py-6 text-lg font-bold text-destructive shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl bg-destructive-foreground/20 px-10 py-6 text-lg font-bold text-destructive-foreground border border-destructive-foreground/30 backdrop-blur-sm transition-all hover:bg-destructive-foreground/30"
                >
                  Watch the Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
