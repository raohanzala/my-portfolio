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
      <div className="py-24 px-6 bg-[var(--background)] text-[var(--text)] max-w-[1280px] mx-auto">
        <SectionTitle
          label="Get in Touch"
          title="Contact Me"
          subtitle="Have a question, idea, or project? Fill the form below or reach out via social media."
        />

        <ContactForm />

        <div className="mt-12 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </MainPage>
  );
}
