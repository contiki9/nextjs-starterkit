const config = require('./site.config')

module.exports = {
  siteUrl: `https://${config.siteDomain}/`,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './out',
}
