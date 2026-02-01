'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { experiences, skills, education } from '@/data';
import { ScrollReveal, GlowButton, StatCard } from '@/components/ui';
import perfil from '@/assets/perfil.jpg';

export default function SobrePage() {
  const allSkills = Object.values(skills).flat();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section com Foto e Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-3xl transform rotate-6" />
                <Image
                  src={perfil}
                  alt="Ícaro Aguiar"
                  fill
                  className="object-cover rounded-3xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-4 z-20">
                  <div className="text-3xl font-bold text-emerald-400">4+</div>
                  <div className="text-sm text-tertiary">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ícaro Aguiar
              </h1>
              <p className="text-xl text-emerald-400 mb-6">
                Desenvolvedor Full-Stack
              </p>
              <p className="text-tertiary mb-6 leading-relaxed">
                Sou um desenvolvedor focado em transformar requisitos em produtos funcionais.
                Trabalho com React/Next.js no frontend e .NET/Node.js no backend, entregando
                interfaces claras, APIs confiáveis e deploy com CI/CD.
              </p>
              <p className="text-tertiary mb-8 leading-relaxed">
                Curto ciclos curtos, versionamento bem feito e comunicação direta.
                Meu foco é sempre entregar valor real para o negócio.
              </p>
              <div className="flex flex-wrap gap-4">
                <GlowButton href="/Icaro-Aguiar-DevFullStack-PT%20(2).pdf" variant="primary">
                  <FaDownload className="mr-2" />
                  Baixar CV
                </GlowButton>
                <GlowButton href="/contato" variant="outline">
                  <FaEnvelope className="mr-2" />
                  Contato
                </GlowButton>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            <StatCard value={4} suffix="+" label="Anos de Experiência" />
            <StatCard value={6} suffix="" label="Empresas" />
            <StatCard value={15} suffix="+" label="Projetos Entregues" />
            <StatCard value={20} suffix="+" label="Tecnologias" />
          </div>
        </ScrollReveal>

        {/* Timeline de Experiência */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experiência Profissional
          </h2>
        </ScrollReveal>

        <div className="relative mb-24">
          {/* Timeline horizontal no desktop */}
          <div className="hidden md:block">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <div className="grid grid-cols-6 gap-4">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative pt-12">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-black" />
                    <div className="glass-card p-4 text-center hover:glow transition-all duration-300">
                      <FaBriefcase className="mx-auto mb-2 text-emerald-400" />
                      <h3 className="font-semibold text-text-main text-sm mb-1">{exp.role}</h3>
                      <p className="text-emerald-400 text-xs mb-1">{exp.company}</p>
                      <p className="text-muted text-xs">{exp.period}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Timeline vertical no mobile */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="glass-card p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-main mb-1">{exp.role}</h3>
                    <p className="text-emerald-400 text-sm mb-1">{exp.company}</p>
                    <p className="text-muted text-sm mb-2">{exp.period}</p>
                    <ul className="text-tertiary text-sm space-y-1">
                      {exp.tasks.slice(0, 2).map((task, i) => (
                        <li key={i}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Skills Tag Cloud */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Habilidades Técnicas
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-surface-3 border border-border-default rounded-full text-sm text-secondary hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills por Categoria */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {Object.entries(skills).slice(0, 3).map(([category, list], index) => (
            <ScrollReveal key={category} delay={index * 0.1}>
              <div className="glass-card p-6">
                <h3 className="font-semibold text-text-main mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map(skill => (
                    <span key={skill} className="text-xs px-3 py-1 bg-surface-3 text-tertiary border border-border-default rounded-full hover:border-accent hover:text-accent transition-colors duration-150">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Formação */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Formação Acadêmica
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-6 text-center hover:glow transition-all duration-300">
                <FaGraduationCap className="mx-auto text-3xl text-emerald-400 mb-4" />
                <h3 className="font-semibold text-text-main mb-2">{edu.course}</h3>
                <p className="text-emerald-400 text-sm mb-1">{edu.institution}</p>
                <p className="text-muted text-sm">{edu.status}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Final */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-tertiary mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Entre em contato para conversarmos!
            </p>
            <GlowButton href="/contato" variant="primary">
              Entre em Contato
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
