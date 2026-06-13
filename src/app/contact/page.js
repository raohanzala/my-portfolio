import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import MainPage from '@/components/MainPage';
import ContactInfo from '@/components/ContactInfo';
import { siteConfig, absoluteUrl } from '@/config/site';

export const metadata = {
  title: 'Contact',
  description: `Hire ${siteConfig.fullName} for your next web project. Available for freelance work, collaborations, and full-time roles. Based in ${siteConfig.city}, ${siteConfig.location}.`,
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    title: `Contact ${siteConfig.name} | Hire a MERN Stack Developer`,
    description: 'Available for freelance work, collaborations, and full-time roles.',
    url: absoluteUrl('/contact'),
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.fullName }],
  },
};

export default function ContactPage() {
  return (
    <MainPage>
      <section className="bg-[var(--background)] px-4 py-20 text-[var(--text)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            label="Get in Touch"
            title="Contact Me"
            subtitle="Have a question, idea, or project? Fill the form or reach out directly."
          />

          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>

          <div className="flex justify-center">
            <SocialLinks size="text-xl" />
          </div>
        </div>
      </section>
    </MainPage>
  );
}
