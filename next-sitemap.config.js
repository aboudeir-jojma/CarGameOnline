/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cargameonline.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./out",   // ⚡ très important pour Cloudflare Pages
};

module.exports = config;
