"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(TextPlugin)

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const text = "Geleceğin Diş Hekimliği,\nBugünün Kliniği."
      
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
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream to-vizon/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23725649' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1
            ref={titleRef}
            className="text-5xl font-bold tracking-tight text-brown sm:text-7xl whitespace-pre-line min-h-[200px]"
          >
            {/* Text will be animated by GSAP */}
          </h1>
          <p className="mt-6 text-lg leading-8 text-brown/80 max-w-2xl mx-auto">
            Lüleburgaz'ın ilk ve tek mikroskop destekli diş kliniği. 
            Teknoloji ve insan odaklı yaklaşımımızla gülüşünüzü yeniden tasarlıyoruz.
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
            <div className="text-4xl font-bold text-vizon">25x</div>
            <div className="mt-2 text-sm text-brown/70">Mikroskop Büyütme</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-vizon/20">
            <div className="text-4xl font-bold text-vizon">3D</div>
            <div className="mt-2 text-sm text-brown/70">Dijital Planlama</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-vizon/20">
            <div className="text-4xl font-bold text-vizon">TDB</div>
            <div className="mt-2 text-sm text-brown/70">Üye Diş Hekimi</div>
          </div>
        </div>
      </div>
    </section>
  )
}
