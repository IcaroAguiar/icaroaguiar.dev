'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Mail,
  Radar,
} from 'lucide-react';
import Hero from '@/components/Hero/Hero';
import { ExpertiseBar } from '@/components/ExpertiseBar/ExpertiseBar';
import { projects } from '@/data';
import { SOCIAL_LINKS } from '@/constants';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const capabilityCards = [
  {
    title: 'Diagnóstico claro',
    description: 'Entendo contexto, decomponho o problema e foco no que realmente gera valor.',
    icon: Radar,
  },
  {
    title: 'Arquitetura pragmática',
    description: 'Soluções simples por fora e sólidas por dentro, preparadas para evoluir sem dor.',
    icon: Layers3,
  },
  {
    title: 'Entrega observável',
    description: 'Métricas, logs, testes e automações para sustentar decisões em continuidade.',
    icon: CheckCircle2,
  },
];

const projectOrder = ['ascend', 'neo-constrictor', 'bluefit-mvp'];

const projectImageFallbacks: Record<string, string> = {
  'neo-constrictor': '/case-screenshots/neo-constrictor/cover.png',
};

function getProjectSummary(projectId: string) {
  const summaries: Record<string, { tag: string; description: string }> = {
    ascend: {
      tag: 'Fintech',
      description: 'Gestão financeira, cobrança, billing, fiscal e operação em um produto multi-superfície.',
    },
    'neo-constrictor': {
      tag: 'Workflow documental',
      description: 'Base auditável para tramitação documental com contratos compartilhados e frontends separados.',
    },
    'bluefit-mvp': {
      tag: 'MVP operacional',
      description: 'Agenda, autenticação, inbox, administração e integração com legado em monorepo.',
    },
  };

  return summaries[projectId] ?? { tag: 'Produto', description: 'Projeto com foco em arquitetura, produto e execução.' };
}

export function PortfolioHome() {
  const pageRef = useRef<HTMLDivElement>(null);
  const selectedProjects = projectOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean) as typeof projects;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from('.home-reveal', {
        y: 28,
        opacity: 0,
        duration: 0.72,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: '.home-projects',
          start: 'top 78%',
        },
      });

      gsap.utils.toArray<HTMLElement>('.artifact-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 36, opacity: 0.72 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 86%',
              end: 'top 48%',
              scrub: true,
            },
          },
        );
      });
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="portfolio-home relative min-h-screen w-full max-w-full overflow-x-hidden bg-surface-1 text-text-main"
    >
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_78%_12%,rgba(42,157,143,0.12),transparent_30%),radial-gradient(circle_at_20%_0%,rgba(42,157,143,0.08),transparent_26%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-35" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-noise opacity-30" />

      <Hero />
      <ExpertiseBar />

      <main className="relative z-10 overflow-x-hidden">
        <section className="home-projects px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="home-reveal max-w-3xl">
                <h2 className="font-sans text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.02] tracking-normal text-text-main">
                  Projetos selecionados
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-text-tertiary">
                  Uma leitura direta dos sistemas, decisões e superfícies que sustentam meu trabalho.
                </p>
              </div>
              <Link href="/projetos" className="home-reveal inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover">
                Ver todos os projetos
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-flow-dense grid-cols-1 gap-4 lg:grid-cols-3">
              {selectedProjects.map((project, index) => {
                const summary = getProjectSummary(project.id);

                return (
                  <article
                    key={project.id}
                    className="artifact-card home-reveal group overflow-hidden rounded-lg border border-border-default bg-surface-2 shadow-[0_18px_70px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-out hover:-translate-y-1"
                  >
                    <Link href={`/projeto/${project.id}`} className="block h-full text-text-main hover:text-text-main">
                      <div className="relative aspect-[16/9] overflow-hidden border-b border-border-subtle bg-surface-3">
                        <Image
                          src={project.image || projectImageFallbacks[project.id] || '/preview.png'}
                          alt={`Preview do projeto ${project.title}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="mb-4 inline-flex rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent">
                          {summary.tag}
                        </div>
                        <h3 className="font-sans text-xl font-semibold tracking-normal text-text-main">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-text-tertiary">{summary.description}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          Ver projeto
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 border-t border-border-subtle pt-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="home-reveal">
              <h2 className="font-sans text-3xl font-semibold tracking-normal text-text-main md:text-4xl">Como construo</h2>
              <p className="mt-4 text-base leading-7 text-text-tertiary">
                Princípios que guiam cada decisão técnica e de produto, do primeiro commit ao sistema em produção.
              </p>
              <Link href="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover">
                Sobre meu trabalho
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid border-y border-border-subtle md:grid-cols-3">
              {capabilityCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="home-reveal border-b border-border-subtle py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-border-default bg-transparent text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-sans text-lg font-semibold tracking-normal text-text-main">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-tertiary">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="home-reveal max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Como ler este portfólio
              </div>
              <h2 className="font-sans text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.02] tracking-normal text-text-main">
                Cada projeto mostra uma parte do mesmo método.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-text-tertiary">
                Uso os estudos de caso para evidenciar contexto, decisões técnicas e resultado entregue, sem inventar métricas ou simular dados que não fazem parte do projeto.
              </p>
            </div>

            <div className="mt-10 grid gap-0 border-y border-border-subtle md:grid-cols-3">
              {[
                ['Contexto', 'Qual problema o produto resolve e quais restrições orientaram as escolhas.'],
                ['Decisão técnica', 'Arquitetura, integrações, trade-offs e padrões usados para reduzir risco.'],
                ['Produto entregue', 'Interfaces, fluxos e superfícies reais que demonstram a execução.'],
              ].map(([title, description]) => (
                <article key={title} className="home-reveal border-b border-border-subtle py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <h3 className="font-sans text-lg font-semibold tracking-normal text-text-main">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-tertiary">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[#173331] bg-[#061514] px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(45,212,191,0.18),transparent_26%),radial-gradient(circle_at_72%_55%,rgba(45,212,191,0.09),transparent_22%)]" />
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[0.9fr_1.25fr_0.8fr]">
            <div className="md:pr-10">
              <h2 className="max-w-2xl font-sans text-[clamp(1.85rem,2.6vw,3.1rem)] font-semibold leading-[1.08] tracking-normal text-white">
                Vamos construir algo difícil, direito.
              </h2>
            </div>
            <div className="border-t border-white/10 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="max-w-2xl text-base leading-7 text-white/68">
                Novos desafios me movem. Se você busca um parceiro técnico que pensa como dono e entrega com excelência, vamos conversar.
              </p>
            </div>
            <div className="flex md:justify-end">
                <a
                  href={SOCIAL_LINKS.WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,118,110,0.28)] transition hover:bg-accent-hover sm:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Falar comigo
                </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
