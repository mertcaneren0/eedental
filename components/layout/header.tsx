"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkinda" },
  { name: "Ekibimiz", href: "/ekibimiz" },
  { name: "Tedaviler", href: "/tedaviler" },
  { name: "Blog", href: "/dis-sagligi-rehberi" },
  { name: "İletişim", href: "/iletisim" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-brown backdrop-blur-md border-b border-cream/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="w-[180px] h-[40px] flex items-center justify-center">
              <Image 
                src="/images/ee_logo.png" 
                alt="Dt. Emrecan Eren" 
                width={180} 
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-cream hover:text-cream/80 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menüyü aç</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-2 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2.5 text-sm font-medium text-cream/80 hover:text-cream hover:bg-cream/10 rounded-full transition-all whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Link 
            href="tel:+905434860055"
            className="px-5 py-2.5 text-sm font-medium text-cream/80 hover:text-cream hover:bg-cream/10 rounded-full transition-all inline-flex items-center whitespace-nowrap"
          >
            <Phone className="mr-2 h-4 w-4" />
            Ara
          </Link>
          <Link 
            href="/iletisim"
            className="px-6 py-2.5 text-sm font-semibold text-brown bg-cream hover:bg-cream/90 rounded-full transition-all whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Randevu Al
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grey/30">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-brown">Dt. Emrecan Eren</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-brown"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Menüyü kapat</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-grey/30">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brown hover:bg-vizon/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+90">
                      <Phone className="mr-2 h-4 w-4" />
                      Ara
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/iletisim">Randevu Al</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
