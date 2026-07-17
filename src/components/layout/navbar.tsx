"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useScrollY } from "@/hooks/use-scroll"
import { MobileNav } from "./mobile-nav"
import { NAV_LINKS, LOGO_HEADER_URL } from "@/data/home"

export function Navbar() {
  const scrollY = useScrollY()
  const pathname = usePathname()
  const isScrolled = scrollY > 50

  return (
    <header
      id="main-nav"
      className={cn(
        "fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300",
        isScrolled ? "h-16 shadow-xl" : "h-20"
      )}
    >
      <nav className="flex justify-between items-center h-full px-4 md:px-12">
        {/* Logo */}
        <Link href="/" aria-label="Loro Labs home">
          <Image
            src={LOGO_HEADER_URL}
            alt="Loro Labs"
            width={120}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center text-sm font-semibold">
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href || (link.href !== "/" && !link.href.startsWith("#") && pathname.startsWith(link.href))
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Button className="hidden md:inline-flex rounded-full bg-primary text-white px-6 py-3 font-semibold shadow-lg hover:bg-primary/90">
            Get a Quote
          </Button>
          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
