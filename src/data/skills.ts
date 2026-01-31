export interface SkillCategory {
  [category: string]: string[];
}

export const skills: SkillCategory = {
  Linguagens: ['C#', 'JavaScript/TypeScript', 'Python'],
  'Front-end': ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'HTML5/CSS3', 'WordPress'],
  'Back-end': ['.NET', 'Node.js', 'APIs REST'],
  Mobile: ['React Native', 'Expo'],
  'Bancos de Dados': ['SQL Server', 'Oracle', 'PostgreSQL'],
  'DevOps & Cloud': ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'Linux', 'Docker'],
  Metodologias: ['Scrum', 'Desenvolvimento Ágil'],
};
