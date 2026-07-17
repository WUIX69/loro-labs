"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"

interface ContactSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactSheet({ open, onOpenChange }: ContactSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background pt-12 px-10 overflow-y-auto">
        <SheetClose render={
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            aria-label="Close contact panel"
          />
        }>
          <X className="size-5" />
        </SheetClose>

        <SheetHeader className="mb-8">
          <SheetTitle className="text-3xl font-black text-foreground">
            Let&apos;s Talk <span className="text-primary">Business</span>
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </SheetDescription>
        </SheetHeader>

        {/* Contact form — UI only; server action to be wired as follow-up */}
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            window.location.href = "mailto:hello@lorolabs.studio"
          }}
        >
          <div>
            <label htmlFor="contact-name" className="text-sm font-semibold text-foreground mb-1 block">
              Name
            </label>
            <Input
              id="contact-name"
              placeholder="Your name"
              required
              className="rounded-xl border-border focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-semibold text-foreground mb-1 block">
              Email
            </label>
            <Input
              id="contact-email"
              type="email"
              placeholder="hello@yourcompany.com"
              required
              className="rounded-xl border-border focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="contact-project" className="text-sm font-semibold text-foreground mb-1 block">
              Tell us about your project
            </label>
            <textarea
              id="contact-project"
              placeholder="What are you building?"
              rows={5}
              className="w-full rounded-xl border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold py-6 mt-4 gap-2"
          >
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
