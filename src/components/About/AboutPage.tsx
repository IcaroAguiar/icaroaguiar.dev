'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Boxes,
  Braces,
  CheckCircle2,
  Database,
  FileDown,
  GitBranch,
  Layers3,
  Mail,
  MonitorSmartphone,
  Radar,
  Route,
  ServerCog,
  ShieldCheck,
} from 'lucide-react';
import perfil from '@/assets/perfil.jpg';
import { education, experiences, skills } from '@/data';
import { SOCIAL_LINKS } from '@/constants';
import './AboutPage.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const principles = [
  {
    title: 'Contexto antes de solução',
    description: 'Entendo restrições de produto, domínio e operação antes de transformar requisito em interface ou API.',
    icon: Radar,
  },
  {
    title: 'Arquitetura que aparece no uso',
    description: 'Contrato, dado, fluxo e tela precisam conversar sem acoplamento escondido ou regra crítica espalhada.',
    icon: Layers3,
  },
  {
    title: 'Entrega que sustenta evolução',
    description: 'Testes, observabilidade e documentação entram como parte do produto, não como acabamento tardio.',
    icon: CheckCircle2,
  },
];

const focusAreas = [
  'Produtos SaaS e plataformas multi-tenant',
  'APIs NestJS, contratos e modelagem de dados',
  'Interfaces React, Next.js e mobile com Expo/Flutter',
  'IA aplicada com controle operacional',
  'CI/CD, testes e entrega observável',
];

const highlightedSkills = [
  ...skills['Back-end'].slice(0, 4),
  ...skills['Front-end'].slice(0, 4),
  ...skills.Arquitetura.slice(0, 4),
];

function mailTo() {
  return `mailto:${SOCIAL_LINKS.EMAIL}`;
}

export function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const currentExperiences = experiences.slice(0, 5);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.fromTo(
        '.about-reveal',
        { y: 30 },
        {
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
        },
      );

      gsap.utils.toArray<HTMLElement>('.about-track-row').forEach((row) => {
        gsap.fromTo(
          row,
          { x: -18 },
          {
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top 88%',
              end: 'top 54%',
              scrub: true,
            },
          },
        );
      });

      gsap.fromTo(
        '.about-portrait-shell',
        { scale: 0.94 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 30%',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="about-page relative min-h-screen w-full max-w-full overflow-x-hidden bg-surface-1 text-text-main">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_82%_6%,rgba(42,157,143,0.13),transparent_30%),radial-gradient(circle_at_10%_20%,rgba(42,157,143,0.07),transparent_26%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-35" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-noise opacity-25" />

      <main className="relative z-10">
        <section className="about-hero px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <div className="about-reveal">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Engenharia · Produto · IA aplicada</p>
              <h1 className="max-w-4xl font-sans text-[clamp(2.6rem,5.25vw,5rem)] font-semibold leading-[1.02] tracking-normal text-text-main">
                Eu transformo complexidade em software em produção.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-text-tertiary">
                Atuo entre arquitetura, produto e interface para tirar sistemas do campo das ideias e colocar operação real de pé: clara, evolutiva e observável.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SOCIAL_LINKS.WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Falar comigo
                </a>
                <a
                  href="/Icaro_Aguiar_Curriculo_2026_PTBR.pdf"
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-surface-2 px-6 py-3 text-sm font-semibold text-text-main transition hover:bg-surface-3"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Baixar CV
                </a>
              </div>
            </div>

            <div className="about-reveal about-portrait-shell">
              <div className="about-visual-stage" aria-label="Composição visual de engenharia e produto">
                <div className="about-code-note">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-semibold text-accent">
                    <span>scheduled-messages.controller.ts</span>
                    <Braces className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <pre>{`const context =
  await this.tenantsService
    .resolveTenantExecutionContext({
      userId: request.session.user.id,
      tenantId: getTenantIdFromHeader(request),
    })`}</pre>
                </div>

                <div className="about-portrait-frame">
                  <Image src={perfil} alt="Ícaro Aguiar" fill priority className="object-cover object-top" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>

                <div className="about-diagram-card">
                  <div className="about-diagram-node">
                    <MonitorSmartphone className="h-4 w-4" aria-hidden="true" />
                    <span>Web</span>
                  </div>
                  <div className="about-diagram-node">
                    <ServerCog className="h-4 w-4" aria-hidden="true" />
                    <span>API</span>
                  </div>
                  <div className="about-diagram-node">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    <span>Auth</span>
                  </div>
                  <div className="about-diagram-node">
                    <Boxes className="h-4 w-4" aria-hidden="true" />
                    <span>Domínio</span>
                  </div>
                  <div className="about-diagram-node">
                    <Layers3 className="h-4 w-4" aria-hidden="true" />
                    <span>Workers</span>
                  </div>
                  <div className="about-diagram-node">
                    <Database className="h-4 w-4" aria-hidden="true" />
                    <span>Dados</span>
                  </div>
                </div>

                <div className="about-dashboard-card">
                  <div className="mb-3 flex items-center justify-between text-xs font-semibold text-white">
                    <span>ASCEND</span>
                    <span className="text-white/48">dashboard real</span>
                  </div>
                  <div className="about-dashboard-image">
                    <Image
                      src="/case-screenshots/ascend/cover-dark.png"
                      alt="Dashboard real do ASCEND em tema escuro"
                      fill
                      sizes="(min-width: 1024px) 22vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="about-checks-card">
                  <span>production checks</span>
                  <div>Typecheck <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /></div>
                  <div>Tests <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /></div>
                  <div>Build <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 border-y border-border-subtle py-10 lg:grid-cols-[0.32fr_0.68fr]">
            <div className="about-reveal">
              <h2 className="font-sans text-3xl font-semibold tracking-normal text-text-main md:text-4xl">Como penso o trabalho</h2>
              <p className="mt-4 text-base leading-7 text-text-tertiary">
                A proposta não é acumular tecnologia, é organizar decisões para que produto, código e operação se sustentem juntos.
              </p>
            </div>

            <div className="grid border-y border-border-subtle md:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article key={principle.title} className="about-reveal border-b border-border-subtle py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0 md:last:pr-0">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-border-default text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-sans text-lg font-semibold tracking-normal text-text-main">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-tertiary">{principle.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="about-reveal lg:sticky lg:top-28 lg:self-start">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <Route className="h-4 w-4" aria-hidden="true" />
                Trajetória
              </div>
              <h2 className="max-w-lg font-sans text-[clamp(2.2rem,4vw,4.6rem)] font-semibold leading-[1.03] tracking-normal text-text-main">
                Experiência conectada por produto.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-text-tertiary">
                O repertório combina produto próprio, consultoria técnica, sistemas internos e interfaces orientadas a operação.
              </p>
            </div>

            <div className="about-track">
              {currentExperiences.map((experience) => (
                <article key={`${experience.company}-${experience.period}`} className="about-track-row">
                  <div>
                    <p className="text-sm font-semibold text-accent">{experience.company}</p>
                    <h3 className="mt-2 font-sans text-2xl font-semibold tracking-normal text-text-main">{experience.role}</h3>
                  </div>
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">{experience.period}</p>
                    <ul className="space-y-2">
                      {experience.tasks.slice(0, 3).map((task) => (
                        <li key={task} className="text-sm leading-6 text-text-tertiary">{task}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="about-reveal">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <GitBranch className="h-4 w-4" aria-hidden="true" />
                Stack aplicada
              </div>
              <h2 className="font-sans text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-[1.04] tracking-normal text-text-main">
                Ferramentas entram como consequência da arquitetura.
              </h2>
            </div>

            <div className="about-reveal">
              <div className="about-skill-strip">
                {highlightedSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {focusAreas.map((area) => (
                  <div key={area} className="about-focus-row">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border-subtle pt-6">
                {education.map((item) => (
                  <div key={item.course} className="flex flex-col gap-1 border-b border-border-subtle py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-sans text-base font-semibold text-text-main">{item.course}</span>
                    <span className="text-sm text-text-tertiary">{item.institution} · {item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.45fr_0.35fr_auto] md:items-center">
            <h2 className="font-sans text-[clamp(2.1rem,4vw,3.8rem)] font-semibold leading-[1.03] tracking-normal text-white">
              Vamos construir algo difícil, direito.
            </h2>
            <p className="text-base leading-7 text-white/68">
              Se você busca um parceiro técnico que pensa como dono e entrega com excelência, vamos conversar.
            </p>
            <a href={mailTo()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover">
              Falar comigo
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
