'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Blog() {
  return (
    <main className="w-full">
      <Header />
      
      <div className="min-h-screen w-full bg-white">
        {/* Blog Header */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-c13-dark mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Historias, consejos y tendencias en fotografía y video aéreo.
            </p>
          </div>
        </section>

        {/* Blog Posts Container */}
        <section className="w-full py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Posts will be rendered here */}
            <div className="space-y-12">
              {/* Placeholder for first post */}
              <article className="pb-12 border-b border-gray-100">
                <h2 className="text-4xl font-bold text-c13-dark mb-4">
                  Blog post title here
                </h2>
                <div className="flex items-center gap-4 mb-6 text-gray-600">
                  <span className="text-sm">12 de febrero, 2026</span>
                  <span>•</span>
                  <span className="text-sm">c13studio</span>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {/* Blog content here */}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
