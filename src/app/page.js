import { siteConfig } from '@/config/site';
import AboutSummary from '@/components/AboutSummary';
import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import MainPage from '@/components/MainPage';
import ProjectShowcase from '@/components/ProjectShowcase';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MainPage>
        <AboutSummary />
        <ProjectShowcase />
        <ContactCTA />
      </MainPage>
    </>
  );
}
