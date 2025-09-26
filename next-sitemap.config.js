/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cargameonline.com",
  generateRobotsTxt: true,
  outDir: "./out",
  sitemapSize: 5000,

  // On force la génération d’un index valide
  generateIndexSitemap: true,

  // Si tu veux inclure les pages dynamiques (jeux)
  async additionalPaths(config) {
    const games = require("./content/games.json"); // adapte si ton fichier est ailleurs
    return games.map((game) => ({
      loc: `/game/${game.slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  },
};

module.exports = config;
