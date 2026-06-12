'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Text */}
        <div className="text-sm text-center md:text-left">
          <p className="text-slate-400">
            © {year} <span className="font-medium text-white">Rao Hanzala</span>. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
