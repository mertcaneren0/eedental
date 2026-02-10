"use client"

import { useEffect } from 'react'

export function GoogleTranslateWidget() {
  useEffect(() => {
    // Add the init function to window
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: 'tr', includedLanguages: 'tr,en', autoDisplay: false },
        'google_translate_element'
      )
    }

    // Add the script
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const element = document.getElementById('google_translate_element')
      if (element) element.innerHTML = ''
    }
  }, [])

  return (
    <div
      id="google_translate_element"
      className="google-translate-container"
    />
  )
}
