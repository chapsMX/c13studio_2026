'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Blog', href: '/blog' },
    { label: 'Documentación de obra', href: '/documentacion' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Desktop Navigation Container */}
        <div className="hidden md:flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-auto flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="c13studio"
              height={40}
              width={120}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-c13-dark hover:text-white hover:bg-c13-orange rounded transition duration-200 block"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="md:hidden relative h-10 w-auto">
          <Image
            src="/images/logo.png"
            alt="c13studio"
            height={40}
            width={120}
            className="object-contain"
          />
        </Link>

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
          <div className="flex flex-col gap-0 px-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-c13-dark hover:text-white hover:bg-c13-orange rounded transition block"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
