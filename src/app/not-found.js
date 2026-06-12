// app/not-found.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold text-[var(--text)]">404</h1>
      <p className="text-[var(--subtext)] mt-4 text-lg">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button
        href="/"
      >
        Go Back Home
      </Button>
    </motion.main>
  );
}
