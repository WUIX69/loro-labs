"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/data/home"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={
        <Button variant="ghost" size="icon" className="md:hidden text-foreground" aria-label="Open menu" />
      }>
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-background w-72 pt-12">
        <SheetClose render={
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" aria-label="Close menu" />
        }>
          <X className="size-5" />
        </SheetClose>
        <nav className="flex flex-col gap-6 mt-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-black text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="rounded-full bg-primary text-white mt-4 font-semibold">
            Get a Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
