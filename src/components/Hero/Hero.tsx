'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import perfil from '@/assets/perfil.jpg';
import { SOCIAL_LINKS } from '@/constants';
import { staggerContainerVariants, itemVariants } from '@/hooks';
import { useTheme } from '@/providers/ThemeProvider';
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
  const { theme } = useTheme();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        animate: { y: [-6, 6, -6] },
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
      };
  const isDarkTheme = theme === 'dark';
  const primaryDashboardSrc = isDarkTheme
    ? '/assets/ASCENDhome-black.png'
    : '/assets/ASCENDhome-white.png';
  const secondaryDashboardSrc = isDarkTheme
    ? '/assets/ASCENDhome-white.png'
    : '/assets/ASCENDhome-black.png';
  const primaryFrameClass = isDarkTheme
    ? 'border-white/10 bg-[#171b21] shadow-[0_30px_80px_rgba(0,0,0,0.34)]'
    : 'border-slate-200/90 bg-[#f4f7fb] shadow-[0_30px_80px_rgba(0,0,0,0.18)]';
  const secondaryFrameClass = isDarkTheme
    ? 'border-slate-200/90 bg-[#f4f7fb] shadow-[0_28px_70px_rgba(0,0,0,0.16)]'
    : 'border-white/10 bg-[#171b21] shadow-[0_28px_70px_rgba(0,0,0,0.34)]';
  const primaryHeaderClass = isDarkTheme
    ? 'border-white/10 text-white/60 bg-[#171b21]'
    : 'border-slate-200/80 text-slate-500 bg-[#f4f7fb]';
  const primaryBadgeClass = isDarkTheme
    ? 'border-white/10 bg-white/5 text-white/70'
    : 'border-slate-200 bg-white text-slate-600';
  const secondaryHeaderClass = isDarkTheme
    ? 'border-slate-200/80 text-slate-500 bg-[#f4f7fb]'
    : 'border-white/10 text-white/55 bg-[#171b21]';
  const secondaryBadgeClass = isDarkTheme
    ? 'border-slate-200 bg-white text-slate-600'
    : 'border-white/10 bg-white/5 text-white/65';

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
              Desenvolvedor Full-Stack focado em arquitetura de sistemas, APIs robustas e aplicações web escaláveis.
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

          {/* ── Coluna Direita — Showcase ASCEND ── */}
          <motion.div className="lg:col-span-5 relative w-full max-w-[42rem] mx-auto" variants={itemVariants}>
            <div className="relative w-full min-h-[28rem] lg:min-h-[33rem]">
              <div className="absolute inset-x-[8%] top-[10%] h-[68%] rounded-full bg-accent-primary/12 blur-[90px] pointer-events-none" />

              <motion.div
                className={`absolute inset-x-0 top-0 z-20 overflow-hidden rounded-[28px] border ${primaryFrameClass}`}
                initial={shouldReduceMotion ? undefined : { rotate: -3, y: 6 }}
                {...motionProps}
              >
                <div className={`flex items-center justify-between border-b px-5 py-3 ${primaryHeaderClass}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
                      ASCEND / {isDarkTheme ? 'Dark' : 'Light'}
                    </span>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${primaryBadgeClass}`}>
                    Dashboard real
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={primaryDashboardSrc}
                    alt={isDarkTheme ? 'Dashboard escuro do ASCEND' : 'Dashboard claro do ASCEND'}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                className={`absolute right-[-2%] bottom-[4%] z-30 w-[72%] overflow-hidden rounded-[24px] border ${secondaryFrameClass}`}
                initial={shouldReduceMotion ? undefined : { rotate: 4, y: -4 }}
                animate={shouldReduceMotion ? undefined : { y: [4, -8, 4] }}
                transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className={`flex items-center justify-between border-b px-4 py-3 ${secondaryHeaderClass}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-primary" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
                      ASCEND / {isDarkTheme ? 'Light' : 'Dark'}
                    </span>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${secondaryBadgeClass}`}>
                    Contraponto
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={secondaryDashboardSrc}
                    alt={isDarkTheme ? 'Dashboard claro do ASCEND' : 'Dashboard escuro do ASCEND'}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute left-[-2%] bottom-[8%] z-40 flex items-center gap-3 rounded-full border border-border-default bg-surface-2/90 p-2 pr-4 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.2)]"
                initial={shouldReduceMotion ? undefined : { scale: 0.96, opacity: 0 }}
                animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                transition={shouldReduceMotion ? undefined : { delay: 0.2, duration: 0.45 }}
              >
                <div className="relative">
                  <Image
                    src={perfil}
                    alt="Icaro Aguiar"
                    width={46}
                    height={46}
                    className="rounded-full border border-border-default object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface-2 bg-status-success" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-main leading-tight">Icaro Aguiar</span>
                  <span className="text-[10px] text-text-muted leading-tight">Full-Stack · Produto · Arquitetura</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
