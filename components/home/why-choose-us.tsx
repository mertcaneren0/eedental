"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Microscope, Cuboid, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Microscope,
    title: "Mikroskopik Hassasiyet",
    description: "Lüleburgaz'da tek. Alman Carl Zeiss mikroskobu ile 25 kat büyütmeli tedavi. Minimal invaziv, maksimum koruma.",
  },
  {
    icon: Cuboid,
    title: "Dijital Planlama",
    description: "3D görüntüleme ve dijital tasarım yazılımları. Tedavinizi görmeden başlamıyoruz.",
  },
  {
    icon: Award,
    title: "Akademik Uzmanlık",
    description: "TDB üyesi. Sürekli eğitim, uluslararası kongre katılımları. Bilim temelli diş hekimliği.",
  },
]

export function WhyChooseUs() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    }

    // Animate cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    })
  }, [])

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            ref={titleRef}
            className="text-3xl font-bold tracking-tight text-brown sm:text-4xl"
          >
            Neden Dt. Emrecan Eren?
          </h2>
          <p className="mt-4 text-lg text-brown/70">
            Modern teknoloji ve uzman yaklaşımla fark yaratan diş hekimliği
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                    <feature.icon className="h-6 w-6 text-vizon" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-brown/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
