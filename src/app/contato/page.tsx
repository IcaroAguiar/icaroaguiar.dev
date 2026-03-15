'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaLock, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, FORMSPREE_ID } from '@/constants';
import { ScrollReveal } from '@/components/ui';
import { staggerContainerVariants, itemVariants } from '@/hooks';

export default function ContatoPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-surface-1">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-status-success/10 border border-status-success/20 flex items-center justify-center"
          >
            <FaCheckCircle className="text-status-success text-2xl" />
          </motion.div>
          <h1 className="text-3xl font-bold text-main mb-3">Mensagem enviada!</h1>
          <p className="text-text-secondary mb-8">
            Obrigado pelo contato. Responderei em até{' '}
            <span className="text-accent-primary font-medium">24 horas</span>{' '}
            com os próximos passos.
          </p>
          <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
            Voltar para Home
            <HiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-1 min-h-screen">
      {/* Fixed background layers */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-30 mix-blend-luminosity" />
      <div className="fixed inset-0 z-0 bg-noise opacity-40" />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">

          {/* Header */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.p variants={itemVariants} className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-3">
              Vamos conversar
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-4">
              Tem um projeto ou{' '}
              <span className="font-display italic text-accent-primary">oportunidade?</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-text-secondary text-lg max-w-xl">
              Disponível para projetos, consultoria e oportunidades. Envie contexto e objetivo — respondo em até 24h.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Formulário */}
            <ScrollReveal className="md:col-span-3">
              <div className="p-8 rounded-2xl bg-surface-1 border border-border-default">
                <h2 className="text-lg font-semibold text-main mb-6">Envie uma mensagem</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-border-default text-main placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all text-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-border-default text-main placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all text-sm"
                      placeholder="seu@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-border-default text-main focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all text-sm"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="projeto">Novo Projeto</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="freelance">Freelance</option>
                      <option value="oportunidade">Oportunidade de Trabalho</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-secondary mb-1.5 uppercase tracking-wider">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-border-default text-main placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all resize-none text-sm"
                      placeholder="Descreva seu projeto, objetivo e contexto..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-6 py-3 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
                    {!state.submitting && <HiArrowRight className="w-4 h-4" />}
                  </button>

                  <p className="flex items-center gap-2 text-xs text-text-muted justify-center">
                    <FaLock className="text-accent-primary" />
                    Seus dados estão seguros e não serão compartilhados.
                  </p>
                </form>
              </div>
            </ScrollReveal>

            {/* Info lateral */}
            <ScrollReveal className="md:col-span-2 space-y-4">
              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-surface-1 border border-border-default hover:border-border-strong transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-green-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main text-sm mb-1">WhatsApp</h3>
                    <p className="text-xs text-text-secondary mb-2">
                      Resposta rápida para conversas informais.
                    </p>
                    <a
                      href={SOCIAL_LINKS.WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-green-500 hover:text-green-400 transition inline-flex items-center gap-1"
                    >
                      Iniciar conversa <HiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-surface-1 border border-border-default hover:border-border-strong transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-accent-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main text-sm mb-1">Email</h3>
                    <p className="text-xs text-text-secondary mb-2">
                      Para propostas formais e documentações.
                    </p>
                    <a
                      href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                      className="text-xs font-medium text-accent-primary hover:text-accent-hover transition"
                    >
                      {SOCIAL_LINKS.EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="p-5 rounded-2xl bg-surface-1 border border-border-default">
                <h3 className="font-semibold text-main text-sm mb-3">Redes Sociais</h3>
                <div className="flex gap-2">
                  <a
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:bg-surface-3 hover:text-main hover:border-border-strong transition-all"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                    className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:bg-accent-primary/10 hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                  >
                    <FaEnvelope size={15} />
                  </a>
                </div>
              </div>

              {/* Disponibilidade */}
              <div className="p-5 rounded-2xl bg-surface-1 border border-border-default">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-status-success rounded-full animate-pulse" />
                  <h3 className="font-semibold text-main text-sm">Disponível para projetos</h3>
                </div>
                <p className="text-xs text-text-secondary">
                  Tempo de resposta médio: 24 horas
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
