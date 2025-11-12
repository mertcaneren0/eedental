"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Mail, Briefcase, LayoutDashboard, Users } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-brown">Yükleniyor...</p>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-brown text-cream shadow-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Paneli</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm">{session.user?.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="bg-transparent border-cream text-cream hover:bg-cream/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Çıkış
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            <Link href="/admin/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/dashboard/contacts">
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                İletişim Formları
              </Button>
            </Link>
            <Link href="/admin/dashboard/careers">
              <Button variant="ghost" className="w-full justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                Kariyer Başvuruları
              </Button>
            </Link>
            <Link href="/admin/dashboard/team">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Ekip Yönetimi
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
