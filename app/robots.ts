import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/.next/'],
    },
    sitemap: 'https://c13studio.mx/sitemap.xml',
  }
}
