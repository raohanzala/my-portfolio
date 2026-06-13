'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: 'Realtime Wrist',
    description:
      'A premium e-commerce platform for luxury watches, featuring smooth user experience, admin panel, and SEO optimization.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: '/realtimewrist.png',
    link: 'https://realtimewrist.com',
  },
  {
    title: 'Realtime Wrist - Admin Dashboard',
    description:
      'An advanced dashboard for managing orders, products, users, and other administrative operations of Realtime Wrist.',
    tech: ['React', 'Redux', 'React Query', 'Node.js'],
    image: '/realtimewrist-admin.png',
    link: 'https://realtimewrist-admin.vercel.app',
  },
  {
    title: 'Martygo - Online Mart',
    description:
      'A modern e-commerce platform offering a wide range of products across multiple categories. Features include a smooth shopping experience, powerful admin panel, and full SEO optimization.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: '/martygo.png',
    link: 'https://martygo.vercel.app',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ProjectShowcase() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-50 text-[var(--text)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-slate-50 to-slate-50 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-[var(--secondary)]/6 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-blue-400/6 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionTitle
            label="My Work"
            title="Featured Projects"
            subtitle="A selection of recent builds — from e-commerce platforms to admin dashboards."
          />
        </motion.div>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href="/projects" size="lg" as="link">
            View All Projects <FiArrowRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
