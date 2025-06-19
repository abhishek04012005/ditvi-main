import { MetadataRoute } from 'next'

// Add these lines at the top
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: 'https://ditvi.org/sitemap.xml',
  }
}