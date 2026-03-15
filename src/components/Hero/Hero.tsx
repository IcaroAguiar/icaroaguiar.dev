'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import perfil from '@/assets/perfil.jpg';
import { SOCIAL_LINKS } from '@/constants';
import { staggerContainerVariants, itemVariants } from '@/hooks';
import './Hero.css';

const domainChips = [
  'SaaS & Multi-tenant',
  'APIs & Microserviços',
  'Interfaces White-label',
  'NestJS · Prisma · PostgreSQL',
  'React · Next.js · Flutter',
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Elemento decorativo de fundo mais discreto */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={shouldReduceMotion ? {} : staggerContainerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
        >
          {/* ── Coluna Esquerda — Texto ── */}
          <motion.div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left" variants={itemVariants}>
            {/* Overline */}
            <p className="inline-block text-accent-primary font-medium tracking-widest text-xs mb-5 uppercase font-mono">
              Desenvolvedor Full-Stack · Arquitetura & Produto
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-main mb-3 leading-[1.15]">
              Arquitetura sólida.<br className="hidden sm:block" />
              Interfaces refinadas.
            </h1>
            
            {/* Headline editorial — DM Serif Display em italic */}
            <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal italic text-accent-primary mb-6 leading-[1.15] relative inline-flex items-center">
              Produtos que evoluem.
              {!shouldReduceMotion && <span className="cursor-blink" aria-hidden="true" />}
            </p>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl text-center lg:text-left font-light">
              Especializado em SaaS, APIs bem estruturadas e interfaces reutilizáveis — do backend à entrega em produção.
            </p>

            {/* Domain chips */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              variants={shouldReduceMotion ? {} : staggerContainerVariants}
            >
              {domainChips.map((chip, i) => (
                <motion.span
                  key={chip}
                  className="px-3 py-1 text-xs font-medium bg-surface-3 text-text-secondary border border-border-default rounded-full"
                  variants={shouldReduceMotion ? {} : itemVariants}
                  custom={i}
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/projetos" className="w-full sm:w-auto px-6 py-3 bg-text-main text-surface-1 font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Ver Projetos Selecionados
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-text-secondary hover:text-white bg-surface-2 hover:bg-surface-3 border border-border-subtle rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-text-secondary hover:text-white bg-surface-2 hover:bg-surface-3 border border-border-subtle rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Coluna Direita — Visual Autoral (Workbench) ── */}
          <motion.div className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto" variants={itemVariants}>
            <div className="relative w-full h-full perspective-1000">
              {/* Glow Behind Workbench */}
              <div className="absolute top-[20%] left-[10%] w-full h-[60%] bg-accent-primary/10 rounded-full blur-[80px] pointer-events-none -z-10" />
              
              {/* Card Base (Projeto) */}
              <motion.div 
                className="absolute top-[10%] left-[5%] right-[10%] bottom-[20%] bg-surface-1 border border-border-default rounded-2xl shadow-xl overflow-hidden glass z-10"
                initial={{ rotateY: -10, rotateX: 5, z: 0 }}
                animate={{ rotateY: -5, rotateX: 2, z: 20 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                {/* Header mac-like */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-surface-2/50">
                  <div className="w-3 h-3 rounded-full bg-status-error/80" />
                  <div className="w-3 h-3 rounded-full bg-status-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-status-success/80" />
                  <span className="ml-2 text-[10px] text-text-muted font-mono tracking-wider">production / ascend</span>
                </div>
                
                {/* Content mockup */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-main font-medium text-sm">Dashboard Analytics</h3>
                      <p className="text-text-muted text-xs mt-1">SaaS Multi-tenant</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-status-success/10 text-status-success text-[10px] font-medium border border-status-success/20">
                      Live
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-surface-3 rounded-full" />
                    <div className="h-2 w-3/4 bg-surface-3 rounded-full" />
                    <div className="h-2 w-5/6 bg-surface-3 rounded-full" />
                  </div>
                  
                  {/* Pseudo chart area */}
                  <div className="mt-auto h-20 w-full rounded-lg bg-gradient-to-t from-status-success/10 to-transparent border-b border-status-success/30 flex items-end">
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full opacity-50">
                      <path d="M0,30 L10,20 L30,25 L50,10 L70,18 L90,5 L100,10 L100,30 Z" fill="rgba(34, 197, 94, 0.2)" />
                      <polyline points="0,30 10,20 30,25 50,10 70,18 90,5 100,10" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Stack Card - Flutuando à direita */}
              <motion.div 
                className="absolute right-0 top-[40%] bg-surface-2 border border-border-default rounded-xl shadow-md w-48 p-4 z-20 backdrop-blur-md"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-blue-500/10 text-blue-500 rounded text-xs font-bold">R</div>
                    <span className="text-xs font-medium text-main">React 19 / Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-status-error/10 text-status-error rounded text-xs font-bold">N</div>
                    <span className="text-xs font-medium text-main">NestJS / Node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-sky-500/10 text-sky-500 rounded text-xs font-bold">P</div>
                    <span className="text-xs font-medium text-main">PostgreSQL</span>
                  </div>
                </div>
              </motion.div>

              {/* Foto integrada - Flutuando no canto inferior esquerdo */}
              <motion.div 
                className="absolute left-0 bottom-[15%] z-30 flex items-center gap-3 p-2 bg-surface-2/80 backdrop-blur-xl border border-border-subtle rounded-full shadow-md pr-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative">
                  <Image
                    src={perfil}
                    alt="Ícaro Aguiar"
                    width={48}
                    height={48}
                    className="rounded-full border border-border-default object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-status-success border-2 border-surface-2 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-main leading-tight">Ícaro Aguiar</span>
                  <span className="text-[10px] text-text-muted leading-tight">Engenheiro Full-Stack</span>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
