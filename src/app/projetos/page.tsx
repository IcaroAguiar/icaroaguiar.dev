'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaLock } from 'react-icons/fa';
import { projects } from '@/data';
import { AnimatedSection, Card, Badge, TechChip } from '@/components/ui';

export default function ProjetosPage() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-16">
      <div className="max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <AnimatedSection>
          <h1 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-[-0.015em] leading-tight text-slate-900">
            Projetos
          </h1>
          <p className="mt-3 text-[15.5px] sm:text-[16px] text-slate-600 max-w-prose">
            Case studies de projetos desenvolvidos: apps mobile, APIs de reconhecimento facial e
            landing pages de conversão.
          </p>
        </AnimatedSection>

        {/* Featured Project */}
        {featuredProject && (
          <AnimatedSection delay={0.1}>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Thumbnail */}
                <div className="relative aspect-video md:aspect-square bg-linear-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="text-emerald-400 text-6xl">
                      <FaInfoCircle />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">{featuredProject.status}</Badge>
                    <Badge variant="warning">Featured</Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                    {featuredProject.description}
                  </p>

                  {/* Stack - Chips */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProject.tags.slice(0, 6).map((tag) => (
                        <TechChip key={tag} label={tag} variant="outlined" />
                      ))}
                      {featuredProject.tags.length > 6 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                          +{featuredProject.tags.length - 6}
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/projeto/${featuredProject.id}`}
                        className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
                      >
                        <FaInfoCircle size={14} />
                        Case Study
                      </Link>
                      {featuredProject.githubUrl && !featuredProject.privateProject && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                        >
                          <FaGithub size={14} />
                          Código
                        </a>
                      )}
                      {(featuredProject.demoUrl || featuredProject.liveUrl) && (
                        <a
                          href={featuredProject.demoUrl || featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                        >
                          <FaExternalLinkAlt size={14} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        )}

        {/* Other Projects (Grid 2 cols) */}
        {otherProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
                <Card className="overflow-hidden h-full">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-slate-300 text-5xl">
                        <FaInfoCircle />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      {project.status === 'Em Produção' && (
                        <Badge variant="info">{project.status}</Badge>
                      )}
                      {project.status === 'Open-Source' && (
                        <Badge variant="success">{project.status}</Badge>
                      )}
                      {project.privateProject && (
                        <Badge variant="default">
                          <span className="inline-flex items-center gap-1">
                            <FaLock size={10} />
                            Privado
                          </span>
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stack - Chips (primeiros 4) */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <TechChip key={tag} label={tag} variant="outlined" />
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-slate-200 bg-slate-50 text-slate-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <Link
                        href={`/projeto/${project.id}`}
                        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
                      >
                        <FaInfoCircle size={12} />
                        Case
                      </Link>
                      {project.githubUrl && !project.privateProject && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                        >
                          <FaGithub size={12} />
                          Código
                        </a>
                      )}
                      {(project.demoUrl || project.liveUrl) && (
                        <a
                          href={project.demoUrl || project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                        >
                          <FaExternalLinkAlt size={12} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
