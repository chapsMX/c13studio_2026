# c13studio - Fotografía y Video Aéreo

Website profesional para c13studio - especialistas en fotografía y video aéreo con drones.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (Email)
- **Vercel** (Deployment)

## Estructura

```
app/
  ├── page.tsx          # Home (Nosotros, Portafolio, Clientes, Contacto)
  ├── blog/page.tsx     # Blog
  ├── documentacion/    # Plan de documentación
  ├── sitemap.ts        # SEO sitemap
  ├── robots.ts         # Robots.txt
  └── layout.tsx        # Root layout con meta tags

components/
  ├── Header.tsx        # Sticky header con navegación
  ├── Hero.tsx          # Carrusel 16:9 + redes
  ├── Nosotros.tsx      # Sobre nosotros + servicios + contador
  ├── Portafolio.tsx    # Galería de trabajos
  ├── Clientes.tsx      # Carrusel de clientes
  ├── Divider.tsx       # Sección divisor con quote
  ├── Contacto.tsx      # Formulario de contacto
  └── Footer.tsx        # Footer + redes
```

## Colores

- **Azul:** #66a9df
- **Morado oscuro:** #2f2c3c
- **Naranja:** #d5662c
- **Blanco:** #ffffff

## SEO

✅ Meta tags Open Graph
✅ Meta tags Twitter
✅ Sitemap dinámico
✅ Robots.txt
✅ Sin redirects
✅ Rutas limpias

## Desarrollo

```bash
npm install
npm run dev  # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

---

Made with 🚁 for c13studio
