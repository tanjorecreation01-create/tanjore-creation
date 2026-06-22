/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tanjorecreation.com',
  generateRobotsTxt: true,
  exclude: ['/thank-you', '/apple-icon.png', '/icon.png', '/sitemap.xml', '/sitemap-*.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/_next/' },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
}
