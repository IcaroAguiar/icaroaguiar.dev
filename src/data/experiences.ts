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
    period: 'Janeiro de 2026 - Presente',
    tasks: [
      'Produtos educacionais web e mobile para três clientes, atuando em front-end, back-end, integrações e sustentação.',
      'Interfaces React e TypeScript, funcionalidades Node.js e APIs conectadas a regras de negócio e dados.',
      'Pipelines CI/CD, testes unitários, integração e E2E, code review e documentação técnica.',
    ],
  },
  {
    role: 'Desenvolvedor Full-Stack',
    company: 'Star Agency',
    period: 'Setembro de 2025 - Presente',
    tasks: [
      'Entrega de 14 projetos verificados até julho de 2026, entre sites, páginas de evento e sistemas full-stack.',
      'Interfaces com Astro, Next.js, React, TypeScript e Tailwind CSS; APIs, workers e pacotes compartilhados.',
      'Tradução de demandas de clientes em soluções técnicas, fluxos operacionais e entregas evolutivas.',
    ],
  },
  {
    role: 'Desenvolvedor de Software',
    company: 'ATSD IT Solutions',
    period: 'Junho de 2025 - Janeiro de 2026',
    tasks: [
      'Suporte e evolução de sistemas corporativos e bancos de dados.',
      'Novas funcionalidades e correções no backend e frontend.',
      'Discussões técnicas voltadas à melhoria contínua das soluções.',
    ],
  },
  {
    role: 'Estagiário de Desenvolvimento',
    company: 'Oi S.A.',
    period: 'Abril de 2023 - Abril de 2025',
    tasks: [
      'Desenvolvimento e sustentação de sistemas internos com React, Node.js, APIs REST e integrações corporativas.',
      'Manutenção de APIs, apoio a ambientes SOA e investigação de problemas em operações de TI.',
    ],
  },
];
