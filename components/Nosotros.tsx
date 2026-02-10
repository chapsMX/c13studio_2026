export default function Nosotros() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-c13-dark leading-relaxed max-w-3xl">
            Somos un estudio de fotografía y video aéreo. Llevamos más de 15 años colaborando 
            con casas productoras, estudios de televisión, arquitectos y desarrolladores inmobiliarios 
            para llevar sus proyectos al siguiente nivel. Nos especializamos en los siguientes servicios:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Arquitectura */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-c13-blue rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-c13-dark mb-3">Arquitectura</h3>
            <p className="text-gray-600">
              La vista aérea convierte una propiedad en una historia. Nuestros videos y fotografías realzan 
              cada proyecto, diferenciándolo de la competencia y creando material de alto impacto para promoción y ventas.
            </p>
          </div>

          {/* Desarrollo Inmobiliario */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-c13-orange rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v8H3v-8m4-8h2v16H7V5m4-3h2v19h-2V2m4 4h2v15h-2V6m4 2h2v13h-2V8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-c13-dark mb-3">Desarrollo Inmobiliario</h3>
            <p className="text-gray-600">
              Documenta el avance de tu obra como nunca antes. Nuestro servicio permite llevar un 
              registro visual preciso y compartir actualizaciones con inversionistas, clientes o en redes sociales.
            </p>
          </div>

          {/* Producciones Audiovisuales */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-c13-dark rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v12H4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-c13-dark mb-3">Producciones Audiovisuales</h3>
            <p className="text-gray-600">
              Sumamos valor a cualquier producción. Ya sea documental, película, televisión o comercial, 
              nuestro equipo se integra al flujo de trabajo para aportar tomas aéreas espectaculares.
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-c13-orange mb-2">15+</p>
            <p className="text-gray-600">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-c13-blue mb-2">100+</p>
            <p className="text-gray-600">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-c13-dark mb-2">5000+</p>
            <p className="text-gray-600">Horas de vuelo</p>
          </div>
        </div>

        {/* Video */}
        <div className="mt-16">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/d2VBjb_fQ00"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
