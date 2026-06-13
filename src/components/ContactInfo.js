import { FiMail, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/config/site';

export default function ContactInfo() {
  return (
    <div className="text-center lg:text-left">
      <p className="text-lg leading-relaxed text-[var(--subtext)] lg:text-xl">
        I&apos;m open to freelance work, collaborations, and full-time opportunities.
        Reach me by email, phone, or WhatsApp.
      </p>

      <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 font-medium text-[var(--secondary)] transition hover:underline"
        >
          <FiMail />
          {siteConfig.email}
        </a>
        {siteConfig.phone && (
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 font-medium text-[var(--secondary)] transition hover:underline"
          >
            <FiPhone />
            {siteConfig.phone}
          </a>
        )}
      </div>
    </div>
  );
}
