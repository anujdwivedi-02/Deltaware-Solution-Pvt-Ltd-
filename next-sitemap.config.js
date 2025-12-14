module.exports = {
  siteUrl: "https://deltawaresolution.com",
  generateRobotsTxt: true,
  priority: 0.8,
  sitemapSize: 7000,
  additionalPaths: async (config) => [
    await config.transform(config, "/about"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/services"),
    await config.transform(config, "/careers"),
    await config.transform(config, "/enroll-now"),
    await config.transform(config, "/privacy-policy"),
    await config.transform(config, "/terms-of-service"),
    await config.transform(config, "/certification"),
  ],
};
