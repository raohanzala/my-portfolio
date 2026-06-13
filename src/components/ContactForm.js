'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-slate-200 bg-white px-5 py-4 text-base text-[var(--text)] placeholder:text-[var(--subtext)] focus:border-[var(--secondary)] focus:outline-none disabled:opacity-60';

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid w-full gap-5"
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
        className={inputClass}
        disabled={status === 'loading'}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        disabled={status === 'loading'}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        value={form.message}
        onChange={handleChange}
        className={inputClass}
        disabled={status === 'loading'}
        required
      />

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      {status === 'success' && (
        <p className="text-sm text-emerald-600">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="mt-2 w-full"
        disabled={status === 'loading' || status === 'success'}
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
      </Button>
    </motion.form>
  );
}
