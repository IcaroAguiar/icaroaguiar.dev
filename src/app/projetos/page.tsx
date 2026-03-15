'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLock } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '@/data';
import { ScrollReveal } from '@/components/ui';
import { staggerContainerVariants, itemVariants } from '@/hooks';

type PageCategory =
  | 'Todos'
  | 'Destaques'
  | 'Produtos'
  | 'Web'
  | 'Mobile'
  | 'Backend'
  | 'IA/Automação'
  | 'Landing Pages';

const STRATEGIC_FEATURE_IDS = ['ascend', 'bluefit-mvp', 'neo-constrictor'];
const COMPLEMENTARY_IDS = new Set(['financas-api', 'face-api']);
const LANDING_PAGE_IDS = new Set([
  'fixxcapital',
  'rosana-site',
  'kosmedico-lp',
  'picanhabrasil',
  'daniele-landingpage',
  'star-agency-v2',
  'tatiane-aguiar',
]);

const pageCategories: PageCategory[] = [
  'Todos',
  'Destaques',
  'Produtos',
  'Web',
  'Mobile',
  'Backend',
  'IA/Automação',
  'Landing Pages',
];

function normalizeTag(value: string): string {
  return value.trim().toLowerCase();
}

function inferProjectCategory(
  project: (typeof projects)[number]
): 'Produtos' | 'Web' | 'Mobile' | 'Backend' | 'IA/Automação' | 'Landing Pages' {
  const normalizedTags = project.tags.map(normalizeTag);
  const id = normalizeTag(project.id);
  const title = normalizeTag(project.title);
  const description = normalizeTag(project.description);

  if (STRATEGIC_FEATURE_IDS.includes(project.id) || normalizedTags.some((tag) => tag.includes('monorepo'))) {
    return 'Produtos';
  }

  if (
    LANDING_PAGE_IDS.has(project.id) ||
    normalizedTags.some((tag) => tag.includes('landing')) ||
    title.includes('landing page') ||
    description.includes('landing page')
  ) {
    return 'Landing Pages';
  }

  if (
    normalizedTags.some((tag) => tag.includes('react native') || tag.includes('mobile') || tag.includes('expo'))
  ) {
    return 'Mobile';
  }

  if (
    normalizedTags.some(
      (tag) =>
        tag.includes('ml') ||
        tag.includes('automation') ||
        tag.includes('deepface') ||
        tag.includes('python') ||
        tag.includes('fastapi')
    )
    || id.includes('face-api')
  ) {
    return 'IA/Automação';
  }

  if (
    normalizedTags.some(
      (tag) => tag.includes('api') || tag.includes('backend') || tag.includes('node') || tag.includes('express')
    )
  ) {
    return 'Backend';
  }

  if (normalizedTags.some((tag) => tag.includes('next.js'))) {
    return 'Produtos';
  }

  return 'Web';
}

function categoryLabelCount(category: PageCategory, list: typeof projects): number {
  if (category === 'Todos') {
    return list.length;
  }

  if (category === 'Destaques') {
    return list.filter((project) => STRATEGIC_FEATURE_IDS.includes(project.id)).length;
  }

  return list.filter((project) => inferProjectCategory(project) === category).length;
}

function heroTone(project: string): string {
  const key = normalizeTag(project);

  if (key.includes('ascend')) {
    return 'from-slate-950/75 via-slate-900/40 to-slate-800/20';
  }

  if (key.includes('bluefit')) {
    return 'from-emerald-950/60 via-slate-900/45 to-transparent';
  }

  if (key.includes('neo-constrictor')) {
    return 'from-indigo-950/70 via-slate-900/30 to-transparent';
  }

  return 'from-slate-900/70 via-slate-800/35 to-transparent';
}

function accentPanel(project: string): string {
  const key = normalizeTag(project);

  if (key.includes('ascend')) {
    return 'from-slate-950/88 via-slate-950/72 to-slate-900/24';
  }

  if (key.includes('bluefit')) {
    return 'from-emerald-950/86 via-slate-950/68 to-emerald-900/22';
  }

  if (key.includes('neo-constrictor')) {
    return 'from-indigo-950/86 via-slate-950/68 to-indigo-900/22';
  }

  return 'from-slate-950/82 via-slate-950/64 to-slate-900/20';
}

function categoryTag(project: (typeof projects)[number]): string {
  return inferProjectCategory(project);
}

function ProjectCover({
  title,
  image,
  accent,
  mode = 'default',
}: {
  title: string;
  image: string;
  accent: string;
  mode?: 'hero' | 'teaser' | 'default';
}) {
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  if (image) {
    return (
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover object-top transition-transform duration-700 ${
          mode === 'hero' ? 'group-hover:scale-[1.06]' : 'group-hover:scale-[1.04]'
        }`}
      />
    );
  }

  return (
    <div className="w-full h-full bg-surface-2" aria-hidden="true">
      <div className={`relative w-full h-full bg-gradient-to-br ${accent}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_38%)]" />
        <div className="absolute inset-y-0 right-[-4%] w-[48%] rotate-6 border-l border-white/10 bg-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className={`absolute right-[7%] top-[10%] font-semibold leading-none text-white/[0.08] ${
            mode === 'hero' ? 'text-[8rem] md:text-[10rem]' : 'text-[5rem] md:text-[6rem]'
          }`}
        >
          {initials}
        </span>
        <span className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.34em] text-white/55">case study</span>
        <span className="absolute left-6 bottom-6 max-w-[14rem] text-xs uppercase tracking-[0.18em] text-white/62">
          produto, sistema e interface
        </span>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  if (!status) {
    return null;
  }

  const tone =
    status === 'Em Evolução'
      ? 'bg-accent-primary/15 text-accent-primary border-accent-primary/40'
      : status === 'MVP Operacional' || status === 'Em Produção'
        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
        : status === 'Open-Source'
          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40'
          : 'bg-surface-3 text-text-secondary border-border-default';

  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium ${tone}`}>{status}</span>;
}

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState<PageCategory>('Todos');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') {
      return projects;
    }

    if (activeCategory === 'Destaques') {
      return projects.filter((project) => STRATEGIC_FEATURE_IDS.includes(project.id));
    }

    return projects.filter((project) => inferProjectCategory(project) === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((project) => STRATEGIC_FEATURE_IDS.includes(project.id)),
    [filteredProjects]
  );

  const remainingProjects = filteredProjects.filter((project) => !STRATEGIC_FEATURE_IDS.includes(project.id));
  const relevantProjects = useMemo(
    () => remainingProjects.filter((project) => !COMPLEMENTARY_IDS.has(project.id)),
    [remainingProjects]
  );
  const complementaryProjects = useMemo(
    () => remainingProjects.filter((project) => COMPLEMENTARY_IDS.has(project.id)),
    [remainingProjects]
  );

  const heroStats = [
    {
      label: 'Destaques estratégicos',
      value: '3',
    },
    {
      label: 'Projetos publicados',
      value: '12',
    },
    {
      label: 'Categorias principais',
      value: '6',
    },
  ];

  const mainFeatured = featuredProjects[0];
  const secondaryFeatured = featuredProjects.slice(1, 3);

  return (
    <div className="relative min-h-screen bg-surface-1 text-main">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-35 mix-blend-luminosity" />
      <div className="pointer-events-none absolute inset-x-0 top-[-220px] mx-auto h-[520px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,189,255,0.14)_0%,rgba(120,189,255,0)_70%)] blur-3xl" />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1180px] mx-auto">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="mb-14 md:mb-16 space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-text-faint">Portfólio Curado</p>
              <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold leading-[0.98] tracking-tight">
                Projetos
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed">
                Produtos, plataformas e sistemas que desenvolvi com foco em experiência, arquitetura e maturidade de entrega.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border-default bg-surface-2/60 px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-text-faint mb-2">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-semibold text-main">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          <ScrollReveal>
            <section className="mb-12">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.22em] text-text-faint">Navegação de curadoria</p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2">Destaques e contexto</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {pageCategories.map((category) => {
                  const count = categoryLabelCount(category, projects);
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`group relative inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all duration-200 ${
                        activeCategory === category
                          ? 'border-text-main text-main bg-text-main/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]'
                          : 'border-border-default text-text-secondary hover:text-main hover:border-border-strong'
                      }`}
                    >
                      {category}
                      <span
                        className={`text-[11px] font-medium ${
                          activeCategory === category ? 'text-main/80' : 'text-text-faint'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.section
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-14"
            >
              <section className="space-y-5">
                <div className="flex items-end justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-faint">Destaques</p>
                  <p className="text-sm text-text-secondary">Capacidades e decisões mais estratégicas</p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                  {mainFeatured ? (
                    <Link href={`/projeto/${mainFeatured.id}`} className="group">
                      <article className="relative isolate overflow-hidden rounded-2xl border border-border-default bg-surface-2 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-2xl hover:shadow-accent-primary/15 min-h-[360px] lg:min-h-[450px]">
                        <div className="absolute inset-0">
                          <ProjectCover title={mainFeatured.title} image={mainFeatured.image} accent={heroTone(mainFeatured.id)} mode="hero" />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${accentPanel(mainFeatured.id)}`}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <StatusPill status={mainFeatured.status} />
                            <span className="inline-flex items-center gap-1 text-xs text-text-faint">
                              {mainFeatured.privateProject && <FaLock className="h-3 w-3" />}
                              {mainFeatured.privateProject ? 'Portfólio restrito' : 'Abordagem pública'}
                            </span>
                          </div>

                          <div className="mt-auto max-w-[42rem] rounded-2xl border border-white/12 bg-black/56 p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[6px]">
                            <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/62">
                              <span>{categoryTag(mainFeatured)}</span>
                              <span className="h-1 w-1 rounded-full bg-white/30" />
                              <span>{mainFeatured.tags.slice(0, 2).join(' · ')}</span>
                            </div>
                            <h3 className="text-3xl md:text-[2.5rem] font-semibold tracking-tight text-white">
                              {mainFeatured.title}
                            </h3>
                            <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-white/76">
                              {mainFeatured.description}
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent-primary transition-colors">
                                Ver case completo
                                <HiArrowRight className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ) : null}

                  {secondaryFeatured.length > 0 ? (
                    <div className="grid gap-4">
                      {secondaryFeatured.map((project) => (
                        <Link href={`/projeto/${project.id}`} key={project.id} className="group">
                          <article className="relative isolate h-full overflow-hidden rounded-2xl border border-border-default bg-surface-2 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-accent-primary/12">
                            <div className="relative h-full min-h-[205px]">
                              <div className="absolute inset-0">
                                <ProjectCover title={project.title} image={project.image} accent={heroTone(project.id)} mode="teaser" />
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${accentPanel(project.id)}`}
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <StatusPill status={project.status} />
                                  <span className="text-xs text-text-faint uppercase tracking-[0.16em]">
                                    {categoryTag(project)}
                                  </span>
                                </div>
                                <h3 className="text-xl md:text-[1.7rem] font-semibold leading-tight text-white mb-2">{project.title}</h3>
                                <p className="max-w-[22rem] text-sm text-white/72 line-clamp-1">{project.description}</p>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>

              {activeCategory === 'Destaques' ? null : (
                <>
                  <section className="space-y-5">
                    <div className="flex items-end justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-text-faint">Selecionados</p>
                      <p className="text-sm text-text-secondary">Produtos e plataformas com alta representatividade</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {relevantProjects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 0.06}>
                          <Link href={`/projeto/${project.id}`} className="group block">
                            <article className="rounded-2xl border border-border-default bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-accent-primary/10 overflow-hidden">
                              <div className="grid md:grid-cols-[1.1fr_1fr]">
                                <div className="relative h-56 md:h-auto min-h-52">
                                  <ProjectCover
                                    title={project.title}
                                    image={project.image}
                                    accent={heroTone(project.id)}
                                  />
                                  <div
                                    className={`absolute inset-0 bg-gradient-to-br ${accentPanel(project.id)}`}
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="p-5 flex flex-col gap-3">
                                  <div className="flex items-center justify-between gap-2">
                                    <StatusPill status={project.status} />
                                    {project.privateProject ? <FaLock className="h-3.5 w-3.5 text-text-faint" /> : null}
                                  </div>
                                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                                  <p className="text-sm text-text-secondary line-clamp-2">{project.description}</p>
                                  <p className="text-xs text-text-faint uppercase tracking-[0.14em]">
                                    {categoryTag(project)} • {project.detailed.overview.role.split(',')[0]}
                                  </p>
                                  <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                                    <div className="flex flex-wrap gap-1.5">
                                      {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                          key={tag}
                                          className="rounded-full border border-border-default/90 px-2 py-1 text-[11px] text-text-tertiary"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <HiArrowRight className="h-5 w-5 text-text-faint" />
                                  </div>
                                </div>
                              </div>
                            </article>
                          </Link>
                        </ScrollReveal>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-5">
                    <div className="flex items-end justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-text-faint">Arquivo curado</p>
                      <p className="text-sm text-text-secondary">Entregas complementares para completar a visão de repertório</p>
                    </div>

                    <div className="rounded-2xl border border-border-default bg-surface-2/70 divide-y divide-border-default">
                      {complementaryProjects.length > 0 ? (
                        complementaryProjects.map((project) => (
                          <Link
                            href={`/projeto/${project.id}`}
                            key={project.id}
                            className="group flex flex-col sm:flex-row gap-4 sm:items-center px-5 py-4 sm:py-3.5 transition-colors hover:bg-surface-2"
                          >
                            <div className="w-full sm:w-16 h-16 rounded-lg border border-border-default overflow-hidden relative flex-none">
                                <ProjectCover
                                  title={project.title}
                                  image={project.image}
                                  accent={heroTone(project.id)}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-main group-hover:text-accent-primary transition-colors">{project.title}</p>
                              <p className="text-xs text-text-faint uppercase tracking-[0.14em] mt-1">
                                {categoryTag(project)} • {project.status}
                              </p>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm text-text-secondary group-hover:text-main">
                              <span>Abrir</span>
                              <HiArrowRight className="h-4 w-4" />
                            </div>
                          </Link>
                        ))
                      ) : (
                        <p className="px-5 py-4 text-sm text-text-faint">Arquivo vazio para esta seleção. Ajuste a navegação para ampliar o escopo.</p>
                      )}
                    </div>
                  </section>
                </>
              )}

              <section className="pt-8">
                <div className="rounded-2xl border border-dashed border-border-default bg-surface-2/60 p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-text-faint">Continuidade</p>
                      <p className="text-xl md:text-2xl font-semibold mt-2">Explore mais trabalhos e experimentos</p>
                    </div>
                    <a
                      href="https://github.com/IcaroAguiar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-default text-sm rounded-lg text-main hover:text-accent-primary hover:border-border-strong transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub completo
                    </a>
                  </div>
                </div>
              </section>
            </motion.section>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
