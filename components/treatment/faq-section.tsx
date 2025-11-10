interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-brown mb-8">
        Sık Sorulan Sorular
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border border-grey/30 bg-white p-6">
            <h3 className="text-lg font-semibold text-brown mb-3">
              {faq.question}
            </h3>
            <p className="text-brown/70 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
