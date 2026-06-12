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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ProjectShowcase() {
  return (
    <section className="py-24 px-6 bg-[var(--background)] text-[var(--text)]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of recent builds — from e-commerce platforms to admin dashboards."
        />

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

        <div className="mt-12 flex justify-center">
          <Button href="/projects" size="lg" as="link">
            View All Projects <FiArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
