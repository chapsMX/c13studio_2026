'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const navItems = [
    { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Clientes', href: '#clientes', id: 'clientes' },
    { label: 'Blog', href: '/blog', id: 'blog' },
    { label: 'Documentación de obra', href: '/documentacion', id: 'documentacion' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(s => s.element)

      let current = ''
      sections.forEach(({ id, element }) => {
        const rect = element!.getBoundingClientRect()
        if (rect.top <= 150) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-c13-orange w-full">
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - Izquierda */}
        <Link href="/" className="relative h-10 w-auto flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="c13studio"
            height={40}
            width={120}
            className="object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation - Derecha */}
        <div className="hidden md:flex gap-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 transition duration-200 block text-white ${
                  isActive
                    ? 'bg-black bg-opacity-20'
                    : 'hover:bg-black hover:bg-opacity-10'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button - Derecha */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation - Desplegable */}
      {isOpen && (
        <div className="md:hidden w-full bg-c13-orange border-t border-c13-orange border-opacity-50">
          <div className="flex flex-col gap-0 px-4 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 transition duration-200 block text-white ${
                    isActive
                      ? 'bg-black bg-opacity-20'
                      : 'hover:bg-black hover:bg-opacity-10'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
