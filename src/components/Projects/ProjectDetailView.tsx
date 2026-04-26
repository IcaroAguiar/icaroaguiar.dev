'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Building2,
  CheckCircle2,
  Code2,
  Cloud,
  CreditCard,
  Database,
  ExternalLink,
  FileCheck2,
  Github,
  Layers3,
  Lock,
  Mail,
  MessageSquareText,
  MonitorSmartphone,
  Route,
  ServerCog,
  ShieldCheck,
  TimerReset,
} from 'lucide-react';
import type { Project } from '@/data/projects';
import { SOCIAL_LINKS } from '@/constants';
import './Projects.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const imageFallbacks: Record<string, string> = {
  'neo-constrictor': '/case-screenshots/neo-constrictor/cover.png',
  'kosmedico-lp': '',
};

type DiagramIcon = typeof MonitorSmartphone;
type DiagramNode = {
  label: string;
  supporting?: string;
  icon: DiagramIcon;
};

const artifactCopy: Record<string, { file: string; code: string; diagram: DiagramNode[] }> = {
  ascend: {
    file: 'scheduled-messages.controller.ts',
    code: `const context =
  await this.tenantsService
    .resolveTenantExecutionContext({
      userId: request.session.user.id,
      tenantId: getTenantIdFromHeader(request),
    })

return this.dispatchScheduled.execute({
  userId: context.tenantId,
  date: body.date,
})`,
    diagram: [
      { label: 'Web / Mobile', supporting: 'Next + Expo', icon: MonitorSmartphone },
      { label: 'API NestJS', supporting: 'REST + contratos', icon: ServerCog },
      { label: 'Auth', supporting: 'Better Auth', icon: ShieldCheck },
      { label: 'Tenancy', supporting: 'Workspace', icon: Building2 },
      { label: 'Mensageria', supporting: 'Rules', icon: MessageSquareText },
      { label: 'Scheduled', supporting: 'Approve/dispatch', icon: TimerReset },
      { label: 'Fiscal', supporting: 'NFS-e', icon: FileCheck2 },
      { label: 'Billing', supporting: 'Planos', icon: CreditCard },
      { label: 'PostgreSQL', supporting: 'Prisma', icon: Database },
    ],
  },
  'neo-constrictor': {
    file: 'submit-project.use-case.ts',
    code: `const submission =
  await this.submissionRepo.createInitial({
    projectId: input.projectId,
    researcherId: input.researcherId,
    documentIds: input.documentIds,
  })

await recordSubmissionTransitionAudit({
  recordAuditEvent: this.recordAuditEvent,
  submission,
})`,
    diagram: [
      { label: 'Researcher', supporting: 'web-researcher', icon: MonitorSmartphone },
      { label: 'Access Gate', supporting: 'ResearcherAccess', icon: ShieldCheck },
      { label: 'Submissions', supporting: 'Workflow', icon: Route },
      { label: 'Contracts', supporting: 'Zod types', icon: Code2 },
      { label: 'Reviews', supporting: 'Pareceres', icon: FileCheck2 },
      { label: 'Admin', supporting: 'Governança', icon: Building2 },
      { label: 'Audit trail', supporting: 'AuthAuditEvent', icon: MessageSquareText },
      { label: 'PostgreSQL', supporting: 'Prisma', icon: Database },
    ],
  },
  'bluefit-mvp': {
    file: 'prisma-reschedule-booking.repository.ts',
    code: `await tx.booking.update({
  where: { id: input.fromBookingId },
  data: { status: BookingStatus.RescheduledOut },
})

const toBooking = await tx.booking.create({
  data: {
    sessionId: input.toSessionId,
    status: BookingStatus.RescheduledIn,
  },
})`,
    diagram: [
      { label: 'Aluno', supporting: 'Portal', icon: MonitorSmartphone },
      { label: 'Agenda', supporting: 'Aulas', icon: TimerReset },
      { label: 'API', supporting: 'NestJS', icon: ServerCog },
      { label: 'Booking', supporting: 'Rescheduled', icon: Route },
      { label: 'Outbox', supporting: 'Legacy sync', icon: Database },
      { label: 'Inbox', supporting: 'Aluno/Admin', icon: MessageSquareText },
      { label: 'Admin', supporting: 'Operação', icon: Building2 },
      { label: 'Legado', supporting: 'Kursorganizer', icon: Cloud },
    ],
  },
};

function projectImage(project: Project) {
  return imageFallbacks[project.id] ?? project.image;
}

function fallbackArtifacts(project: Project) {
  return (
    artifactCopy[project.id] ?? {
      file: 'delivery-surface.ts',
      code: `const delivery = {
  context: project.context,
  decisions: project.decisions,
  surface: project.product,
}`,
      diagram: [
        { label: 'Contexto', supporting: 'Problema', icon: Route },
        { label: 'Produto', supporting: 'Escopo', icon: Layers3 },
        { label: 'Interface', supporting: 'Entrega', icon: MonitorSmartphone },
        { label: 'Operação', supporting: 'Evolução', icon: ServerCog },
      ],
    }
  );
}

function HeroImage({ project }: { project: Project }) {
  const image = projectImage(project);

  if (!image) {
    return (
      <div className="detail-image-fallback" aria-hidden="true">
        <span>{project.title}</span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={`Preview do projeto ${project.title}`}
      fill
      priority
      sizes="(min-width: 1024px) 42vw, 100vw"
      className="object-cover object-top"
    />
  );
}

function LinksBlock({ project }: { project: Project }) {
  const links = [
    project.liveUrl ? { href: project.liveUrl, label: 'Ver site', icon: ExternalLink } : null,
    project.demoUrl ? { href: project.demoUrl, label: 'Ver demo', icon: ExternalLink } : null,
    project.githubUrl ? { href: project.githubUrl, label: project.privateProject ? 'Repositório privado' : 'GitHub', icon: Github } : null,
    project.backendUrl ? { href: project.backendUrl, label: 'Backend', icon: Github } : null,
  ].filter(Boolean) as Array<{ href: string; label: string; icon: typeof ExternalLink }>;

  if (links.length === 0) {
    return (
      <p className="detail-link-note">
        Este projeto não possui link público aberto no momento. O case permanece disponível para demonstrar escopo, arquitetura e execução.
      </p>
    );
  }

  return (
    <div className="detail-links">
      {links.map(({ href, label, icon: Icon }) => (
        <a href={href} target="_blank" rel="noreferrer" key={`${label}-${href}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
}

export function ProjectDetailView({ project }: { project: Project }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const { detailed } = project;
  const artifacts = fallbackArtifacts(project);
  const summaryItems = [
    detailed.summary ? ['O que é', detailed.summary.what] : null,
    detailed.summary ? ['Para quem', detailed.summary.audience] : null,
    detailed.summary ? ['Valor', detailed.summary.value] : null,
  ].filter(Boolean) as Array<[string, string]>;

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from('.detail-reveal', {
        y: 28,
        duration: 0.76,
        ease: 'power3.out',
        stagger: 0.06,
      });

      gsap.utils.toArray<HTMLElement>('.detail-artifact').forEach((artifact) => {
        gsap.fromTo(
          artifact,
          { scale: 0.96, opacity: 0.65 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: artifact,
              start: 'top 88%',
              end: 'top 52%',
              scrub: true,
            },
          },
        );
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="project-detail-page">
      <div className="projects-bg-grid" aria-hidden="true" />
      <div className="projects-bg-glow" aria-hidden="true" />

      <main className="relative z-10">
        <section className="detail-hero">
          <div className="projects-shell detail-hero-grid">
            <div className="detail-copy detail-reveal">
              <Link href="/projetos" className="detail-back-link">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Projetos
              </Link>
              <p className="projects-kicker">Projeto / {project.title}</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="detail-tags">
                {project.tags.slice(0, 7).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="detail-status">
                <span>{project.status}</span>
                {project.privateProject ? (
                  <span>
                    <Lock className="h-3 w-3" aria-hidden="true" />
                    material restrito
                  </span>
                ) : null}
              </div>
            </div>

            <div className="detail-visual detail-reveal">
              <div className="detail-main-image detail-artifact">
                <HeroImage project={project} />
              </div>
              <div className="detail-artifact-row">
                <div className="detail-code-card detail-artifact">
                  <div>
                    <span>{artifacts.file}</span>
                    <Braces className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <pre>{artifacts.code}</pre>
                </div>
                <div className="detail-diagram-card detail-artifact">
                  <div>
                    <span>Arquitetura orientada</span>
                    <Layers3 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="detail-diagram-flow">
                    {artifacts.diagram.map((node, index) => {
                      const Icon = node.icon;

                      return (
                        <div className="detail-diagram-step" key={`${node.label}-${index}`}>
                          <span className="detail-diagram-node">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                            <strong>{node.label}</strong>
                            {node.supporting ? <small>{node.supporting}</small> : null}
                          </span>
                          {index < artifacts.diagram.length - 1 ? (
                            <span className="detail-diagram-arrow" aria-hidden="true">
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="detail-summary">
          <div className="projects-shell">
            <div className="detail-summary-grid">
              {summaryItems.map(([title, text]) => (
                <article key={title} className="detail-reveal">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {detailed.context ? (
          <section className="detail-context">
            <div className="projects-shell detail-two-column">
              <div className="detail-section-title detail-reveal">
                <Code2 className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2>Contexto e direção</h2>
                <p>O case é apresentado por problema real, decisão técnica e superfície entregue.</p>
              </div>
              <div className="detail-text-stack">
                <article className="detail-reveal">
                  <h3>Problema</h3>
                  <p>{detailed.context.problem}</p>
                </article>
                <article className="detail-reveal">
                  <h3>Direção</h3>
                  <p>{detailed.context.motivation}</p>
                </article>
              </div>
            </div>
          </section>
        ) : null}

        <section className="detail-dossier">
          <div className="projects-shell">
            <div className="detail-dossier-grid">
              <article className="detail-reveal">
                <MonitorSmartphone className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2>Problema</h2>
                <p>{detailed.overview.problem}</p>
              </article>
              <article className="detail-reveal">
                <ServerCog className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2>Solução</h2>
                <p>{detailed.overview.solution}</p>
              </article>
              <article className="detail-reveal">
                <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2>Atuação</h2>
                <p>{detailed.overview.role}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="detail-architecture">
          <div className="projects-shell detail-two-column">
            <div className="detail-section-title detail-reveal">
              <Database className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2>Arquitetura e decisões</h2>
              <p>Fronteiras técnicas, módulos e escolhas que sustentam evolução.</p>
            </div>
            <div className="detail-architecture-stack">
              {detailed.architecture.map((category) => (
                <article key={category.category} className="detail-reveal">
                  <h3>{category.category}</h3>
                  <div>
                    {category.technologies.map((tech) => (
                      <span key={tech.name}>{tech.name}</span>
                    ))}
                  </div>
                  <p>{category.technologies.map((tech) => tech.description).join(' ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {detailed.decisions && detailed.decisions.length > 0 ? (
          <section className="detail-decisions">
            <div className="projects-shell">
              <div className="detail-section-title detail-reveal">
                <h2>Decisões técnicas relevantes</h2>
              </div>
              <div className="detail-decision-grid">
                {detailed.decisions.map((decision) => (
                  <article key={decision.title} className="detail-reveal">
                    <h3>{decision.title}</h3>
                    <p>{decision.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="detail-links-section">
          <div className="projects-shell detail-links-inner">
            <div>
              <h2>Links e acesso</h2>
              <p>Superfícies públicas, repositórios e materiais disponíveis para este case.</p>
            </div>
            <LinksBlock project={project} />
          </div>
        </section>

        <section className="projects-cta">
          <div className="projects-shell projects-cta-inner">
            <h2>Vamos construir algo difícil, direito.</h2>
            <p>Novos desafios me movem. Se você busca um parceiro técnico que pensa como dono e entrega com excelência, vamos conversar.</p>
            <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noreferrer">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Falar comigo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
