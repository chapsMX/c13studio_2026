'use client'

import Image from 'next/image'

export default function Nosotros() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header with Logo */}
        <div className="text-center mb-2">
          <div className="flex justify-center mb-2">
            <Image
              src="/images/logo.png"
              alt="c13studio"
              height={60}
              width={180}
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-c13-dark mb-2">
           c13studio
          </h2>
          <p className="text-lg md:text-xl text-c13-dark leading-relaxed max-w-4xl mx-auto mb-8">
            Somos un estudio de fotografía y video aéreo. Llevamos más de 15 años colaborando 
            con casas productoras, estudios de televisión, arquitectos y desarrolladores inmobiliarios 
            para llevar sus proyectos al siguiente nivel. Nos especializamos en los siguientes servicios:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Arquitectura */}
          <div className="group p-8 rounded-lg text-center border-2 border-c13-blue/30 hover:border-c13-blue hover:shadow-lg transition duration-300 bg-gradient-to-b from-c13-blue/5 to-transparent">
            <div className="w-16 h-16 bg-gradient-to-br from-c13-blue to-c13-blue/70 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 12h18M3 6h18M3 18h18M5 3v18M19 3v18M8 3v5M12 3v5M16 3v5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-c13-dark mb-4">Arquitectura</h3>
            <p className="text-gray-600 leading-relaxed">
              La vista aérea convierte una propiedad en una historia. Nuestros videos y fotografías realzan 
              cada proyecto, diferenciándolo de la competencia y creando material de alto impacto para promoción y ventas.
            </p>
          </div>

          {/* Desarrollo Inmobiliario */}
          <div className="group p-8 rounded-lg text-center border-2 border-c13-orange/30 hover:border-c13-orange hover:shadow-lg transition duration-300 bg-gradient-to-b from-c13-orange/5 to-transparent">
            <div className="w-16 h-16 bg-gradient-to-br from-c13-orange to-c13-orange/70 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2v20M8 6h8M8 10h8M8 14h8M8 18h8M2 6h2v16H2M20 6h2v16h-2M6 2h12v2H6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-c13-dark mb-4">Desarrollo Inmobiliario</h3>
            <p className="text-gray-600 leading-relaxed">
              Documenta el avance de tu obra como nunca antes. Nuestro servicio permite llevar un 
              registro visual preciso y compartir actualizaciones con inversionistas, clientes o en redes sociales.
            </p>
          </div>

          {/* Producciones Audiovisuales */}
          <div className="group p-8 rounded-lg text-center border-2 border-c13-dark/30 hover:border-c13-dark hover:shadow-lg transition duration-300 bg-gradient-to-b from-c13-dark/5 to-transparent">
            <div className="w-16 h-16 bg-gradient-to-br from-c13-dark to-c13-dark/70 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 8v8h16V8H4M8 5l-2 3h12l-2-3M6 16v2h12v-2M9 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-c13-dark mb-4">Producciones Audiovisuales</h3>
            <p className="text-gray-600 leading-relaxed">
              Sumamos valor a cualquier producción. Ya sea documental, película, televisión o comercial, 
              nuestro equipo se integra al flujo de trabajo para aportar tomas aéreas espectaculares.
            </p>
          </div>
        </div>
      </div>

      {/* Counter - Full Width */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-c13-orange mb-2">15+</p>
              <p className="text-gray-600 text-lg">Años de experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-c13-blue mb-2">100+</p>
              <p className="text-gray-600 text-lg">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-c13-dark mb-2">5000+</p>
              <p className="text-gray-600 text-lg">Horas de vuelo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Full Width */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-c13-dark text-center mb-8">
            Demo Reel
          </h2>
        </div>
        <div className="w-full aspect-video overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/d2VBjb_fQ00"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-12"></div>
      </div>
    </section>
  )
}
