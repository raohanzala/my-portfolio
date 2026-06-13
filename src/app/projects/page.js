'use client';

import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
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
    link: 'https://realtimewrist-admin.vercel.app', // (Replace with the actual admin link if different)

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
    link: 'https://www.hmdynamicsllc.com', // Add live link when available

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
    description: 'A dedicated travel agency website offering Hajj and Umrah packages with a clean design, responsive layout, and seamless inquiry handling for pilgrims.',
    tech: ['Next.js', 'Framer motion', 'Tailwind'],
    image: '/hadiahajj.png',
    link: 'https://hadiahajjandumrah.vercel.app/',
  },
  {
    title: 'Dar-Ul-Uloom Memon Institute',
    description: 'A comprehensive website built for an Islamic institute with a clean and responsive design.',
    tech: ['Next js', 'Animations'],
    image: '/darul-uloom-memon.png',
    link: 'https://darul-uloom-memon.vercel.app',
  },
];


export default function ProjectsPage() {
  return (
    <MainPage>
      <div className="px-6 py-20 bg-[var(--background)] text-[var(--text)] max-w-[1280px] mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* Page Heading */}
          <SectionTitle
            label="Portfolio"
            title="My Projects"
            subtitle="Real-world projects I've built with passion and purpose."
          />

          {/* Grid of Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </MainPage>
  );
}
