'use client'

import { useState } from 'react'

const PORTFOLIO_IMAGES = [
  '/images/portfolio-1.jpg',
  '/images/portfolio-2.jpg',
  '/images/portfolio-3.jpg',
  '/images/portfolio-4.jpg',
  '/images/portfolio-5.jpg',
  '/images/portfolio-6.jpg',
]

export default function Portafolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-c13-dark mb-12 text-center">Portafolio</h2>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PORTFOLIO_IMAGES.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(image)}
              className="aspect-video bg-gray-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
            >
              <div className="w-full h-full bg-gradient-to-br from-c13-blue/20 to-c13-orange/20 flex items-center justify-center">
                <span className="text-gray-400">Imagen {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-4xl w-full overflow-hidden"
            >
              <div className="aspect-video bg-gray-300 flex items-center justify-center">
                <span className="text-gray-400">Imagen expandida</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
