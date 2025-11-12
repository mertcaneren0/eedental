import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollAnimationsWrapper } from "@/components/layout/scroll-animations-wrapper"
import { SessionProvider } from "@/components/providers/session-provider"
import { nexa } from "./fonts"

export const metadata: Metadata = {
  title: "Lüleburgaz Diş Hekimi | Dt. Emrecan Eren - Geleceğin Diş Hekimliği",
  description: "Lüleburgaz'ın en modern diş kliniği. Mikroskopik tedavi, implant, ortodonti ve estetik diş hekimliği. Dt. Emrecan Eren ile geleceğin teknolojisi bugün.",
  keywords: ["Lüleburgaz diş hekimi", "Lüleburgaz diş kliniği", "Lüleburgaz implant", "Lüleburgaz ortodonti"],
  authors: [{ name: "Dt. Emrecan Eren" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.emrecaneren.com",
    siteName: "Dt. Emrecan Eren Diş Kliniği",
    title: "Lüleburgaz Diş Hekimi | Dt. Emrecan Eren",
    description: "Lüleburgaz'ın en modern diş kliniği. Mikroskopik tedavi, implant, ortodonti ve estetik diş hekimliği.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={nexa.variable}>
      <body className="antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
