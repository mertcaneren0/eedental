"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

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

export function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch('/api/team', {
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Failed to fetch team members')
        }

        const data = await response.json()
        setTeamMembers(data.data || [])
      } catch (err) {
        console.error('Error fetching team members:', err)
        setError('Ekip üyeleri yüklenirken bir hata oluştu.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-12">
            Ekip Üyelerimiz
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="aspect-square rounded-lg bg-grey/30 mb-4" />
                  <div className="h-6 bg-grey/30 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-grey/30 rounded w-1/2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-grey/30 rounded" />
                    <div className="h-4 bg-grey/30 rounded" />
                    <div className="h-4 bg-grey/30 rounded w-2/3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-12">
            Ekip Üyelerimiz
          </h2>
          <div className="text-center text-brown/70">
            <p>{error}</p>
            <p className="mt-2 text-sm">
              Lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (teamMembers.length === 0) {
    return (
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brown text-center mb-12">
            Ekip Üyelerimiz
          </h2>
          <div className="text-center text-brown/70">
            <p>Ekip üyeleri yakında eklenecektir.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brown text-center mb-12">
          Ekip Üyelerimiz
        </h2>
        
        {/* Ekip Fotoğrafı */}
        <div className="mb-16">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ee_ekibiz.png"
              alt="Ekip Fotoğrafı"
              width={1950}
              height={1250}
              className="w-full h-auto"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>

        {/* Ekip Üyeleri - Sıralı Liste */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
            >
              {/* Fotoğraf */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                {member.imageUrl && (member.imageUrl.startsWith('/') || member.imageUrl.startsWith('http')) ? (
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={1100}
                      height={1670}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[11/16.7] rounded-lg bg-vizon/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-vizon">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Bilgiler */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brown mb-2">{member.name}</h3>
                <p className="text-lg text-vizon font-medium mb-1">{member.title}</p>
                {member.specialty && (
                  <p className="text-md text-vizon/80 mb-4">{member.specialty}</p>
                )}
                <div className="prose prose-brown max-w-none">
                  <p className="text-brown/80 whitespace-pre-line leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
