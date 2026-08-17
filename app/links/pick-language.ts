export type Lang = "tr" | "en" | "bg"

const SUPPORTED: Lang[] = ["tr", "en", "bg"]
const FALLBACK: Lang = "bg"

/**
 * Accept-Language başlığından desteklenen ilk dili seçer.
 *
 * Tarayıcı dili Türkçe ise "tr", İngilizce ise "en", bunların hiçbiri
 * değilse Bulgarca döner — broşür Bulgar ziyaretçileri hedeflediği için
 * varsayılan "bg".
 *
 * Etiketler q-değerine göre sıralanır; q verilmemişse spec gereği 1.0,
 * q=0 ise "kabul edilmez" demektir ve elenir.
 */
export function pickLanguage(acceptLanguage: string | null): Lang {
  if (!acceptLanguage) return FALLBACK

  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const qParam = params.find((p) => p.trim().startsWith("q="))
      const parsedQ = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1
      return {
        primary: tag.trim().split("-")[0].toLowerCase(),
        q: Number.isFinite(parsedQ) ? parsedQ : 0,
      }
    })
    .filter((c) => c.primary.length > 0 && c.q > 0)
    // Array.prototype.sort kararlıdır: eşit q değerlerinde başlıktaki sıra korunur.
    .sort((a, b) => b.q - a.q)

  const match = candidates.find((c) => SUPPORTED.includes(c.primary as Lang))
  return match ? (match.primary as Lang) : FALLBACK
}
