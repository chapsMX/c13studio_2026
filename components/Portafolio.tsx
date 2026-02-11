'use client'

import { useEffect, useRef } from 'react'

export default function Portafolio() {
  const scrollContainer1Ref = useRef<HTMLDivElement>(null)
  const scrollContainer2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container1 = scrollContainer1Ref.current
    const container2 = scrollContainer2Ref.current

    if (!container1 || !container2) return

    let scrollAmount1 = 0
    let scrollAmount2 = container2.scrollWidth - container2.clientWidth

    const scroll = () => {
      // Fila 1: izquierda a derecha
      scrollAmount1 += 0.5
      container1.scrollLeft = scrollAmount1
      if (scrollAmount1 > container1.scrollWidth - container1.clientWidth) {
        scrollAmount1 = 0
      }

      // Fila 2: derecha a izquierda
      scrollAmount2 -= 0.5
      container2.scrollLeft = scrollAmount2
      if (scrollAmount2 < 0) {
        scrollAmount2 = container2.scrollWidth - container2.clientWidth
      }

      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl font-bold text-c13-dark text-center">
          Nuestro Portafolio
        </h2>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="mb-8 overflow-hidden">
        <div
          ref={scrollContainer1Ref}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-6 pb-4 w-max px-4 sm:px-6 lg:px-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={`row1-${i + 1}`}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer"
              >
                <img
                  src={`/images/portafolio-c13-${i + 1}.jpg`}
                  alt={`Portafolio ${i + 1}`}
                  className="w-80 h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="overflow-hidden">
        <div
          ref={scrollContainer2Ref}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-6 pb-4 w-max px-4 sm:px-6 lg:px-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={`row2-${i + 11}`}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer"
              >
                <img
                  src={`/images/portafolio-c13-${i + 11}.jpg`}
                  alt={`Portafolio ${i + 11}`}
                  className="w-80 h-64 object-cover group-hover:scale-105 transition duration-300"
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
