import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDate = new Date('2026-02-10')
  
  return [
    {
      url: 'https://c13studio.mx',
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://c13studio.mx/#nosotros',
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://c13studio.mx/#portafolio',
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://c13studio.mx/#clientes',
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://c13studio.mx/#contacto',
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://c13studio.mx/blog',
      lastModified: baseDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://c13studio.mx/documentacion',
      lastModified: baseDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
