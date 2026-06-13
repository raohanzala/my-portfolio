import { FiMail, FiPhone } from 'react-icons/fi';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import MainPage from '@/components/MainPage';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: 'Let’s build something amazing together.',
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
            <div className="text-center lg:text-left">
              <p className="text-lg leading-relaxed text-[var(--subtext)] lg:text-xl">
                I&apos;m open to freelance work, collaborations, and full-time opportunities.
                Reach me by email, phone, or WhatsApp.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-[var(--secondary)] font-medium transition hover:underline"
                >
                  <FiMail />
                  {siteConfig.email}
                </a>
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-[var(--secondary)] font-medium transition hover:underline"
                  >
                    <FiPhone />
                    {siteConfig.phone}
                  </a>
                )}
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <SocialLinks align="left" size="text-xl" />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </MainPage>
  );
}
