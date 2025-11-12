import { HeroSection } from "@/components/home/hero-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ServicesPreview } from "@/components/home/services-preview"
import { ContactForm } from "@/components/home/contact-form"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { SchemaMarkup } from "@/components/seo/schema-markup"

export default function Home() {
  return (
    <>
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="localBusiness" />
      
      <main className="min-h-screen">
        <HeroSection />
        <WhyChooseUs />
        <ServicesPreview />
        <ContactForm />
      </main>
      <JsonLd data={schemas.dentist} />
    </>
  )
}
