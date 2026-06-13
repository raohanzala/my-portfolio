export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Hanzala',
  fullName: process.env.NEXT_PUBLIC_FULL_NAME || 'Rao Hanzala',
  brandSuffix: process.env.NEXT_PUBLIC_BRAND_SUFFIX || '.dev',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Pakistan',
  city: process.env.NEXT_PUBLIC_CITY || 'Karachi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://raohanzala.vercel.app',
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://raohanzala.vercel.app',
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE ||
    'Rao Hanzala | MERN Stack Developer — Next.js & React Specialist',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Rao Hanzala is a MERN stack developer based in Karachi, Pakistan, specializing in Next.js, React, Node.js, and MongoDB. Available for freelance projects and full-time opportunities.',
  ogSiteName: process.env.NEXT_PUBLIC_OG_SITE_NAME || 'Rao Hanzala Portfolio',
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || '/logo.png',
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '',
  footerTagline:
    process.env.NEXT_PUBLIC_FOOTER_TAGLINE ||
    'MERN stack developer building clean, scalable web apps that solve real problems.',
  email: process.env.NEXT_PUBLIC_EMAIL || 'raohanzala.codes@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  whatsappUrl: process.env.NEXT_PUBLIC_PHONE
    ? `https://wa.me/${process.env.NEXT_PUBLIC_PHONE.replace(/\D/g, '')}`
    : '',
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/raohanzala',
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://www.linkedin.com/in/rao-muhammad-hanzala',
  },
  keywords: [
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'Freelance Web Developer Pakistan',
    'Web Developer Karachi',
    'Rao Hanzala',
    'Hanzala Developer',
    'Tailwind CSS',
  ],
};

export function absoluteUrl(path = '') {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
