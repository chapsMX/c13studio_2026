'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const CAROUSEL_IMAGES = Array.from({ length: 6 }, (_, i) => `/images/carousel-dpo-${i + 1}.jpg`)

function PortfolioCarousel() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-6 pb-4 w-max">
          {Array.from({ length: 8 }, (_, idx) => (
            <div
              key={idx + 1}
              className="flex-shrink-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={`/images/portafolio-dpo-${idx + 1}.jpg`}
                alt={`Proyecto ${idx + 1}`}
                className="w-80 h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
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
    </div>
  )
}

export default function Documentacion() {
  const [currentImage, setCurrentImage] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Header />

      {/* Hero Carousel */}
      <section className="relative w-full h-96 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{backgroundImage: `url(${CAROUSEL_IMAGES[currentImage]})`}}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Carousel controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentImage ? 'bg-c13-orange' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Promoción Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - 2/3 */}
            <div className="md:col-span-2">
              <div className="space-y-6 text-c13-dark leading-relaxed">
                <p>
                  En el 85% de las obras se delega la documentación de los procesos a los residentes de obra, quienes resuelven el problema tomando fotos con un equipo celular lo cual resulta en contar con fotos de mala calidad así como inconsistencia en el proceso. Conscientes de la importancia que tiene la documentación de procesos de obra en c13studio hemos desarrollado un registro profesional y constante del avance de obra a través de fotografía aérea y video aéreo.
                </p>

                <p>
                  La documentación de obra permite a los desarrolladores inmobiliarios, contratistas y arquitectos a llevar un registro puntual del avance de la obra así como de los diferentes procesos que se llevan en una obra (desmontes, excavaciones, cimentación, estructura, fachadas, etc).
                </p>

                <p>
                  Al tratarse de fotografía y video aéreo el material también puede ser utilizado para comunicar el avance de obra con inversionistas clientes potenciales y en redes sociales ya que resulta muy vistoso y novedoso.
                </p>
              </div>

              {/* Consideraciones */}
              <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-c13-dark mb-4">
                  CONSIDERACIONES
                </h3>
                <ul className="space-y-3 text-c13-dark">
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>Precios en pesos mexicanos, no incluyen IVA.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>Contratación mínima para aplicar promoción: 8 sesiones.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>Es necesario que todos los trabajadores cuenten con equipo de seguridad.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>En el caso de CDMX, Querétaro, Puebla, Toluca y Cuernavaca NO se consideran viáticos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>Las sesiones pueden ser suspendidas por factores climatológicos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-c13-orange font-bold">•</span>
                    <span>En caso de que la sesión sea suspendida por causas imputables al cliente se cobrará el 50% de la misma y se programará una nueva sujeta a disponibilidad de agenda.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - 1/3 */}
            <div className="md:col-span-1">
              <div className="sticky top-32 border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {/* Header Dark */}
                <div className="relative bg-c13-dark p-8 text-white">
                  <div className="absolute top-4 right-4 bg-c13-orange text-white px-4 py-2 transform rotate-12 font-bold text-sm">
                    PROMOCIÓN
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Ideal para constructoras<br />o desarrolladoras
                  </h3>
                  <p className="text-lg mb-6">
                    Contratando 8 sesiones
                  </p>
                  <p className="text-5xl font-bold mb-2">
                    $7,500.00
                  </p>
                  <p className="text-sm opacity-90">
                    *POR SESIÓN
                  </p>
                </div>

                {/* Body White */}
                <div className="p-8 bg-white">
                  <p className="text-c13-dark font-semibold mb-4">
                    Nuestro paquete de documentación de procesos de obra incluye una sesión de documentación (fotografía y video) de la cual se entrega el siguiente material:
                  </p>

                  <ul className="space-y-4 text-c13-dark text-sm mb-6">
                    <li className="flex gap-3">
                      <span className="text-c13-orange font-bold flex-shrink-0">•</span>
                      <span>Un mínimo de 15 fotografías por sesión, las cuales se entregan con edición de color, encuadre, recorte y ajustes. Se entregan en calidad Full HD y salida web.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-c13-orange font-bold flex-shrink-0">•</span>
                      <span>Un video duración máxima de 30 segundos, con logotipo del desarrollo y desarrollador, música de fondo (de la librería de YouTube). Se entrega en calidad Full HD.</span>
                    </li>
                  </ul>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/525572507711?text=Hola%20c13studio%2C%20me%20interesa%20el%20paquete%20de%20Documentaci%C3%B3n%20de%20Obra%20Promoci%C3%B3n%202026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-c13-orange text-white font-bold py-3 rounded-lg hover:bg-c13-orange/90 transition"
                    >
                      Contratar
                    </a>
                    <a
                      href="#"
                      className="block w-full text-center border-2 border-c13-orange text-c13-orange font-bold py-3 rounded-lg hover:bg-c13-orange/10 transition"
                    >
                      Descargar ejemplo de entrega
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-c13-dark text-center">
            Galería de Proyectos
          </h2>
        </div>
        <PortfolioCarousel />
      </section>

      {/* FAQ Section - Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-c13-dark text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {/* FAQ items will be added here */}
            <p className="text-center text-gray-500">
              Contenido próximamente...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
