import type { Metadata } from "next"
import { BlogContent } from "@/components/blog/blog-content"

export const metadata: Metadata = {
  title: "Diş Sağlığı Rehberi | Dt. Emrecan Eren - Uzman Tavsiyeleri",
  description: "Diş sağlığı hakkında kanıta dayalı, uzman onaylı bilgiler. İmplant, ortodonti, kanal tedavisi ve daha fazlası hakkında detaylı rehberler.",
  keywords: ["diş sağlığı rehberi", "diş tedavisi bilgileri", "implant rehberi", "ortodonti bilgileri", "kanal tedavisi"],
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream">
      <BlogContent />
    </main>
  )
}
