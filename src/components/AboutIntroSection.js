'use client';

import { motion } from 'framer-motion';
import SocialLinks from '@/components/SocialLinks';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AboutIntroSection() {
  return (
    <section className="relative py-24 px-6 bg-[var(--background)] text-[var(--text)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 border-l-4 pl-4 border-[var(--secondary)]">
            About Me
          </h2>
          <p className="text-[var(--subtext)] max-w-2xl pl-4">
            Here&apos;s a bit more about who I am, what I do, and what I love.
          </p>
        </motion.div>

        {/* Profile + Bio Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Profile Image */}
          <div className="relative shrink-0">
            <Image
              src="/your-photo.jpg"
              alt={siteConfig.name}
              width={208} // sm:w-52 = 13rem = 208px
              height={208}
              className="rounded-full object-cover border-4 border-[var(--secondary)] shadow-xl"
              priority
            />
            <div className="absolute bottom-0 right-0 bg-[var(--secondary)] text-[var(--primary)] text-xs px-2 py-1 rounded shadow-md">
              Web Dev 💻
            </div>
          </div>

          {/* Bio Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-[var(--accent)] p-6 rounded-xl shadow-md max-w-2xl transition hover:shadow-lg">
            <p className="text-[var(--subtext)] leading-relaxed text-base sm:text-lg">
              Hi! I&apos;m <span className="text-[var(--secondary)] font-medium">{siteConfig.name}</span>, a passionate web developer from {siteConfig.location}. I specialize in building modern, clean, and responsive web apps.
              <br /><br />
              I love working with <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Next.js</strong> to bring ideas to life. Whether it&apos;s building a beautiful front-end or an efficient back-end API, I enjoy every part of the process.
              <br /><br />
              Constant learning and collaboration are at the core of how I grow as a developer.
            </p>
            <div className="mt-6">
              <SocialLinks align="left" size="text-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
