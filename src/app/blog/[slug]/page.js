'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

// Fake blog data
const blogs = [
  {
    slug: 'build-portfolio-nextjs',
    title: 'How I Built My Portfolio with Next.js',
    date: 'June 2025',
    content: `
      Building a personal portfolio in Next.js was one of the best decisions I made. 
      I used the App Router, Tailwind CSS, and Framer Motion for animations.
      
      Here's how you can start:
      
      1. Plan your sections.
      2. Use reusable components.
      3. Optimize for SEO and performance.
      
      I also deployed it on Vercel and used custom metadata for each page!
    `,
  },
  {
    slug: 'top-ui-tips',
    title: 'Top 5 UI Tips for Developers',
    date: 'May 2025',
    content: `
      UI design can be tricky, but here are my top 5 tips:

      1. Keep it consistent.
      2. Use white space wisely.
      3. Prioritize readability.
      4. Use color with intention.
      5. Make it responsive.
      
      These principles have helped me ship better products faster.
    `,
  },
];

// export function generateMetadata({ params }) {
//   const post = blogs.find((b) => b.slug === params.slug);
//   if (!post) return { title: 'Blog Not Found' };
//   return {
//     title: `${post.title} | Blog`,
//     description: post.content.slice(0, 150),
//   };
// }

export default function BlogPost({ params }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="px-6 py-20 bg-[var(--background)] text-[var(--text)] max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={post.title} subtitle={post.date} />

        <article className="mt-10 space-y-5 text-lg leading-relaxed text-[var(--subtext)] whitespace-pre-line">
          {post.content}
        </article>
      </motion.div>
    </main>
  );
}
