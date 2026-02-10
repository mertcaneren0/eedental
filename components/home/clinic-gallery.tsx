"use client"

import Image from "next/image"
import { useState } from "react"

export function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/1.jpg", alt: "Klinik Görünüm 1" },
    { src: "/2.jpg", alt: "Klinik Görünüm 2" },
    { src: "/3.jpg", alt: "Klinik Görünüm 3" },
    { src: "/4.jpg", alt: "Klinik Görünüm 4" },
    { src: "/5.jpg", alt: "Klinik Görünüm 5" },
    { src: "/6.jpg", alt: "Klinik Görünüm 6" },
    { src: "/7.jpg", alt: "Klinik Görünüm 7" },
    { src: "/8.jpg", alt: "Klinik Görünüm 8" },
    { src: "/9.jpg", alt: "Klinik Görünüm 9" },
  ]

  return (
    <>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brown mb-4">
              Kliniğimizden Görüntüler
            </h2>
            <p className="text-lg text-brown/70 max-w-2xl mx-auto">
              Modern ekipmanlarımız ve konforlu ortamımızla tanışın
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-cream transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="relative max-w-5xl w-full aspect-[4/3]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-cream transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage - 1)
              }}
            >
              ‹
            </button>
          )}

          {selectedImage < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-cream transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage + 1)
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
