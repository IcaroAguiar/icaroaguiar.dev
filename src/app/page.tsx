'use client';

import Hero from '@/components/Hero/Hero';
import { ExpertiseBar } from '@/components/ExpertiseBar/ExpertiseBar';
import { BuildingPrinciples } from '@/components/BuildingPrinciples/BuildingPrinciples';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { ScrollReveal, StatCard, GlowButton } from '@/components/ui';
import { projects } from '@/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function HomePage() {
  const ascend = projects.find(p => p.id === 'ascend');
  const faceApi = projects.find(p => p.id === 'face-api');
  const fixxcapital = projects.find(p => p.id === 'fixxcapital');

  const orderedProjects = [ascend, faceApi, fixxcapital].filter(Boolean) as typeof projects;

  // Refinamento de custom messages para home baseado no briefing
  const projectMessages = {
    'ascend': {
      context: 'A necessidade de gerir finanças pessoais e fluxos de cobrança de forma integrada e preditiva.',
      solution: 'Estruturei uma plataforma multi-tenant com foco em previsibilidade operacional, segurança e evolução contínua.'
    },
    'face-api': {
      context: 'Criar um sistema de reconhecimento facial confiável para controle de presenças com alta precisão e baixa latência.',
      solution: 'Desenvolvi uma API robusta escalável focada no balanço entre processamento pesado de visão computacional e resposta em tempo real.'
    },
    'fixxcapital': {
      context: 'Transmitir credibilidade institucional CVM e impulsionar captação de investidores qualificados em renda fixa.',
      solution: 'Projetei uma experiência clean focada em conversão, com arquitetura otimizada e hierarquia de informação clara.'
    }
  };

  return (
    <div className="bg-surface-1 min-h-screen relative overflow-hidden">
      {/* 0. Camadas Base Globais */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-40 mix-blend-luminosity" />
      <div className="fixed inset-0 z-0 bg-noise opacity-50" />
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Faixa de Credibilidade */}
      <ExpertiseBar />

      <div className="relative z-10 w-full overflow-hidden">
        {/* Glow Projetos */}
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
        
        {/* 3. Projetos Selecionados */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-[1000px] mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-main mb-4 tracking-tight">
                Projetos Selecionados
              </h2>
              <p className="text-text-secondary text-lg mb-12 max-w-2xl">
                Sistemas construídos com rigor técnico e foco na entrega de valor.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-8 md:gap-12 mb-16">
              {orderedProjects.map((project, index) => {
                const msgs = projectMessages[project.id as keyof typeof projectMessages] || {};
                return (
                  <ScrollReveal key={project.id} delay={index * 0.1}>
                    <ProjectCard 
                      project={project} 
                      contextMessage={msgs.context} 
                      solutionMessage={msgs.solution} 
                    />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Princípios de Construção */}
        <BuildingPrinciples />

        {/* 5. Provas / Evidências - Agora unificada sem divisor brusco */}
        <section className="pb-24 pt-8 px-4 sm:px-6 lg:px-8 relative">
          {/* Glow Stats */}
          <div className="absolute inset-0 bg-accent-primary/5 rounded-[100%] blur-[100px] pointer-events-none opacity-30 -z-10" aria-hidden="true" />
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-display font-bold text-main mb-3">
                  Evidências de execução
                </h2>
                <p className="text-text-secondary text-base max-w-2xl mx-auto">
                  Resultados tangíveis que validam a consistência da abordagem técnica e de negócio.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ScrollReveal delay={0}>
                <div className="p-6 rounded-2xl bg-surface-1 border border-border-default h-full">
                  <span className="text-4xl lg:text-5xl font-bold font-display text-main block mb-2">4+</span>
                  <span className="text-sm md:text-base text-text-secondary">Anos construindo software</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-surface-1 border border-border-default h-full">
                  <span className="text-4xl lg:text-5xl font-bold font-display text-main block mb-2">15+</span>
                  <span className="text-sm md:text-base text-text-secondary">Entregas relevantes</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-surface-1 border border-border-default h-full">
                  <span className="text-4xl lg:text-5xl font-bold font-display text-main block mb-2">3</span>
                  <span className="text-sm md:text-base text-text-secondary">Produtos em produção</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-surface-1 border border-border-default h-full">
                  <span className="text-3xl lg:text-4xl font-bold font-display text-main block mb-2 mt-1">End-to-end</span>
                  <span className="text-sm md:text-base text-text-secondary">Experiência do front ao banco</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="divider-gradient my-8 opacity-40 max-w-4xl mx-auto" />

        {/* 6. CTA Final Autoral */}
        <section className="pt-24 pb-48 px-4 sm:px-6 lg:px-8 relative">
          {/* Glow CTA Final */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/10 rounded-[100%] blur-[100px] pointer-events-none -z-10" aria-hidden="true" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-main mb-5 leading-snug tracking-tight">
                Tem uma feature complexa, um produto para escalar ou uma interface para elevar?
              </h2>
              <p className="text-lg md:text-xl text-text-secondary mb-10 mx-auto font-light leading-relaxed">
                Atuo em produtos, consultoria técnica e oportunidades em que <strong className="font-semibold text-main">arquitetura, clareza e qualidade</strong> importam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href="mailto:icaroaguiar14@gmail.com" 
                  className="px-8 py-4 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto text-lg"
                >
                  Entrar em contato
                </a>
                <a 
                  href="https://www.linkedin.com/in/icaro-aguiar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-surface-2 text-text-main border border-border-strong hover:bg-surface-3 font-semibold rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2 text-lg"
                >
                  <FaLinkedin className="text-xl" />
                  Conectar no LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
