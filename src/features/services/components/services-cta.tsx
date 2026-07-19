import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function ServicesCta() {
  return (
    <section className="bg-background">
      <ScrollReveal className="mx-auto bg-foreground text-background p-12 md:p-[96px] text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-destructive via-[var(--chart-4)] to-[var(--chart-2)] blur-[120px] animate-pulse"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-[60px] leading-tight mb-8 font-black uppercase tracking-tight">
            Ready to Transform Your <span className="text-primary">Digital Presence</span>?
          </h2>
          <p className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto mb-12">
            Let&apos;s discuss how our expertise can help you achieve your business goals. Get in touch for a custom quote tailored to your specific needs.
          </p>
          <button
            type="button"
            className="bg-destructive text-white px-[56px] py-6 rounded-full text-base font-black hover:scale-110 transition-transform active:scale-95 shadow-destructive/30 shadow-2xl uppercase"
          >
            Request a Free Quote
          </button>
        </div>
      </ScrollReveal>
    </section>
  )
}
