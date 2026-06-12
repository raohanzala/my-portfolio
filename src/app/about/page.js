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
  { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },            // Official orange
  { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },              // Official blue
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },  // Official yellow
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },            // Official cyan-blue
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },          // No brand color; black is fine
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }, // Official cyan
  { name: 'Bootstrap CSS', icon: <SiBootstrap className="text-[#7952B3]" /> }, // Official purple
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },      // Official green
  { name: 'Express', icon: <SiExpress className="text-gray-600 " /> }, // Express has no color
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },        // Official green
  { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },            // Official purple
  { name: 'React Query', icon: <SiReactquery className="text-[#FF4154]" /> }, // Official pink-red
  { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },                // Official orange-red
  { name: 'GitHub', icon: <SiGithub className="text-[#181717]" /> },          // Official black
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
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Hanzala&apos;s Portrait"
                width={224}
                height={224}
                className="rounded-full object-cover border-4 border-[var(--secondary)] shadow-lg"
                priority
              />
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionTitle
              title="Tech I Work With"
              subtitle="Here are the tools and technologies I use daily."
              align="left"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 text-[var(--text)]">
              {techStack.map(({ name, icon }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-2 px-4 py-4 border-2 border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-[var(--primary)] transition"
                >
                  <div className="text-3xl">{icon}</div>
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainPage>
  );
}
