'use client'

import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('¡Mensaje enviado! Nos pondremos en contacto pronto.')
        setFormData({ nombre: '', email: '', mensaje: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Error de conexión. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-c13-dark mb-4">
            ¿Tienes algún proyecto en mente?
          </h2>
          <p className="text-lg text-gray-600">
            Contáctanos y hagámoslo realidad.
          </p>
        </div>

        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-c13-dark mb-2">
              Nombre
            </label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-c13-blue focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-c13-dark mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-c13-blue focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-c13-dark mb-2">
              Mensaje
            </label>
            <textarea
              required
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-c13-blue focus:border-transparent resize-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-c13-orange hover:bg-c13-orange/90 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  )
}
