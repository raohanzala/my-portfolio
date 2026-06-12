'use client';

import { FaCertificate } from 'react-icons/fa';

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
    certificateLink: '', // Optional
    description: 'Built real-world React apps with Redux and hooks.',
  },
  {
    title: 'JavaScript: Understanding the Weird Parts',
    platform: 'Udemy',
    certificateLink: '', // Optional
    description: 'Deep dive into core JavaScript concepts and execution model.',
  },
  {
    title: 'Web & App Development Program',
    platform: 'SMIT (Saylani)',
    certificateLink: '/certificates/smit-certificate.jpg', // Local file or public URL
    description: 'Hands-on full-stack web development course with real-time projects.',
  },
];

export default function LearningSection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--text)]">
          📚 Learning & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-b-md shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-[var(--text)]">{course.title}</h3>
                {course.certificateLink && (
                  <a
                    href={course.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--secondary)] hover:underline flex items-center gap-1 text-sm"
                  >
                    <FaCertificate /> Certificate
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600  mb-1">
                <strong>Platform:</strong> {course.platform}
              </p>
              <p className="text-sm text-slate-700 ">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
