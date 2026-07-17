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
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)`, willChange: "transform" }}
      >
        <Image
          src={HERO_BG_URL}
          alt=""           // decorative — empty alt
          fill
          className="object-cover opacity-70"
          priority
          aria-hidden="true"
        />
      </div>
      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-loro-ink/30 via-loro-ink/50 to-loro-ink/90" />
    </div>
  )
}
