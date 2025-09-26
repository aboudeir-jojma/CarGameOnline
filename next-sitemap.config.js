const games = require("./content/games.json"); // ton fichier avec les slugs

module.exports = {
  siteUrl: "https://cargameonline.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  async additionalPaths(config) {
    return games.map(game => ({
      loc: `/game/${game.slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  },
};
