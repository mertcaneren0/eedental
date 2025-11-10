import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
