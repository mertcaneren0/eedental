"use client"

import { MessageCircle, Instagram } from "lucide-react"
import { useState, useEffect } from "react"

export function SocialFloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "905434860055"
  const message = "Merhaba, randevu almak istiyorum."
  const instagramUrl = "https://www.instagram.com/dtemrecaneren"

  useEffect(() => {
    // Sayfa yüklendikten 2 saniye sonra göster
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram Button */}
      <button
        onClick={handleInstagramClick}
        className={`
          w-14 h-14 rounded-full
          bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400
          hover:from-purple-700 hover:via-pink-600 hover:to-orange-500
          text-white shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          hover:scale-110
          group
        `}
        style={{ transitionDelay: '100ms' }}
        aria-label="Instagram'da takip edin"
      >
        <Instagram className="h-6 w-6" />
        
        {/* Tooltip */}
        <span className="
          absolute right-full mr-3 px-3 py-2
          bg-brown text-cream text-sm font-medium
          rounded-lg shadow-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        ">
          Instagram'da Takip Et
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`
          w-14 h-14 rounded-full
          bg-green-500 hover:bg-green-600
          text-white shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 transform
          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          hover:scale-110
          group
          relative
        `}
        style={{ transitionDelay: '200ms' }}
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <span className="
          absolute right-full mr-3 px-3 py-2
          bg-brown text-cream text-sm font-medium
          rounded-lg shadow-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        ">
          WhatsApp ile Randevu Al
        </span>

        {/* Pulse animasyonu */}
        <span className="
          absolute inset-0 rounded-full
          bg-green-500 animate-ping
          opacity-75
        " style={{ animationDuration: '2s' }} />
      </button>
    </div>
  )
}
