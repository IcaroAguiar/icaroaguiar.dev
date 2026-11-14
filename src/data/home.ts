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

export interface ShowcaseProduct {
  href: string;
  title: string;
  kicker: Localized;
  lead: Localized;
  description: Localized;
  role: Localized;
  image: string;
  imageAlt: Localized;
}

/** Os três produtos com tela na home; a ordem alterna o lado da imagem. */
export const showcase: ShowcaseProduct[] = [
  {
    href: '/projeto/neo-constrictor',
    title: 'Neo Constrictor',
    kicker: { pt: 'Projeto pessoal · em produção', en: 'Personal project · in production' },
    lead: { pt: 'Da submissão do projeto à bancada do laboratório', en: 'From project submission to the lab bench' },
    description: {
      pt: 'Pesquisadores submetem projetos, a instituição avalia e os laboratórios recebem, agendam e executam. Cada decisão fica registrada.',
      en: 'Researchers submit projects, the institution reviews them and laboratories receive, schedule and run them. Every decision is recorded.',
    },
    role: { pt: 'Sou o único desenvolvedor e arquiteto.', en: 'I am the sole developer and architect.' },
    image: '/case-screenshots/neo-constrictor/vitrine-2026-11.webp',
    imageAlt: { pt: 'Esteira do laboratório no Neo Constrictor', en: 'Laboratory pipeline in Neo Constrictor' },
  },
  {
    href: '/projeto/qualityflow',
    title: 'QualityFlow',
    kicker: { pt: 'SaaS multiempresa · em evolução', en: 'Multi-tenant SaaS · evolving' },
    lead: { pt: 'A rotina da qualidade numa fila só', en: 'The whole quality routine in one queue' },
    description: {
      pt: 'Auditorias, não conformidades, indicadores e documentos de cada empresa no mesmo lugar, com o que está atrasado no topo do dia.',
      en: 'Audits, nonconformities, indicators and documents for each company in one place, with what is overdue at the top of the day.',
    },
    role: { pt: 'Escrevi a maior parte da API e do front.', en: 'I wrote most of the API and the front end.' },
    image: '/case-screenshots/qualityflow/vitrine-2026-11.webp',
    imageAlt: { pt: 'Fila do dia no QualityFlow', en: 'Daily queue in QualityFlow' },
  },
  {
    href: '/projeto/agents-platform',
    title: 'Agents Platform',
    kicker: { pt: 'Em desenvolvimento', en: 'In development' },
    lead: { pt: 'Agentes de IA no WhatsApp, com uma pessoa no controle', en: 'AI agents on WhatsApp, with a person in control' },
    description: {
      pt: 'Cada empresa configura seus agentes. No modo copiloto, em construção, o agente sugere a resposta e a equipe decide o que enviar.',
      en: 'Each company sets up its agents. In copilot mode, still being built, the agent suggests a reply and the team decides what to send.',
    },
    role: { pt: 'Produto, arquitetura e código.', en: 'Product, architecture and code.' },
    image: '/case-screenshots/agents-platform/vitrine-2026-11.webp',
    imageAlt: { pt: 'Conversa em modo copiloto no Agents Platform', en: 'Copilot-mode conversation in Agents Platform' },
  },
];

export const otherProjects: { href: string; title: string; description: Localized }[] = [
  {
    href: '/projeto/maria-comprou',
    title: 'Maria Comprou',
    description: {
      pt: 'Achadinhos com curadoria automatizada: coleta em fila, publicação no Telegram e um agente de IA no catálogo.',
      en: 'Curated deals on autopilot: queued collection, Telegram publishing and an AI agent running the catalogue.',
    },
  },
  {
    href: '/projeto/palpitae',
    title: 'Palpitaê 26',
    description: {
      pt: 'Palpites da Copa entre amigos, com grupos, ranking e Pix. Rodou durante a Copa e hoje é open source.',
      en: 'World Cup predictions among friends, with groups, rankings and Pix. It ran during the Cup and is now open source.',
    },
  },
  {
    href: '/projeto/ascend',
    title: 'ASCEND',
    description: {
      pt: 'Gestão financeira com cobrança, operação fiscal e app mobile.',
      en: 'Financial management with billing, tax operations and a mobile app.',
    },
  },
];

export const titles = {
  caseStudy: { pt: 'Ver estudo de caso', en: 'Read case study' },
  otherProjects: { pt: 'Outros projetos', en: 'Other projects' },
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
