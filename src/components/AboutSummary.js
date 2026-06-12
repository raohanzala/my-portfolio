'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';

const techStack = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-800' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
];

const highlights = [
  { icon: FiCode, label: 'Full-Stack Developer' },
  { icon: FiLayers, label: 'MERN & Next.js' },
  { icon: FiZap, label: 'Performance Focused' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutSummary() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[var(--background)] text-[var(--text)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/70 via-[var(--background)] to-[var(--background)] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[var(--secondary)] text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            I turn ideas into{' '}
            <span className="text-[var(--secondary)]">clean, scalable web apps</span>
          </h2>
          <p className="text-[var(--subtext)] text-lg leading-relaxed mb-8">
            I&apos;m a MERN-stack developer from Pakistan who builds responsive products
            for e-commerce, ed-tech, and business platforms — from polished front-ends
            to reliable back-end APIs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-white px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm"
              >
                <Icon className="text-[var(--secondary)]" />
                {label}
              </span>
            ))}
          </div>

          <Button href="/about" variant="primary" size="md" as="link">
            More About Me <FiArrowRight className="ml-1" />
          </Button>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="mt-20 rounded-2xl border border-[var(--accent)] bg-white/80 p-8 md:p-10 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--subtext)] mb-8"
          >
            Technologies I work with
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)] bg-[var(--background)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--secondary)]/30 hover:shadow-md"
              >
                <Icon className={`text-lg ${color}`} />
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
