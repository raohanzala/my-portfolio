'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import { FiArrowRight, FiCode, FiTerminal } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const floatingIcons = [
    { icon: <FiCode className="text-3xl text-sky-400" />, top: '10%', left: '15%', delay: 0 },
    { icon: <span className="text-2xl font-mono text-slate-300">{'{...}'}</span>, top: '35%', left: '70%', delay: 1 },
    { icon: <span className="text-xl font-mono text-pink-400">const</span>, top: '65%', left: '25%', delay: 1.5 },
    { icon: <FiTerminal className="text-2xl text-emerald-400" />, top: '20%', left: '50%', delay: 2 },
  ];

  return (
    <section className="relative sm:min-h-screen min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden px-6 py-28">
      {/* Animated Radial Background */}
      <motion.div
        aria-hidden
        // className="absolute inset-0 z-10 pointer-events-none"
        // animate={{
        //   background: [
        //     'radial-gradient(circle at 25% 35%, rgba(59,130,246,0.4) 0%, transparent 60%)',
        //     'radial-gradient(circle at 60% 60%, rgba(14,165,233,0.3) 0%, transparent 60%)',
        //     'radial-gradient(circle at 40% 20%, rgba(99,102,241,0.3) 0%, transparent 60%)',
        //   ],
        // }}
        // transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Optional blur image overlay */}
      <div className="absolute inset-0 bg-[url('/blur.jpg')] bg-no-repeat bg-cover opacity-50 pointer-events-none z-10" />

      {/* Floating Developer Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-60 select-none"
            style={{ top: item.top, left: item.left }}
            animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="z-30 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I Built Websites <br className="hidden sm:inline" /> That Solve Real Problems.
        </motion.h1>

        <motion.p
          className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Full-stack Web Developer focused on building responsive, performant, and scalable web apps using modern technologies.
        </motion.p>

        <div className="mb-6">
          <SocialLinks color="text-slate-300" size="text-2xl" />
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button href="/projects" variant="primary" size="lg" as="link" className="w-full sm:w-auto">
            View Projects <FiArrowRight className="ml-2" />
          </Button>
          <Button href="/contact" variant="secondary" size="lg" as="link" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
