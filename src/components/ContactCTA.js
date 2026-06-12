import Link from 'next/link';
import Button from './Button';

export default function ContactCTA() {
  return (
    <section className="py-20 px-6 bg-[var(--background)] text-[var(--text)] text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let&apos;s build something great together!
        </h2>
        <p className="text-[var(--subtext)]  text-lg max-w-xl">
          Have a project in mind or just want to say hi? I&apos;m always open to discussing
          new opportunities or collaborations.
        </p>
        <Button
          href="/contact"
          variant="secondary"
          size="md"
          as="link"
          className="mt-4"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
}
