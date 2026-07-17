"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { CAROUSEL_SLIDES } from "@/data/home"

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const total = CAROUSEL_SLIDES.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(
      () => setCurrent(c => (c + 1) % total),
      6000
    )
  }, [total])

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  const go = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  return (
    <div
      className="relative aspect-video w-full max-w-[850px] mx-auto rounded-[32px] overflow-hidden bg-background/80 backdrop-blur-sm border border-white/10 shadow-2xl"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      aria-label="Brand showcase carousel"
      aria-roledescription="carousel"
    >
      {/* Slide track */}
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-live="polite"
      >
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={i}
            className="relative min-w-full h-full shrink-0"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${total}: ${slide.title}`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 850px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-loro-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white max-w-lg">
              <h3 className="text-2xl font-extrabold mb-2">{slide.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{slide.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-8 right-10 flex gap-3 z-30" role="tablist" aria-label="Slide indicators">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              "h-3 rounded-full bg-white/40 transition-all duration-300",
              i === current ? "w-6 bg-white" : "w-3"
            )}
          />
        ))}
      </div>
    </div>
  )
}
