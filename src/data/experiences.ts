export interface Experience {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Star Agency',
    period: 'Setembro de 2025 - Presente',
    tasks: [
      'Sites e sistemas em WordPress/Next.js com UI React + Tailwind.',
      'Desenvolvimento de aplicativos React Native (Expo).',
      'CI/CD com GitHub Actions para deploy automatizado.',
    ],
  },
  {
    role: 'Desenvolvedor de Software',
    company: 'ATSD IT Solutions',
    period: 'Junho de 2025 - Presente',
    tasks: [
      'APIs em C#/.NET para modernização de sistemas web/mobile.',
      'Suporte a bancos de dados e infraestrutura.',
      'Azure DevOps (pipelines CI/CD) e gestão de processos.',
    ],
  },
  {
    role: 'AI Programmer',
    company: 'Outlier',
    period: 'Março de 2025 - Presente',
    tasks: [
      'Programador freelancer em projetos de Inteligência Artificial.',
      'Desenvolvimento e aprimoramento de modelos de IA.',
    ],
  },
  {
    role: 'Estagiário de Desenvolvimento',
    company: 'Oi S.A.',
    period: 'Abril de 2023 - Abril de 2025',
    tasks: [
      'Full-Stack com React/Node.js e aplicações mobile React Native.',
      'Otimização de APIs REST e suporte a ambientes SOA.',
    ],
  },
  {
    role: 'Aprendiz Técnico',
    company: 'Oi S.A.',
    period: 'Abril de 2022 - Fevereiro de 2023',
    tasks: [
      'Desenvolvimento de sistemas internos com Angular/Python.',
      'Automação de tarefas em Linux e rotinas SOA.',
    ],
  },
  {
    role: 'Instrutor',
    company: 'Código Kid',
    period: 'Junho de 2021 - Abril de 2022',
    tasks: [
      'Ensino de programação e robótica para crianças e adolescentes.',
    ],
  },
];
