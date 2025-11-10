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
    title: "Mikro Cerrahi Hassasiyeti",
    description: "Lüleburgaz’daki tek 25x büyütmeli Alman Carl Zeiss mikroskobu ile çalışıyoruz. Gözle görülemeyen en ince detayları yakalıyor, tedavinizdeki hata payını ortadan kaldırıyoruz.",
  },
  {
    icon: Cuboid,
    title: "Dijital Gülüş Tasarımı",
    description: "Sonuç sürpriz olmamalı. Tedavinize başlamadan önce gülüşünüzü dijital ortamda 3D olarak tasarlıyor ve sonucu size önceden gösteriyoruz. Öngörülebilir, planlı ve size özel.",
  },
  {
    icon: Award,
    title: "Minimal İnvaziv Yaklaşım",
    description: "Modern diş hekimliğinin zirvesi, dişe en az dokunmaktır. Mikro teknoloji sayesinde sadece gerekli alana müdahale ediyor, sağlam diş dokunuzu maksimum seviyede koruyoruz.",
  },
  {
    icon: Award,
    title: "Kanıta Dayalı Tedavi",
    description: "Size 'moda' olanı değil, bilimsel olarak başarısı kanıtlanmış en güncel tedavileri sunuyoruz. Uluslararası literatürü takip ediyor, sadece doğruluğuna inandığımız yöntemleri uyguluyoruz.",
  },
  {
    icon: Award,
    title: "Biyouyumlu Malzemeler",
    description: "Estetik kadar sağlığınız da önceliğimiz. Tedavilerimizde sadece uzun ömürlü değil, aynı zamanda vücut dokularınızla tam uyumlu (biyouyumlu), alerjen içermeyen güvenli materyaller kullanıyoruz.",
  },
  {
    icon: Award,
    title: "Hasta Odaklı İletişim",
    description: "Tedavi koltuğunda şeffaflık esastır. Sizi dinliyor, tüm süreci ve seçenekleri net bir şekilde anlatıyor, aklınızda tek bir soru işareti kalmadan tedaviye başlıyoruz.",
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
            Neden Emrecan Eren <br />Ağız ve Diş Sağlığı Polikliniği?
          </h2>
          <p className="mt-4 text-lg text-brown/70">
            Modern teknoloji ve uzman yaklaşımla fark yaratan Diş Polikliniği
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
