"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  title: string
  specialty: string | null
  bio: string
  imageUrl: string | null
  order: number
  isActive: boolean
}

export default function TeamManagementPage() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    specialty: "",
    bio: "",
    imageUrl: "",
    order: 0,
    isActive: true,
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadPreview, setUploadPreview] = useState<string | null>(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/admin/team?includeInactive=true")
      const data = await res.json()
      
      if (data.success) {
        setMembers(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch team members:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadFile = async (): Promise<string | null> => {
    if (!selectedFile) return null
    
    setIsUploading(true)
    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", selectedFile)
      
      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      })
      
      const data = await res.json()
      
      if (data.success) {
        return data.url
      }
      
      alert("Dosya yükleme başarısız: " + data.error)
      return null
    } catch (error) {
      console.error("Upload error:", error)
      alert("Dosya yüklenirken bir hata oluştu")
      return null
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      let imageUrl = formData.imageUrl
      
      // Upload file if selected
      if (selectedFile) {
        const uploadedUrl = await uploadFile()
        if (uploadedUrl) {
          imageUrl = uploadedUrl
        } else {
          return // Upload failed
        }
      }
      
      const url = editingId 
        ? `/api/admin/team/${editingId}` 
        : "/api/admin/team"
      
      const method = editingId ? "PATCH" : "POST"
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          imageUrl,
        }),
      })
      
      if (res.ok) {
        fetchMembers()
        resetForm()
      }
    } catch (error) {
      console.error("Failed to save team member:", error)
    }
  }

  const handleEdit = (member: TeamMember) => {
    setFormData({
      name: member.name,
      title: member.title,
      specialty: member.specialty || "",
      bio: member.bio,
      imageUrl: member.imageUrl || "",
      order: member.order,
      isActive: member.isActive,
    })
    setEditingId(member.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Bu ekip üyesini silmek istediğinizden emin misiniz?")) {
      return
    }
    
    try {
      const res = await fetch(`/api/admin/team/${id}`, {
        method: "DELETE",
      })
      
      if (res.ok) {
        fetchMembers()
      }
    } catch (error) {
      console.error("Failed to delete team member:", error)
    }
  }

  const toggleActive = async (member: TeamMember) => {
    try {
      const res = await fetch(`/api/admin/team/${member.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !member.isActive }),
      })
      
      if (res.ok) {
        fetchMembers()
      }
    } catch (error) {
      console.error("Failed to toggle active status:", error)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      title: "",
      specialty: "",
      bio: "",
      imageUrl: "",
      order: 0,
      isActive: true,
    })
    setEditingId(null)
    setShowForm(false)
    setSelectedFile(null)
    setUploadPreview(null)
  }

  if (isLoading) {
    return <div>Yükleniyor...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-brown">Ekip Yönetimi</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          {showForm ? "İptal" : "Yeni Ekip Üyesi"}
        </Button>
      </div>

      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {editingId ? "Ekip Üyesini Düzenle" : "Yeni Ekip Üyesi Ekle"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Ünvan *</Label>
                  <Input
                    id="title"
                    placeholder="Diş Hekimi"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialty">Uzmanlık</Label>
                  <Input
                    id="specialty"
                    placeholder="Endodonti Uzmanı"
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="order">Sıra</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Fotoğraf</Label>
                <div className="space-y-3">
                  {/* File Upload */}
                  <div>
                    <Input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleFileSelect}
                      disabled={isUploading}
                    />
                    <p className="text-xs text-brown/60 mt-1">
                      JPEG, PNG veya WebP formatında, maksimum 5MB
                    </p>
                  </div>
                  
                  {/* Preview */}
                  {(uploadPreview || formData.imageUrl) && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border">
                      <img
                        src={uploadPreview || formData.imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Or URL */}
                  <div>
                    <Label htmlFor="imageUrl" className="text-sm">Veya URL girin</Label>
                    <Input
                      id="imageUrl"
                      placeholder="https://example.com/photo.jpg"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      disabled={!!selectedFile}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Biyografi *</Label>
                <Textarea
                  id="bio"
                  placeholder="Geçmiş bilgileri, eğitim, deneyim..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={6}
                  required
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="h-4 w-4"
                />
                <Label htmlFor="isActive">Aktif (Sitede göster)</Label>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? "Yükleniyor..." : editingId ? "Güncelle" : "Ekle"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm} disabled={isUploading}>
                  İptal
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4">
        {members.map((member) => (
          <Card key={member.id} className={!member.isActive ? "opacity-60" : ""}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {member.imageUrl && (member.imageUrl.startsWith('/') || member.imageUrl.startsWith('http')) && (
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-brown/70">{member.title}</p>
                      {member.specialty && (
                        <p className="text-sm text-vizon">{member.specialty}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-brown/70 line-clamp-2">{member.bio}</p>
                  <p className="text-xs text-brown/50 mt-2">Sıra: {member.order}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleActive(member)}
                  >
                    {member.isActive ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(member)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(member.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
