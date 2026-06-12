'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' })
    // Optionally send data to API
    console.log('Form submitted:', form);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto grid gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 rounded bg-[var(--accent)] text-[var(--text)]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 rounded bg-[var(--accent)] text-[var(--text)]"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        className="p-3 rounded bg-[var(--accent)] text-[var(--text)]"
        required
      ></textarea>

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="mt-4"
        disabled={submitted}
      >
        {submitted ? 'Thank you! ✅' : 'Send Message'}
      </Button>
    </motion.form>
  );
}
