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

export default function ProjectShowcase() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-24 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of recent builds — from e-commerce platforms to admin dashboards."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/projects" size="lg" as="link">
            View All Projects <FiArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
