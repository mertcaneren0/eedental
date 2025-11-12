import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Breadcrumb } from "@/components/seo/breadcrumb"
import { SchemaMarkup } from "@/components/seo/schema-markup"

interface BlogPostTemplateProps {
  title: string
  description: string
  category: string
  categoryIcon: React.ReactNode
  content: React.ReactNode
  relatedPosts?: Array<{
    title: string
    href: string
  }>
  pillarPage?: string
  slug?: string
  datePublished?: string
  dateModified?: string
}

export function BlogPostTemplate({
  title,
  description,
  category,
  categoryIcon,
  content,
  relatedPosts = [],
  pillarPage,
  slug,
  datePublished,
  dateModified,
}: BlogPostTemplateProps) {
  const breadcrumbItems = [
    { name: 'Diş Sağlığı Rehberi', href: '/dis-sagligi-rehberi' },
    { name: title, href: `/dis-sagligi-rehberi/${slug || ''}` },
  ]

  return (
    <div className="bg-cream">
      <SchemaMarkup 
        type="article" 
        data={{
          title,
          description,
          url: `https://www.emrecaneren.com/dis-sagligi-rehberi/${slug}`,
          datePublished: datePublished || new Date().toISOString(),
          dateModified: dateModified || new Date().toISOString(),
          medicalTopic: category,
        }}
      />

      {/* Back Button & Breadcrumb */}
      <div className="bg-white border-b border-brown/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-4">
          <Link href="/dis-sagligi-rehberi">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tüm Yazılar
            </Button>
          </Link>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-cream to-vizon/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            {categoryIcon}
            <span className="text-sm font-semibold text-vizon uppercase tracking-wider">
              {category}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-brown sm:text-5xl mb-6">
            {title}
          </h1>
          <p className="text-xl text-brown/70 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brown/60">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Dt. Emrecan Eren</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 dk okuma</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-lg prose-brown max-w-none">
            {content}
          </article>

          {/* Pillar Page Link */}
          {pillarPage && (
            <div className="mt-12 p-6 bg-vizon/5 rounded-lg border border-vizon/20">
              <h3 className="text-lg font-semibold text-brown mb-2">
                Bu tedavi hakkında daha fazla bilgi
              </h3>
              <p className="text-brown/70 mb-4">
                Detaylı bilgi ve randevu için tedavi sayfamızı ziyaret edin.
              </p>
              <Button asChild>
                <Link href={pillarPage}>Tedavi Sayfasına Git</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brown mb-8">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link href={post.href} className="hover:text-vizon transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
