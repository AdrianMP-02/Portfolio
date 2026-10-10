'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader } from 'lucide-react';

interface FieldLabels {
  label: string;
  placeholder: string;
}

interface LocaleStrings {
  name: FieldLabels;
  email: FieldLabels;
  message: FieldLabels;
  send: string;
  success: string;
  error: string;
}

const FIELD_MAP: Record<string, LocaleStrings> = {
  es: {
    name: { label: 'Nombre', placeholder: 'Tu nombre' },
    email: { label: 'Email', placeholder: 'tu@email.com' },
    message: { label: 'Mensaje', placeholder: '¿En qué puedo ayudarte?' },
    send: 'Enviar mensaje',
    success: '¡Mensaje enviado! Te responderé pronto.',
    error: 'Error al enviar. Intenta de nuevo.',
  },
  en: {
    name: { label: 'Name', placeholder: 'Your name' },
    email: { label: 'Email', placeholder: 'you@email.com' },
    message: { label: 'Message', placeholder: 'How can I help you?' },
    send: 'Send message',
    success: 'Message sent! I will get back to you soon.',
    error: 'Failed to send. Please try again.',
  },
};

export default function ContactForm({ lang }: { lang: 'es' | 'en' }) {
  const t = FIELD_MAP[lang];
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  const labelCls = 'block font-mono text-[11px] uppercase tracking-[.2em] text-muted mb-2';
  const fieldCls =
    'w-full bg-panel border border-line px-4 py-3 font-mono text-sm text-heading placeholder:text-[#6b6b78] caret-primary outline-none transition-colors focus:border-primary';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelCls}>
          <span aria-hidden="true" className="text-primary">&gt; </span>
          {t.name.label}
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={t.name.placeholder}
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelCls}>
          <span aria-hidden="true" className="text-primary">&gt; </span>
          {t.email.label}
        </label>
        <input
          id="contact-email"
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t.email.placeholder}
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelCls}>
          <span aria-hidden="true" className="text-primary">&gt; </span>
          {t.message.label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder={t.message.placeholder}
          className={`${fieldCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-cyber btn-cyber-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <Loader size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {status === 'loading' ? '...' : t.send}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border border-primary/40 bg-primary/5 text-primary px-4 py-3 font-mono text-xs"
          >
            [OK] {t.success}
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border border-accent/40 bg-accent/5 text-accent px-4 py-3 font-mono text-xs"
          >
            [ERR] {t.error}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
