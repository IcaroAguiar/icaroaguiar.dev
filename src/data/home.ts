import {
  siAmazonwebservices, siAstro, siDocker, siFastify, siGithubactions, siGo, siNestjs, siNextdotjs, siNodedotjs,
  siPostgresql, siPrisma, siReact, siReactquery, siTailwindcss, siTerraform, siTypescript, siVite, siVitest, siZod,
} from 'simple-icons';
import type { Localized } from '@/utils/copy';

export const hero = {
  titleStart: { pt: 'Sou Ícaro, um desenvolvedor full stack construindo ', en: 'I’m Ícaro, a full-stack developer building ' },
  titleHighlight: { pt: 'sistemas completos', en: 'complete systems' },
  titleEnd: { pt: ', do banco de dados à interface.', en: ', from the database to the interface.' },
  where: { pt: 'Cruz das Almas, BA • remoto • CLT ou PJ', en: 'Cruz das Almas, Brazil • remote • employee or contractor' },
  contact: { pt: 'Falar comigo', en: 'Get in touch' },
  resume: { pt: 'Baixar currículo', en: 'Download résumé' },
};

export interface DiagramColumn {
  heading: Localized;
  items: { label: Localized; hot?: boolean; wire?: 'a' | 'b' | 'c' | 'd' }[];
}

export interface FeaturedProject {
  href: string;
  kicker: Localized;
  title: string;
  description: Localized;
  numbers: { value: Localized; label: Localized }[];
  diagram: DiagramColumn[];
}

const same = (text: string): Localized => ({ pt: text, en: text });

export const featuredProject: FeaturedProject = {
  href: '/projeto/neo-constrictor',
  kicker: { pt: 'Projeto pessoal · em produção', en: 'Personal project · in production' },
  title: 'Neo Constrictor',
  description: {
    pt: 'Plataforma de gestão de pesquisa institucional: tramitação documental, editais, laboratórios e auditoria. Sou o único desenvolvedor e arquiteto.',
    en: 'Institutional research management platform: document workflows, grants, laboratories and auditing. I am the sole developer and architect.',
  },
  numbers: [
    { value: same('21'), label: { pt: 'módulos NestJS', en: 'NestJS modules' } },
    { value: same('141'), label: { pt: 'modelos Prisma', en: 'Prisma models' } },
    { value: { pt: '1.092', en: '1,092' }, label: { pt: 'commits em 8 meses', en: 'commits in 8 months' } },
  ],
  diagram: [
    {
      heading: { pt: 'Interfaces', en: 'Interfaces' },
      items: [
        { label: { pt: 'Pesquisador', en: 'Researcher' }, wire: 'a' },
        { label: same('Admin') },
        { label: { pt: 'Laboratórios', en: 'Laboratories' } },
      ],
    },
    {
      heading: { pt: 'Acesso', en: 'Access' },
      items: [
        { label: same('gov.br') },
        { label: same('ORCID') },
        { label: { pt: 'RBAC por instituição', en: 'RBAC per institution' }, hot: true, wire: 'b' },
      ],
    },
    {
      heading: { pt: 'Domínio', en: 'Domain' },
      items: [
        { label: { pt: 'Tramitação', en: 'Workflows' }, wire: 'c' },
        { label: { pt: 'Editais', en: 'Grants' } },
        { label: { pt: 'Auditoria', en: 'Auditing' } },
        { label: { pt: '+18 módulos', en: '+18 modules' } },
      ],
    },
    {
      heading: { pt: 'Dados', en: 'Data' },
      items: [
        { label: same('PostgreSQL'), wire: 'd' },
        { label: { pt: 'Deploy por commit', en: 'Deploy per commit' } },
      ],
    },
  ],
};

export const productCard = {
  href: '/projeto/qualityflow',
  kicker: { pt: 'SaaS multiempresa · em evolução', en: 'Multi-tenant SaaS · evolving' },
  title: 'QualityFlow',
  image: '/case-screenshots/qualityflow/cover-2026-11.webp',
  imageAlt: { pt: 'Painel do QualityFlow', en: 'QualityFlow dashboard' },
  description: {
    pt: 'Gestão da qualidade com auditorias, planos de ação, indicadores e documentos. Isolamento por tenant e cliente tipado gerado do contrato OpenAPI.',
    en: 'Quality management with audits, action plans, indicators and documents. Tenant isolation and a typed client generated from the OpenAPI contract.',
  },
};

export interface CompactProject {
  code: string;
  title: string;
  description: Localized;
  /** Complemento destacado ao fim da descrição. */
  status?: Localized;
  href?: string;
}

export const compactProjects: CompactProject[] = [
  {
    code: 'MC',
    title: 'Maria Comprou',
    description: {
      pt: 'Automação de e-commerce com filas, Telegram, servidor MCP e agente de IA.',
      en: 'E-commerce automation with queues, Telegram, an MCP server and an AI agent.',
    },
    href: '/projeto/maria-comprou',
  },
  {
    code: 'AG',
    title: 'Agents Platform',
    description: {
      pt: 'Agentes de IA para atendimento no WhatsApp, com versões e revisão antes de ativar.',
      en: 'AI agents for WhatsApp support, with versions and review before activation.',
    },
    href: '/projeto/agents-platform',
  },
  {
    code: 'P26',
    title: 'Palpitaê 26',
    description: {
      pt: 'PWA de palpites com API em Go e 211 testes.',
      en: 'Predictions PWA with a Go API and 211 tests.',
    },
    status: { pt: 'Fora do ar.', en: 'Offline.' },
    href: '/projeto/palpitae',
  },
  {
    code: 'AS',
    title: 'ASCEND',
    description: {
      pt: 'Gestão financeira com cobrança, operação fiscal e app mobile, com 346 arquivos de teste.',
      en: 'Financial management with billing, tax operations and a mobile app, with 346 test files.',
    },
    href: '/projeto/ascend',
  },
];

export const titles = {
  projects: { pt: 'Projetos selecionados', en: 'Selected projects' },
  allProjects: { pt: 'Ver todos os projetos', en: 'See all projects' },
  sites: { pt: 'Sites de clientes', en: 'Client websites' },
  experience: { pt: 'Experiência', en: 'Experience' },
  about: { pt: 'Sobre mim', en: 'About me' },
};

export const sitesSubtitle = (count: number): Localized => ({
  pt: `${count} sites e landing pages no ar, no Brasil e na Europa.`,
  en: `${count} websites and landing pages live, in Brazil and Europe.`,
});

export const featuredSiteIds = ['kosmedico-lp', 'talyem-londres', 'niedh'] as const;

export const about = {
  location: { pt: 'Cruz das Almas, BA', en: 'Cruz das Almas, Brazil' },
  /** Coordenadas de Cruz das Almas, BA, para o globo. */
  coordinates: [-12.67, -39.1] as [number, number],
  connect: {
    pt: 'Programo desde abril de 2022. Gosto de cuidar do sistema inteiro, do contrato da API ao deploy, e trabalho com agentes de IA dentro de uma esteira de checks e revisão.',
    en: 'I’ve been programming since April 2022. I like looking after the whole system, from the API contract to the deploy, and I work with AI agents inside a pipeline of checks and review.',
  },
  years: { value: '4+', unitPt: 'anos', unitEn: 'years', since: { pt: 'desde abril de 2022', en: 'since April 2022' } },
  now: {
    company: 'Tetra Educação',
    description: {
      pt: 'Plataforma educacional multi-tenant no Brasil e na América Latina.',
      en: 'Multi-tenant education platform in Brazil and Latin America.',
    },
  },
};

export const contact = {
  title: { pt: 'Tem uma vaga ou um projeto?', en: 'Got a job or a project?' },
  text: { pt: 'CLT ou PJ, remoto. Respondo por e-mail.', en: 'Employee or contractor, remote. I reply by email.' },
  floats: [
    { label: 'React', left: '14%', top: '18%' },
    { label: 'NestJS', left: '58%', top: '6%' },
    { label: 'Ícaro', left: '60%', top: '40%', highlight: true },
    { label: 'PostgreSQL', left: '8%', top: '66%' },
    { label: 'AWS', left: '56%', top: '76%' },
  ],
};

/** Ordem da faixa de tecnologias; os SVGs entram inline no build. */
export const techIcons = [
  siReact, siTypescript, siNestjs, siNodedotjs, siPostgresql, siPrisma, siTailwindcss, siVite, siReactquery,
  siFastify, siAmazonwebservices, siTerraform, siDocker, siGithubactions, siVitest, siZod, siAstro, siNextdotjs, siGo,
];
