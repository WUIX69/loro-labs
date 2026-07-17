"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactSheet } from "@/components/layout/contact-sheet"

export function CtaBanner() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section className="py-24 px-4 md:px-12" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto rounded-[64px] bg-background text-white px-8 md:px-24 py-24 text-center relative overflow-hidden shadow-2xl">
          {/* Gradient glow */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-tr from-loro-red via-blue-500 to-green-500 blur-[120px] animate-pulse" />
          </div>
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              Ready to give your ideas{" "}
              <span className="text-green-500">wings</span>?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join forces with Loro Labs and let&apos;s build the future of tech together.
              We&apos;re ready for takeoff.
            </p>
            <Button
              onClick={() => setContactOpen(true)}
              className="bg-primary text-white px-14 py-6 rounded-full text-2xl font-extrabold hover:scale-110 transition-transform active:scale-95 shadow-2xl shadow-primary/30"
              aria-haspopup="dialog"
            >
              Let&apos;s Talk Business
            </Button>
          </div>
        </div>
      </section>

      <ContactSheet open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
