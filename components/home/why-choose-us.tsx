import { Microscope, Cuboid, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Microscope,
    title: "Mikroskopik Hassasiyet",
    description: "Lüleburgaz'da tek. Alman Carl Zeiss mikroskobu ile 25 kat büyütmeli tedavi. Minimal invaziv, maksimum koruma.",
  },
  {
    icon: Cuboid,
    title: "Dijital Planlama",
    description: "3D görüntüleme ve dijital tasarım yazılımları. Tedavinizi görmeden başlamıyoruz.",
  },
  {
    icon: Award,
    title: "Akademik Uzmanlık",
    description: "TDB üyesi. Sürekli eğitim, uluslararası kongre katılımları. Bilim temelli diş hekimliği.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brown sm:text-4xl">
            Neden Dt. Emrecan Eren?
          </h2>
          <p className="mt-4 text-lg text-brown/70">
            Modern teknoloji ve uzman yaklaşımla fark yaratan diş hekimliği
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-vizon/10">
                  <feature.icon className="h-6 w-6 text-vizon" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brown/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
