/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ditvi.org',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private']
      }
    ]
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  outDir: 'public',
  additionalPaths: async () => {
    return [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1,
      },
      {
        loc: '/about',
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/programs',
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/privacy-policy',
        changefreq: 'yearly',
        priority: 0.5,
      },
      {
        loc: '/terms',
        changefreq: 'yearly',
        priority: 0.5,
      }
    ]
  }
}