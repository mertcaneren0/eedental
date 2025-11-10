"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Drill, 
  Smile, 
  Microscope, 
  Sparkles, 
  Stethoscope, 
  Scissors,
  Zap,
  Heart,
  Shield,
  Baby
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Drill,
    title: "İmplant Tedavisi",
    description: "Eksik dişleriniz için kalıcı, doğal çözüm.",
    href: "/tedaviler/implant-tedavisi",
  },
  {
    icon: Smile,
    title: "Ortodonti (Diş Teli)",
    description: "Şeffaf plak veya tel ile ideal gülüş dizaynı.",
    href: "/tedaviler/ortodonti",
  },
  {
    icon: Microscope,
    title: "Mikroskopik Diş Tedavisi",
    description: "25 kat büyütme ile hassas kanal ve dolgu tedavileri.",
    href: "/tedaviler/mikroskopik-dis-tedavisi",
  },
  {
    icon: Sparkles,
    title: "Estetik Diş Hekimliği",
    description: "Laminate, bonding, gülüş tasarımı.",
    href: "/tedaviler/estetik-dis-hekimligi",
  },
  {
    icon: Stethoscope,
    title: "Kanal Tedavisi",
    description: "Ağrısız, tek seansta mikroskop destekli.",
    href: "/tedaviler/kanal-tedavisi",
  },
  {
    icon: Scissors,
    title: "Diş Çekimi",
    description: "Cerrahi ve basit çekim, 20 yaş diş operasyonları.",
    href: "/tedaviler/dis-cekimi",
  },
  {
    icon: Zap,
    title: "Diş Beyazlatma",
    description: "Ofis tipi profesyonel beyazlatma.",
    href: "/tedaviler/dis-beyazlatma",
  },
  {
    icon: Heart,
    title: "Dolgu Tedavisi",
    description: "Estetik kompozit dolgular, mikroskop altında.",
    href: "/tedaviler/dolgu-tedavisi",
  },
  {
    icon: Shield,
    title: "Diş Eti Tedavisi",
    description: "Periodontal hastalıklar ve cerrahi.",
    href: "/tedaviler/dis-eti-tedavisi",
  },
  {
    icon: Baby,
    title: "Çocuk Diş Hekimliği",
    description: "Pedodonti, koruyucu uygulamalar.",
    href: "/tedaviler/cocuk-dis-hekimligi",
  },
]

export function ServicesPreview() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          }
        )
      }
    })
  }, [])

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brown sm:text-4xl">
            Tedavi Alanlarımız
          </h2>
          <p className="mt-4 text-lg text-brown/70">
            Modern teknoloji ve uzman yaklaşımla kapsamlı diş sağlığı çözümleri
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                    <service.icon className="h-6 w-6 text-vizon" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brown/70 mb-4">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button variant="link" className="p-0 h-auto text-vizon">
                      Detaylı Bilgi <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/tedaviler">
              Tüm Tedavileri Görüntüle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
