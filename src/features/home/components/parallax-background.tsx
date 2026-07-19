"use client"
import Image from "next/image"
import { useScrollY } from "@/hooks/use-scroll"
import { HERO_BG_URL } from "@/data/home"

/**
 * Client-only parallax wrapper.
 * Isolated so HeroSection remains a Server Component.
 * GPU-composited via translate3d — does not trigger layout reflow.
 */
export function ParallaxBackground() {
  const scrollY = useScrollY()

  return (
    <div className="absolute inset-0 z-0 pointer-events-none scale-110">
      <div
        className="relative w-full h-full"
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      >
        <Image
          src={HERO_BG_URL}
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-top -scale-100 opacity-100"
          priority
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-loro-ink/20 via-loro-ink/30 to-loro-ink/70" />
    </div>
  )
}
