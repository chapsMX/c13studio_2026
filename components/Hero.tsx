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
        <p className="text-lg md:text-xl text-gray-200 mb-12">
          Estudio de foto y vídeo aéreo
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="p-3 rounded-full border-2 border-c13-blue hover:bg-c13-blue transition">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="p-3 rounded-full border-2 border-c13-blue hover:bg-c13-blue transition">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.89 2.89 0 1 1-5.92-2.92 2.89 2.89 0 0 1 2.31 1.39V9.58a6.54 6.54 0 1 0 10.86 3.9M2 12a10 10 0 0 0 10 10v-3a7 7 0 1 1 0-14v-3a10 10 0 0 0-10 10z"/>
            </svg>
          </a>
          <a href="#" className="p-3 rounded-full border-2 border-c13-blue hover:bg-c13-blue transition">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* WhatsApp Button */}
        <a href="https://wa.me/5255726507711" className="flex items-center gap-2 px-6 py-3 border-2 border-c13-orange text-white hover:bg-c13-orange transition rounded-lg">
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
