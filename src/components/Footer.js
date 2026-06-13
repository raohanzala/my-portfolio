'use client';

import Link from 'next/link';
import SocialLinks from './SocialLinks';
import { siteConfig } from '@/config/site';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--secondary)]/30 bg-[#0f172a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left md:max-w-xs">
            <Link href="/" className="text-xl font-bold tracking-widest">
              <span className="text-white">{siteConfig.name}</span>
              <span className="text-[var(--secondary)]">{siteConfig.brandSuffix}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              {siteConfig.footerTagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
              Navigation
            </p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
              Connect
            </p>
            <SocialLinks align="right" color="text-slate-500" size="text-lg" gap="gap-4" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-slate-500 transition hover:text-white"
            >
              {siteConfig.email}
            </a>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-sm text-slate-500 transition hover:text-white"
              >
                {siteConfig.phone}
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>
            © {year}{' '}
            <span className="text-slate-400">{siteConfig.fullName}</span>. All rights reserved.
          </p>
          {/* <p>
            Built with{' '}
            <span className="text-slate-400">Next.js</span> &{' '}
            <span className="text-slate-400">Tailwind CSS</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
