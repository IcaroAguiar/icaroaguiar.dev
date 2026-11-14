import type { Localized } from '@/utils/copy';

export interface SkillGroup {
  category: Localized;
  items: Localized[];
}

/** Nomes de tecnologia valem nos dois idiomas. */
const names = (items: string[]): Localized[] => items.map((item) => ({ pt: item, en: item }));

export const skills: SkillGroup[] = [
  {
    category: { pt: 'Front-end', en: 'Front end' },
    items: [...names(['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'SPA', 'SSR', 'PWA']), { pt: 'Design systems', en: 'Design systems' }],
  },
  {
    category: { pt: 'Back-end e APIs', en: 'Back end and APIs' },
    items: names(['Node.js', 'NestJS', 'Go', 'C# / .NET', 'REST', 'OpenAPI', 'Zod', 'Webhooks', 'Workers']),
  },
  {
    category: { pt: 'Dados', en: 'Data' },
    items: names(['PostgreSQL', 'Prisma', 'SQL', 'SQL Server', 'Oracle', 'Migrations']),
  },
  {
    category: { pt: 'Qualidade e entrega', en: 'Quality and delivery' },
    items: [
      ...names(['Vitest', 'Jest', 'Playwright']),
      { pt: 'Testes E2E', en: 'E2E testing' },
      ...names(['Code review', 'GitHub Actions', 'Azure DevOps']),
    ],
  },
  {
    category: { pt: 'Infraestrutura', en: 'Infrastructure' },
    items: [
      ...names(['Docker', 'Docker Compose', 'Linux', 'Caddy', 'VPS']),
      { pt: 'Observabilidade', en: 'Observability' },
      { pt: 'Backups', en: 'Backups' },
    ],
  },
  {
    category: { pt: 'Arquitetura', en: 'Architecture' },
    items: [
      { pt: 'Monorepo', en: 'Monorepo' },
      { pt: 'Arquitetura modular', en: 'Modular architecture' },
      { pt: 'Contratos compartilhados', en: 'Shared contracts' },
      { pt: 'Permissões contextuais', en: 'Contextual permissions' },
      { pt: 'Auditoria', en: 'Auditing' },
    ],
  },
];
