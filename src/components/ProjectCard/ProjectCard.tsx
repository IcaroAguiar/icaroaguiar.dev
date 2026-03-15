import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  contextMessage?: string;
  solutionMessage?: string;
}

export function ProjectCard({ project, contextMessage, solutionMessage }: ProjectCardProps) {
  // Fallbacks if not provided explicitly in page.tsx mapping
  const context = contextMessage || project.detailed.overview.problem;
  const solution = solutionMessage || project.detailed.overview.solution;

  return (
    <div className="group relative bg-surface-1 border border-border-default hover:border-border-strong hover:shadow-xl hover:shadow-accent-primary/5 hover:-translate-y-1 rounded-2xl overflow-hidden transition-all duration-500">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-4 items-stretch h-full">
        {/* Imagem / Visual */}
        <div className="lg:col-span-6 h-[250px] lg:h-auto min-h-[350px] w-full overflow-hidden bg-surface-2 border-r border-border-default/50 relative flex items-center justify-center">
          {/* Subtle pattern em caso de imagens com áreas vazias */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] relative z-10"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/20 to-transparent lg:bg-gradient-to-r z-20" />
        </div>

        {/* Conteúdo (Case Teaser) */}
        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center h-full z-30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary">
              {project.tags[0]} {/* Usando a primeira tag como categoria principal */}
            </span>
            {project.status === 'Em Produção' && (
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-status-success bg-status-success/10 px-2 py-0.5 rounded border border-status-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                Live
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-main mb-6 group-hover:text-accent-secondary transition-colors">
            {project.title}
          </h3>

          <div className="space-y-4 mb-8">
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              <span className="text-text-muted block text-xs uppercase mb-1 font-mono tracking-wider">Desafio</span>
              {context}
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              <span className="text-text-muted block text-xs uppercase mb-1 font-mono tracking-wider">Solução</span>
              {solution}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
            {/* Stack curta */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-surface-3 text-text-tertiary border border-border-default rounded-md"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs px-2.5 py-1 text-text-faint">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            <Link
              href={`/projeto/${project.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-main group-hover:text-accent-primary transition-colors"
            >
              Ver case completo
              <HiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
