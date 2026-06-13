'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import SectionTitle from './SectionTitle';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { siteConfig } from '@/config/site';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ContactCTA() {
  return (
    <section className="relative bg-white px-6 py-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-8 py-14 sm:px-14 sm:py-16 text-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/blur.jpg')] bg-cover bg-center opacity-25 pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[var(--secondary)]/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            <SectionTitle
              label="Get in Touch"
              title="Let's build something"
              highlight="great together"
              subtitle="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities or collaborations."
              className="[&_h2]:text-white [&_p]:text-slate-300 [&_h2_span]:text-sky-400"
            />

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              <FiMail className="text-[var(--secondary)]" />
              {siteConfig.email}
            </a>

            <div className="flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                as="link"
                className="w-full sm:w-auto"
              >
                Contact Me <FiArrowRight className="ml-2" />
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                as="link"
                white
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
