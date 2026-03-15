export interface SkillCategory {
  [category: string]: string[];
}

export const skills: SkillCategory = {
  'Back-end': ['Node.js', 'NestJS', 'Prisma', 'APIs REST', '.NET / C#', 'Python'],
  'Front-end': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
  Mobile: ['Flutter', 'React Native', 'Expo'],
  'Banco de Dados': ['PostgreSQL', 'SQL Server', 'Oracle'],
  'DevOps & Infra': ['Docker', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Linux'],
  Arquitetura: ['DDD', 'Multi-tenant', 'Microserviços', 'Autenticação', 'Modelagem de dados'],
};
