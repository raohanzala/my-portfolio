'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/site';

export default function SocialLinks({
  align = 'center',
  size = 'text-xl',
  gap = 'gap-5',
  color = 'text-[var(--subtext)]',
}) {
  const alignment = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  };

  const links = [
    siteConfig.social.github && {
      href: siteConfig.social.github,
      label: 'GitHub',
      icon: <FaGithub />,
      external: true,
    },
    siteConfig.social.linkedin && {
      href: siteConfig.social.linkedin,
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      external: true,
    },
    siteConfig.whatsappUrl && {
      href: siteConfig.whatsappUrl,
      label: 'WhatsApp',
      icon: <FaWhatsapp />,
      external: true,
    },
    siteConfig.email && {
      href: `mailto:${siteConfig.email}`,
      label: 'Email',
      icon: <FaEnvelope />,
      external: false,
    },
  ].filter(Boolean);

  return (
    <div className={`flex ${gap} ${alignment[align]} z-20 items-center ${color}`}>
      {links.map(({ href, label, icon, external }, index) => (
        <a
          key={index}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={label}
          className={`transition hover:text-[var(--secondary)] ${size}`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
