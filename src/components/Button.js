'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Button({
  children,
  href,
  onClick,
  type,
  disabled = false,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',         // 'sm' | 'md' | 'lg'
  className = '',
  as = 'button',       // 'button' | 'link'
  white = false,       // ✅ NEW: makes border & text white
}) {
  const base =
    'inline-flex cursor-pointer text-nowrap items-center justify-center font-medium rounded relative overflow-hidden group transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variants = {
    primary: 'bg-[var(--secondary)] text-white hover:shadow-xl',

    secondary: clsx(
      'bg-transparent border hover:bg-[var(--secondary)] hover:text-white',
      white
        ? 'border-slate-300 text-slate-300 hover:bg-[var(--secondary)] hover:text-white hover:border-[var(--secondary)]'
        : 'border-[var(--secondary)] text-[var(--secondary)]'
    ),

    ghost: clsx(
      'hover:text-[var(--secondary)]',
      white ? 'text-white' : 'text-[var(--text)]'
    ),
    // outline: clsx(
    //   'hover:text-[var(--secondary)]',
    //   white ? 'text-white' : 'text-[var(--text)]'
    // ),
  };

  const combined = clsx(base, sizes[size], variants[variant], className);
  const MotionTag = motion[as === 'link' ? 'a' : 'button'];

  return href ? (
    <Link href={href} passHref>
      <MotionTag
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={combined}
      >
        <span
          className="absolute inset-0 scale-0 group-hover:scale-150 bg-white/10 rounded-full transition-transform duration-500 ease-out"
          aria-hidden
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </MotionTag>
    </Link>
  ) : (
    <MotionTag
      type={type}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      onClick={onClick}
      className={combined}
    >
      <span
        className="absolute inset-0 scale-0 group-hover:scale-150 bg-white/10 rounded-full transition-transform duration-500 ease-out"
        aria-hidden
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </MotionTag>
  );
}
