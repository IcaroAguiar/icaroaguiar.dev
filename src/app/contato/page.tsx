'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaLock } from 'react-icons/fa';

export default function ContatoPage() {
  const [state, handleSubmit] = useForm('xblyeyez');

  if (state.succeeded) {
    return (
      <section className="py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <FaEnvelope className="text-emerald-600 text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Mensagem enviada!</h1>
            <p className="text-slate-600 max-w-md mx-auto">
              Obrigado pelo seu contato. Responderei em até <strong>24 horas</strong> com os
              próximos passos.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-[-0.015em] leading-tight text-slate-900 mb-4">
            Vamos construir seu próximo produto?
          </h1>
          <p className="text-[15.5px] sm:text-[16px] text-slate-600 leading-relaxed">
            Estou disponível para <strong>projetos e parcerias</strong>. Se você precisa
            transformar uma ideia em um produto confiável ou fortalecer sua equipe com um
            desenvolvedor focado em <strong>resultado e prazo</strong>, envie uma mensagem com
            objetivo e contexto. <strong>Respondo em até 24h</strong> com os próximos passos.
          </p>
        </motion.div>

        {/* Grid 2 colunas: Formulário + Links Rápidos */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Formulário (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-black/5 bg-white/60 shadow-sm p-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="seuemail@exemplo.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                  placeholder="Descreva seu projeto, objetivo e contexto..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full h-11 px-6 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {state.submitting ? 'Enviando...' : 'Solicitar proposta'}
              </button>

              {/* Micro-confiança */}
              <p className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <FaLock className="text-slate-400" />
                Seus dados não serão compartilhados.
              </p>
            </form>
          </motion.div>

          {/* Links Rápidos (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-5 space-y-4"
          >
            {/* WhatsApp */}
            <div className="rounded-2xl border border-black/5 bg-white/60 shadow-sm p-5 hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Resposta rápida para dúvidas ou conversas informais.
                  </p>
                  <a
                    href="https://wa.me/5571992608397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition"
                  >
                    Iniciar conversa →
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="rounded-2xl border border-black/5 bg-white/60 shadow-sm p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Ou conecte-se comigo:</h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/icaro-aguiar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:icaroaguiar14@gmail.com"
                  className="w-11 h-11 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 transition"
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
