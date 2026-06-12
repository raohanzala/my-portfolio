'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import SectionTitle from './SectionTitle';
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
          className="max-w-3xl mx-auto"
        >
          <SectionTitle
            label="About Me"
            title="I turn ideas into"
            highlight="clean, scalable web apps"
            className="!mb-6"
          />
          <p className="text-[var(--subtext)] text-lg leading-relaxed mb-8 text-center">
            I&apos;m a MERN-stack developer from Pakistan who builds responsive products
            for e-commerce, ed-tech, and business platforms — from polished front-ends
            to reliable back-end APIs.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {highlights.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full  border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--text)]"
              >
                {/* <Icon className="text-[var(--secondary)]" /> */}
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

        {/* Tech stack */}
        <motion.div
          className="mt-20 pt-16 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle
              label="Skills"
              title="Technologies I work with"
              subtitle="The core tools I use to design, build, and ship products."
              className="!mb-10"
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {techStack.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3 rounded-xl px-3 py-5 transition-colors hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/50 transition group-hover:bg-[var(--accent)]">
                  <Icon className={`text-2xl ${color}`} />
                </div>
                <span className="text-sm font-medium text-[var(--subtext)] text-center transition group-hover:text-[var(--text)]">
                  {name}
                </span>
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="group flex flex-col items-center gap-3 rounded-xl px-3 py-5 transition-colors hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-[var(--accent)] bg-[var(--accent)]/30 transition group-hover:border-[var(--secondary)]/40 group-hover:bg-[var(--accent)]">
                  <span className="text-xl font-bold text-[var(--secondary)]">+</span>
                </div>
                <span className="text-sm font-medium text-[var(--secondary)] transition group-hover:text-[var(--text)]">
                  more
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
