'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Lock,
  MonitorSmartphone,
  Search,
} from 'lucide-react';
import { projects, type Project } from '@/data';
import { SOCIAL_LINKS } from '@/constants';
import './Projects.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProjectCategory = 'Todos' | 'Produtos' | 'Web' | 'Mobile' | 'Backend' | 'IA/Automação' | 'Landing Pages';

const featuredIds = ['ascend', 'neo-constrictor', 'bluefit-mvp'];
const missingImageFallbacks: Record<string, string> = {
  'neo-constrictor': '/case-screenshots/neo-constrictor/cover.png',
  'kosmedico-lp': '',
};

const categoryLabels: ProjectCategory[] = ['Todos', 'Produtos', 'Web', 'Mobile', 'Backend', 'IA/Automação', 'Landing Pages'];
const landingPageIds = new Set([
  'rosana-site',
  'kosmedico-lp',
  'picanhabrasil',
  'daniele-landingpage',
  'fixxcapital',
  'star-agency-v2',
  'tatiane-aguiar',
]);

function normalized(value: string) {
  return value.trim().toLowerCase();
}

function projectImage(project: Project) {
  return missingImageFallbacks[project.id] ?? project.image;
}

function inferProjectCategory(project: Project): Exclude<ProjectCategory, 'Todos'> {
  const tags = project.tags.map(normalized);
  const title = normalized(project.title);
  const description = normalized(project.description);

  if (featuredIds.includes(project.id) || tags.some((tag) => tag.includes('monorepo'))) {
    return 'Produtos';
  }

  if (
    landingPageIds.has(project.id) ||
    tags.some((tag) => tag.includes('landing')) ||
    title.includes('landing') ||
    description.includes('landing')
  ) {
    return 'Landing Pages';
  }

  if (tags.some((tag) => tag.includes('mobile') || tag.includes('react native') || tag.includes('expo'))) {
    return 'Mobile';
  }

  if (tags.some((tag) => tag.includes('python') || tag.includes('fastapi') || tag.includes('ml') || tag.includes('automation'))) {
    return 'IA/Automação';
  }

  if (tags.some((tag) => tag.includes('api') || tag.includes('backend') || tag.includes('node') || tag.includes('express'))) {
    return 'Backend';
  }

  return 'Web';
}

function categoryCount(category: ProjectCategory) {
  if (category === 'Todos') {
    return projects.length;
  }

  return projects.filter((project) => inferProjectCategory(project) === category).length;
}

function ProjectImage({ project, priority = false }: { project: Project; priority?: boolean }) {
  const image = projectImage(project);

  if (!image) {
    return (
      <div className="project-image-fallback" aria-hidden="true">
        <span>{project.title.slice(0, 2).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={`Preview do projeto ${project.title}`}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 36vw, 100vw"
      className="object-cover object-top"
    />
  );
}

function StatusLine({ project }: { project: Project }) {
  return (
    <div className="projects-status-line">
      <span>{inferProjectCategory(project)}</span>
      <span>{project.status}</span>
      {project.privateProject ? (
        <span className="inline-flex items-center gap-1">
          <Lock className="h-3 w-3" aria-hidden="true" />
          restrito
        </span>
      ) : null}
    </div>
  );
}

export function ProjectsIndex() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const selectedProjects = useMemo(() => {
    const filtered =
      activeCategory === 'Todos'
        ? projects
        : projects.filter((project) => inferProjectCategory(project) === activeCategory);

    return [...filtered].sort((a, b) => {
      const aWeight = featuredIds.indexOf(a.id);
      const bWeight = featuredIds.indexOf(b.id);
      return (aWeight === -1 ? 99 : aWeight) - (bWeight === -1 ? 99 : bWeight);
    });
  }, [activeCategory]);

  const featuredProjects = selectedProjects.filter((project) => featuredIds.includes(project.id));
  const archiveProjects = selectedProjects.filter((project) => !featuredIds.includes(project.id));

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from('.projects-reveal', {
        y: 24,
        duration: 0.72,
        ease: 'power3.out',
        stagger: 0.06,
      });

      gsap.utils.toArray<HTMLElement>('.project-row').forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.58, scale: 0.985 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top 86%',
              end: 'top 54%',
              scrub: true,
            },
          },
        );
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="projects-page">
      <div className="projects-bg-grid" aria-hidden="true" />
      <div className="projects-bg-glow" aria-hidden="true" />

      <main className="relative z-10">
        <section className="projects-hero projects-reveal">
          <div className="projects-shell">
            <div className="projects-hero-copy">
              <p className="projects-kicker">Projetos selecionados</p>
              <h1>Projetos que mostram execução real.</h1>
              <p>
                Uma curadoria de produtos, sistemas e superfícies em que arquitetura, interface e operação precisaram se encontrar sem inventar métricas.
              </p>
            </div>

            <div className="projects-hero-panel" aria-label="Leitura do portfólio">
              <Search className="h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <strong>Como ler</strong>
                <span>Contexto, decisão técnica e produto entregue em cada case.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-tools projects-reveal">
          <div className="projects-shell">
            <div className="projects-filter-bar" aria-label="Filtros de projetos">
              {categoryLabels.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? 'active' : ''}
                >
                  <span>{category}</span>
                  <small>{categoryCount(category)}</small>
                </button>
              ))}
            </div>

            <div className="projects-tech-strip" aria-label="Critérios técnicos">
              {[
                [MonitorSmartphone, 'Produto multi-superfície'],
                [Layers3, 'Arquitetura explícita'],
                [Code2, 'Código e entrega real'],
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof MonitorSmartphone;
                return (
                  <span key={label as string}>
                    <TypedIcon className="h-4 w-4" aria-hidden="true" />
                    {label as string}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects-list">
          <div className="projects-shell">
            <div className="projects-section-head projects-reveal">
              <h2>Destaques</h2>
              <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" aria-hidden="true" />
                Ver GitHub
              </Link>
            </div>

            <div className="project-row-stack">
              {(featuredProjects.length > 0 ? featuredProjects : selectedProjects.slice(0, 3)).map((project, index) => (
                <Link href={`/projeto/${project.id}`} className="project-row group" key={project.id}>
                  <article>
                    <div className="project-row-media">
                      <ProjectImage project={project} priority={index === 0} />
                    </div>
                    <div className="project-row-content">
                      <StatusLine project={project} />
                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </div>
                      <div className="project-tags">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-row-action">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {archiveProjects.length > 0 ? (
          <section className="projects-archive">
            <div className="projects-shell">
              <div className="projects-section-head projects-reveal">
                <h2>Arquivo curado</h2>
                <p>Outras entregas que completam repertório, escopo e contexto.</p>
              </div>

              <div className="archive-grid">
                {archiveProjects.map((project) => (
                  <Link href={`/projeto/${project.id}`} key={project.id} className="archive-item group">
                    <span>{inferProjectCategory(project)}</span>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="projects-cta">
          <div className="projects-shell projects-cta-inner">
            <h2>Vamos construir algo difícil, direito.</h2>
            <p>Se você busca um parceiro técnico que pensa como dono e entrega com excelência, vamos conversar.</p>
            <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noreferrer">
              Falar comigo
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
