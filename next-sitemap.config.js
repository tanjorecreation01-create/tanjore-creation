/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tanjorecreation.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/_next/' },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
}
