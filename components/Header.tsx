'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-c13-dark">
          c13studio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#nosotros" className="text-c13-dark hover:text-c13-blue transition">Nosotros</a>
          <a href="#portafolio" className="text-c13-dark hover:text-c13-blue transition">Portafolio</a>
          <a href="#clientes" className="text-c13-dark hover:text-c13-blue transition">Clientes</a>
          <Link href="/blog" className="text-c13-dark hover:text-c13-blue transition">Blog</Link>
          <Link href="/documentacion" className="text-c13-dark hover:text-c13-blue transition">Documentación de obra</Link>
          <a href="#contacto" className="text-c13-dark hover:text-c13-blue transition">Contacto</a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="flex flex-col gap-4 px-4">
            <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
            <a href="#portafolio" onClick={() => setIsOpen(false)}>Portafolio</a>
            <a href="#clientes" onClick={() => setIsOpen(false)}>Clientes</a>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/documentacion" onClick={() => setIsOpen(false)}>Documentación de obra</Link>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  )
}
