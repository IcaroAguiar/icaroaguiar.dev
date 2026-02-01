'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaLock, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, FORMSPREE_ID } from '@/constants';
import { ScrollReveal, GlowButton } from '@/components/ui';

export default function ContatoPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/20 flex items-center justify-center"
          >
            <FaCheckCircle className="text-emerald-400 text-4xl" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Mensagem enviada!</h1>
          <p className="text-tertiary text-lg mb-8">
            Obrigado pelo seu contato. Responderei em até <span className="text-emerald-400">24 horas</span> com os próximos passos.
          </p>
          <GlowButton href="/" variant="outline">
            Voltar para Home
          </GlowButton>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos construir algo{' '}
              <span className="text-emerald-400">incrível</span> juntos?
            </h1>
            <p className="text-xl text-tertiary">
              Estou disponível para projetos freelance, consultoria e oportunidades.
              Envie uma mensagem com objetivo e contexto. Respondo em até 24h.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Formulário */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-3 border border-border-default text-text-main placeholder-muted focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-3 border border-border-default text-text-main placeholder-muted focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="seu@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-surface-3 border border-border-default text-text-main focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  >
                    <option value="" className="bg-surface-2">Selecione um assunto</option>
                    <option value="projeto" className="bg-surface-2">Novo Projeto</option>
                    <option value="consultoria" className="bg-surface-2">Consultoria</option>
                    <option value="freelance" className="bg-surface-2">Freelance</option>
                    <option value="oportunidade" className="bg-surface-2">Oportunidade de Trabalho</option>
                    <option value="outro" className="bg-surface-2">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-surface-3 border border-border-default text-text-main placeholder-muted focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    placeholder="Descreva seu projeto, objetivo e contexto..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <GlowButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
                </GlowButton>

                <p className="flex items-center gap-2 text-xs text-muted justify-center">
                  <FaLock className="text-emerald-400" />
                  Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Info lateral */}
          <ScrollReveal delay={0.2} className="md:col-span-2 space-y-6">
            {/* WhatsApp */}
            <div className="glass-card p-6 hover:glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">WhatsApp</h3>
                  <p className="text-sm text-tertiary mb-3">
                    Resposta rápida para dúvidas ou conversas informais.
                  </p>
                  <a
                    href={SOCIAL_LINKS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-400 hover:text-green-300 transition"
                  >
                    Iniciar conversa →
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-6 hover:glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">Email</h3>
                  <p className="text-sm text-tertiary mb-3">
                    Para propostas formais e documentações.
                  </p>
                  <a
                    href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
                  >
                    {SOCIAL_LINKS.EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-text-main mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-surface-3 border border-border-default flex items-center justify-center text-tertiary hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-surface-3 border border-border-default flex items-center justify-center text-tertiary hover:bg-gray-500/20 hover:text-white hover:border-gray-500/50 transition-all"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                  className="w-12 h-12 rounded-xl bg-surface-3 border border-border-default flex items-center justify-center text-tertiary hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <h3 className="font-semibold text-text-main">Disponível para projetos</h3>
              </div>
              <p className="text-sm text-tertiary">
                Tempo de resposta: 24 horas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
