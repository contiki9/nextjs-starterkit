import { siteDomain } from './site.config'

module.exports = {
  siteUrl: `https://${siteDomain}/`,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './out',
}
