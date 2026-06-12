'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import MobileDrawer from './MobileDrawer';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > window.innerHeight - 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isOverHero = isHomePage && !isScrolledPastHero;

  const baseStyles = 'w-full z-[999] transition-all duration-300 ease-in-out';
  const stickyStyles = 'fixed top-0 bg-white text-black shadow';
  const heroStyles =
    'fixed top-0 text-white bg-black/10 backdrop-blur-xl border-b border-white/10';

  const currentStyles = isOverHero ? heroStyles : stickyStyles;

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`${baseStyles} ${currentStyles}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest">
          <span className={isOverHero ? 'text-white' : 'text-black'}>
            Hanzala
          </span>
          <span className="text-[var(--secondary)]">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex  items-center gap-6">
          {navItems.map((item) => {
            const linkColor = isOverHero
              ? 'text-white hover:text-[var(--secondary)]'
              : 'text-gray-800 hover:text-[var(--secondary)]';
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-sm uppercase font-medium transition-all ${linkColor}`}
              >
                {item.name}
                {/* <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--secondary)] transition-transform scale-x-0 group-hover:scale-x-100 origin-left" /> */}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 md:gap-6">
          {/* <ThemeSwitcher isScrolled={isScrolledPastHero} /> */}
          <Button variant="primary" href="/contact">
            Let’s Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl transition ${isOverHero ? 'text-white' : 'text-black'}`}
          aria-label="Open menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
    </motion.header >
      <MobileDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
        pathname={pathname}
      />
      </>
  );
}
