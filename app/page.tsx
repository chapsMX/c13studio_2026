'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/Nosotros'
import Portafolio from '@/components/Portafolio'
import Clientes from '@/components/Clientes'
import Divider from '@/components/Divider'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <section id="nosotros">
        <Nosotros />
      </section>
      <section id="portafolio">
        <Portafolio />
      </section>
      <section id="clientes">
        <Clientes />
      </section>
      <Divider />
      <section id="contacto">
        <Contacto />
      </section>
      <Footer />
    </main>
  )
}
