'use client';

import SectionTitle from '@/components/SectionTitle';
import ProjectListItem from '@/components/ProjectListItem';
import MainPage from '@/components/MainPage';
import { siteConfig } from '@/config/site';

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
    title: 'Realtime Wrist Admin Dashboard',
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
  {
    title: 'HM Dynamics LLC',
    description:
      'A modern business website designed for a US-based sales company, focused on professional branding and presentation.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '/hmdynamicsllc.png',
    link: 'https://www.hmdynamicsllc.com',
  },
  {
    title: 'Personal Portfolio',
    description:
      'The site you’re currently viewing — built with performance, responsive design, modern animations, and clean code.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/hanzala-portfolio.png',
    link: siteConfig.portfolioUrl,
  },
  {
    title: 'Haida Hajj And Umrah',
    description:
      'A dedicated travel agency website offering Hajj and Umrah packages with a clean design, responsive layout, and seamless inquiry handling for pilgrims.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/hadiahajj.png',
    link: 'https://hadiahajjandumrah.vercel.app/',
  },
  {
    title: 'Dar-Ul-Uloom Memon Institute',
    description:
      'A comprehensive website built for an Islamic institute with a clean and responsive design.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '/darul-uloom-memon.png',
    link: 'https://darul-uloom-memon.vercel.app',
  },
];

export default function ProjectsPage() {
  return (
    <MainPage>
      <section className="bg-[var(--background)] px-4 py-20 text-[var(--text)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <SectionTitle
            label="Portfolio"
            title="My Projects"
            subtitle={`Real-world projects I've built with passion and purpose. ${projects.length} live projects.`}
          />

          <div className="border-t border-slate-200">
            {projects.map((project, idx) => (
              <ProjectListItem key={project.title} index={idx} {...project} />
            ))}
          </div>
        </div>
      </section>
    </MainPage>
  );
}
