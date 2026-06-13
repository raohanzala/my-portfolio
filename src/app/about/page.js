import { siteConfig, absoluteUrl } from '@/config/site';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.fullName}, a MERN stack developer from ${siteConfig.city}, ${siteConfig.location}, specializing in Next.js, React, Node.js, and MongoDB.`,
  alternates: { canonical: absoluteUrl('/about') },
  openGraph: {
    title: `About ${siteConfig.name} | MERN Stack Developer`,
    description: `Learn more about ${siteConfig.fullName}, a MERN stack developer from ${siteConfig.city}.`,
    url: absoluteUrl('/about'),
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
