'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import SectionTitle from './SectionTitle';
import TechStackCard from './TechStackCard';
import { FiArrowRight, FiChevronDown, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { siteConfig } from '@/config/site';
import { techStack } from '@/data/techStack';

const highlights = [
  { icon: FiCode, label: 'MERN Stack Developer' },
  { icon: FiLayers, label: 'MERN & Next.js' },
  { icon: FiZap, label: 'Performance Focused' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const VISIBLE_ROWS = 3;

function useVisibleCount() {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setCount(6);
      else if (window.matchMedia('(min-width: 640px)').matches) setCount(VISIBLE_ROWS * 3);
      else setCount(VISIBLE_ROWS * 2);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function AboutSummary() {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = useVisibleCount();
  const visibleItems = techStack.slice(0, visibleCount);
  const hiddenItems = techStack.slice(visibleCount);
  const hasMore = hiddenItems.length > 0;

  return (
    <section className="bg-[var(--background)] px-6 py-24 text-[var(--text)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >
          <SectionTitle
            label="About Me"
            title="I turn ideas into"
            highlight="clean, scalable web apps"
            className="!mb-6"
          />
          <p className="mb-8 text-center text-lg leading-relaxed text-[var(--subtext)]">
            I&apos;m a MERN stack developer from {siteConfig.location} who builds responsive products
            for e-commerce, ed-tech, and business platforms — from polished front-ends
            to reliable back-end APIs.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-[var(--text)]"
              >
                <Icon className="text-[var(--secondary)]" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <Button href="/about" variant="primary" size="md" as="link">
              More About Me <FiArrowRight className="ml-1" />
            </Button>
          </div>
        </motion.div>

        <div className="mt-20 border-t border-slate-200 pt-16">
          <SectionTitle
            label="Skills"
            title="Technologies I work with"
            subtitle="The core tools I use to design, build, and ship products."
            className="!mb-10"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 md:gap-6">
            {visibleItems.map((tech) => (
              <TechStackCard key={tech.name} {...tech} />
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && hasMore && (
              <motion.div
                key="tech-stack-expanded"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 sm:pt-6 lg:grid-cols-6 md:gap-6">
                  {hiddenItems.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                    >
                      <TechStackCard {...tech} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {hasMore && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[var(--secondary)] shadow-sm transition hover:border-[var(--secondary)]/30 hover:bg-slate-50"
              >
                {expanded ? 'Show less' : `View all ${techStack.length} technologies`}
                <FiChevronDown
                  className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </button>

              {!expanded && (
                <p className="text-sm text-[var(--subtext)]">
                  +{hiddenItems.length} more —{' '}
                  <Link href="/about" className="font-medium text-[var(--secondary)] hover:underline">
                    see full profile
                  </Link>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
