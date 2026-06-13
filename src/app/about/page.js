"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGithub,
  SiGit,
  SiBootstrap,
  SiReactquery,
} from "react-icons/si";

import SectionTitle from "@/components/SectionTitle";
import SocialLinks from "@/components/SocialLinks";
import MainPage from "@/components/MainPage";
import LearningSection from "@/components/LearnigSection";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const techStack = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-neutral-800" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-gray-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "React Query", icon: SiReactquery, color: "text-[#FF4154]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#181717]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <MainPage>
      {/* Intro */}
      <section className="bg-[var(--background)] px-4 py-20 text-[var(--text)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SectionTitle
              label="About"
              title="About Me"
              subtitle="Here's more about who I am, what I do, and what I love."
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-lg border border-slate-200">
                <Image
                  src="/hanzala.png"
                  alt={siteConfig.fullName}
                  fill
                  sizes="(max-width: 768px) 340px, 340px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="text-lg leading-relaxed text-[var(--subtext)]">
              <p>
                Hi! I&apos;m{" "}
                <strong className="text-[var(--secondary)]">
                  {siteConfig.fullName}
                </strong>{" "}
                — a MERN stack developer with around 2 years of professional
                experience building full-stack web applications.
              </p>
              <p className="mt-4">
                I specialize in <strong>React</strong>, <strong>Next.js</strong>
                , <strong>Node.js</strong>, <strong>MongoDB</strong>, and work
                confidently across both <strong>JavaScript</strong> and{" "}
                <strong>TypeScript</strong> — focused on clean code,
                performance, and solid user experiences.
              </p>
              <p className="mt-4">
                Alongside my professional work, I&apos;m currently pursuing a
                degree in <strong>Software Engineering</strong> at{" "}
                <strong>Sindh Madressatul Islam University (SMIU)</strong>,
                Karachi — sharpening the fundamentals behind everything I build.
              </p>
              <div className="mt-6">
                <SocialLinks align="left" size="text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning — full-width background */}
      <LearningSection />

      {/* Skills */}
      <section className="bg-[var(--background)] px-4 py-20 text-[var(--text)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Skills"
            title="Technologies I work with"
            subtitle="The core tools I use to design, build, and ship products."
            className="!mb-10"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 md:gap-6">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 px-3 py-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]">
                  <Icon className={`text-2xl ${color}`} />
                </div>
                <span className="text-center text-sm font-medium text-[var(--subtext)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainPage>
  );
}
