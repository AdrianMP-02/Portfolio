'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
          {t.name.label}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={t.name.placeholder}
          className="w-full px-5 py-4 rounded-2xl bg-subtle border-glass text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_var(--glow-primary-10)] transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
          {t.email.label}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t.email.placeholder}
          className="w-full px-5 py-4 rounded-2xl bg-subtle border-glass text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_var(--glow-primary-10)] transition-all text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-muted mb-2">
          {t.message.label}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder={t.message.placeholder}
          className="w-full px-5 py-4 rounded-2xl bg-subtle border-glass text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_var(--glow-primary-10)] transition-all text-sm resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_30px_var(--glow-primary-20)] disabled:opacity-50 border border-white/10"
      >
        {status === 'loading' ? (
          <Loader size={18} className="animate-spin" />
        ) : (
          <Send size={18} />
        )}
        {status === 'loading' ? '...' : t.send}
      </motion.button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold"
          >
            <CheckCircle size={18} />
            {t.success}
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold"
          >
            <AlertCircle size={18} />
            {t.error}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
