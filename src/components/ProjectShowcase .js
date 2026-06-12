'use client';

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
    link: 'https://realtimewrist-admin.vercel.app', // (Replace with the actual admin link if different)

  },
  {
    title: 'Martygo - Online Mart',
    description:
      'A modern e-commerce platform offering a wide range of products across multiple categories. Features include a smooth shopping experience, powerful admin panel, and full SEO optimization.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: '/martygo.png',
    link: 'https://martygo.vercel.app',
  }

];

export default function ProjectShowcase() {
  return (
    <section className="py-20 px-6 bg-[var(--background)] text-[var(--text)]">
      <SectionTitle title="Projects" />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">

        <Button href='/projects' size='lg'>
          View All <FiArrowRight className="ml-2" />

        </Button>
      </div>
    </section>
  );
}
