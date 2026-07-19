"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useScrollThreshold } from "@/hooks/use-scroll"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_LINKS, LOGO_HEADER_URL } from "@/data/home"

export function Navbar() {
  const isScrolled = useScrollThreshold(50)
  const pathname = usePathname()

  return (
    <header
      id="main-nav"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "h-16 shadow-xl bg-background/60 backdrop-blur-md border-b border-border"
          : "h-20 bg-background/20 backdrop-blur-sm border-transparent"
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
                    ? "text-destructive font-bold border-b-2 border-destructive pb-0.5"
                    : "text-muted-foreground hover:text-destructive"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="hidden md:inline-flex rounded-full bg-destructive text-destructive-foreground px-4 py-2 text-sm shadow-lg hover:bg-destructive/90 h-auto">
            Get a Quote
          </Button>
          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
