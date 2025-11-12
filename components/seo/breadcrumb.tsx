import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { SchemaMarkup } from './schema-markup'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: 'Ana Sayfa', href: '/' }, ...items]
  
  const schemaItems = allItems.map((item, index) => ({
    name: item.name,
    url: `https://www.emrecaneren.com${item.href}`
  }))

  return (
    <>
      <SchemaMarkup type="breadcrumb" data={{ items: schemaItems }} />
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-brown/60">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            const isFirst = index === 0

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-brown/40" />
                )}
                
                {isLast ? (
                  <span className="font-medium text-brown" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brown transition-colors inline-flex items-center gap-1"
                  >
                    {isFirst && <Home className="h-4 w-4" />}
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
