/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cargameonline.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true, // ⚡ IMPORTANT
  outDir: "./out",
  sitemapSize: 5000,
};

module.exports = config;

