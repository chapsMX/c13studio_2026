export default function Footer() {
  return (
    <footer className="bg-c13-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">c13studio</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Estudio de fotografía y video aéreo.
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
            <h3 className="text-lg font-bold mb-6">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/c13studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-c13-orange/50 hover:bg-c13-orange/10 hover:scale-110"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/80 transition-colors group-hover:text-c13-orange" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@c13studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-c13-orange/50 hover:bg-c13-orange/10 hover:scale-110"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 transition-colors group-hover:text-c13-orange" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.23 8.23 0 0 0 4.76 1.5V6.86a4.84 4.84 0 0 1-1-.17z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@c13studiomx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-c13-orange/50 hover:bg-c13-orange/10 hover:scale-110"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 transition-colors group-hover:text-c13-orange" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/c13studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-c13-orange/50 hover:bg-c13-orange/10 hover:scale-110"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 transition-colors group-hover:text-c13-orange" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/525572507711"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:border-c13-orange/50 hover:bg-c13-orange/10 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 transition-colors group-hover:text-c13-orange" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            <a href="#" className="hover:text-c13-orange transition">Política de Privacidad</a> | © 2026 c13studio | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
