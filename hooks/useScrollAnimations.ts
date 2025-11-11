"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimations() {
  useEffect(() => {
    // Header animasyonu
    let lastScroll = 0
    const header = document.querySelector("header")
    
    if (header) {
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll()
          
          if (currentScroll > lastScroll && currentScroll > 100) {
            // Aşağı kaydırma - header'ı gizle
            gsap.to(header, {
              yPercent: -100,
              duration: 0.3,
              ease: "power2.out"
            })
          } else {
            // Yukarı kaydırma - header'ı göster
            gsap.to(header, {
              yPercent: 0,
              duration: 0.3,
              ease: "power2.out"
            })
          }
          
          lastScroll = currentScroll
        }
      })
    }

    // Footer animasyonu - basit fade-in
    const footer = document.querySelector("footer")
    
    if (footer) {
      // Footer'ı başlangıçta hafif gizle
      gsap.set(footer, {
        opacity: 0,
        y: 30
      })

      // Footer görünür olduğunda fade-in yap
      ScrollTrigger.create({
        trigger: footer,
        start: "top bottom-=100",
        once: true,
        onEnter: () => {
          gsap.to(footer, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          })
        }
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}
