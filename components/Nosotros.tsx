'use client'

import Image from 'next/image'

export default function Nosotros() {
  return (
    <section className="bg-c13-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="c13studio"
              height={60}
              width={180}
              className="object-contain brightness-0 invert"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sobre c13studio
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto mb-8">
            Somos un estudio de fotografía y video aéreo. Llevamos más de 15 años colaborando 
            con casas productoras, estudios de televisión, arquitectos y desarrolladores inmobiliarios 
            para llevar sus proyectos al siguiente nivel. Nos especializamos en los siguientes servicios:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Arquitectura */}
          <div className="group p-8 rounded-lg text-center border-2 border-white/30 hover:border-white hover:shadow-lg transition duration-300 bg-white/5">
            <div className="w-16 h-16 bg-white/20 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Arquitectura</h3>
            <p className="text-white/80 leading-relaxed">
              La vista aérea convierte una propiedad en una historia. Nuestros videos y fotografías realzan 
              cada proyecto, diferenciándolo de la competencia y creando material de alto impacto para promoción y ventas.
            </p>
          </div>

          {/* Desarrollo Inmobiliario */}
          <div className="group p-8 rounded-lg text-center border-2 border-white/30 hover:border-white hover:shadow-lg transition duration-300 bg-white/5">
            <div className="w-16 h-16 bg-white/20 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2v20M8 6h8M8 10h8M8 14h8M8 18h8M2 6h2v16H2M20 6h2v16h-2M6 2h12v2H6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Desarrollo Inmobiliario</h3>
            <p className="text-white/80 leading-relaxed">
              Documenta el avance de tu obra como nunca antes. Nuestro servicio permite llevar un 
              registro visual preciso y compartir actualizaciones con inversionistas, clientes o en redes sociales.
            </p>
          </div>

          {/* Producciones Audiovisuales */}
          <div className="group p-8 rounded-lg text-center border-2 border-white/30 hover:border-white hover:shadow-lg transition duration-300 bg-white/5">
            <div className="w-16 h-16 bg-white/20 rounded-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 8v8h16V8H4M8 5l-2 3h12l-2-3M6 16v2h12v-2M9 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Producciones Audiovisuales</h3>
            <p className="text-white/80 leading-relaxed">
              Sumamos valor a cualquier producción. Ya sea documental, película, televisión o comercial, 
              nuestro equipo se integra al flujo de trabajo para aportar tomas aéreas espectaculares.
            </p>
          </div>
        </div>
      </div>

      {/* Counter - Full Width */}
      <div className="w-full bg-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-c13-orange mb-2">15+</p>
              <p className="text-white/80 text-lg">Años de experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">100+</p>
              <p className="text-white/80 text-lg">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">5000+</p>
              <p className="text-white/80 text-lg">Horas de vuelo</p>
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
