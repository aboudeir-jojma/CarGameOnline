/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cargameonline.com", // ton domaine
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./out", // indispensable car tu fais `serve out`
};

module.exports = config;
