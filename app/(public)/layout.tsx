import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollAnimationsWrapper } from "@/components/layout/scroll-animations-wrapper"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ScrollAnimationsWrapper>
      <Header />
      {children}
      <Footer />
    </ScrollAnimationsWrapper>
  )
}
