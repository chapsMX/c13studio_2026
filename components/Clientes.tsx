'use client'

import { useEffect, useRef } from 'react'

const CLIENTS = Array(12).fill(null) // Placeholder para logos

export default function Clientes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 1
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
          <p className="text-lg text-c13-dark">
            Estas son algunas de las empresas que han confiado en nuestro trabajo:
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-12 pb-4">
            {CLIENTS.map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">Cliente {idx + 1}</span>
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
