# c13studio - Portfolio & Documentation Site

![c13studio](./public/images/logo.png)

Sitio web profesional para **c13studio**, estudio especializado en fotografía y video aéreo con drones.

## 🚀 Características

### Home
- **Header Navegable** - Logo, menú principal con detección de sección activa
- **Hero Section** - Carrusel automático con 6 imágenes, iconos sociales con backdrop blur, botón WhatsApp
- **Nosotros** - Fondo oscuro, 3 cajas de servicios (Arquitectura, Inmobiliario, Audiovisuales) con gradientes
- **Portafolio Dual Carousel** - 20 imágenes en 2 filas:
  - Fila 1: Scroll izquierda → derecha
  - Fila 2: Scroll derecha → izquierda
- **Clientes Carousel** - Rotación automática de 10 logos con scroll horizontal
- **Contacto Form** - Integración con Resend, emails enviados a info@c13studio.mx
- **Footer** - Links de redes sociales (Instagram, TikTok, YouTube, Facebook, WhatsApp)

### Documentación de Obra (`/documentacion`)
- **Carrusel Hero** - 6 imágenes de proyectos con rotación automática
- **Sección Promoción 2026** - 
  - Layout 2 columnas (2/3 contenido, 1/3 box naranja)
  - Precio: $7,500/sesión (promoción) vs $10,000 normal
  - Botones: "Contratar" (WhatsApp) + "Descargar ejemplo"
  - Tabla de descuentos por volumen
  - Consideraciones de servicio
- **Galería de Proyectos** - Carrusel horizontal con 8 imágenes + modal fullscreen al click
- **Preguntas Frecuentes** - Layout 2 columnas:
  - 1/3: Video TikTok embebido (9:16)
  - 2/3: 5 preguntas frecuentes con tabla de descuentos

## 🎨 Diseño

**Colores Institucionales:**
- Azul: `#66a9df`
- Naranja (CTA): `#d5662c`
- Oscuro (texto): `#2f2c3c`
- Blanco: `#ffffff`

**Tipografía:** Poppins

**Componentes Reutilizables:**
- Header con navegación sticky
- Footer con redes sociales
- Carousels horizontales (automáticos y manuales)
- Forms con validación Resend

## 📦 Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Typings:** TypeScript
- **Email:** Resend
- **Hosting:** Vercel
- **Version Control:** GitHub

## 🔧 Configuración

### Variables de Entorno (.env.local)
```
RESEND_API_KEY=<TU_API_KEY>
ADMIN_EMAIL=<TU_EMAIL>
```
⚠️ **NUNCA** commitar .env.local a GitHub

### Instalación
```bash
npm install
npm run dev
```

## 📧 Contacto

- **Email:** info@c13studio.mx
- **WhatsApp:** +52 55 7250 7711
- **Instagram:** @c13studio
- **TikTok:** @c13studio
- **YouTube:** @c13studiomx
- **Facebook:** c13studio

## 📄 Licencia

Todos los derechos reservados © 2026 c13studio
