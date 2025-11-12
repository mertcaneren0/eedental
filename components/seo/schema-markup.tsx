import Script from 'next/script'

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'article' | 'breadcrumb' | 'faq'
  data?: any
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dt. Emrecan Eren Ağız ve Diş Sağlığı Polikliniği",
          "alternateName": "Dt. Emrecan Eren",
          "url": "https://www.emrecaneren.com",
          "logo": "https://www.emrecaneren.com/images/ee_logo.png",
          "description": "Lüleburgaz'ın ilk ve tek mikroskop destekli diş kliniği. Minimal invaziv, kanıta dayalı diş hekimliği.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Kasım Mahallesi, Hazal Sokak, No:44/A",
            "addressLocality": "Lüleburgaz",
            "addressRegion": "Kırklareli",
            "postalCode": "39750",
            "addressCountry": "TR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-543-486-00-55",
            "contactType": "customer service",
            "availableLanguage": ["Turkish"],
            "areaServed": "TR"
          },
          "sameAs": [
            "https://www.instagram.com/dtemrecaneren",
            "https://www.youtube.com/@lifeindentistry"
          ]
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dt. Emrecan Eren Ağız ve Diş Sağlığı Polikliniği",
          "image": "https://www.emrecaneren.com/images/ee_logo.png",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Kasım Mahallesi, Hazal Sokak, No:44/A",
            "addressLocality": "Lüleburgaz",
            "addressRegion": "Kırklareli",
            "postalCode": "39750",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.390179599999996,
            "longitude": 27.359614499999996
          },
          "url": "https://www.emrecaneren.com",
          "telephone": "+90-543-486-00-55",
          "email": "info@emrecaneren.com",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Monday",
              "opens": "13:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Wednesday",
              "opens": "13:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Thursday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "11:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "11:00",
              "closes": "17:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "headline": data?.title,
          "description": data?.description,
          "author": {
            "@type": "Person",
            "name": "Dt. Emrecan Eren",
            "jobTitle": "Diş Hekimi",
            "url": "https://www.emrecaneren.com/hakkinda"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dt. Emrecan Eren Polikliniği",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.emrecaneren.com/images/ee_logo.png"
            }
          },
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": data?.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url
          },
          "about": {
            "@type": "MedicalCondition",
            "name": data?.medicalTopic
          },
          "reviewedBy": {
            "@type": "Person",
            "name": "Dt. Emrecan Eren"
          }
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        }

      default:
        return null
    }
  }

  const schema = getSchema()

  if (!schema) return null

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  )
}
