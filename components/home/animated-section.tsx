"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "reveal"
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current

    // Animation configurations
    const animations = {
      "fade-up": {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 },
      },
      "fade-in": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      "slide-left": {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
      "slide-right": {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      "scale-up": {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      "reveal": {
        from: { clipPath: "inset(0 100% 0 0)" },
        to: { clipPath: "inset(0 0% 0 0)" },
      },
    }

    const config = animations[animation]

    gsap.fromTo(
      element,
      config.from,
      {
        ...config.to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation, delay, duration])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
