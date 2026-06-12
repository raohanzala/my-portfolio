// app/loading.js
'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--text)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-6 h-6 border-4 border-[var(--secondary)] border-t-transparent rounded-full animate-spin"
      ></motion.div>
    </motion.div>
  );
}
