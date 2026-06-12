import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import MainPage from '@/components/MainPage';

export const metadata = {
  title: 'Contact | Hanzala',
  description: 'Let’s build something amazing together.',
};

export default function ContactPage() {
  return (
    <MainPage>
      <div className="py-24 px-6 bg-[var(--background)] text-[var(--text)] max-w-[1280px] mx-auto">
        <SectionTitle title="Contact Me" />

        <p className="text-center text-[var(--subtext)] max-w-xl mx-auto mt-4">
          Have a question, idea, or project? Let’s talk! You can fill the form below or reach out via social media.
        </p>

        <ContactForm />

        <div className="mt-12 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </MainPage>
  );
}
