'use client';

import { FaCertificate } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const courses = [
  {
    title: 'The Complete Web Developer Bootcamp',
    platform: 'Udemy',
    certificateLink: 'https://www.udemy.com/certificate/your-cert-id/',
    description: 'Covered HTML, CSS, JavaScript, Node.js, Express, and MongoDB.',
  },
  {
    title: 'Modern React with Redux',
    platform: 'Udemy',
    certificateLink: '',
    description: 'Built real-world React apps with Redux and hooks.',
  },
  {
    title: 'JavaScript: Understanding the Weird Parts',
    platform: 'Udemy',
    certificateLink: '',
    description: 'Deep dive into core JavaScript concepts and execution model.',
  },
  {
    title: 'Web & App Development Program',
    platform: 'SMIT (Saylani)',
    certificateLink: '/certificates/smit-certificate.jpg',
    description: 'Hands-on full-stack web development course with real-time projects.',
  },
];

export default function LearningSection() {
  return (
    <section className="w-full border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Education"
          title="Learning & Certifications"
          subtitle="Courses and programs that shaped my foundation as a developer."
          className="!mb-8"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-[var(--text)]">{course.title}</h3>
                {course.certificateLink && (
                  <a
                    href={course.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm text-[var(--secondary)] hover:underline"
                  >
                    <FaCertificate />
                    Certificate
                  </a>
                )}
              </div>
              <p className="mb-1 text-sm text-[var(--subtext)]">
                <strong>Platform:</strong> {course.platform}
              </p>
              <p className="text-sm text-[var(--subtext)]">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
