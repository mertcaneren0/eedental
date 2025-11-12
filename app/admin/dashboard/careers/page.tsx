"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Calendar, Briefcase, GraduationCap } from "lucide-react"

interface Career {
  id: string
  name: string
  email: string
  phone: string
  position: string
  experience: string | null
  education: string | null
  message: string | null
  cvUrl: string | null
  status: string
  notes: string | null
  createdAt: string
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)
  const [notes, setNotes] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetchCareers()
  }, [])

  const fetchCareers = async () => {
    try {
      const res = await fetch("/api/admin/careers")
      const data = await res.json()
      
      if (data.success) {
        setCareers(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch careers:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateCareer = async (id: string, updates: any) => {
    try {
      const res = await fetch(`/api/admin/careers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })
      
      if (res.ok) {
        fetchCareers()
        setSelectedCareer(null)
      }
    } catch (error) {
      console.error("Failed to update career:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      new: "bg-blue-100 text-blue-800",
      reviewing: "bg-yellow-100 text-yellow-800",
      interviewed: "bg-purple-100 text-purple-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    }
    
    const labels: Record<string, string> = {
      new: "Yeni",
      reviewing: "İnceleniyor",
      interviewed: "Görüşme Yapıldı",
      accepted: "Kabul Edildi",
      rejected: "Reddedildi",
    }
    
    return (
      <Badge className={variants[status] || ""}>
        {labels[status] || status}
      </Badge>
    )
  }

  if (isLoading) {
    return <div>Yükleniyor...</div>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-brown mb-8">Kariyer Başvuruları</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List */}
        <div className="space-y-4">
          {careers.map((career) => (
            <Card 
              key={career.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => {
                setSelectedCareer(career)
                setNotes(career.notes || "")
                setStatus(career.status)
              }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{career.name}</h3>
                    <p className="text-sm text-brown/70">{career.position}</p>
                  </div>
                  {getStatusBadge(career.status)}
                </div>
                <div className="space-y-2 text-sm text-brown/70">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{career.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{career.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(career.createdAt).toLocaleString("tr-TR")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail */}
        {selectedCareer && (
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Detaylar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Ad Soyad</label>
                <p className="text-lg">{selectedCareer.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Pozisyon</label>
                <p className="text-lg">{selectedCareer.position}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">E-posta</label>
                <p className="text-sm text-brown/70">{selectedCareer.email}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Telefon</label>
                <p className="text-sm text-brown/70">{selectedCareer.phone}</p>
              </div>
              
              {selectedCareer.experience && (
                <div>
                  <label className="text-sm font-medium">Deneyim</label>
                  <p className="text-sm text-brown/70">{selectedCareer.experience}</p>
                </div>
              )}
              
              {selectedCareer.education && (
                <div>
                  <label className="text-sm font-medium">Eğitim</label>
                  <p className="text-sm text-brown/70">{selectedCareer.education}</p>
                </div>
              )}
              
              {selectedCareer.message && (
                <div>
                  <label className="text-sm font-medium">Mesaj</label>
                  <p className="text-sm text-brown/70">{selectedCareer.message}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium">Tarih</label>
                <p className="text-sm text-brown/70">
                  {new Date(selectedCareer.createdAt).toLocaleString("tr-TR")}
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Durum</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="new">Yeni</option>
                  <option value="reviewing">İnceleniyor</option>
                  <option value="interviewed">Görüşme Yapıldı</option>
                  <option value="accepted">Kabul Edildi</option>
                  <option value="rejected">Reddedildi</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Notlar</label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notlarınızı buraya yazın..."
                  rows={4}
                />
              </div>
              
              <Button
                onClick={() => updateCareer(selectedCareer.id, { status, notes })}
                className="w-full"
              >
                Kaydet
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
