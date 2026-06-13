'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, description, tech, image, link }) {
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
      className="group relative block overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/25 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* LIVE Badge */}
      <span className="absolute top-3 right-3 z-10 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
        LIVE
      </span>

      {/* Project Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[var(--text)]">{title}</h3>
        <p className="text-sm text-[var(--subtext)] mt-2">{description}</p>

        {/* Project Link Display */}
        <div className="mt-3 flex items-center gap-1 truncate text-xs text-[var(--secondary)] group-hover:underline">
          <FaExternalLinkAlt className="w-3 h-3" />
          <span>{getDomain(link)}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3 text-xs text-[var(--subtext)]">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
