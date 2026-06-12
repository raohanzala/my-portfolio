'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiGithub, SiGit,
  SiBootstrap,
  SiReactquery,
} from 'react-icons/si';

import SectionTitle from '@/components/SectionTitle';
import SocialLinks from '@/components/SocialLinks';
import MainPage from '@/components/MainPage';
import LearningSection from '@/components/LearnigSection';
import Image from 'next/image';

const techStack = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
  { name: 'CSS3', icon: SiCss3, color: 'text-[#1572B6]' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-800' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-[#7952B3]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'Redux', icon: SiRedux, color: 'text-[#764ABC]' },
  { name: 'React Query', icon: SiReactquery, color: 'text-[#FF4154]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'GitHub', icon: SiGithub, color: 'text-[#181717]' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <MainPage>
      <div className="bg-[var(--background)] text-[var(--text)] px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              title="About Me"
              subtitle="Here&apos;s more about who I am, what I do, and what I love."
            />
          </motion.div>

          {/* Profile + Bio */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-square">
                <div className="absolute -inset-3 rounded-lg bg-[var(--secondary)]/10 blur-md" />
                <div className="relative h-full w-full overflow-hidden rounded-lg p-1.5">
                  <Image
                    src="/hanzala.png"
                    alt="Rao Hanzala"
                    fill
                    sizes="(max-width: 768px) 280px, 280px"
                    className="rounded-lg object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-lg text-[var(--subtext)] leading-relaxed">
              <p>
                Hi! I&apos;m <strong className="text-[var(--secondary)]">Rao Hanzala</strong> — a professional MERN stack web developer.
                I love turning ideas into fast, and user-friendly digital products.
              </p>
              <br />
              <p>
                I&apos;ve worked on real-world projects in <strong>e-commerce</strong>, <strong>ed-tech</strong>, and <strong>food delivery</strong>,
                and specialize in technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
                I&apos;m always learning and building.
              </p>
              <div className="mt-6">
                <SocialLinks align="left" size="text-xl" />
              </div>
            </div>
          </motion.div>

          {/* Learning Section */}
          <LearningSection />

          {/* Tech Stack */}
          <motion.div
            className="pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                label="Skills"
                title="Technologies I work with"
                subtitle="The core tools I use to design, build, and ship products."
                className="!mb-10"
              />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {techStack.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-3 rounded-xl px-3 py-5 transition-colors hover:bg-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/50 transition group-hover:bg-[var(--accent)]">
                    <Icon className={`text-2xl ${color}`} />
                  </div>
                  <span className="text-sm font-medium text-[var(--subtext)] text-center transition group-hover:text-[var(--text)]">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainPage>
  );
}
