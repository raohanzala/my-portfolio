'use client';

import Link from 'next/link';
import SocialLinks from './SocialLinks';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-slate-300 border-t border-white/10">
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[var(--secondary)]/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/40 to-transparent pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Link href="/" className="text-2xl font-bold tracking-widest">
              <span className="text-white">Hanzala</span>
              <span className="text-[var(--secondary)]">.dev</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Full-stack developer building clean, scalable web apps that solve real problems.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Navigation
            </p>
            <nav className="flex flex-col items-center md:items-start gap-3">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Connect
            </p>
            <SocialLinks align="left" color="text-slate-400" size="text-xl" gap="gap-4" />
            <a
              href="mailto:raohanzala70@email.com"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              raohanzala70@email.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {year}{' '}
            <span className="text-slate-300">Rao Hanzala</span>. All rights reserved.
          </p>
          <p>
            Built with{' '}
            <span className="text-slate-300">Next.js</span> &{' '}
            <span className="text-slate-300">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
