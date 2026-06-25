/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://enculture.ai",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/demo", "/culture-health-check"],
  transform: async (config, path) => {
    let priority = config.priority;

    if (path === "/") {
      priority = 1.0;
    } else if (["/solutions/for-chros", "/solutions/engagement", "/assessments"].includes(path)) {
      priority = 0.9;
    } else if (path.startsWith("/solutions/") || path.startsWith("/platform/") || path === "/solutions" || path === "/platform") {
      priority = 0.8;
    } else if (path.startsWith("/assessments/") || path.startsWith("/about/") || path === "/about" || path === "/culture-dialogue") {
      priority = 0.7;
    } else if (path.startsWith("/resources") || path === "/features") {
      priority = 0.6;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
