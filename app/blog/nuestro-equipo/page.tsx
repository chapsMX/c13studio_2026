'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function PostNuestroEquipo() {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen w-full bg-white">
        {/* Back to Blog */}
        <section className="w-full py-6 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <Link href="/blog" className="flex items-center gap-2 text-c13-orange font-semibold hover:gap-4 transition-all">
              <span>←</span>
              <span>Volver al blog</span>
            </Link>
          </div>
        </section>

        {/* Post Header */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 text-gray-600">
              <span className="text-sm">12 de febrero, 2026</span>
              <span>•</span>
              <span className="text-sm">8 min de lectura</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold text-c13-dark mb-4">
              Nuestro equipo: la tecnología detrás de cada vuelo
            </h1>
          </div>
        </section>

        {/* Post Content */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Content (2/3) */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Intro */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    En C13 Studio trabajamos con una flota de drones cuidadosamente seleccionada para cubrir cualquier tipo de producción. No se trata solo de tener equipos modernos —aunque sí los tenemos— sino de elegir la herramienta correcta para cada proyecto. Aquí te contamos qué volamos, por qué lo volamos y cómo eso se traduce en resultados concretos para tu marca o empresa.
                  </p>
                </div>

                {/* Mavic 4 Pro Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-c13-dark">
                    DJI Mavic 4 Pro — El más nuevo de la línea
                  </h2>
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/mavic4.jpg"
                      alt="DJI Mavic 4 Pro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    El Mavic 4 Pro es lo último que DJI tiene en drones de consumo avanzado, y se nota en cada aspecto del equipo. Lo que más nos importa en producción es la autonomía y la calidad de imagen, y este drone cumple en ambos frentes. Vuela hasta <strong>51 minutos</strong> por carga y opera con un alcance de control de hasta <strong>41 km</strong> gracias al sistema de transmisión O4+, lo que nos da una libertad de movimiento enorme en locaciones abiertas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    La cámara es triple: la principal es una <strong>Hasselblad de 100 MP</strong> con sensor CMOS 4/3, capaz de grabar video en <strong>6K a 60 fps en HDR</strong>. Se complementa con dos teleobjetivos —70mm y 168mm— para dar contexto, comprimir perspectivas o aislar detalles sin tener que mover el drone. El <strong>Infinity Gimbal de 360°</strong> permite tomas hacia arriba hasta 70 grados, lo que abre posibilidades que antes eran exclusivas de equipos de cine profesional.
                  </p>
                  <p className="text-sm text-c13-orange font-semibold bg-orange-50 p-4 rounded-lg">
                    <strong>¿Para qué lo usamos?</strong> Para producciones audiovisuales donde necesitamos autonomía extendida, calidad de imagen de primer nivel y flexibilidad creativa en una sola sesión de vuelo.
                  </p>
                </div>

                {/* Inspire 2 Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-c13-dark">
                    DJI Inspire 2 con Zenmuse X7 — La herramienta de cine
                  </h2>
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/inspire.jpg"
                      alt="DJI Inspire 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    El Inspire 2 es un equipo de otra categoría. Es más grande, más rápido y más exigente en operación —por eso lo usamos cuando el proyecto lo requiere. Su característica más importante para nosotros es la cámara Zenmuse X7, que cuenta con una montura intercambiable DL-Mount compatible con cuatro ópticas prime: <strong>16mm, 24mm, 35mm y 50mm</strong>. Cambiar de lente en vuelo abre un lenguaje visual completamente diferente al de un zoom.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    El sensor Super 35 de la X7 tiene <strong>14 stops de rango dinámico</strong> y graba en <strong>6K CinemaDNG</strong> o <strong>5.2K Apple ProRes</strong>, los mismos formatos que usan cámaras de cine de alto nivel. Eso significa que el material aéreo se puede integrar directamente con el material de cámara en tierra sin que se note la diferencia en color, textura o profundidad de campo.
                  </p>
                  <p className="text-sm text-c13-orange font-semibold bg-orange-50 p-4 rounded-lg">
                    <strong>¿Para qué lo usamos?</strong> Para producciones audiovisuales donde la óptica hace la diferencia: comerciales de alto presupuesto, videos institucionales de imagen o cualquier proyecto donde el material aéreo necesita tener la misma calidad que el resto de la producción.
                  </p>
                </div>

                {/* Mavic 3 Pro Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-c13-dark">
                    DJI Mavic 3 Pro — El compañero de obra
                  </h2>
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/mavic3.jpg"
                      alt="DJI Mavic 3 Pro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    El Mavic 3 Pro tiene algo que no siempre se valora lo suficiente: la relación entre lo que pesa, lo que mide y lo que entrega. Con sus <strong>935 gramos</strong> y diseño plegable, es un equipo que se lleva a cualquier parte sin logística complicada. Tiene el mismo triple sistema de cámaras de Hasselblad que hace grande a la línea Mavic: gran angular a 24mm, teleobjetivo medio a 70mm y teleobjetivo largo a 166mm con zoom óptico 7x.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Las tres graban en <strong>4K/60fps</strong> y soportan D-Log para edición en posproducción. Para documentación de obras, esto es clave: podemos registrar el avance general de una construcción en gran angular, detallar una zona específica con el teleobjetivo sin acercar el drone a estructuras en proceso, y mantener un archivo visual constante y ordenado con 43 minutos de autonomía por vuelo.
                  </p>
                  <p className="text-sm text-c13-orange font-semibold bg-orange-50 p-4 rounded-lg">
                    <strong>¿Para qué lo usamos?</strong> Para la documentación periódica de obras de construcción, donde necesitamos un equipo ágil, confiable y con cámara de calidad profesional que pueda operar en condiciones de campo.
                  </p>
                </div>

                {/* Avata 2 Section */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-c13-dark">
                    DJI Avata 2 — La perspectiva que cambia todo
                  </h2>
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/avata.jpg"
                      alt="DJI Avata 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    El Avata 2 no es un drone convencional. Es un equipo <strong>FPV</strong> —First Person View— que se pilota con unas gafas de inmersión y permite volar a alta velocidad con una perspectiva completamente diferente a cualquier otro drone. Alcanza <strong>98 km/h</strong> en modo manual y puede volar en espacios reducidos, rasante al suelo, a través de estructuras, en interiores o siguiendo vehículos en movimiento.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Para producciones donde se necesita una persecución de autos, una entrada dramática a un espacio o un plano de acción que no se puede lograr con grúas ni steadicam, el Avata 2 es la respuesta. Su cámara de sensor <strong>CMOS 1/1.3"</strong> graba en <strong>4K/60fps HDR</strong> con un ángulo de visión de hasta <strong>155°</strong> y soporte para D-Log M de 10 bits, lo que permite integrar el material con el resto de la producción sin problema.
                  </p>
                  <p className="text-sm text-c13-orange font-semibold bg-orange-50 p-4 rounded-lg">
                    <strong>¿Para qué lo usamos?</strong> Para secuencias de acción —persecuciones, entradas dinámicas, planos de impacto— donde necesitamos una perspectiva imposible de lograr con otros equipos, sin comprometer la seguridad en el set.
                  </p>
                </div>

                {/* Closing */}
                <div className="pt-8 space-y-4 text-gray-700 leading-relaxed border-t border-gray-200">
                  <h2 className="text-3xl font-bold text-c13-dark">
                    Cada proyecto, el equipo correcto
                  </h2>
                  <p>
                    No existe un solo drone que lo haga todo bien. Por eso construimos una flota donde cada equipo tiene un rol claro, y la elección de cuál usar depende del proyecto, el resultado que buscas y las condiciones de la locación.
                  </p>
                  <p>
                    Si tienes un proyecto en mente y quieres saber qué equipo se adapta mejor a lo que necesitas, con gusto te asesoramos.
                  </p>
                </div>

              </div>

              {/* Right Column - Instagram Embed (1/3) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Instagram Embed - 9:16 aspect ratio */}
                  <div className="flex justify-center">
                    <iframe
                      src="https://www.instagram.com/p/DTvaeVECVWg/embed"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
