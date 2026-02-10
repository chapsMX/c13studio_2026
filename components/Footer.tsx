export default function Footer() {
  return (
    <footer className="bg-c13-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">c13studio</h3>
            <p className="text-gray-300 mb-4">
              Especialistas en fotografía y video aéreo.
            </p>
            <a
              href="mailto:info@c13studio.mx"
              className="text-c13-blue hover:text-c13-orange transition"
            >
              info@c13studio.mx
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-c13-blue rounded-full flex items-center justify-center hover:bg-c13-orange transition"
              >
                <span className="text-white">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-c13-blue rounded-full flex items-center justify-center hover:bg-c13-orange transition"
              >
                <span className="text-white">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-c13-blue rounded-full flex items-center justify-center hover:bg-c13-orange transition"
              >
                <span className="text-white">▶</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-c13-blue rounded-full flex items-center justify-center hover:bg-c13-orange transition"
              >
                <span className="text-white">🎵</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2024 c13studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
