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
import { siteConfig } from '@/config/site';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutSummary() {
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
            I&apos;m a MERN-stack developer from {siteConfig.location} who builds responsive products
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

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 md:gap-6">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 px-3 py-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]">
                  <Icon className={`text-2xl ${color}`} />
                </div>
                <span className="text-center text-sm font-medium text-[var(--subtext)]">
                  {name}
                </span>
              </div>
            ))}

            <Link
              href="/about"
              className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-200 px-3 py-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-[var(--accent)]">
                <span className="text-xl font-bold text-[var(--secondary)]">+</span>
              </div>
              <span className="text-sm font-medium text-[var(--secondary)]">more</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
