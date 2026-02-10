'use client'

import { useState, useEffect } from 'react'

const CAROUSEL_IMAGES = [
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg',
  '/images/carousel-3.jpg',
  '/images/carousel-4.jpg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{backgroundImage: `url(${CAROUSEL_IMAGES[currentImage]})`}}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          c13studio
        </h1>

        {/* Divider Line */}
        <div className="w-32 h-0.5 bg-c13-orange mb-6"></div>

        <p className="text-lg md:text-xl text-gray-200 mb-12">
          Estudio de fotografía y video aéreo
        </p>

        {/* Divider Line - Spacing */}
        <div className="mb-6"></div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-8">
          <a
            href="https://www.instagram.com/c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-white hover:bg-c13-orange hover:border-c13-orange transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
          </a>
          <a
            href="https://x.com/c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-white hover:bg-c13-orange hover:border-c13-orange transition"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.215-6.817-5.975 6.817H2.306l7.644-8.74L.754 2.25h6.844l4.73 6.255 5.466-6.255zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@c13studiomx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-white hover:bg-c13-orange hover:border-c13-orange transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-white hover:bg-c13-orange hover:border-c13-orange transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z"/>
            </svg>
          </a>
        </div>

        {/* WhatsApp Button */}
        <a href="https://wa.me/525572507711" className="flex items-center gap-2 px-6 py-3 border-2 border-c13-orange text-c13-orange hover:bg-c13-orange hover:text-white transition rounded-lg font-semibold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.93 1.208l-.36.214-3.75-.988.998 3.65-.235.364a9.847 9.847 0 001.438 5.623c3.122 5.412 9.604 7.924 15.694 5.839 1.922-.823 3.664-2.098 4.986-3.702l.322-.384-3.522-1.542-.493.681a6.008 6.008 0 01-4.253 2.066 6.034 6.034 0 01-5.758-3.911l-.169-.416-3.747.993.231-.354a9.884 9.884 0 011.879-3.768c2.65-2.65 6.362-3.595 9.596-2.441.822.35 1.588.84 2.262 1.436l.324.308"/>
          </svg>
          +52 55 7250 7711
        </a>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentImage ? 'bg-c13-orange' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
