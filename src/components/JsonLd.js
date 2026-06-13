import { siteConfig, absoluteUrl } from '@/config/site';

export default function JsonLd() {
  const sameAs = [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    jobTitle: 'MERN Stack Developer',
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone || undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.location,
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
