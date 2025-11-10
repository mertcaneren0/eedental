import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { name: "Hakkımızda", href: "/hakkinda" },
  { name: "Ekibimiz", href: "/ekibimiz" },
  { name: "Tedaviler", href: "/tedaviler" },
  { name: "Blog", href: "/dis-sagligi-rehberi" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Kariyer", href: "/kariyer" },
]

export function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dt. Emrecan Eren</h3>
            <p className="text-cream/80 mb-4">
              Lüleburgaz'ın ilk ve tek mikroskop destekli diş kliniği. 
              Geleceğin diş hekimliği, bugünün kliniği.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream/70">
              <span>TDB Üyesi</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>[Adres Bilgisi], Lüleburgaz, Kırklareli</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+90" className="hover:text-cream transition-colors">
                  +90 [Telefon]
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@emrecaneren.com" className="hover:text-cream transition-colors">
                  info@emrecaneren.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Pzt-Cum: 09:00 - 18:00</p>
                  <p>Cmt: 09:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-cream/20 pt-8 text-center text-sm text-cream/60">
          <p>© 2025 Dt. Emrecan Eren. Tüm hakları saklıdır.</p>
          <div className="mt-2 space-x-4">
            <Link href="/gizlilik-politikasi" className="hover:text-cream transition-colors">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <Link href="/kullanim-kosullari" className="hover:text-cream transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
