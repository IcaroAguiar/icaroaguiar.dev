'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Building2,
  Cloud,
  CreditCard,
  Database,
  FileCheck2,
  Mail,
  MessageSquareText,
  MonitorSmartphone,
  ShieldCheck,
  ServerCog,
  TimerReset,
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';
import './Hero.css';

function CodeArtifact() {
  return (
    <div className="hero-artifact hero-artifact-code">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs text-[#77e9dc]">
        <span>scheduled-messages.controller.ts</span>
        <Braces className="h-4 w-4" aria-hidden="true" />
      </div>
      <pre className="overflow-hidden text-[11px] leading-5 text-[#d7fffb] sm:text-xs">
        <code>{`const context =
  await this.tenantsService
    .resolveTenantExecutionContext({
      userId: request.session.user.id,
      tenantId: getTenantIdFromHeader(request),
    })

return this.dispatchScheduled.execute({
  userId: context.tenantId,
  date: body.date,
})`}</code>
      </pre>
    </div>
  );
}

function DiagramArtifact() {
  const flow = [
    { label: 'Web / Mobile', supporting: 'Next + Expo', icon: MonitorSmartphone },
    { label: 'API NestJS', supporting: 'REST + contratos', icon: ServerCog },
    { label: 'Auth', supporting: 'Better Auth', icon: ShieldCheck },
    { label: 'Tenancy', supporting: 'Workspace', icon: Building2 },
    { label: 'Mensageria', supporting: 'Rules', icon: MessageSquareText },
    { label: 'Scheduled', supporting: 'Approve/dispatch', icon: TimerReset },
    { label: 'Fiscal', supporting: 'NFS-e', icon: FileCheck2 },
    { label: 'Billing', supporting: 'Planos', icon: CreditCard },
    { label: 'PostgreSQL', supporting: 'Prisma', icon: Database },
  ];

  return (
    <div className="hero-artifact hero-artifact-diagram">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold text-accent">
        <span>ASCEND architecture</span>
        <Cloud className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="diagram-flow">
        {flow.map((node, index) => {
          const Icon = node.icon;

          return (
            <div key={node.label} className="diagram-step">
              <span className="diagram-node">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <strong>{node.label}</strong>
                <small>{node.supporting}</small>
              </span>
              {index < flow.length - 1 && <ArrowRight className="diagram-arrow" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
      <div className="mt-3 rounded-md border border-border-subtle bg-surface-1 px-3 py-2 text-[11px] leading-5 text-text-tertiary">
        contratos compartilhados entre web, API e domínio financeiro
      </div>
    </div>
  );
}

function DashboardArtifact() {
  return (
    <div className="hero-artifact-dashboard">
      <div className="relative overflow-hidden rounded-md border border-border-default bg-surface-1">
        <Image
          src="/case-screenshots/ascend/cover.png"
          alt="Tela real do ASCEND no tema claro"
          fill
          priority
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="hero-dashboard-image hero-dashboard-image-light object-cover object-top"
        />
        <Image
          src="/case-screenshots/ascend/cover-dark.png"
          alt="Tela real do ASCEND no tema escuro"
          fill
          priority
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="hero-dashboard-image hero-dashboard-image-dark object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto grid w-full max-w-6xl items-center gap-10 pt-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pt-8"
        initial={false}
      >
        <motion.div className="relative z-10 w-full max-w-[22rem] sm:max-w-3xl" initial={false}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Engenharia · Produto · IA aplicada
          </p>

          <h1 className="max-w-full font-sans text-[clamp(1.65rem,4.35vw,4.2rem)] font-semibold leading-[1.04] tracking-normal text-text-main [overflow-wrap:break-word]">
            Arquitetura, produto e <span className="text-accent">IA</span> para software <span className="text-accent">em produção</span>
          </h1>

          <p className="mt-6 max-w-full text-base leading-7 text-text-tertiary md:max-w-2xl md:text-lg">
            Do diagnóstico técnico à interface final, projeto sistemas que combinam arquitetura clara, experiência refinada e execução observável.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SOCIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Falar comigo
            </a>
            <Link
              href="/projetos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-surface-2 px-6 py-3 text-sm font-semibold text-text-main transition hover:bg-surface-3"
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-tertiary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Disponível para novos projetos
          </div>
        </motion.div>

        <motion.div className="hero-visual relative z-10 min-w-0" initial={false}>
          <div className="hero-artifacts-grid">
            <CodeArtifact />
            <div className="hero-artifact-connector" aria-hidden="true" />
            <DiagramArtifact />
            <DashboardArtifact />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
