"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

interface TeamMember {
  id: number
  attributes: {
    name: string
    title: string
    bio: string
    photo: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    email?: string
    linkedin?: string
    order: number
    isActive: boolean
  }
}

export function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
        const response = await fetch(
          `${strapiUrl}/api/team-members?populate=photo&filters[isActive][$eq]=true&sort=order:asc`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
            cache: 'no-store', // Always fetch fresh data
          }
        )

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
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brown text-center mb-12">
          Ekip Üyelerimiz
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const photoUrl = member.attributes.photo?.data?.attributes?.url
            const fullPhotoUrl = photoUrl?.startsWith('http') 
              ? photoUrl 
              : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${photoUrl}`

            return (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  {photoUrl ? (
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-grey/20">
                      <Image
                        src={fullPhotoUrl}
                        alt={member.attributes.photo.data.attributes.alternativeText || member.attributes.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square rounded-lg bg-vizon/10 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-vizon">
                        {member.attributes.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-xl">{member.attributes.name}</CardTitle>
                  <CardDescription className="text-vizon font-medium">
                    {member.attributes.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-brown/70 text-sm mb-4">
                    {member.attributes.bio}
                  </p>
                  <div className="flex gap-3">
                    {member.attributes.email && (
                      <a
                        href={`mailto:${member.attributes.email}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-grey hover:bg-vizon/10 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-4 w-4 text-vizon" />
                      </a>
                    )}
                    {member.attributes.linkedin && (
                      <a
                        href={member.attributes.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-grey hover:bg-vizon/10 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-vizon" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
