"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import SocialLinks from "@/components/SocialLinks";
import MainPage from "@/components/MainPage";
import LearningSection from "@/components/LearnigSection";
import TechStackCard from "@/components/TechStackCard";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { techStack } from "@/data/techStack";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPageContent() {
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
                experience building MERN stack web applications.
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
            {techStack.map((tech) => (
              <TechStackCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </section>
    </MainPage>
  );
}
