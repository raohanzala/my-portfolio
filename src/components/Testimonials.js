"use client"
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

const testimonials = [
  {
    quote: `Working with ${siteConfig.name} was a fantastic experience. He delivered our project on time and exceeded our expectations!`,
    name: "Sarah Lee",
    role: "Product Manager, Realtime Wrist"
  },
  {
    quote: `${siteConfig.name}'s attention to detail and technical expertise are top-notch. Highly recommended for any web project.`,
    name: "Michael Chen",
    role: "CTO, HM Dynamics LLC"
  },
  {
    quote: "Professional, creative, and reliable. Our website looks amazing and performs flawlessly.",
    name: "Ayesha Khan",
    role: "Founder, Darul Uloom Memon"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Testimonials</h2>
        <p className="text-slate-500 dark:text-slate-300">What clients and collaborators say</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md p-6 flex-1 flex flex-col justify-between"
          >
            <p className="text-lg italic text-slate-700 dark:text-slate-200 mb-4">“{t.quote}”</p>
            <div className="mt-auto">
              <span className="block font-semibold text-slate-900 dark:text-white">{t.name}</span>
              <span className="block text-slate-500 dark:text-slate-400 text-sm">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 