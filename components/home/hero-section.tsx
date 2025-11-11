"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(TextPlugin, ScrollTrigger)

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const text = "Mükemmellik, Detaylarda Gizlidir"
      
      // Yazma animasyonu
      gsap.fromTo(
        titleRef.current,
        { text: "" },
        {
          text: text,
          duration: 2,
          ease: "none",
          delay: 0.5,
        }
      )
    }

    // Scroll yapınca hero section'ı fade out yap
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      })
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Dental clinic background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/95 via-cream/90 to-vizon/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1
            ref={titleRef}
            className="font-space-grotesk text-5xl font-bold tracking-tight text-brown sm:text-7xl whitespace-pre-line min-h-[200px]"
          >
            {/* Text will be animated by GSAP */}
          </h1>
          <p className="mt-0 text-bold leading-8 text-brown/80 max-w-2xl mx-auto">
            Gülüşünüzdeki estetik ve sağlığın, en ince detaylardan başladığına inanıyoruz. Lüleburgaz'daki kliniğimizde, teknoloji ve insan odaklı yaklaşımımızla gülüşünüzü yeniden tasarlıyoruz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" onClick={scrollToContact}>
              Randevu Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Tedavilerimiz</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-vizon/20">
            <div className="text-xm font-bold text-vizon">DERİNLEMESİNE GÖRÜNTÜLEME</div>
            <div className="mt-2 text-sm text-brown/70">Yüksek Hassasiyetli Tedavi</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-vizon/20">
            <div className="text-xm font-bold text-vizon">DİJİTAL <br />TASARIM</div>
            <div className="mt-2 text-sm text-brown/70">Milimetrik Planlama</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-vizon/20">
            <div className="text-xm font-bold text-vizon">BÜTÜNSEL <br />YAKLAŞIM</div>
            <div className="mt-2 text-sm text-brown/70">Estetik ve Sağlık</div>
          </div>
        </div>
      </div>
    </section>
  )
}
