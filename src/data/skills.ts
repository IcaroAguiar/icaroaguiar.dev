export interface SkillCategory {
  [category: string]: string[];
}

export const skills: SkillCategory = {
  'Front-end': ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'SPA', 'SSR', 'PWA', 'Design systems'],
  'Back-end e APIs': ['Node.js', 'NestJS', 'Go', 'C# / .NET', 'REST', 'OpenAPI', 'Zod', 'Webhooks', 'Workers'],
  'Dados': ['PostgreSQL', 'Prisma', 'SQL', 'SQL Server', 'Oracle', 'Migrations'],
  'Qualidade e entrega': ['Vitest', 'Jest', 'Playwright', 'Testes E2E', 'Code review', 'GitHub Actions', 'Azure DevOps'],
  'Infraestrutura': ['Docker', 'Docker Compose', 'Linux', 'Caddy', 'VPS', 'Observabilidade', 'Backups'],
  'Arquitetura': ['Monorepo', 'Arquitetura modular', 'Contratos compartilhados', 'Permissões contextuais', 'Auditoria'],
};
