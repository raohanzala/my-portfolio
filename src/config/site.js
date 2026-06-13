export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Hanzala',
  fullName: process.env.NEXT_PUBLIC_FULL_NAME || 'Rao Hanzala',
  brandSuffix: process.env.NEXT_PUBLIC_BRAND_SUFFIX || '.dev',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Pakistan',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio-domain.com',
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://hanzala-portfolio.vercel.app',
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Hanzala | Web Developer Portfolio',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Crafting modern web apps with Next.js and React.',
  ogSiteName: process.env.NEXT_PUBLIC_OG_SITE_NAME || 'Hanzala Portfolio',
  footerTagline:
    process.env.NEXT_PUBLIC_FOOTER_TAGLINE ||
    'Full-stack developer building clean, scalable web apps that solve real problems.',
  email: process.env.NEXT_PUBLIC_EMAIL || 'raohanzala70@email.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  whatsappUrl: process.env.NEXT_PUBLIC_PHONE
    ? `https://wa.me/${process.env.NEXT_PUBLIC_PHONE.replace(/\D/g, '')}`
    : '',
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/raohanzala',
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://www.linkedin.com/in/rao-hanzala-65a719371/',
  },
};
