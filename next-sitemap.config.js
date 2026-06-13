/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://raohanzala.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/icon.png'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
  },
  additionalPaths: async () => {
    const blogSlugs = ['build-portfolio-nextjs', 'top-ui-tips'];

    return blogSlugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }));
  },
};
