'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks({
  align = 'center',
  size = 'text-xl',
  gap = 'gap-5',
  color = 'text-[var(--subtext)]', // Default color
}) {
  const alignment = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  };

  const links = [
    {
      href: 'https://github.com/raohanzala',
      label: 'GitHub',
      icon: <FaGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/rao-hanzala-65a719371/',
      label: 'LinkedIn',
      icon: <FaLinkedin />,
    },
    {
      href: 'mailto:raohanzala70@email.com',
      label: 'Email',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className={`flex ${gap} ${alignment[align]} z-20 items-center ${color}`}>
      {links.map(({ href, label, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition hover:text-[var(--secondary)] ${size}`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
