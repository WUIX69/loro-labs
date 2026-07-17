import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Globe, Mail, Share2, Send } from "lucide-react"
import { LOGO_FOOTER_URL } from "@/data/home"

const STUDIO_LINKS = ["About Us", "Work", "Career", "Contact"] as const
const SERVICE_LINKS = ["Web Apps", "Mobile Dev", "AI Training", "UI/UX Design"] as const
const SOCIAL_ICONS = [
  { Icon: Globe,  label: "Website" },
  { Icon: Mail,   label: "Email" },
  { Icon: Share2, label: "Social" },
] as const

export function Footer() {
  return (
    <footer className="bg-background text-sage-canvas w-full py-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-12 max-w-7xl mx-auto">

        {/* Brand column */}
        <div className="space-y-6 mb-12 md:mb-0">
          <Image
            src={LOGO_FOOTER_URL}
            alt="Loro Labs"
            width={120}
            height={64}
            className="h-16 w-auto"
          />
          <p className="text-sm opacity-80 pt-4">
            Creative Tech Studio. Intelligent design for the modern era. Precision in pixels, boldness in vision.
          </p>
          <div className="flex gap-4 pt-4">
            {SOCIAL_ICONS.map(({ Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-all"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Links: Studio */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Studio</h4>
          <ul className="space-y-4">
            {STUDIO_LINKS.map(link => (
              <li key={link}>
                <Link href="#" className="opacity-80 hover:opacity-100 hover:text-yellow-500 transition-colors text-sm">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links: Services */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-4">
            {SERVICE_LINKS.map(link => (
              <li key={link}>
                <Link href="#" className="opacity-80 hover:opacity-100 hover:text-yellow-500 transition-colors text-sm">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Newsletter</h4>
          <p className="opacity-80 text-sm mb-4">
            Get the latest insights on tech and design. No spam.
          </p>
          <form className="flex gap-2" action="#">
            <Input
              type="email"
              placeholder="hello@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-full"
              required
            />
            <Button size="icon" type="submit" className="rounded-full bg-primary hover:bg-primary/90 text-white shrink-0">
              <Send className="size-4" />
            </Button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-24">
        <Separator className="bg-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Loro Labs Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>Quezon City, PH</p>
        </div>
      </div>
    </footer>
  )
}
