export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-c13-dark mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Artículos, tips y novedades sobre fotografía y video aéreo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <div className="aspect-video bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-c13-dark mb-2">Artículo {i}</h3>
                <p className="text-gray-600 mb-4">
                  Descripción del artículo que irá aquí...
                </p>
                <a href="#" className="text-c13-blue hover:text-c13-orange transition">
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
