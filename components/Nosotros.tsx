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
              src="/images/c13studioLogot.png"
              alt="c13studio"
              height={100}
              width={100}
              className="object-contain brightness-0"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
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
