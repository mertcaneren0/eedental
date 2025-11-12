"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Briefcase, Clock } from "lucide-react"

interface Stats {
  totalContacts: number
  newContacts: number
  totalCareers: number
  newCareers: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalContacts: 0,
    newContacts: 0,
    totalCareers: 0,
    newCareers: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [contactsRes, careersRes] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/admin/careers"),
      ])

      const contactsData = await contactsRes.json()
      const careersData = await careersRes.json()

      if (contactsData.success && careersData.success) {
        const newContacts = contactsData.data.filter((c: any) => c.status === "new").length
        const newCareers = careersData.data.filter((c: any) => c.status === "new").length

        setStats({
          totalContacts: contactsData.pagination.total,
          newContacts,
          totalCareers: careersData.pagination.total,
          newCareers,
        })
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div>Yükleniyor...</div>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-brown mb-8">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam İletişim
            </CardTitle>
            <Mail className="h-4 w-4 text-vizon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContacts}</div>
            <p className="text-xs text-muted-foreground">
              Tüm iletişim formları
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Yeni İletişim
            </CardTitle>
            <Clock className="h-4 w-4 text-vizon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newContacts}</div>
            <p className="text-xs text-muted-foreground">
              Bekleyen formlar
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam Başvuru
            </CardTitle>
            <Briefcase className="h-4 w-4 text-vizon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCareers}</div>
            <p className="text-xs text-muted-foreground">
              Tüm kariyer başvuruları
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Yeni Başvuru
            </CardTitle>
            <Clock className="h-4 w-4 text-vizon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.newCareers}</div>
            <p className="text-xs text-muted-foreground">
              Bekleyen başvurular
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
