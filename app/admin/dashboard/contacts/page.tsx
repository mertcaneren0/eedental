"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail as MailIcon, Calendar, MessageSquare } from "lucide-react"

interface Contact {
  id: string
  name: string
  phone: string
  message: string | null
  status: string
  notes: string | null
  createdAt: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [notes, setNotes] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contacts")
      const data = await res.json()
      
      if (data.success) {
        setContacts(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateContact = async (id: string, updates: any) => {
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })
      
      if (res.ok) {
        fetchContacts()
        setSelectedContact(null)
      }
    } catch (error) {
      console.error("Failed to update contact:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      new: "bg-blue-100 text-blue-800",
      contacted: "bg-yellow-100 text-yellow-800",
      resolved: "bg-green-100 text-green-800",
    }
    
    const labels: Record<string, string> = {
      new: "Yeni",
      contacted: "İletişime Geçildi",
      resolved: "Çözüldü",
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
      <h2 className="text-3xl font-bold text-brown mb-8">İletişim Formları</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List */}
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card 
              key={contact.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => {
                setSelectedContact(contact)
                setNotes(contact.notes || "")
                setStatus(contact.status)
              }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{contact.name}</h3>
                  {getStatusBadge(contact.status)}
                </div>
                <div className="space-y-2 text-sm text-brown/70">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(contact.createdAt).toLocaleString("tr-TR")}</span>
                  </div>
                  {contact.message && (
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 mt-0.5" />
                      <span className="line-clamp-2">{contact.message}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail */}
        {selectedContact && (
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Detaylar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Ad Soyad</label>
                <p className="text-lg">{selectedContact.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Telefon</label>
                <p className="text-lg">{selectedContact.phone}</p>
              </div>
              
              {selectedContact.message && (
                <div>
                  <label className="text-sm font-medium">Mesaj</label>
                  <p className="text-sm text-brown/70">{selectedContact.message}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium">Tarih</label>
                <p className="text-sm text-brown/70">
                  {new Date(selectedContact.createdAt).toLocaleString("tr-TR")}
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
                  <option value="contacted">İletişime Geçildi</option>
                  <option value="resolved">Çözüldü</option>
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
                onClick={() => updateContact(selectedContact.id, { status, notes })}
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
