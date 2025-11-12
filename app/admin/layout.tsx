import { SessionProvider } from "@/components/providers/session-provider"

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
