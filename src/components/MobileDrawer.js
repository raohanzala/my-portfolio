'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import { siteConfig } from '@/config/site';

export default function MobileDrawer({ open, onClose, navItems, pathname }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            ref={drawerRef}
            tabIndex={-1}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col bg-white shadow-xl focus:outline-none"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-end px-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close menu"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <nav className="flex-1 px-5 py-2">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? 'text-[var(--secondary)]'
                            : 'text-slate-700 hover:text-[var(--secondary)]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-slate-200 px-5 py-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-lg bg-[var(--secondary)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Let&apos;s Talk
              </Link>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 block text-center text-sm text-[var(--subtext)] transition hover:text-[var(--secondary)]"
              >
                {siteConfig.email}
              </a>

              <div className="mt-4 flex justify-center">
                <SocialLinks size="text-lg" gap="gap-4" />
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
