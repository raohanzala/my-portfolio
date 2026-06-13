import { siteConfig, absoluteUrl } from '@/config/site';

export default function sitemap() {
  return [
    { url: absoluteUrl('/'),           lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/about'),     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/projects'),  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: absoluteUrl('/contact'),   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
  ];
}