'use client';

import { Blocks, Braces } from 'lucide-react';
import {
  SiDocker,
  SiFlutter,
  SiGithubactions,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

const EXPERTISE = [
  { label: 'NestJS', icon: SiNestjs },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'React 19', icon: SiReact },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Docker', icon: SiDocker },
  { label: 'CI/CD', icon: SiGithubactions },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Flutter', icon: SiFlutter },
  { label: 'Prisma', icon: SiPrisma },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'DDD', icon: Blocks },
  { label: 'REST APIs', icon: Braces },
];

// Duplica o array para criar loop contínuo sem gap
const EXPERTISE_LOOP = [...EXPERTISE, ...EXPERTISE];

export function ExpertiseBar() {
  return (
    <div className="w-full py-14 overflow-hidden relative">
      {/* Fade nas bordas */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      />

      {/* Linha de separação superior */}
      <div className="divider-gradient mb-8 opacity-30" />

      <div className="flex animate-marquee gap-0" style={{ width: 'max-content' }}>
        {EXPERTISE_LOOP.map((item, index) => {
          const Icon = item.icon;

          return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-0 px-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-2 px-4 py-2 text-sm font-semibold text-text-secondary shadow-xs transition-colors duration-300 hover:text-text-main md:text-base">
              <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {item.label}
            </span>
            <span className="mx-5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-primary/40" />
          </div>
          );
        })}
      </div>

      {/* Linha de separação inferior */}
      <div className="divider-gradient mt-8 opacity-30" />
    </div>
  );
}
