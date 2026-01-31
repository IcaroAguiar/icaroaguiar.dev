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

  return (
    <section className="py-16">
      <div className="max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navegação de volta */}
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-medium transition"
        >
          <FaArrowLeft size={14} />
          Voltar aos Projetos
        </Link>

        {/* Hero do Projeto */}
        <div className="rounded-2xl border border-black/5 bg-white/60 shadow-xs overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Conteúdo */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  {project.status}
                </span>
                {project.privateProject && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 border border-slate-200 inline-flex items-center gap-1">
                    <FaLock size={10} />
                    Repositório Privado
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {project.title}
              </h1>

              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Imagem */}
            <div className="relative aspect-video md:aspect-square bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl overflow-hidden">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                />
              )}
            </div>
          </div>
        </div>

        {/* Visão Geral */}
        <div className="rounded-2xl border border-black/5 bg-white/60 shadow-xs p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Visão Geral do Projeto
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-emerald-600 mb-2">O Problema</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {detailed.overview.problem}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-600 mb-2">A Solução</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {detailed.overview.solution}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-600 mb-2">Minha Função</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {detailed.overview.role}
              </p>
            </div>
          </div>
        </div>

        {/* Arquitetura e Soluções */}
        <div className="rounded-2xl border border-black/5 bg-white/60 shadow-xs p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Arquitetura e Soluções
          </h2>
          <p className="text-slate-600 mb-6">
            Tecnologias aplicadas para resolver desafios específicos do projeto
          </p>

          <div className="space-y-8">
            {detailed.architecture.map((category, index) => (
              <div key={index}>
                <h3 className="font-semibold text-slate-900 mb-4">
                  {category.category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500"
                    >
                      <h4 className="font-medium text-emerald-600 mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funcionalidades Principais */}
        <div className="rounded-2xl border border-black/5 bg-white/60 shadow-xs p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Funcionalidades Principais
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {detailed.features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-50 text-center"
              >
                <h3 className="font-semibold text-emerald-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desafios Técnicos */}
        <div className="rounded-2xl border border-black/5 bg-white/60 shadow-xs p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Desafios Técnicos
          </h2>
          <div className="space-y-6">
            {detailed.challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-amber-50 border-l-4 border-amber-400"
              >
                <h3 className="font-semibold text-amber-700 mb-4">
                  {challenge.title}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-2">
                      Desafio:
                    </h4>
                    <p className="text-sm text-slate-600">
                      {challenge.problem}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-2">
                      Solução:
                    </h4>
                    <p className="text-sm text-slate-600">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Explore o Projeto</h2>
          <p className="text-emerald-100 mb-6">
            Veja o {project.title} em ação e explore o código fonte
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-white text-emerald-700 font-medium hover:bg-emerald-50 transition"
              >
                <FaExternalLinkAlt size={14} />
                Ver Demo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-white text-emerald-700 font-medium hover:bg-emerald-50 transition"
              >
                <FaExternalLinkAlt size={14} />
                Ver Site
              </a>
            )}
            {project.githubUrl && !project.privateProject && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
              >
                <FaGithub size={14} />
                Frontend
              </a>
            )}
            {project.backendUrl && !project.privateProject && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
              >
                <FaGithub size={14} />
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
