import { Navbar } from "@/components/layout"
import { Footer } from "@/components/layout"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
