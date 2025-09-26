/** @type {import('next-sitemap').IConfig} */
const games = require("./content/games.json"); // fichier avec tes slugs de jeux

module.exports = {
  siteUrl: "https://cargameonline.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./out",   // ⚡ obligatoire pour Cloudflare
  async additionalPaths(config) {
    return games.map((game) => ({
      loc: `/game/${game.slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  },
};
