'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Clientes', href: '#clientes', id: 'clientes' },
    { label: 'Blog', href: '/blog', id: 'blog' },
    { label: 'Documentación de obra', href: '/documentacion', id: 'documentacion' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ]

  const getHref = (item: typeof navItems[0]) => {
    // Si el link es un anchor y NO estamos en home, navega a home + anchor
    if (item.href.startsWith('#') && !isHome) {
      return `/${item.href}`
    }
    return item.href
  }

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
        if (rect.top <= 100) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <nav className="w-full px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo - Izquierda */}
        <Link href="/" className="relative h-12 w-auto flex-shrink-0">
          <Image
            src="/images/c13Texto.png"
            alt="c13studio"
            height={128}
            width={300}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation - Derecha */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <Link
                key={item.href}
                href={getHref(item)}
                className={`px-5 py-3 text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'bg-c13-orange text-white'
                    : 'text-c13-dark hover:bg-c13-orange hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button - Derecha */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-c13-dark"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation - Desplegable */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-100">
          <div className="flex flex-col gap-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.href}
                  href={getHref(item)}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'bg-c13-orange text-white'
                      : 'text-c13-dark hover:bg-c13-orange hover:text-white'
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
