export default function DocumentacionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-c13-dark mb-4">
          Plan de Documentación de Obra
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Registro visual profesional del avance de tu proyecto.
        </p>

        <div className="bg-white rounded-lg p-8 shadow">
          <h2 className="text-2xl font-bold text-c13-dark mb-6">¿Qué incluye?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-c13-orange font-bold">✓</span>
              <span>Tomas aéreas semanales de la obra</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-c13-orange font-bold">✓</span>
              <span>Video resumen del progreso</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-c13-orange font-bold">✓</span>
              <span>Fotos en alta resolución</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-c13-orange font-bold">✓</span>
              <span>Reportes visuales para inversores</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
