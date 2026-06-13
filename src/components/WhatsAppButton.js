'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

const defaultMessage = `Hi ${siteConfig.name}, I visited your portfolio and would like to connect.`;

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!siteConfig.whatsappUrl) return null;

  const chatUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close chat"
              className="fixed inset-0 z-40 cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-label="WhatsApp chat"
              className="relative z-50 mb-1 w-[min(100vw-2.5rem,320px)] overflow-hidden rounded-2xl border-slate-200 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{siteConfig.name}</p>
                    <p className="flex items-center gap-1.5 text-xs text-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                      Online — ready to chat
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 transition hover:bg-white/15"
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              <div className="space-y-4 bg-[#ECE5DD] px-4 py-5">
                <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-700 shadow-sm">
                  Hi there! 👋
                  <br />
                  Thanks for visiting my portfolio. How can I help you today?
                </div>

                <p className="text-center text-xs text-slate-500">
                  Usually replies within a few hours
                </p>

                <a
                  href={chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20BD5A]"
                >
                  <FaWhatsapp className="text-lg" />
                  Start Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative">
        <span className="absolute inset-0 inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366]/40" />
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          aria-expanded={isOpen}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/25 transition hover:scale-105 hover:shadow-xl"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
