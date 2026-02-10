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
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.instagram.com/c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white hover:border-c13-orange transition duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="4" ry="4"/>
              <circle cx="12" cy="12" r="4" fill="none"/>
              <circle cx="17" cy="7" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white hover:border-c13-orange transition duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.89 2.89 0 1 1-5.92-2.92 2.89 2.89 0 0 1 2.31 1.39V9.58a6.54 6.54 0 1 0 10.86 3.9"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@c13studiomx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white hover:border-c13-orange transition duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M21.5 3h-19A2.5 2.5 0 0 0 0 5.5v13A2.5 2.5 0 0 0 2.5 21h19a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 21.5 3zm-10 13l-5-3v-6l5-3v8z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/c13studio"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white hover:border-c13-orange transition duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h5v-7h-2v-3h2v-2a4 4 0 0 1 4-4h3v3h-3a1 1 0 0 0-1 1v2h4l-1 3h-3v7h5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"/>
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
