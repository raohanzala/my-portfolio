'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogCard({ title, description, date, slug }) {
  return (
    <motion.div
      className="rounded-lg border border-[var(--accent)] bg-[var(--background)] p-6 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-[var(--subtext)] mb-2">{date}</p>
      <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">{title}</h3>
      <p className="text-sm text-[var(--subtext)] mb-4">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-[var(--secondary)] font-medium hover:underline"
      >
        Read More →
      </Link>
    </motion.div>
  );
}
