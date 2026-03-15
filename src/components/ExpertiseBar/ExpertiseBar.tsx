'use client';

const EXPERTISE = [
  'NestJS',
  'Next.js',
  'React 19',
  'PostgreSQL',
  'Docker',
  'CI/CD',
  'TypeScript',
  'Node.js',
  'Prisma',
  'Integrações',
  'DDD',
  'REST APIs',
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
        {EXPERTISE_LOOP.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-0 px-0">
            <span className="text-text-secondary font-display text-base md:text-lg tracking-tight hover:text-main transition-colors duration-300 cursor-default whitespace-nowrap px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent-primary/40 flex-shrink-0" />
          </div>
        ))}
      </div>

      {/* Linha de separação inferior */}
      <div className="divider-gradient mt-8 opacity-30" />
    </div>
  );
}
