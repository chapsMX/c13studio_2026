'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'nuestro-equipo',
    title: 'Nuestro equipo: la tecnología detrás de cada vuelo',
    excerpt: 'En C13 Studio trabajamos con una flota de drones cuidadosamente seleccionada para cubrir cualquier tipo de producción. Descubre qué volamos, por qué y cómo eso se traduce en resultados concretos para tu marca.',
    image: '/images/mavic4.jpg',
    date: '12 de febrero, 2026',
    readTime: '8 min',
  },
]

export default function BlogIndex() {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen w-full bg-white">
        {/* Blog Header */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-c13-dark mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Historias, consejos y tendencias en fotografía y video aéreo.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer overflow-hidden rounded-lg border border-gray-100 hover:border-c13-orange transition-all duration-300 hover:shadow-lg">
                    
                    {/* Featured Image */}
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-c13-dark group-hover:text-c13-orange transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="pt-4 flex items-center gap-2 text-c13-orange font-semibold group-hover:gap-4 transition-all">
                        <span>Leer más</span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
