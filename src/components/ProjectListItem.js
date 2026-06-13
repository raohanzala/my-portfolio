'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectListItem({ index, title, description, tech, image, link }) {
  const number = String(index + 1).padStart(2, '0');

  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return '';
    }
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-5 border-b border-slate-200 py-8 transition last:border-b-0 sm:grid-cols-[48px_200px_1fr] sm:items-center sm:gap-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <span className="hidden text-sm font-medium tabular-nums text-slate-400 sm:block">
        {number}
      </span>

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 sm:aspect-auto sm:h-28 sm:w-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 200px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <div className="mb-2 flex items-start justify-between gap-4">
          <div>
            <span className="mb-1 block text-xs font-medium text-slate-400 sm:hidden">
              {number}
            </span>
            <h3 className="text-lg font-semibold text-[var(--text)] transition group-hover:text-[var(--secondary)]">
              {title}
            </h3>
            <p className="mt-1 text-xs text-[var(--secondary)]">{getDomain(link)}</p>
          </div>
          <FiArrowUpRight className="mt-1 shrink-0 text-lg text-slate-400 transition group-hover:text-[var(--secondary)]" />
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--subtext)]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded border border-slate-200 px-2 py-0.5 text-xs text-[var(--subtext)]"
            >
              {item}
            </span>
          ))}
          <span className="rounded bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
            Live
          </span>
        </div>
      </div>
    </motion.a>
  );
}
