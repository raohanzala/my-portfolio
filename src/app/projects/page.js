import { siteConfig, absoluteUrl } from '@/config/site';
import ProjectsPageContent from '@/components/ProjectsPageContent';

export const metadata = {
  title: 'Projects',
  description: `Explore ${siteConfig.fullName}'s portfolio — live projects including e-commerce platforms, admin dashboards, and business websites built with Next.js, React, and MongoDB.`,
  alternates: { canonical: absoluteUrl('/projects') },
  openGraph: {
    title: `Projects by ${siteConfig.name} | MERN Stack Developer Portfolio`,
    description: 'Live projects — e-commerce platforms, dashboards, and business websites.',
    url: absoluteUrl('/projects'),
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
