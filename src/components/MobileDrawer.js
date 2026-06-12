"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef } from "react";

export default function MobileDrawer({ open, onClose, navItems, pathname }) {
  const drawerRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close menu"
          />
          {/* Drawer */}
          <motion.nav
            ref={drawerRef}
            tabIndex={-1}
            className="fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-2xl flex flex-col px-6 pt-8 pb-8 focus:outline-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            aria-label="Mobile navigation drawer"
          >
            {/* Close button */}
            <button
              className="self-end text-3xl text-slate-400 hover:text-slate-900 mb-8 focus:outline-none p-2 rounded-full transition"
              onClick={onClose}
              aria-label="Close menu"
              style={{ marginTop: '-0.5rem', marginRight: '-0.5rem' }}
            >
              ×
            </button>
            {/* Nav links */}
            <ul className="flex-1 flex flex-col gap-6 justify-center mt-4 mb-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block text-base font-semibold px-2 py-2 transition-all duration-150 text-slate-800 hover:text-[var(--secondary)] ${
                      pathname === item.href
                        ? 'text-[var(--secondary)] underline underline-offset-4 decoration-2'
                        : ''
                    }`}
                    style={{ borderRadius: '6px' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* CTA Button */}
            <div className="mt-8 mb-2">
              <Button
                href="/contact"
                variant="primary"
                as="link"
                className="w-full text-center"
                onClick={onClose}
              >
                Let’s Talk
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
} 