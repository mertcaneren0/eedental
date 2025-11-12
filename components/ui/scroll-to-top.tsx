"use client"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-50
        w-12 h-12 rounded-full
        bg-vizon hover:bg-vizon-dark
        text-cream shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 transform
        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        hover:scale-110
      `}
      aria-label="Yukarı çık"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
