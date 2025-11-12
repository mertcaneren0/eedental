import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollAnimationsWrapper } from "@/components/layout/scroll-animations-wrapper"
import { SocialFloatingButtons } from "@/components/ui/social-floating-buttons"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

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
      <SocialFloatingButtons />
      <ScrollToTop />
    </ScrollAnimationsWrapper>
  )
}
