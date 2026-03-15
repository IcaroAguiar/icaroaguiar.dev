import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { projects } from '@/data/projects';

type Props = {
  params: Promise<{ projectId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: 'Projeto não encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const { detailed } = project;
  const summary = detailed.summary;
  const context = detailed.context;
  const stage = detailed.stage;
  const roleAreas = detailed.roleAreas ?? [];
  const valueFocus = detailed.valueFocus ?? [];
  const modules = detailed.modules ?? [];
  const decisions = detailed.decisions ?? [];
  const hasPublicLinks = Boolean(project.demoUrl || project.liveUrl || project.githubUrl || project.backendUrl);

  return (
    <section className="py-16 bg-surface-1 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary font-medium transition"
        >
          <FaArrowLeft size={14} />
          Voltar aos Projetos
        </Link>

        <div className="rounded-[28px] border border-border-default bg-surface-2 overflow-hidden">
          <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-8 p-6 md:p-8 lg:p-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                  {project.status}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-surface-3 text-text-secondary border border-border-default">
                    Destaque
                  </span>
                )}
                {project.privateProject && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-surface-3 text-text-secondary border border-border-default inline-flex items-center gap-1">
                    <FaLock size={10} />
                    Repositório Privado
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted font-mono">
                  {project.featured ? 'Super-case' : 'Case detalhado'}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-main">
                  {project.title}
                </h1>
                <p className="text-text-secondary leading-relaxed text-base md:text-lg max-w-3xl">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-surface-3 text-text-secondary border border-border-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {roleAreas.length > 0 && (
                <div className="rounded-2xl border border-border-default bg-surface-1 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-3">
                    Papel exercido
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {roleAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-sm rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] bg-surface-1 rounded-2xl overflow-hidden border border-border-default">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-text-faint text-sm">
                    Screenshot principal aguardando captura
                  </div>
                )}
              </div>

              {summary && (
                <div className="grid gap-3">
                  <div className="rounded-2xl border border-border-default bg-surface-1 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-2">
                      O que e
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">{summary.what}</p>
                  </div>
                  <div className="rounded-2xl border border-border-default bg-surface-1 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-2">
                      Para quem
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">{summary.audience}</p>
                  </div>
                  <div className="rounded-2xl border border-border-default bg-surface-1 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-2">
                      Valor entregue
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">{summary.value}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {context && (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-3">
                Problema e contexto
              </p>
              <p className="text-main font-semibold mb-3">Cenario que motivou a construcao</p>
              <p className="text-text-secondary text-sm leading-relaxed">{context.problem}</p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-3">
                Direcao do produto
              </p>
              <p className="text-main font-semibold mb-3">Como a solucao foi posicionada</p>
              <p className="text-text-secondary text-sm leading-relaxed">{context.motivation}</p>
            </div>
          </div>
        )}

        {stage && (
          <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-3">
                Escopo do MVP ou estagio atual
              </p>
              <h2 className="text-2xl font-bold text-main">{stage.label}</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {stage.items.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border-default bg-surface-1 px-4 py-4 text-sm text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {valueFocus.length > 0 && (
          <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted font-mono mb-3">
              Resultados e foco de valor
            </p>
            <div className="flex flex-wrap gap-3">
              {valueFocus.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-surface-1 border border-border-default text-sm text-main"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-main mb-6">Visao geral do produto</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-accent-primary mb-2">Problema</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{detailed.overview.problem}</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-primary mb-2">Solucao</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{detailed.overview.solution}</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-primary mb-2">Atuacao</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{detailed.overview.role}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-main mb-2">
            Arquitetura e organizacao tecnica
          </h2>
          <p className="text-text-secondary mb-6">
            Como a estrutura do projeto sustenta evolucao, clareza de dominio e operacao.
          </p>
          <div className="space-y-8">
            {detailed.architecture.map((category, index) => (
              <div key={index}>
                <h3 className="font-semibold text-main mb-4">{category.category}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="p-4 rounded-xl bg-surface-1 border border-border-default"
                    >
                      <h4 className="font-medium text-accent-primary mb-1">{tech.name}</h4>
                      <p className="text-sm text-text-secondary">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {modules.length > 0 && (
          <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-main mb-6">
              Fluxos principais e modulos criticos
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-surface-1 border border-border-default"
                >
                  <h3 className="font-semibold text-main mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {decisions.length > 0 && (
          <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-main mb-6">
              Decisoes tecnicas relevantes
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {decisions.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-surface-1 border border-border-default"
                >
                  <h3 className="font-semibold text-main mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-main mb-6">Stack e ferramentas</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {detailed.features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-surface-1 border border-border-default"
              >
                <h3 className="font-semibold text-accent-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border-default bg-surface-2 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-main mb-6">Desafios e trade-offs</h2>
          <div className="space-y-6">
            {detailed.challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-surface-1 border border-border-default"
              >
                <h3 className="font-semibold text-main mb-4">{challenge.title}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-surface-2 rounded-lg border border-border-default">
                    <h4 className="font-medium text-main mb-2">Desafio</h4>
                    <p className="text-sm text-text-secondary">{challenge.problem}</p>
                  </div>
                  <div className="p-4 bg-surface-2 rounded-lg border border-border-default">
                    <h4 className="font-medium text-main mb-2">Solucao</h4>
                    <p className="text-sm text-text-secondary">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-surface-2 to-surface-3 border border-border-default p-8 text-center">
          <h2 className="text-2xl font-bold text-main mb-2">Links e acesso</h2>
          <p className="text-text-secondary mb-6">
            Repositorios, superfícies publicas e evidencias disponíveis para este produto.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-text-main text-surface-1 font-medium hover:opacity-90 transition"
              >
                <FaExternalLinkAlt size={14} />
                Ver demo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-text-main text-surface-1 font-medium hover:opacity-90 transition"
              >
                <FaExternalLinkAlt size={14} />
                Ver site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-surface-1 border border-border-default text-main font-medium hover:border-border-strong transition"
              >
                <FaGithub size={14} />
                {project.privateProject ? 'Ver repositório (privado)' : 'Ver repositório'}
              </a>
            )}
            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-surface-1 border border-border-default text-main font-medium hover:border-border-strong transition"
              >
                <FaGithub size={14} />
                Ver backend
              </a>
            )}
          </div>
          {!hasPublicLinks && (
            <p className="mt-5 text-sm text-text-secondary max-w-2xl mx-auto">
              Este projeto nao possui link publico aberto no momento. O case permanece disponivel para demonstrar escopo, arquitetura e capacidade de execucao, e o acesso pode depender de ambiente privado ou apresentacao guiada.
            </p>
          )}
          {project.privateProject && hasPublicLinks && (
            <p className="mt-5 text-sm text-text-secondary max-w-2xl mx-auto">
              Parte do material tecnico pode estar em repositorio privado ou ambiente restrito, mesmo quando existe superficie publica publicada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
