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
      className="group relative block overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* LIVE Badge */}
      <span className="absolute top-3 right-3 z-10 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
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
        <div className="mt-3 flex items-center gap-1 text-xs text-blue-600 hover:underline truncate">
          <FaExternalLinkAlt className="w-3 h-3" />
          <span>{getDomain(link)}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3 text-xs text-[var(--subtext)]">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-[var(--background)] border px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
