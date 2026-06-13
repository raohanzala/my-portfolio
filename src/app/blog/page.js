import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import MainPage from '@/components/MainPage';
import { siteConfig } from '@/config/site';

const blogs = [
  {
    title: 'How I Built My Portfolio with Next.js',
    description: 'A step-by-step guide on how I built this portfolio website using the App Router and Tailwind CSS.',
    date: 'June 2025',
    slug: 'build-portfolio-nextjs',
  },
  {
    title: 'Top 5 UI Tips for Developers',
    description: 'Simple tricks to improve the look and usability of your frontend projects.',
    date: 'May 2025',
    slug: 'top-ui-tips',
  },
  // Add more blogs...
];

export const metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Read tutorials, tips, and insights from my dev journey.',
};

export default function BlogPage() {
  return (
    <MainPage>
      <div className="py-24 px-6 bg-[var(--background)] text-[var(--text)]">
        <SectionTitle
          label="Articles"
          title="Blog"
          subtitle="Tutorials, tips, and insights from my dev journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog} />
          ))}
        </div>
      </div>
    </MainPage>
  );
}
