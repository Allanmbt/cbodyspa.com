/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cbodyspa.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://cbodyspa.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    }
  },
} 