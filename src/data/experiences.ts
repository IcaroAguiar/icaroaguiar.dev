export interface Experience {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Tetra Educação',
    period: 'Atual',
    tasks: [
      'Interfaces white-label e componentes reutilizáveis para produtos web e mobile.',
      'Fluxos full-stack com Node.js, NestJS e Prisma; integrações entre serviços.',
      'Pipelines CI/CD, testes automatizados e documentação de padrões de engenharia.',
    ],
  },
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Star Agency',
    period: 'Setembro de 2025 - Presente',
    tasks: [
      'Sites e sistemas com WordPress, React, Next.js e Tailwind CSS.',
      'Aplicativos mobile com React Native (Expo).',
      'Automação de build e deploy via GitHub Actions.',
    ],
  },
  {
    role: 'Desenvolvedor de Software',
    company: 'ATSD IT Solutions',
    period: 'Junho de 2025 - Presente',
    tasks: [
      'Suporte e evolução de sistemas corporativos e bancos de dados.',
      'Novas funcionalidades e correções no backend e frontend.',
      'Discussões técnicas voltadas à melhoria contínua das soluções.',
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
    role: 'Desenvolvedor Web Front-End / Analista de Sistemas',
    company: 'Oi S.A.',
    period: 'Abril de 2022 - Abril de 2025',
    tasks: [
      'Manutenção e otimização de APIs REST e sistemas internos.',
      'Full-stack com React e Node.js; gestão de ambientes SOA.',
      'Desenvolvimento de sistemas internos com Angular e Python.',
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
