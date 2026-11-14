import type { Localized } from '@/utils/copy';

export interface Experience {
  role: string;
  roleEn: string;
  company: string;
  period: string;
  periodEn: string;
  years: string;
  yearsEn: string;
  current?: boolean;
  summary: string;
  summaryEn: string;
  tasks: Localized[];
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor full stack',
    roleEn: 'Full-stack developer',
    company: 'Tetra Educação',
    period: 'jan/2026 – atual',
    periodEn: 'Jan 2026 – present',
    years: '2026 — hoje',
    yearsEn: '2026 — present',
    current: true,
    summary:
      'Identidade, matrículas e notificações, contratos digitais de ponta a ponta, suporte com agente de IA (MCP) e infraestrutura AWS em Terraform.',
    summaryEn:
      'Identity, enrollments and notifications, end-to-end digital contracts, AI-agent support (MCP) and AWS infrastructure in Terraform.',
    tasks: [
      { pt: 'Maior autor dos serviços NestJS de identidade (IAM), matrículas, produtos e notificações e dos dois front-ends React (admin e área do aluno) de uma plataforma educacional multi-tenant no Brasil e na América Latina.', en: 'Main author of the NestJS services for identity (IAM), enrollments, products and notifications, and of the two React front ends (admin and student area) of a multi-tenant education platform in Brazil and Latin America.' },
      { pt: 'Contratos digitais de ponta a ponta: modelos versionados, emissão automática após compra aprovada, PDF privado, assinatura com evidências e bloqueio de conteúdo até a assinatura.', en: 'End-to-end digital contracts: versioned templates, automatic issuing after an approved purchase, private PDF, signing with evidence and content locked until signed.' },
      { pt: 'Central de suporte com agente de IA (servidor MCP) que atende o primeiro nível: verifica identidade, envia link de acesso e consulta contratos e certificados.', en: 'Support center with an AI agent (MCP server) that handles first-level requests: verifies identity, sends an access link and looks up contracts and certificates.' },
      { pt: 'Infraestrutura AWS em Terraform (ECS Fargate, RDS, WAF, S3, SQS/SES).', en: 'AWS infrastructure in Terraform (ECS Fargate, RDS, WAF, S3, SQS/SES).' },
    ],
  },
  {
    role: 'Desenvolvedor autônomo',
    roleEn: 'Freelance developer',
    company: 'Star Agency',
    period: 'set/2025 – atual',
    periodEn: 'Sep 2025 – present',
    years: '2025 — hoje',
    yearsEn: '2025 — present',
    current: true,
    summary:
      'Sites e landing pages a partir de um template próprio, um CRM com agenda sincronizada ao Google e uma plataforma de agentes de IA com WhatsApp.',
    summaryEn:
      'Websites and landing pages from an in-house template, a CRM with Google-synced scheduling and an AI agent platform with WhatsApp.',
    tasks: [
      { pt: 'Cerca de 17 sites e landing pages em Astro, Next.js e React a partir de um template próprio.', en: 'About 17 websites and landing pages in Astro, Next.js and React from an in-house template.' },
      { pt: 'Fixx CRM: funis, agenda com sincronização bidirecional com o Google Agenda, Google SSO e auditoria.', en: 'Fixx CRM: funnels, scheduling with two-way sync with Google Calendar, Google SSO and auditing.' },
      { pt: 'Agents Platform: plataforma multiempresa de agentes de IA com WhatsApp, PostgreSQL/pgvector, BullMQ e controle de custo por agente.', en: 'Agents Platform: multi-tenant AI agent platform with WhatsApp, PostgreSQL/pgvector, BullMQ and per-agent cost control.' },
    ],
  },
  {
    role: 'Desenvolvedor',
    roleEn: 'Developer',
    company: 'ATSD IT Solutions',
    period: 'jun/2025 – jan/2026',
    periodEn: 'Jun 2025 – Jan 2026',
    years: '2025 — 2026',
    yearsEn: '2025 — 2026',
    summary:
      'Modernização de sistemas legados contábil e de logística, com APIs C#/.NET e pipelines no Azure DevOps.',
    summaryEn:
      'Modernization of legacy accounting and logistics systems, with C#/.NET APIs and Azure DevOps pipelines.',
    tasks: [
      { pt: 'Um dos principais responsáveis pela modernização de sistemas legados das áreas contábil e de logística.', en: 'One of the main people responsible for modernizing legacy accounting and logistics systems.' },
      { pt: 'APIs em C#/.NET para integração entre sistemas, com SQL Server e Oracle, e pipelines de CI/CD no Azure DevOps.', en: 'C#/.NET APIs for integration between systems, with SQL Server and Oracle, and CI/CD pipelines in Azure DevOps.' },
      { pt: 'Participação nas reuniões técnicas e de produto que definiram os sistemas novos.', en: 'Took part in the technical and product meetings that defined the new systems.' },
    ],
  },
  {
    role: 'Estagiário e aprendiz',
    roleEn: 'Intern and apprentice',
    company: 'Oi S.A.',
    period: 'abr/2022 – abr/2025',
    periodEn: 'Apr 2022 – Apr 2025',
    years: '2022 — 2025',
    yearsEn: '2022 — 2025',
    summary:
      'Sistemas internos com React e Node.js, APIs REST e ambientes SOA. Antes, Angular, Python e automação em Linux.',
    summaryEn:
      'Internal systems with React and Node.js, REST APIs and SOA environments. Before that, Angular, Python and Linux automation.',
    tasks: [
      { pt: 'Estágio de desenvolvimento (abr/2023 – abr/2025): sistemas internos com React e Node.js, manutenção e otimização de APIs REST, ambientes SOA e suporte avançado à operação de TI.', en: 'Development internship (Apr 2023 – Apr 2025): internal systems with React and Node.js, maintenance and optimization of REST APIs, SOA environments and advanced IT operations support.' },
      { pt: 'Aprendiz técnico de programação (abr/2022 – fev/2023): sistemas internos com Angular e Python, automação em Linux e ambientes SOA.', en: 'Technical programming apprentice (Apr 2022 – Feb 2023): internal systems with Angular and Python, Linux automation and SOA environments.' },
    ],
  },
];
