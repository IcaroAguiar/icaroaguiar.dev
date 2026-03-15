'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { experiences, skills, education } from '@/data';
import { ScrollReveal } from '@/components/ui';
import perfil from '@/assets/perfil.jpg';
import { staggerContainerVariants, itemVariants } from '@/hooks';

const stats = [
  { value: '4+', label: 'Anos de experiência' },
  { value: '6', label: 'Empresas' },
  { value: '15+', label: 'Projetos entregues' },
  { value: '20+', label: 'Tecnologias' },
];

export default function SobrePage() {
  const skillCategories = Object.entries(skills).slice(0, 3);

  return (
    <div className="bg-surface-1 min-h-screen">
      {/* Fixed background layers */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-30 mix-blend-luminosity" />
      <div className="fixed inset-0 z-0 bg-noise opacity-40" />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">

          {/* ── Hero da página ── */}
          <motion.div
            className="grid md:grid-cols-12 gap-12 items-start mb-28"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Texto */}
            <motion.div className="md:col-span-7 flex flex-col" variants={itemVariants}>
              <p className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-4">Sobre mim</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-2 leading-tight">
                Ícaro Aguiar
              </h1>
              <p className="text-2xl md:text-3xl font-display italic text-accent-primary mb-6">
                Engenheiro de Software Full-Stack
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 text-base max-w-lg">
                Especializado em produtos SaaS, aplicações web escaláveis e sistemas mobile. Atuo
                com TypeScript e o ecossistema JavaScript — Node.js, NestJS e Prisma no backend;
                React, Next.js e Flutter no frontend e mobile.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8 text-base max-w-lg">
                Meu foco está em sistemas robustos, APIs bem estruturadas, interfaces reutilizáveis
                e entrega contínua. Interesse especial em multi-tenant, microserviços e plataformas
                de alta qualidade técnica.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/Icaro-Aguiar-DevFullStack-PT%20(2).pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  <FaDownload className="text-xs" />
                  Baixar CV
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-2 text-text-main border border-border-strong font-semibold rounded-lg hover:bg-surface-3 transition-colors text-sm"
                >
                  <FaEnvelope className="text-xs" />
                  Contato
                </Link>
              </div>
            </motion.div>

            {/* Foto */}
            <motion.div className="md:col-span-5 flex items-start justify-center md:justify-end" variants={itemVariants}>
              <div className="relative">
                {/* Glow atrás da foto */}
                <div className="absolute inset-0 bg-accent-primary/10 rounded-2xl blur-2xl scale-110 pointer-events-none" />
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border-default shadow-xl">
                  <Image
                    src={perfil}
                    alt="Ícaro Aguiar"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Badge flutuante */}
                <div className="absolute -bottom-4 -left-4 bg-surface-2 border border-border-default rounded-xl px-4 py-2.5 shadow-md">
                  <div className="text-2xl font-bold text-accent-primary font-display">4+</div>
                  <div className="text-xs text-text-muted">Anos de exp.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Stats ── */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
              {stats.map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-surface-1 border border-border-default text-center">
                  <span className="text-3xl font-bold font-display text-main block mb-1">{stat.value}</span>
                  <span className="text-xs text-text-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Experiência Profissional — Timeline Vertical ── */}
          <ScrollReveal>
            <div className="mb-6">
              <p className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-2">Trajetória</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-main mb-12">
                Experiência Profissional
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative mb-24">
            {/* Linha vertical */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/30 via-border-default to-transparent" />

            <motion.div
              className="space-y-0"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} className="relative pl-12 pb-12" variants={itemVariants}>
                  {/* Ponto na linha */}
                  <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-primary border-2 border-surface-1 shadow-sm" />

                  <div className="group p-5 rounded-xl border border-border-default hover:border-border-strong hover:bg-surface-2/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-semibold text-main text-sm">{exp.role}</h3>
                        <p className="text-accent-primary text-xs font-medium">{exp.company}</p>
                      </div>
                      <span className="text-text-muted text-xs font-mono whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-1">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="text-text-secondary text-sm flex gap-2">
                          <span className="text-accent-primary/50 mt-0.5 flex-shrink-0">›</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Habilidades por Categoria ── */}
          <ScrollReveal>
            <div className="mb-6">
              <p className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-2">Stack</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-main mb-12">
                Habilidades Técnicas
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-5 mb-24"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
          >
            {skillCategories.map(([category, list]) => (
              <motion.div
                key={category}
                className="p-6 rounded-xl bg-surface-1 border border-border-default hover:border-border-strong transition-all duration-300"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-main text-sm mb-4 tracking-wide">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill: string) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 bg-surface-3 text-text-tertiary border border-border-default rounded-md hover:border-accent-primary/50 hover:text-accent-primary transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Formação ── */}
          <ScrollReveal>
            <div className="mb-6">
              <p className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-2">Formação</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-main mb-12">
                Acadêmica
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-5 mb-24"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-surface-1 border border-border-default hover:border-border-strong transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-main text-sm mb-1">{edu.course}</h3>
                <p className="text-accent-primary text-xs font-medium mb-1">{edu.institution}</p>
                <p className="text-text-muted text-xs">{edu.status}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── CTA Final ── */}
          <ScrollReveal>
            <div className="divider-gradient mb-16 opacity-40" />
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-main mb-3 tracking-tight">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto text-base">
                Aberto a projetos, consultoria e oportunidades onde qualidade e clareza importam.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Entre em contato
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
