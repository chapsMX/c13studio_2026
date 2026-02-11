'use client'

import { useEffect, useRef } from 'react'

const CLIENTS = Array(10).fill(null) // 10 clientes

export default function Clientes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 0.5
      container.scrollLeft = scrollAmount
      if (scrollAmount > container.scrollWidth - container.clientWidth) {
        scrollAmount = 0
      }
      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-c13-dark mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-lg text-c13-dark">
            Estas son algunas de las empresas que han confiado en nuestro trabajo.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-8 pb-4">
            {CLIENTS.map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={`/images/clientes${idx + 1}.jpg`}
                  alt={`Cliente ${idx + 1}`}
                  width={400}
                  height={200}
                  className="w-80 h-40 object-cover object-bottom"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
