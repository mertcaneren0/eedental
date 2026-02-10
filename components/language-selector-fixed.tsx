"use client"

import { Languages } from "lucide-react"
import { useState, useEffect } from "react"

export function LanguageSelectorFixed() {
  const [currentLang, setCurrentLang] = useState<'tr'>('tr')
  const [showOptions, setShowOptions] = useState(false)
  const [isGoogleTranslateLoaded, setIsGoogleTranslateLoaded] = useState(false)

  // Load Google Translate ONLY when needed
  const loadGoogleTranslate = () => {
    if (isGoogleTranslateLoaded) return

    // Add init function
    (window as any).googleTranslateElementInit = function() {
      try {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'tr', includedLanguages: 'tr,en' },
          'google_translate_element_dynamic'
        )
      } catch (error) {
        // Silently handle error
      }
    }

    // Add script
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.onerror = () => {
      // Script load failed
      setIsGoogleTranslateLoaded(false)
    }
    document.body.appendChild(script)

    setIsGoogleTranslateLoaded(true)
  }

  const changeLanguage = (lang: 'en', e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Load Google Translate if not loaded
    if (!isGoogleTranslateLoaded) {
      loadGoogleTranslate()

      // Wait for it to load then change language
      setTimeout(() => {
        triggerLanguageChange(lang)
      }, 2000)
    } else {
      triggerLanguageChange(lang)
    }

    setShowOptions(false)
  }

  const triggerLanguageChange = (lang: 'en') => {
    const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement

    if (!translateSelect) {
      return
    }

    translateSelect.value = 'en'
    translateSelect.dispatchEvent(new Event('change', { bubbles: true }))
  }

  const toggleOptions = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowOptions(!showOptions)
  }

  return (
    <>
      {/* Hidden Google Translate element */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
        <div id="google_translate_element_dynamic" />
      </div>

      <div className="relative">
        {/* Main Button */}
        <button
          onClick={toggleOptions}
          className="
            w-14 h-14 rounded-full
            bg-gradient-to-br from-vizon to-brown
            hover:from-brown hover:to-vizon
            text-white shadow-lg hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300 transform
            hover:scale-110
            group
            relative
          "
          aria-label="Dil seçimi"
        >
          <Languages className="h-6 w-6" />

          {/* Tooltip */}
          <span className="
            absolute right-full mr-3 px-3 py-2
            bg-brown text-cream text-sm font-medium
            rounded-lg shadow-lg whitespace-nowrap
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          ">
            Dil Seçimi
          </span>
        </button>

        {/* Hover Menu */}
        {showOptions && (
          <div className="
            absolute bottom-full right-0 mb-2
            bg-brown rounded-2xl shadow-xl
            overflow-hidden
            border border-cream/20
            min-w-[160px]
            animate-in fade-in slide-in-from-bottom-2
            duration-200
          ">
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowOptions(false)
              }}
              className="
                w-full px-4 py-3 flex items-center gap-3
                text-left transition-colors
                bg-vizon text-cream font-semibold
              "
            >
              <span className="text-2xl">🇹🇷</span>
              <span className="text-sm">Türkçe</span>
            </button>

            <button
              onClick={(e) => changeLanguage('en', e)}
              className="
                w-full px-4 py-3 flex items-center gap-3
                text-left transition-colors
                text-cream/80 hover:bg-vizon/50 hover:text-cream
              "
            >
              <span className="text-2xl">🇬🇧</span>
              <span className="text-sm">English</span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
