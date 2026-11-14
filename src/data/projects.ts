// src/data/projects.ts

import type { Localized } from '@/utils/copy';

export interface Technology {
  name: string;
  description: Localized;
}

export interface ArchitectureCategory {
  category: Localized;
  technologies: Technology[];
}

export interface Feature {
  title: Localized;
  description: Localized;
}

export interface Challenge {
  title: Localized;
  problem: Localized;
  solution: Localized;
}

export interface ProjectSummary {
  what: Localized;
  audience: Localized;
  value: Localized;
}

export interface ProjectContext {
  problem: Localized;
  motivation: Localized;
}

export interface ProjectStage {
  label: Localized;
  items: Localized[];
}

export interface ProjectDetailed {
  summary?: ProjectSummary;
  context?: ProjectContext;
  overview: {
    problem: Localized;
    solution: Localized;
    role: Localized;
  };
  roleAreas?: Localized[];
  valueFocus?: Localized[];
  stage?: ProjectStage;
  modules?: Feature[];
  decisions?: Feature[];
  architecture: ArchitectureCategory[];
  features: Feature[];
  challenges: Challenge[];
}

export interface Project {
  id: string;
  title: string;
  description: Localized;
  tags: string[];
  image: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  backendUrl?: string;
  featured?: boolean;
  status: Localized;
  privateProject?: boolean;
  detailed: ProjectDetailed;
}

export const projects: Project[] = [
  {
    id: 'ascend',
    title: 'ASCEND',
    description: {
      pt: 'Plataforma de gestão financeira com transações, relatórios, projeções de saldo e um centro para organizar contas e clientes.',
      en: 'Financial management platform with transactions, reports, balance projections and a hub for organizing accounts and clients.',
    },
    tags: ['Monorepo', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'Prisma', 'Turbo'],
    image: '/case-screenshots/ascend/orders-dashboard-wide-2026.png',
    liveUrl: 'https://ascend-web-psi.vercel.app',
    githubUrl: 'https://github.com/IcaroAguiar/ASCEND',
    featured: true,
    privateProject: true,
    status: { pt: 'Em Evolução', en: 'Evolving' },
    detailed: {
      summary: {
        what: {
          pt: 'Produto financeiro multi-superfície que centraliza operação de recebíveis, gestão de clientes, transações, recorrência, billing e emissão fiscal.',
          en: 'Multi-surface financial product that brings together receivables operations, client management, transactions, recurring charges, billing and tax invoicing.',
        },
        audience: {
          pt: 'Profissionais liberais, pequenas operações B2B e equipes que precisam tratar cobrança, caixa e operação em um único sistema.',
          en: 'Independent professionals, small B2B operations and teams that need to handle billing, cash and operations in a single system.',
        },
        value: {
          pt: 'Reduz fricção operacional, substitui o legado instável e cria uma base única de verdade para finanças, cobrança e expansão de módulos.',
          en: 'Cuts operational friction, replaces the unstable legacy system and creates a single source of truth for finance, billing and new modules.',
        },
      },
      context: {
        problem: {
          pt: 'O produto nasceu para substituir um sistema legado instável e fragmentado que já não sustentava cobrança, recebíveis e operação financeira com confiança.',
          en: 'The product was born to replace an unstable, fragmented legacy system that could no longer support billing, receivables and financial operations with confidence.',
        },
        motivation: {
          pt: 'A nova versão precisava suportar crescimento real de produto, web e mobile convivendo com a mesma base de domínio, além de abrir espaço para billing, fiscal e governança de workspace.',
          en: 'The new version had to support real product growth, with web and mobile sharing the same domain base, and leave room for billing, tax and workspace governance.',
        },
      },
      overview: {
        problem: {
          pt: 'Era necessário sair de um app de finanças isolado para uma plataforma mais robusta, com gestão de recebíveis, cobrança B2B, fluxo de caixa e evolução controlada do domínio.',
          en: 'The goal was to move from an isolated finance app to a more robust platform, with receivables management, B2B billing, cash flow and a controlled evolution of the domain.',
        },
        solution: {
          pt: 'Estruturei um monorepo com apps separados para web, mobile e API, contratos compartilhados e módulos de domínio que sustentam cobrança, transações, billing, fiscal e administração.',
          en: 'I set up a monorepo with separate apps for web, mobile and API, shared contracts and domain modules that support billing, transactions, tax and administration.',
        },
        role: {
          pt: 'Produto, arquitetura, backend, frontend web, mobile, design system e operação técnica.',
          en: 'Product, architecture, backend, web frontend, mobile, design system and technical operations.',
        },
      },
      roleAreas: [
        { pt: 'Product discovery e definição de escopo', en: 'Product discovery and scope definition' },
        { pt: 'Arquitetura do monorepo', en: 'Monorepo architecture' },
        { pt: 'Backend NestJS + Prisma', en: 'NestJS + Prisma backend' },
        { pt: 'Frontend web em Next.js', en: 'Web frontend in Next.js' },
        { pt: 'App mobile em Expo/React Native', en: 'Mobile app in Expo/React Native' },
        { pt: 'Billing, fiscal e observabilidade', en: 'Billing, tax and observability' },
      ],
      valueFocus: [
        { pt: 'Modernização segura do legado', en: 'Safe modernization of the legacy system' },
        {
          pt: 'Centralização de fluxos financeiros e de cobrança',
          en: 'Financial and billing flows in one place',
        },
        { pt: 'Base de produto preparada para novos módulos', en: 'Product base ready for new modules' },
        { pt: 'Redução de atrito operacional no dia a dia', en: 'Less day-to-day operational friction' },
      ],
      stage: {
        label: { pt: 'Monorepo ativo e em evolução contínua', en: 'Active monorepo, continuously evolving' },
        items: [
          {
            pt: 'apps/api com módulos financeiros, billing, fiscal e admin',
            en: 'apps/api with financial, billing, tax and admin modules',
          },
          {
            pt: 'apps/web com landing, área autenticada, workspace e painéis administrativos',
            en: 'apps/web with landing page, authenticated area, workspace and admin panels',
          },
          {
            pt: 'apps/mobile mantendo operação mobile complementar via Expo',
            en: 'apps/mobile providing complementary mobile operations through Expo',
          },
          {
            pt: 'packages/shared para reutilização de contratos e tipos',
            en: 'packages/shared for reusing contracts and types',
          },
        ],
      },
      architecture: [
        {
          category: { pt: 'Monorepo e superfícies', en: 'Monorepo and surfaces' },
          technologies: [
            {
              name: 'pnpm + Turborepo',
              description: {
                pt: 'Coordena apps e pacote compartilhado com pipelines de build, lint, typecheck e testes.',
                en: 'Coordinates the apps and the shared package with build, lint, typecheck and test pipelines.',
              },
            },
            {
              name: 'Next.js 16 no web',
              description: {
                pt: 'Camada pública, autenticada e administrativa com foco em densidade operacional e performance.',
                en: 'Public, authenticated and admin layers focused on operational density and performance.',
              },
            },
            {
              name: 'Expo / React Native no mobile',
              description: {
                pt: 'App complementar com autenticação, transações, devedores, contas, assinaturas e notificações.',
                en: 'Companion app with authentication, transactions, debtors, accounts, subscriptions and notifications.',
              },
            },
          ],
        },
        {
          category: { pt: 'Core de domínio', en: 'Domain core' },
          technologies: [
            {
              name: 'NestJS + Prisma + PostgreSQL',
              description: {
                pt: 'Base transacional para clientes, dívidas, alocações, convites, categorias, metas e workspace.',
                en: 'Transactional base for clients, debts, allocations, invites, categories, goals and workspace.',
              },
            },
            {
              name: 'Better Auth + tenancy',
              description: {
                pt: 'Camada de autenticação e controle de acesso preparada para workspaces, membros e contexto administrativo.',
                en: 'Authentication and access control layer ready for workspaces, members and an admin context.',
              },
            },
            {
              name: 'Packages compartilhados',
              description: {
                pt: 'Tipos e contratos reaproveitados entre apps para reduzir divergência e custo de manutenção.',
                en: 'Types and contracts reused across apps to reduce drift and maintenance cost.',
              },
            },
          ],
        },
        {
          category: { pt: 'Expansão operacional', en: 'Operational expansion' },
          technologies: [
            {
              name: 'Billing e feature flags',
              description: {
                pt: 'Módulos de assinatura, entitlements, flags e planos em runtime para crescimento comercial do produto.',
                en: 'Subscription modules, entitlements, flags and runtime plans for the product’s commercial growth.',
              },
            },
            {
              name: 'Fiscal + OTel',
              description: {
                pt: 'Camada fiscal com emissão, reconciliação e diagnósticos, além de observabilidade estruturada.',
                en: 'Tax layer with issuing, reconciliation and diagnostics, plus structured observability.',
              },
            },
          ],
        },
      ],
      modules: [
        {
          title: { pt: 'Workspace financeiro e clientes', en: 'Financial workspace and clients' },
          description: {
            pt: 'Fluxos para clientes, transações, dívidas, alocações em cascata, metas, membros e centro financeiro.',
            en: 'Flows for clients, transactions, debts, cascading allocations, goals, members and the financial hub.',
          },
        },
        {
          title: { pt: 'Cobrança, billing e mensageria', en: 'Billing, charges and messaging' },
          description: {
            pt: 'Regras para cobrança, templates, mensagens agendadas, assinatura, entitlements e billing runtime.',
            en: 'Rules for charges, templates, scheduled messages, subscriptions, entitlements and runtime billing.',
          },
        },
        {
          title: { pt: 'Operação fiscal e administração', en: 'Tax operations and administration' },
          description: {
            pt: 'Módulos de fiscal, auditoria, observabilidade, feature flags e gestão administrativa do ambiente.',
            en: 'Tax, audit, observability, feature flags and administrative management of the environment.',
          },
        },
      ],
      decisions: [
        {
          title: { pt: 'Monorepo em vez de repositórios soltos', en: 'One monorepo instead of loose repositories' },
          description: {
            pt: 'A decisão reduz divergência entre web, mobile e API e permite evolução coordenada do produto.',
            en: 'It reduces drift between web, mobile and API and allows the product to evolve in a coordinated way.',
          },
        },
        {
          title: { pt: 'Web como centro operacional', en: 'Web as the operational center' },
          description: {
            pt: 'O produto foi reposicionado para fluxo financeiro e cobrança com mais densidade, mantendo o mobile como extensão valiosa.',
            en: 'The product was repositioned around financial flow and billing with more density, keeping mobile as a valuable extension.',
          },
        },
        {
          title: {
            pt: 'Fiscal, billing e tenancy como blocos de plataforma',
            en: 'Tax, billing and tenancy as platform building blocks',
          },
          description: {
            pt: 'Esses módulos deixam claro que o ASCEND não é só um CRUD financeiro, mas uma base expandível de produto.',
            en: 'These modules make it clear that ASCEND is not just a financial CRUD, but an expandable product base.',
          },
        },
      ],
      features: [
        {
          title: { pt: 'Fluxo de recebíveis e cobrança', en: 'Receivables and billing flow' },
          description: {
            pt: 'Clientes, dívidas, alocações, cobrança e mensageria organizados para operação diária com menos atrito.',
            en: 'Clients, debts, allocations, billing and messaging organized for daily operations with less friction.',
          },
        },
        {
          title: { pt: 'Workspace com billing e governança', en: 'Workspace with billing and governance' },
          description: {
            pt: 'Estrutura de workspaces, produtos, pedidos, membros, client accounts, entitlements e feature flags.',
            en: 'Structure for workspaces, products, orders, members, client accounts, entitlements and feature flags.',
          },
        },
        {
          title: { pt: 'Camada fiscal especializada', en: 'Specialized tax layer' },
          description: {
            pt: 'Emissão, certificados, pré-visualização, reconciliação e trilha técnica para operação fiscal controlada.',
            en: 'Issuing, certificates, preview, reconciliation and a technical trail for controlled tax operations.',
          },
        },
        {
          title: { pt: 'Web + mobile + observabilidade', en: 'Web + mobile + observability' },
          description: {
            pt: 'O produto já opera com múltiplas superfícies e documentação de observabilidade para crescimento com menos cegueira operacional.',
            en: 'The product already runs on multiple surfaces, with observability documentation so growth does not mean flying blind.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Reposicionamento de produto', en: 'Product repositioning' },
          problem: {
            pt: 'Era preciso sair de um app mais restrito e reconstruir o produto como plataforma, sem repetir limitações do legado.',
            en: 'We had to move on from a narrower app and rebuild the product as a platform, without repeating the legacy limitations.',
          },
          solution: {
            pt: 'Defini um monorepo com fronteiras claras e módulos capazes de sustentar billing, fiscal, administração e novas trilhas de crescimento.',
            en: 'I defined a monorepo with clear boundaries and modules able to support billing, tax, administration and new growth paths.',
          },
        },
        {
          title: {
            pt: 'Convivência entre simplicidade e profundidade operacional',
            en: 'Balancing simplicity and operational depth',
          },
          problem: {
            pt: 'O produto precisava continuar usável no dia a dia, mas sem sacrificar regras críticas de cobrança, auditoria e governança.',
            en: 'The product had to stay usable day to day without sacrificing critical billing, audit and governance rules.',
          },
          solution: {
            pt: 'A interface web foi organizada por áreas operacionais e a API foi estruturada por módulos, isolando complexidade sem espalhar acoplamento.',
            en: 'The web interface was organized by operational area and the API by module, isolating complexity without spreading coupling.',
          },
        },
      ],
    },
  },
  {
    id: 'rosana-site',
    title: 'Transmutar',
    description: {
      pt: 'Website institucional para apresentar processos terapêuticos, explicar a abordagem e conduzir visitantes ao agendamento.',
      en: 'Institutional website that presents therapeutic processes, explains the approach and leads visitors to book a session.',
    },
    tags: ['Web', 'SEO', 'Conteúdo', 'Responsivo'],
    image: '/case-screenshots/transmutar/cover-2026-11.webp',
    liveUrl: 'https://academiatransmutar.com.br/',
    privateProject: true,
    status: { pt: 'Projeto Privado', en: 'Private project' },
    featured: false,
    detailed: {
      summary: {
        what: {
          pt: 'Site institucional focado em presença digital, posicionamento de marca e captação de contatos qualificados.',
          en: 'Institutional site focused on digital presence, brand positioning and capturing qualified contacts.',
        },
        audience: {
          pt: 'Pessoas e empresas que precisam entender rapidamente a proposta da marca e avançar para contato ou agendamento.',
          en: 'People and companies who need to quickly understand the brand’s proposition and move on to contact or booking.',
        },
        value: {
          pt: 'Organiza credibilidade, mensagem e CTA em uma superfície enxuta, preparada para descoberta orgânica e conversão.',
          en: 'Brings credibility, message and call to action together in a lean surface, ready for organic discovery and conversion.',
        },
      },
      context: {
        problem: {
          pt: 'A marca precisava de uma presença digital mais clara, confiável e orientada a contato, sem cair em um institucional frio ou genérico.',
          en: 'The brand needed a clearer, more trustworthy, contact-oriented digital presence, without falling into a cold or generic corporate site.',
        },
        motivation: {
          pt: 'O objetivo era consolidar serviços, autoridade e fluxo de contato em uma única página, com leitura rápida e tom mais maduro.',
          en: 'The goal was to bring services, authority and the contact flow together on a single page, with quick reading and a more mature tone.',
        },
      },
      overview: {
        problem: {
          pt: 'A marca precisava de presença digital que transmitisse confiança e convertesse para agendamentos e contatos.',
          en: 'The brand needed a digital presence that conveyed trust and converted into bookings and contacts.',
        },
        solution: {
          pt: 'Desenvolvi uma landing page orientada para clareza de mensagem, storytelling curto e CTAs diretos em pontos estratégicos.',
          en: 'I built a landing page focused on a clear message, short storytelling and direct calls to action at strategic points.',
        },
        role: { pt: 'Desenvolvedor Frontend', en: 'Frontend developer' },
      },
      roleAreas: [
        { pt: 'Arquitetura de landing page', en: 'Landing page architecture' },
        { pt: 'Frontend em Next.js', en: 'Frontend in Next.js' },
        { pt: 'Estrutura de SEO', en: 'SEO structure' },
        { pt: 'Direcao visual e hierarquia editorial', en: 'Visual direction and editorial hierarchy' },
      ],
      valueFocus: [
        { pt: 'Credibilidade digital imediata', en: 'Immediate digital credibility' },
        { pt: 'Mensagem mais clara sobre servicos', en: 'A clearer message about the services' },
        { pt: 'Conversao para contato sem friccao', en: 'Frictionless conversion to contact' },
      ],
      stage: {
        label: {
          pt: 'Projeto entregue e orientado para presenca institucional',
          en: 'Delivered project, focused on institutional presence',
        },
        items: [
          {
            pt: 'Pagina inicial com narrativa de autoridade e servicos',
            en: 'Home page with a narrative of authority and services',
          },
          {
            pt: 'Fluxo de CTA distribuido ao longo da leitura',
            en: 'CTA flow distributed throughout the reading',
          },
          { pt: 'Base de SEO para descoberta organica', en: 'SEO foundation for organic discovery' },
          {
            pt: 'Estrutura leve para futuras expansoes de conteudo',
            en: 'Lightweight structure for future content expansion',
          },
        ],
      },
      architecture: [
        {
          category: { pt: 'Frontend', en: 'Frontend' },
          technologies: [
            {
              name: 'Next.js',
              description: {
                pt: 'Roteamento e SSR para SEO de página institucional.',
                en: 'Routing and SSR for the SEO of an institutional page.',
              },
            },
            {
              name: 'Tailwind CSS',
              description: {
                pt: 'Tokenização visual com componentes consistentes para rapidez de evolução.',
                en: 'Visual tokens with consistent components for fast iteration.',
              },
            },
            {
              name: 'Acessibilidade',
              description: {
                pt: 'Hierarquia semântica, contraste e navegação eficiente por teclado.',
                en: 'Semantic hierarchy, contrast and efficient keyboard navigation.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Posicionamento Institucional', en: 'Institutional positioning' },
          description: {
            pt: 'Seções de autoridade, serviços e diferenciação com narrativa objetiva.',
            en: 'Sections on authority, services and differentiation with an objective narrative.',
          },
        },
        {
          title: { pt: 'Fluxo de Contato', en: 'Contact flow' },
          description: {
            pt: 'CTA principal no topo e no final para aumentar conversões de demanda.',
            en: 'Main CTA at the top and at the bottom to increase demand conversions.',
          },
        },
        {
          title: { pt: 'SEO Editorial', en: 'Editorial SEO' },
          description: {
            pt: 'Estrutura semântica otimizada para buscas locais e relevância de página inicial.',
            en: 'Semantic structure optimized for local search and home page relevance.',
          },
        },
        {
          title: { pt: 'Design Direto', en: 'Straightforward design' },
          description: {
            pt: 'Componentes de baixo ruído visual com forte foco em leitura e clareza.',
            en: 'Components with low visual noise and a strong focus on reading and clarity.',
          },
        },
      ],
      modules: [
        {
          title: { pt: 'Apresentacao da proposta', en: 'Presenting the proposition' },
          description: {
            pt: 'Hero, blocos de autoridade e secoes de servicos organizados para explicar rapidamente o valor do trabalho.',
            en: 'Hero, authority blocks and service sections organized to quickly explain the value of the work.',
          },
        },
        {
          title: { pt: 'Captura de demanda', en: 'Capturing demand' },
          description: {
            pt: 'CTAs curtos e distribuicao de pontos de contato para reduzir hesitacao do usuario ao longo da pagina.',
            en: 'Short CTAs and contact points spread out to reduce the user’s hesitation along the page.',
          },
        },
      ],
      decisions: [
        {
          title: { pt: 'Landing enxuta em vez de site extenso', en: 'A lean landing page instead of a large site' },
          description: {
            pt: 'A estrutura foi concentrada em uma unica entrada para evitar dispersao e melhorar a taxa de contato.',
            en: 'The structure was concentrated in a single entry point to avoid dispersion and improve the contact rate.',
          },
        },
        {
          title: { pt: 'Tom institucional com leitura curta', en: 'Institutional tone with short reading' },
          description: {
            pt: 'O conteudo evita excesso de texto e usa hierarquia editorial para passar confianca sem cansar o usuario.',
            en: 'The content avoids too much text and uses editorial hierarchy to convey trust without tiring the user.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: '👁️ Distintividade Visual', en: '👁️ Visual distinctiveness' },
          problem: {
            pt: 'Evitar páginas muito genéricas e criar identidade visual percebida em poucos segundos.',
            en: 'Avoid overly generic pages and create a visual identity that is noticed within seconds.',
          },
          solution: {
            pt: 'Criei uma hierarquia editorial com tipografia de impacto, contraste controlado e espaçamento generoso.',
            en: 'I created an editorial hierarchy with bold typography, controlled contrast and generous spacing.',
          },
        },
      ],
    },
  },
  {
    id: 'kosmedico-lp',
    title: 'Kosmedico',
    description: {
      pt: 'Experiência multilíngue para avaliação estética, apresentação de tratamentos e captação de contatos em Zürich.',
      en: 'Multilingual experience for aesthetic assessment, treatment presentation and lead capture in Zürich.',
    },
    tags: ['Web', 'Multilíngue', 'SEO', 'Responsivo'],
    image: '/case-screenshots/kosmedico/cover-2026-11.webp',
    liveUrl: 'https://kosmedico.ch',
    status: { pt: 'Em Produção', en: 'In production' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Landing page institucional para apresentar servicos, autoridade e pontos de contato em um fluxo unico.',
          en: 'Institutional landing page that presents services, authority and contact points in a single flow.',
        },
        audience: {
          pt: 'Leads que chegam por busca, indicacao ou trafego de campanhas e precisam entender rapidamente o posicionamento da marca.',
          en: 'Leads arriving through search, referrals or campaign traffic who need to quickly understand the brand’s positioning.',
        },
        value: {
          pt: 'Combina clareza comercial, prova social e estrutura responsiva para apoiar descoberta e conversao.',
          en: 'Combines commercial clarity, social proof and a responsive structure to support discovery and conversion.',
        },
      },
      context: {
        problem: {
          pt: 'Era preciso apresentar servicos e credibilidade em uma unica superficie, sem transformar a pagina em um catalogo pesado.',
          en: 'We had to present services and credibility on a single surface, without turning the page into a heavy catalogue.',
        },
        motivation: {
          pt: 'O projeto exigia leitura objetiva, boa presenca mobile e base de SEO para manter descoberta organica consistente.',
          en: 'The project called for objective reading, a strong mobile presence and an SEO base to keep organic discovery consistent.',
        },
      },
      overview: {
        problem: {
          pt: 'Unificar posicionamento e conversão em uma única página de entrada para novos clientes.',
          en: 'Unify positioning and conversion on a single entry page for new clients.',
        },
        solution: {
          pt: 'Desenvolvi narrativa visual por seções com micro-histórias e prova de autoridade clínica.',
          en: 'I built a visual narrative by section, with micro-stories and proof of clinical authority.',
        },
        role: { pt: 'Desenvolvedor Frontend', en: 'Frontend developer' },
      },
      roleAreas: [
        { pt: 'Frontend institucional', en: 'Institutional frontend' },
        { pt: 'Arquitetura de secoes', en: 'Section architecture' },
        { pt: 'Responsividade', en: 'Responsiveness' },
        { pt: 'SEO on-page', en: 'On-page SEO' },
      ],
      valueFocus: [
        { pt: 'Leitura orientada a conversao', en: 'Reading geared toward conversion' },
        { pt: 'Clareza comercial da proposta', en: 'Commercial clarity of the proposition' },
        { pt: 'Descoberta organica com base semantica', en: 'Organic discovery on a semantic base' },
      ],
      stage: {
        label: {
          pt: 'Landing entregue e operando como ponto principal de entrada',
          en: 'Landing page delivered and working as the main entry point',
        },
        items: [
          {
            pt: 'Secoes de servicos e autoridade consolidadas',
            en: 'Consolidated service and authority sections',
          },
          { pt: 'CTAs contextuais ao longo do fluxo', en: 'Contextual CTAs along the flow' },
          {
            pt: 'Estrutura responsiva e otimizada para leitura mobile',
            en: 'Responsive structure optimized for mobile reading',
          },
          {
            pt: 'Base de SEO implementada para indexacao institucional',
            en: 'SEO base implemented for institutional indexing',
          },
        ],
      },
      architecture: [
        {
          category: { pt: 'Frontend', en: 'Frontend' },
          technologies: [
            {
              name: 'Next.js',
              description: {
                pt: 'Performance e estrutura SSR para páginas institucionais.',
                en: 'Performance and SSR structure for institutional pages.',
              },
            },
            {
              name: 'Design Tokens',
              description: {
                pt: 'Padronização visual para manter consistência entre blocos e dispositivos.',
                en: 'Visual standardization to keep blocks and devices consistent.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Arquitetura de Seções', en: 'Section architecture' },
          description: {
            pt: 'Roteiro de leitura com progressão de confiança do lead.',
            en: 'Reading path that builds the lead’s trust step by step.',
          },
        },
        {
          title: { pt: 'Perfis e Prova Social', en: 'Profiles and social proof' },
          description: {
            pt: 'Área dedicada para apresentar serviços, experiência e credenciais do projeto.',
            en: 'Dedicated area presenting the services, experience and credentials behind the project.',
          },
        },
        {
          title: { pt: 'CTAs Contextuais', en: 'Contextual CTAs' },
          description: {
            pt: 'Convite ao contato em momentos estratégicos do fluxo de leitura.',
            en: 'An invitation to get in touch at strategic moments of the reading flow.',
          },
        },
      ],
      modules: [
        {
          title: { pt: 'Sequencia de descoberta', en: 'Discovery sequence' },
          description: {
            pt: 'A pagina conduz o usuario por valor percebido, confianca e convite ao contato sem excesso de blocos concorrendo.',
            en: 'The page leads the user through perceived value, trust and an invitation to get in touch, without too many blocks competing.',
          },
        },
        {
          title: { pt: 'Blocos de conversao', en: 'Conversion blocks' },
          description: {
            pt: 'Chamadas estrategicas para contato entram nos pontos em que a proposta ja foi suficientemente entendida.',
            en: 'Strategic calls to get in touch appear at the points where the proposition has been understood well enough.',
          },
        },
      ],
      decisions: [
        {
          title: {
            pt: 'Narrativa por secoes em vez de texto corrido',
            en: 'Narrative by section instead of running text',
          },
          description: {
            pt: 'A organizacao em blocos melhora escaneabilidade e reduz abandono em trafego frio.',
            en: 'Organizing the page in blocks makes it easier to scan and reduces drop-off on cold traffic.',
          },
        },
        {
          title: { pt: 'Prova social inserida na jornada', en: 'Social proof placed inside the journey' },
          description: {
            pt: 'Autoridade e contexto entram no momento certo da leitura, sem parecer apendice decorativo.',
            en: 'Authority and context show up at the right moment of the reading, instead of looking like a decorative appendix.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Jornada de Conteúdo', en: 'Content journey' },
          problem: {
            pt: 'Evitar sobrecarga de conteúdo com mensagem coerente para públicos distintos.',
            en: 'Avoid content overload while keeping a coherent message for different audiences.',
          },
          solution: {
            pt: 'Organizei blocos por intenção do usuário: compreender, confiar e agir.',
            en: 'I organized the blocks by user intent: understand, trust and act.',
          },
        },
      ],
    },
  },
  {
    id: 'tatiane-aguiar',
    title: 'Aguiar Ambiental',
    description: {
      pt: 'Website institucional com foco em posicionamento da marca, apresentacao de servicos e conversao para contato.',
      en: 'Institutional website focused on brand positioning, presenting services and converting visitors into contacts.',
    },
    tags: ['React', 'SEO', 'Personal Brand', 'Landing Page', 'Vercel'],
    image: '/case-screenshots/aguiar-ambiental/cover-2026-11.webp',
    status: { pt: 'Em Produção', en: 'In production' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Website institucional focado em posicionamento da marca, apresentacao de servicos e captacao de contatos.',
          en: 'Institutional website focused on brand positioning, presenting services and capturing contacts.',
        },
        audience: {
          pt: 'Clientes e parceiros que precisam entender rapidamente a proposta da marca, os servicos e a forma de contato.',
          en: 'Clients and partners who need to quickly understand the brand’s proposition, its services and how to get in touch.',
        },
        value: {
          pt: 'Transforma a apresentacao da marca em uma superficie mais clara, confiavel e util para novas oportunidades.',
          en: 'Turns the brand presentation into a clearer, more trustworthy surface that is useful for new opportunities.',
        },
      },
      context: {
        problem: {
          pt: 'A marca precisava de uma apresentacao mais clara e profissional sem perder objetividade comercial.',
          en: 'The brand needed a clearer, more professional presentation without losing commercial focus.',
        },
        motivation: {
          pt: 'O site foi desenhado para funcionar como vitrine institucional e ao mesmo tempo como ponto de entrada para novas demandas.',
          en: 'The site was designed to work as an institutional showcase and, at the same time, as an entry point for new requests.',
        },
      },
      overview: {
        problem: {
          pt: 'Apresentar a marca com clareza e manter o site util para captacao de contatos.',
          en: 'Present the brand clearly and keep the site useful for capturing contacts.',
        },
        solution: {
          pt: 'Criei uma estrutura editorial com hierarquia entre contexto, servicos e chamada a acao.',
          en: 'I created an editorial structure with a hierarchy of context, services and call to action.',
        },
        role: { pt: 'Desenvolvedor Frontend', en: 'Frontend developer' },
      },
      roleAreas: [
        { pt: 'Frontend em React', en: 'Frontend in React' },
        { pt: 'Estrutura de personal brand', en: 'Personal brand structure' },
        { pt: 'SEO basico institucional', en: 'Basic institutional SEO' },
        { pt: 'Hierarquia editorial', en: 'Editorial hierarchy' },
      ],
      valueFocus: [
        { pt: 'Posicionamento institucional mais claro', en: 'Clearer institutional positioning' },
        {
          pt: 'Melhor leitura de servicos e diferenciais',
          en: 'Better reading of services and differentiators',
        },
        { pt: 'Canal direto para oportunidades', en: 'Direct channel for opportunities' },
      ],
      stage: {
        label: {
          pt: 'Projeto publicado para presenca institucional e conversao de contatos',
          en: 'Project published for institutional presence and contact conversion',
        },
        items: [
          { pt: 'Secoes de apresentacao e autoridade', en: 'Presentation and authority sections' },
          { pt: 'Blocos de servicos e contexto da marca', en: 'Service blocks and brand context' },
          { pt: 'CTA direto para contato', en: 'Direct CTA to get in touch' },
          { pt: 'Estrutura leve e responsiva', en: 'Lightweight, responsive structure' },
        ],
      },
      architecture: [
        {
          category: { pt: 'Frontend', en: 'Frontend' },
          technologies: [
            {
              name: 'React',
              description: {
                pt: 'Blocos semânticos para leitura por recrutadores e clientes.',
                en: 'Semantic blocks for reading by recruiters and clients.',
              },
            },
            {
              name: 'SEO',
              description: {
                pt: 'Metadados e estrutura para rastreamento orgânico correto.',
                en: 'Metadata and structure for correct organic crawling.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Portfólio de Impacto', en: 'Portfolio of impact' },
          description: {
            pt: 'Destaque de entregas e narrativa curta de autoridade.',
            en: 'Highlights of deliverables and a short narrative of authority.',
          },
        },
        {
          title: { pt: 'Contato Direto', en: 'Direct contact' },
          description: {
            pt: 'Canal de mensagem com proposta clara para próximos passos.',
            en: 'Messaging channel with a clear proposal for next steps.',
          },
        },
      ],
      modules: [
        {
          title: { pt: 'Marca e narrativa institucional', en: 'Brand and institutional narrative' },
          description: {
            pt: 'A pagina organiza tom, proposta e servicos sem depender de textos longos ou estruturas excessivamente corporativas.',
            en: 'The page organizes tone, proposition and services without relying on long texts or overly corporate structures.',
          },
        },
        {
          title: { pt: 'Contato e proximos passos', en: 'Contact and next steps' },
          description: {
            pt: 'O fluxo final reduz atrito para quem deseja iniciar conversa profissional ou comercial.',
            en: 'The closing flow reduces friction for anyone who wants to start a professional or business conversation.',
          },
        },
      ],
      decisions: [
        {
          title: { pt: 'Tono pessoal com estrutura objetiva', en: 'Personal tone with an objective structure' },
          description: {
            pt: 'A pagina evita tanto o excesso de formalidade quanto o excesso de informalidade para manter utilidade real.',
            en: 'The page avoids both too much formality and too much informality, to stay genuinely useful.',
          },
        },
        {
          title: { pt: 'Foco em leitura rapida', en: 'Focus on quick reading' },
          description: {
            pt: 'A informacao principal foi organizada para ser entendida em poucos segundos por recrutadores e clientes.',
            en: 'The key information was organized so recruiters and clients can understand it in a few seconds.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Posicionamento Pessoal', en: 'Personal positioning' },
          problem: {
            pt: 'Equilibrar tom pessoal e profissional sem perder objetividade de negócio.',
            en: 'Balance a personal and professional tone without losing business focus.',
          },
          solution: {
            pt: 'Usei seções curtas, copy direta e fluxo de contato único com forte direcionamento.',
            en: 'I used short sections, direct copy and a single contact flow with a strong direction.',
          },
        },
      ],
    },
  },
  {
    id: 'neo-constrictor',
    title: 'Neo Constrictor',
    description: {
      pt: 'Plataforma auditável de workflow documental e tramitação interinstitucional, construída em monorepo com API NestJS, área do pesquisador e painel administrativo.',
      en: 'Auditable platform for document workflow and inter-institutional case routing, built as a monorepo with a NestJS API, a researcher area and an admin panel.',
    },
    tags: ['Monorepo', 'NestJS', 'React', 'Vite', 'Prisma', 'Zod', 'Workflow'],
    image: '/case-screenshots/neo-constrictor/cover-2026-11.webp',
    featured: true,
    status: { pt: 'Repositório Privado', en: 'Private repository' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Plataforma para submissão, tramitação e acompanhamento de processos de pesquisa com auditoria ponta a ponta e evolução controlada.',
          en: 'Platform for submitting, routing and tracking research processes, with end-to-end auditing and controlled evolution.',
        },
        audience: {
          pt: 'Pesquisadores, administradores e atores institucionais que precisam operar workflows documentais com rastreabilidade.',
          en: 'Researchers, administrators and institutional actors who need to run document workflows with traceability.',
        },
        value: {
          pt: 'Tira o domínio da lógica de CRUD simples e o reposiciona como plataforma auditável de workflow, com fundação adequada para autorização contextual.',
          en: 'Moves the domain away from simple CRUD logic and repositions it as an auditable workflow platform, with a proper foundation for contextual authorization.',
        },
      },
      context: {
        problem: {
          pt: 'O legado Scriptcase não podia continuar sendo a referência estrutural de um domínio que exige histórico, identidade forte e rastreabilidade interinstitucional.',
          en: 'The legacy Scriptcase system could no longer be the structural reference for a domain that demands history, strong identity and inter-institutional traceability.',
        },
        motivation: {
          pt: 'A construção do MVP precisava nascer com fronteiras corretas de auth, identidade, contratos e workflow para não deformar o domínio no início.',
          en: 'The MVP had to be built with the right boundaries for auth, identity, contracts and workflow so the domain would not be distorted from the start.',
        },
      },
      overview: {
        problem: {
          pt: 'A plataforma precisava tratar tramitação documental e autorização contextual como problema de produto e arquitetura, não como um conjunto simples de telas administrativas.',
          en: 'The platform had to treat document routing and contextual authorization as a product and architecture problem, not as a simple set of admin screens.',
        },
        solution: {
          pt: 'Modelei uma fundação de monorepo com monólito modular no backend, contratos compartilhados, auth dual e trilha documental forte para auditoria e evolução incremental.',
          en: 'I designed a monorepo foundation with a modular monolith backend, shared contracts, dual auth and a strong document trail for auditing and incremental evolution.',
        },
        role: {
          pt: 'Arquitetura, backend, frontend do pesquisador, contratos e direção técnica do MVP.',
          en: 'Architecture, backend, researcher frontend, contracts and technical direction of the MVP.',
        },
      },
      roleAreas: [
        { pt: 'Arquitetura e modelagem de domínio', en: 'Architecture and domain modeling' },
        { pt: 'Backend NestJS + Prisma', en: 'NestJS + Prisma backend' },
        { pt: 'Frontend researcher e admin', en: 'Researcher and admin frontends' },
        { pt: 'Contratos compartilhados com Zod', en: 'Shared contracts with Zod' },
        {
          pt: 'Fundação de auth, identidade e RBAC contextual',
          en: 'Foundation for auth, identity and contextual RBAC',
        },
      ],
      valueFocus: [
        { pt: 'Modernização estruturada do legado', en: 'Structured modernization of the legacy system' },
        { pt: 'Auditoria ponta a ponta', en: 'End-to-end auditing' },
        {
          pt: 'Autorização contextual em vez de role simplista',
          en: 'Contextual authorization instead of simplistic roles',
        },
        { pt: 'Evolução segura do workflow documental', en: 'Safe evolution of the document workflow' },
      ],
      stage: {
        label: {
          pt: 'Fundação do MVP em construção com decisões estruturais travadas',
          en: 'MVP foundation under construction, with structural decisions locked in',
        },
        items: [
          {
            pt: 'apps/api, web-researcher e web-admin no mesmo monorepo',
            en: 'apps/api, web-researcher and web-admin in the same monorepo',
          },
          {
            pt: 'roadmap-base, ADRs e planos de auth/onboarding já documentados',
            en: 'roadmap-base, ADRs and auth/onboarding plans already documented',
          },
          {
            pt: 'fluxos iniciais de login, retorno auth e onboarding do pesquisador',
            en: 'initial login, auth return and researcher onboarding flows',
          },
          {
            pt: 'contratos compartilhados e UI package para consistência entre superfícies',
            en: 'shared contracts and a UI package for consistency across surfaces',
          },
        ],
      },
      architecture: [
        {
          category: { pt: 'Fundação da plataforma', en: 'Platform foundation' },
          technologies: [
            {
              name: 'Monorepo com pnpm + turbo',
              description: {
                pt: 'Organiza apps, contratos e UI compartilhada para crescimento controlado do MVP.',
                en: 'Organizes apps, contracts and shared UI for controlled growth of the MVP.',
              },
            },
            {
              name: 'NestJS + Prisma + PostgreSQL',
              description: {
                pt: 'Monólito modular responsável por auth, identidade, vínculo institucional e evolução do workflow.',
                en: 'Modular monolith responsible for auth, identity, institutional affiliation and workflow evolution.',
              },
            },
            {
              name: 'React + Vite nos frontends',
              description: {
                pt: 'Áreas separadas para pesquisador e administração, consumindo contratos estáveis do backend.',
                en: 'Separate areas for researchers and administration, consuming stable backend contracts.',
              },
            },
          ],
        },
        {
          category: { pt: 'Domínio e governança', en: 'Domain and governance' },
          technologies: [
            {
              name: 'Contracts com Zod',
              description: {
                pt: 'Padronizam payloads e preservam fronteiras públicas entre backend e frontends.',
                en: 'Standardize payloads and preserve the public boundaries between backend and frontends.',
              },
            },
            {
              name: 'Auth dual e RBAC contextual',
              description: {
                pt: 'Login interno, preparação para GOV.br e autorização baseada em perfil, escopo, estado e vínculo.',
                en: 'Internal login, groundwork for GOV.br and authorization based on role, scope, state and affiliation.',
              },
            },
            {
              name: 'ADR + roadmap-base',
              description: {
                pt: 'As decisões arquiteturais mais sensíveis já nascem documentadas para evitar deriva de produto.',
                en: 'The most sensitive architectural decisions are documented from the start to avoid product drift.',
              },
            },
          ],
        },
      ],
      modules: [
        {
          title: { pt: 'Auth, identidade e onboarding', en: 'Auth, identity and onboarding' },
          description: {
            pt: 'Fluxos de entrada, retorno de autenticação, assurance de identidade e onboarding do pesquisador.',
            en: 'Sign-in flows, authentication return, identity assurance and researcher onboarding.',
          },
        },
        {
          title: { pt: 'Contratos e fronteiras públicas', en: 'Contracts and public boundaries' },
          description: {
            pt: 'Packages compartilhados com contratos e UI separam o domínio da implementação visual e reduzem acoplamento.',
            en: 'Shared packages with contracts and UI separate the domain from the visual implementation and reduce coupling.',
          },
        },
        {
          title: { pt: 'Fundação para workflow e auditoria', en: 'Foundation for workflow and auditing' },
          description: {
            pt: 'A plataforma já nasce como workflow auditável, preparada para submissão, tramitação, revisão e histórico documental.',
            en: 'The platform is born as an auditable workflow, ready for submission, routing, review and document history.',
          },
        },
      ],
      decisions: [
        {
          title: {
            pt: 'Tratar o produto como plataforma auditável',
            en: 'Treat the product as an auditable platform',
          },
          description: {
            pt: 'O roadmap trava a visão correta do domínio e impede que o sistema seja modelado como CRUD simplista.',
            en: 'The roadmap locks in the right view of the domain and keeps the system from being modeled as a simplistic CRUD.',
          },
        },
        {
          title: { pt: 'Autorização contextual desde o início', en: 'Contextual authorization from the start' },
          description: {
            pt: 'A fórmula de permissão combina perfil, escopo organizacional, estado, ação e vínculo com o processo.',
            en: 'The permission formula combines role, organizational scope, state, action and relationship to the process.',
          },
        },
        {
          title: {
            pt: 'Separação explícita entre identidade, vínculo e autorização',
            en: 'Explicit separation of identity, affiliation and authorization',
          },
          description: {
            pt: 'A ADR de auth evita que o legado dite o modelo novo e preserva evolução segura do domínio.',
            en: 'The auth ADR keeps the legacy system from dictating the new model and preserves a safe evolution of the domain.',
          },
        },
      ],
      features: [
        {
          title: { pt: 'Base de auth e identidade', en: 'Auth and identity foundation' },
          description: {
            pt: 'Fluxos locais, preparação para GOV.br, status de identidade e reconciliação segura com o domínio.',
            en: 'Local flows, groundwork for GOV.br, identity status and safe reconciliation with the domain.',
          },
        },
        {
          title: { pt: 'Researcher portal e admin separados', en: 'Separate researcher portal and admin' },
          description: {
            pt: 'Duas superfícies dedicadas a personas diferentes, compartilhando contratos e linguagem visual.',
            en: 'Two surfaces dedicated to different personas, sharing contracts and visual language.',
          },
        },
        {
          title: { pt: 'Documentação estrutural forte', en: 'Strong structural documentation' },
          description: {
            pt: 'Roadmap, ADRs, planos e guias tornam a evolução do MVP mais previsível e menos arbitrária.',
            en: 'Roadmap, ADRs, plans and guides make the MVP’s evolution more predictable and less arbitrary.',
          },
        },
        {
          title: { pt: 'Foco em histórico e auditabilidade', en: 'Focus on history and auditability' },
          description: {
            pt: 'O produto foi desenhado para preservar trilha de processo e evitar perda silenciosa de histórico.',
            en: 'The product was designed to preserve the process trail and avoid silent loss of history.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Modelar corretamente um domínio sensível', en: 'Modeling a sensitive domain correctly' },
          problem: {
            pt: 'Workflow documental interinstitucional exige rigor em identidade, permissão e histórico; um desenho apressado comprometeria o produto desde a base.',
            en: 'An inter-institutional document workflow demands rigor in identity, permissions and history; a rushed design would compromise the product from the base.',
          },
          solution: {
            pt: 'As decisões mais sensíveis foram travadas por roadmap e ADR, com fronteiras explícitas para backend, contratos e frontends.',
            en: 'The most sensitive decisions were locked in through the roadmap and ADRs, with explicit boundaries for backend, contracts and frontends.',
          },
        },
        {
          title: {
            pt: 'Não repetir o legado como arquitetura',
            en: 'Not repeating the legacy system as architecture',
          },
          problem: {
            pt: 'A tentação natural seria migrar a lógica antiga para um stack novo sem reestruturar o domínio.',
            en: 'The natural temptation would be to migrate the old logic to a new stack without restructuring the domain.',
          },
          solution: {
            pt: 'A plataforma foi tratada como uma base nova de workflow auditável, com auth dual, contratos estáveis e postura de evolução incremental.',
            en: 'The platform was treated as a new foundation for an auditable workflow, with dual auth, stable contracts and an incremental-evolution mindset.',
          },
        },
      ],
    },
  },
  {
    id: 'palpitae',
    title: 'Palpitaê 26',
    description: {
      pt: 'PWA mobile-first de palpites entre amigos para a Copa de 2026, com grupos privados, ranking determinístico, Pix e trilha de auditoria — desenhada para não ser um produto de aposta.',
      en: 'Mobile-first PWA for predictions among friends for the 2026 World Cup, with private groups, deterministic ranking, Pix and an audit trail — designed not to be a betting product.',
    },
    tags: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Docker'],
    image: '/case-screenshots/palpitae/01-landing-hero.webp',
    githubUrl: 'https://github.com/IcaroAguiar/palpitae',
    featured: true,
    status: { pt: 'Open source · arquivado', en: 'Open source · archived' },
    detailed: {
      summary: {
        what: {
          pt: 'Produto full-stack solo que substituiu bolões em planilha por um app web com grupos, palpites, ranking automático, pagamentos Pix e painel administrativo.',
          en: 'Solo full-stack product that replaced spreadsheet pools with a web app featuring groups, predictions, automatic ranking, Pix payments and an admin panel.',
        },
        audience: {
          pt: 'Grupos de amigos e colegas que queriam palpitar a Copa juntos, sem prêmios, apostas ou sorteios.',
          en: 'Groups of friends and colleagues who wanted to predict the World Cup together, with no prizes, bets or raffles.',
        },
        value: {
          pt: 'Entrega uma vitrine de engenharia open source: domínio Go modular, SQL explícito, idempotência financeira e compliance tratado como regra de produto.',
          en: 'Delivers an open source engineering showcase: modular Go domain, explicit SQL, financial idempotency and compliance treated as a product rule.',
        },
      },
      context: {
        problem: {
          pt: 'Toda Copa alguém organiza o bolão no chat e gasta o torneio copiando placares para planilha, com discussões sobre palpites atrasados e ranking recalculado na mão.',
          en: 'Every World Cup someone organizes the pool in a chat and spends the tournament copying scores into a spreadsheet, with arguments about late predictions and a ranking recalculated by hand.',
        },
        motivation: {
          pt: 'O Brasil regula apostas e promoções com prêmio. O produto precisava ser inequivocamente um jogo social — e essa restrição tinha que viver no modelo de dados, no vocabulário e na revisão de código.',
          en: 'Brazil regulates betting and promotions with prizes. The product had to be unmistakably a social game — and that constraint had to live in the data model, in the vocabulary and in code review.',
        },
      },
      overview: {
        problem: {
          pt: 'Era preciso um app mobile-first de palpites com grupos privados, ranking confiável e acesso pago, sem cruzar a linha de produto de aposta.',
          en: 'We needed a mobile-first predictions app with private groups, a reliable ranking and paid access, without crossing the line into a betting product.',
        },
        solution: {
          pt: 'Construí uma PWA React com API e worker em Go, PostgreSQL SQL-first, adapters para Pix e calendário, sessões no servidor e políticas determinísticas de pontuação e indicação.',
          en: 'I built a React PWA with a Go API and worker, SQL-first PostgreSQL, adapters for Pix and the match calendar, server-side sessions and deterministic scoring and referral policies.',
        },
        role: {
          pt: 'Produto, arquitetura, backend Go, frontend React, operação e documentação do case study.',
          en: 'Product, architecture, Go backend, React frontend, operations and the case study documentation.',
        },
      },
      roleAreas: [
        { pt: 'Produto e PRD até produção', en: 'Product, from PRD to production' },
        { pt: 'API e worker em Go com pacotes de domínio', en: 'Go API and worker with domain packages' },
        { pt: 'PWA React com TanStack Router/Query', en: 'React PWA with TanStack Router/Query' },
        { pt: 'Pagamentos Pix, indicações e saques', en: 'Pix payments, referrals and withdrawals' },
        { pt: 'Admin, auditoria e compliance', en: 'Admin, auditing and compliance' },
      ],
      valueFocus: [
        {
          pt: 'Constraint regulatória como regra de engenharia',
          en: 'Regulatory constraint as an engineering rule',
        },
        { pt: 'Idempotência em webhooks e pontuação', en: 'Idempotency in webhooks and scoring' },
        {
          pt: 'SQL explícito e adapters nas fronteiras externas',
          en: 'Explicit SQL and adapters at external boundaries',
        },
        { pt: 'Produto completo, não protótipo', en: 'A complete product, not a prototype' },
      ],
      stage: {
        label: {
          pt: 'Rodou em produção durante a Copa; hoje arquivado e publicado sob MIT',
          en: 'Ran in production during the World Cup; now archived and published under MIT',
        },
        items: [
          { pt: 'apps/web — React 19 PWA mobile-first', en: 'apps/web — mobile-first React 19 PWA' },
          { pt: 'apps/api — API Go (chi), worker e CLIs', en: 'apps/api — Go API (chi), worker and CLIs' },
          { pt: 'PostgreSQL 17 com goose + sqlc', en: 'PostgreSQL 17 with goose + sqlc' },
          {
            pt: 'docs/case-study, ADRs e checklist de compliance',
            en: 'docs/case-study, ADRs and compliance checklist',
          },
        ],
      },
      architecture: [
        {
          category: { pt: 'Backend e domínio', en: 'Backend and domain' },
          technologies: [
            {
              name: 'Go 1.26 + chi',
              description: {
                pt: 'API HTTP com pacotes de domínio (identity, payments, groups, predictions, scoring, referrals, admin, audit) e regras explícitas de dependência.',
                en: 'HTTP API with domain packages (identity, payments, groups, predictions, scoring, referrals, admin, audit) and explicit dependency rules.',
              },
            },
            {
              name: 'PostgreSQL + pgx + sqlc + goose',
              description: {
                pt: 'SQL explícito sem ORM, migrations versionadas e acessos tipados — priorizando auditabilidade financeira sobre conveniência.',
                en: 'Explicit SQL without an ORM, versioned migrations and typed queries — favoring financial auditability over convenience.',
              },
            },
            {
              name: 'Worker dedicado',
              description: {
                pt: 'Binário separado para jobs agendados: sincronização de calendário, liberação de comissões e recálculo pós-partida.',
                en: 'Separate binary for scheduled jobs: calendar sync, commission release and post-match recalculation.',
              },
            },
          ],
        },
        {
          category: { pt: 'Frontend e entrega', en: 'Frontend and delivery' },
          technologies: [
            {
              name: 'React 19 + Vite + TanStack',
              description: {
                pt: 'PWA mobile-first com Router, Query e Zod; fundação de rotas e contratos introduzida antes do checkout.',
                en: 'Mobile-first PWA with Router, Query and Zod; routing and contracts foundation introduced before checkout.',
              },
            },
            {
              name: 'Sessões no servidor',
              description: {
                pt: 'Cookies HttpOnly com sessões no PostgreSQL e Argon2id — reembolso e bloqueio com efeito imediato.',
                en: 'HttpOnly cookies with PostgreSQL-backed sessions and Argon2id — refunds and blocks take effect immediately.',
              },
            },
            {
              name: 'Docker Compose + Caddy',
              description: {
                pt: 'Deploy em VPS única com HTTPS, estáticos e API atrás do Caddy; ambiente local offline com gateway Pix falso.',
                en: 'Single-VPS deploy with HTTPS, static files and the API behind Caddy; offline local environment with a fake Pix gateway.',
              },
            },
          ],
        },
        {
          category: { pt: 'Integrações e qualidade', en: 'Integrations and quality' },
          technologies: [
            {
              name: 'Adapters externos',
              description: {
                pt: 'Pix, calendário de jogos, e-mail e auditoria atrás de interfaces; o domínio nunca importa SDK de fornecedor.',
                en: 'Pix, match calendar, email and auditing behind interfaces; the domain never imports a vendor SDK.',
              },
            },
          ],
        },
      ],
      modules: [
        {
          title: { pt: 'Grupos e convites privados', en: 'Groups and private invites' },
          description: {
            pt: 'Grupos só por convite, com entrada pendente resolvida automaticamente quando o pagamento é confirmado.',
            en: 'Invite-only groups, with pending entries resolved automatically once payment is confirmed.',
          },
        },
        {
          title: { pt: 'Palpites com trava no kickoff', en: 'Predictions locked at kickoff' },
          description: {
            pt: 'Um palpite por partida, válido em todos os grupos do usuário; a API decide a trava pelo horário do jogo.',
            en: 'One prediction per match, valid across all of the user’s groups; the API decides the lock from the match time.',
          },
        },
        {
          title: { pt: 'Pontuação e ranking determinísticos', en: 'Deterministic scoring and ranking' },
          description: {
            pt: 'Política aditiva com crédito parcial e desempates documentados; correção de resultado substitui scores versionados.',
            en: 'Additive policy with partial credit and documented tiebreakers; a result correction replaces versioned scores.',
          },
        },
        {
          title: { pt: 'Indicações, comissões e saques', en: 'Referrals, commissions and withdrawals' },
          description: {
            pt: 'Atribuição de primeiro nível com janela, anti-autoindicação e carência antes do saque manual via Pix.',
            en: 'First-level attribution with a window, anti-self-referral and a waiting period before the manual Pix withdrawal.',
          },
        },
      ],
      decisions: [
        {
          title: { pt: 'Jogo social, não aposta', en: 'A social game, not betting' },
          description: {
            pt: 'Ranking sem prêmio, plano pago compra acesso ao software, vocabulário controlado e checklist de compliance em toda mudança.',
            en: 'Ranking without prizes, a paid plan that buys access to the software, a controlled vocabulary and a compliance checklist on every change.',
          },
        },
        {
          title: {
            pt: 'Idempotência como preocupação de primeira classe',
            en: 'Idempotency as a first-class concern',
          },
          description: {
            pt: 'Webhooks persistidos e reprocessáveis; pagamento confirmado dispara efeitos que não podem duplicar em reentrega.',
            en: 'Persisted, reprocessable webhooks; a confirmed payment triggers effects that must not be duplicated on redelivery.',
          },
        },
        {
          title: { pt: 'Allowlist no provedor de jogos', en: 'Allowlist on the match data provider' },
          description: {
            pt: 'O adapter importa só partidas, status, placares e times — excluindo odds e dados de bookmaker na fronteira de integração.',
            en: 'The adapter imports only matches, statuses, scores and teams — leaving odds and bookmaker data out at the integration boundary.',
          },
        },
      ],
      features: [
        {
          title: { pt: 'Contas e acesso', en: 'Accounts and access' },
          description: {
            pt: 'Auth e-mail/senha, aceite versionado de termos, rate limit e planos Free (1 grupo) ou Passe Mundial (Pix único).',
            en: 'Email/password auth, versioned terms acceptance, rate limiting and Free (1 group) or World Cup Pass (single Pix payment) plans.',
          },
        },
        {
          title: { pt: 'Visão semanal e partidas', en: 'Weekly view and matches' },
          description: {
            pt: 'Painel que responde “tenho algo para palpitar agora?”, lista de jogos e detalhe com countdown e palpites do grupo.',
            en: 'A dashboard that answers “do I have something to predict right now?”, a match list and a detail view with countdown and the group’s predictions.',
          },
        },
        {
          title: { pt: 'Admin e auditoria', en: 'Admin and auditing' },
          description: {
            pt: 'Painel operacional para pagamentos, resultados, comissões e saques, com trilha de auditoria em ações críticas.',
            en: 'Operations panel for payments, results, commissions and withdrawals, with an audit trail on critical actions.',
          },
        },
        {
          title: { pt: 'Documentação open source', en: 'Open source documentation' },
          description: {
            pt: 'Case study, ADRs, glossário de domínio, CONTRIBUTING e LICENSE MIT para leitura e reuso do código.',
            en: 'Case study, ADRs, domain glossary, CONTRIBUTING and an MIT LICENSE so the code can be read and reused.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Constraint regulatória no código', en: 'Regulatory constraint in the code' },
          problem: {
            pt: 'Um produto de palpites fica perto da linha de apostas; marketing sozinho não bastava para manter a fronteira clara.',
            en: 'A predictions product sits close to the line of betting; marketing alone was not enough to keep the boundary clear.',
          },
          solution: {
            pt: 'A restrição virou regras de domínio, vocabulário banido, checklist de compliance e allowlist na integração de jogos.',
            en: 'The constraint became domain rules, a banned vocabulary, a compliance checklist and an allowlist on the match integration.',
          },
        },
        {
          title: { pt: 'Dinheiro e ranking sem corrupção', en: 'Money and ranking without corruption' },
          problem: {
            pt: 'Webhooks fora de ordem e correções de placar podem duplicar efeitos ou distorcer classificação.',
            en: 'Out-of-order webhooks and score corrections can duplicate effects or distort the standings.',
          },
          solution: {
            pt: 'Idempotência por id de pagamento, scores versionados pela política e saques manuais com comprovante para o volume real.',
            en: 'Idempotency by payment id, scores versioned by policy and manual withdrawals with a receipt for the real volume.',
          },
        },
        {
          title: {
            pt: 'Projeto solo sem virar um monólito acoplado',
            en: 'A solo project that doesn’t become a tangled monolith',
          },
          problem: {
            pt: 'Treze áreas de domínio num único autor tendem a virar um pacote mutuamente dependente.',
            en: 'Thirteen domain areas in the hands of a single author tend to turn into one mutually dependent package.',
          },
          solution: {
            pt: 'Pacotes Go com dependências explícitas, adapters nas bordas e ADRs antes das fases sensíveis (checkout e calendário).',
            en: 'Go packages with explicit dependencies, adapters at the edges and ADRs ahead of the sensitive phases (checkout and calendar).',
          },
        },
      ],
    },
  },
  {
    id: 'qualityflow',
    title: 'QualityFlow',
    description: {
      pt: 'SaaS multiempresa de gestão da qualidade: auditorias, eventos e não conformidades, indicadores, documentos controlados e qualificação de fornecedores, com isolamento por empresa.',
      en: 'Multi-tenant quality management SaaS: audits, events and nonconformities, indicators, controlled documents and supplier qualification, with isolation per company.',
    },
    tags: ['NestJS', 'Prisma', 'React', 'TypeScript', 'PostgreSQL', 'OpenAPI', 'Terraform'],
    image: '/case-screenshots/qualityflow/cover-2026-11.webp',
    featured: true,
    status: { pt: 'SaaS · em evolução', en: 'SaaS · evolving' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Sistema de gestão da qualidade (SGQ) multiempresa, em que cada empresa cliente opera sua rotina de qualidade num espaço isolado.',
          en: 'Multi-tenant quality management system (QMS), in which each client company runs its quality routine in an isolated space.',
        },
        audience: {
          pt: 'Equipes de qualidade de indústrias e empresas que precisam manter auditorias, documentos e fornecedores em dia para certificações.',
          en: 'Quality teams at manufacturers and companies that need to keep audits, documents and suppliers up to date for certifications.',
        },
        value: {
          pt: 'Troca planilhas e pastas por uma fila diária do que está atrasado, com rastreabilidade de quem fez o quê.',
          en: 'Swaps spreadsheets and folders for a daily queue of what is overdue, with traceability of who did what.',
        },
      },
      overview: {
        problem: {
          pt: 'A rotina de qualidade vive em planilhas soltas: auditorias sem programação, não conformidades sem dono e documentos sem controle de versão e de leitura.',
          en: 'The quality routine lives in scattered spreadsheets: audits with no schedule, nonconformities with no owner and documents with no version or read control.',
        },
        solution: {
          pt: 'Uma API NestJS com isolamento por empresa e um front React que consome um cliente tipado gerado do contrato OpenAPI, cobrindo auditorias, eventos, indicadores, documentos e fornecedores.',
          en: 'A NestJS API with per-company isolation and a React front end that consumes a typed client generated from the OpenAPI contract, covering audits, events, indicators, documents and suppliers.',
        },
        role: {
          pt: 'Escrevi a maior parte da API e do front: arquitetura, backend, frontend e entrega.',
          en: 'I wrote most of the API and the front end: architecture, backend, frontend and delivery.',
        },
      },
      roleAreas: [
        { pt: 'API NestJS com isolamento por empresa', en: 'NestJS API with per-company isolation' },
        {
          pt: 'Front React com cliente tipado gerado do OpenAPI',
          en: 'React front end with a typed client generated from OpenAPI',
        },
        {
          pt: 'CI de staging e produção e infraestrutura em Terraform',
          en: 'Staging and production CI and infrastructure in Terraform',
        },
      ],
      valueFocus: [
        {
          pt: 'Contrato da API como fonte única entre back e front',
          en: 'API contract as the single source between back end and front end',
        },
        { pt: 'Fila do dia em vez de relatórios', en: 'Daily queue instead of reports' },
      ],
      architecture: [
        {
          category: { pt: 'Backend', en: 'Backend' },
          technologies: [
            {
              name: 'NestJS + Prisma',
              description: {
                pt: 'API modular com uma base por empresa e um núcleo comum para contas, planos e domínios.',
                en: 'Modular API with one database per company and a shared core for accounts, plans and domains.',
              },
            },
            {
              name: 'OpenAPI + Zod',
              description: {
                pt: 'O contrato é gerado da API e vira o cliente tipado que o front usa; mudança quebrada aparece no typecheck.',
                en: 'The contract is generated from the API and becomes the typed client the front end uses; a breaking change shows up in the typecheck.',
              },
            },
          ],
        },
        {
          category: { pt: 'Frontend', en: 'Frontend' },
          technologies: [
            {
              name: 'React + Vite',
              description: {
                pt: 'Interface densa de operação, com atalhos de teclado e listas filtráveis.',
                en: 'Dense operations interface, with keyboard shortcuts and filterable lists.',
              },
            },
          ],
        },
        {
          category: { pt: 'Entrega', en: 'Delivery' },
          technologies: [
            {
              name: 'Terraform + CI',
              description: {
                pt: 'Ambientes de staging e produção descritos como código, com deploy pela CI.',
                en: 'Staging and production environments described as code, deployed through CI.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Fila do dia', en: 'Daily queue' },
          description: {
            pt: 'A home mostra o que está atrasado, vence hoje ou está fora da meta, com atalho para resolver.',
            en: 'The home screen shows what is overdue, due today or off target, with a shortcut to resolve it.',
          },
        },
        {
          title: { pt: 'Auditorias', en: 'Audits' },
          description: {
            pt: 'Programação anual por processo, execução com progresso e não conformidades ligadas.',
            en: 'Annual schedule per process, execution with progress and linked nonconformities.',
          },
        },
        {
          title: { pt: 'Indicadores', en: 'Indicators' },
          description: {
            pt: 'Valor, meta, série histórica e estado de cada indicador, com lançamento manual ou automático.',
            en: 'Value, target, history and status of each indicator, with manual or automatic entry.',
          },
        },
        {
          title: { pt: 'Documentos e fornecedores', en: 'Documents and suppliers' },
          description: {
            pt: 'Documentos controlados com versão e confirmação de leitura; fornecedores com qualificação e restrições.',
            en: 'Controlled documents with versioning and read confirmation; suppliers with qualification and restrictions.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Isolar empresas sem duplicar código', en: 'Isolating companies without duplicating code' },
          problem: {
            pt: 'Cada cliente precisa de dados isolados, mas o código e as migrations são os mesmos para todos.',
            en: 'Each client needs isolated data, but the code and migrations are the same for everyone.',
          },
          solution: {
            pt: 'Isolamento por empresa com migrations aplicadas por etapas (canário e depois as demais) e um núcleo comum separado.',
            en: 'Per-company isolation with migrations applied in stages (a canary first, then the rest) and a separate shared core.',
          },
        },
        {
          title: { pt: 'Front e API divergindo', en: 'Front end and API drifting apart' },
          problem: {
            pt: 'Tipos escritos à mão no front quebravam em silêncio quando a API mudava.',
            en: 'Hand-written types in the front end broke silently whenever the API changed.',
          },
          solution: {
            pt: 'Migrei o front para um cliente gerado do contrato OpenAPI/Zod; a divergência vira erro de compilação.',
            en: 'I moved the front end to a client generated from the OpenAPI/Zod contract; drift becomes a compile error.',
          },
        },
      ],
    },
  },
  {
    id: 'agents-platform',
    title: 'Agents Platform',
    description: {
      pt: 'Plataforma multiempresa para configurar agentes de IA no WhatsApp, com empresas e rascunhos versionados. Modo copiloto e custo por agente em construção.',
      en: 'Multi-tenant platform for configuring AI agents on WhatsApp, with companies and versioned drafts. Copilot mode and per-agent cost are still being built.',
    },
    tags: ['NestJS', 'Fastify', 'React', 'BullMQ', 'PostgreSQL', 'pgvector'],
    image: '/case-screenshots/agents-platform/cover-2026-11.webp',
    featured: true,
    status: { pt: 'Em desenvolvimento', en: 'In development' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Um painel onde cada empresa atendida ganha agentes de IA com instruções, conhecimento, ferramentas e canais.',
          en: 'A dashboard where each company served gets AI agents with instructions, knowledge, tools and channels.',
        },
        audience: {
          pt: 'Operações de atendimento que querem IA no WhatsApp sem perder o controle do que o agente responde e do quanto ele custa.',
          en: 'Customer service teams that want AI on WhatsApp without losing control over what the agent answers and how much it costs.',
        },
        value: {
          pt: 'O plano é o agente subir em etapas (observação, copiloto, autônomo), com custo visível por agente. A primeira entrega cobre a central de agentes e o editor.',
          en: 'The plan is for the agent to go live in stages (observation, copilot, autonomous), with visible cost per agent. The first delivery covers the agent hub and the editor.',
        },
      },
      overview: {
        problem: {
          pt: 'Agentes de IA em atendimento costumam ir direto para produção, sem versão, sem revisão humana e sem saber quanto cada um custa.',
          en: 'AI agents in customer service tend to go straight to production, with no versioning, no human review and no idea what each one costs.',
        },
        solution: {
          pt: 'Um núcleo comum com empresas, agentes e rascunhos versionados. Laboratório de testes, modo copiloto e limites de custo vêm nas próximas etapas.',
          en: 'A shared core with companies, agents and versioned drafts. A testing lab, copilot mode and cost limits come in the next stages.',
        },
        role: {
          pt: 'Produto, arquitetura, backend e frontend.',
          en: 'Product, architecture, backend and frontend.',
        },
      },
      roleAreas: [
        { pt: 'Arquitetura do núcleo e das edições', en: 'Core and editions architecture' },
        { pt: 'API e filas', en: 'API and queues' },
        { pt: 'Painel React', en: 'React dashboard' },
        { pt: 'Integração com WhatsApp', en: 'WhatsApp integration' },
      ],
      valueFocus: [
        { pt: 'Versões e revisão antes de ativar', en: 'Versions and review before activation' },
        { pt: 'Autonomia em etapas (em construção)', en: 'Autonomy in stages (under construction)' },
        { pt: 'Custo visível por agente', en: 'Visible cost per agent' },
      ],
      architecture: [
        {
          category: { pt: 'Backend', en: 'Backend' },
          technologies: [
            {
              name: 'NestJS + Fastify',
              description: {
                pt: 'API do painel e dos canais, com identidade interna e empresas.',
                en: 'API for the dashboard and the channels, with internal identity and companies.',
              },
            },
            {
              name: 'BullMQ + Redis',
              description: {
                pt: 'Filas para mensagens, análises e tarefas dos agentes.',
                en: 'Queues for messages, analyses and agent tasks.',
              },
            },
            {
              name: 'PostgreSQL + pgvector + Drizzle',
              description: {
                pt: 'Dados, rascunhos versionados e base de conhecimento com busca vetorial.',
                en: 'Data, versioned drafts and a knowledge base with vector search.',
              },
            },
          ],
        },
        {
          category: { pt: 'Frontend', en: 'Frontend' },
          technologies: [
            {
              name: 'React + Vite',
              description: {
                pt: 'Central de agentes, editor guiado e caixa de conversas.',
                en: 'Agent hub, guided editor and conversation inbox.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Editor guiado', en: 'Guided editor' },
          description: {
            pt: 'Papel, tom, público, limites e quando chamar uma pessoa, salvos como rascunho versionado.',
            en: 'Role, tone, audience, limits and when to call a person, saved as a versioned draft.',
          },
        },
        {
          title: { pt: 'Conversas (em construção)', en: 'Conversations (under construction)' },
          description: {
            pt: 'Caixa de conversas com modo copiloto: o agente sugere e a pessoa aprova, edita ou responde.',
            en: 'Conversation inbox with copilot mode: the agent suggests and the person approves, edits or replies.',
          },
        },
        {
          title: { pt: 'Empresas e agentes', en: 'Companies and agents' },
          description: {
            pt: 'Cada empresa atendida tem seus agentes, canais e configurações.',
            en: 'Each company served has its own agents, channels and settings.',
          },
        },
        {
          title: { pt: 'Custos (em construção)', en: 'Costs (under construction)' },
          description: { pt: 'Consumo e limites acompanhados por agente.', en: 'Usage and limits tracked per agent.' },
        },
      ],
      challenges: [
        {
          title: { pt: 'Um produto, várias operações', en: 'One product, several operations' },
          problem: {
            pt: 'A mesma base precisa servir uso próprio e operadoras com marca, dados e segredos separados.',
            en: 'The same base has to serve in-house use and operators with separate branding, data and secrets.',
          },
          solution: {
            pt: 'Núcleo comum com edições que fixam uma versão do núcleo e mantêm configuração e dados próprios.',
            en: 'A shared core with editions that pin a core version and keep their own configuration and data.',
          },
        },
        {
          title: { pt: 'Edições concorrentes', en: 'Concurrent edits' },
          problem: {
            pt: 'Duas pessoas editando o mesmo agente sobrescreviam o trabalho uma da outra.',
            en: 'Two people editing the same agent would overwrite each other’s work.',
          },
          solution: {
            pt: 'Rascunhos com versão; conflito de edição pede revisão explícita antes de salvar.',
            en: 'Versioned drafts; an edit conflict asks for an explicit review before saving.',
          },
        },
      ],
    },
  },
  {
    id: 'maria-comprou',
    title: 'Maria Comprou',
    description: {
      pt: 'Site de achadinhos com ofertas selecionadas, alimentado por automação: filas de coleta, publicação no Telegram, painel administrativo, servidor MCP e agente de IA.',
      en: 'Deals site with hand-picked offers, powered by automation: collection queues, Telegram publishing, admin panel, MCP server and AI agent.',
    },
    tags: ['Astro', 'Fastify', 'BullMQ', 'PostgreSQL', 'Directus', 'MCP'],
    image: '/case-screenshots/maria-comprou/cover-2026-11.webp',
    status: { pt: 'Produto próprio', en: 'Own product' },
    privateProject: true,
    detailed: {
      summary: {
        what: {
          pt: 'Um site de ofertas curadas em que a coleta, a publicação e a divulgação rodam por automação.',
          en: 'A site of curated deals where collection, publishing and promotion run on automation.',
        },
        audience: {
          pt: 'Quem segue o perfil e quer ofertas boas sem garimpar em várias lojas.',
          en: 'People who follow the profile and want good deals without hunting across several stores.',
        },
        value: {
          pt: 'A curadoria vira operação: o agente de IA usa as ferramentas do servidor MCP para cuidar do catálogo e da divulgação.',
          en: 'Curation becomes an operation: the AI agent uses the MCP server’s tools to look after the catalogue and the promotion.',
        },
      },
      overview: {
        problem: {
          pt: 'Publicar achadinhos à mão no site e no Telegram é trabalho repetitivo e não escala.',
          en: 'Publishing deals by hand on the site and on Telegram is repetitive work and does not scale.',
        },
        solution: {
          pt: 'Monorepo com site Astro, API Fastify, workers em fila, painel Directus, servidor MCP e um agente de IA que opera o fluxo.',
          en: 'Monorepo with an Astro site, a Fastify API, queue workers, a Directus panel, an MCP server and an AI agent that runs the flow.',
        },
        role: {
          pt: 'Produto, arquitetura, backend, site e automação.',
          en: 'Product, architecture, backend, site and automation.',
        },
      },
      roleAreas: [
        { pt: 'Site público em Astro', en: 'Public site in Astro' },
        { pt: 'API e workers', en: 'API and workers' },
        { pt: 'Automação com MCP e agente de IA', en: 'Automation with MCP and an AI agent' },
        { pt: 'Infraestrutura com Docker', en: 'Infrastructure with Docker' },
      ],
      valueFocus: [
        { pt: 'Automação de ponta a ponta', en: 'End-to-end automation' },
        { pt: 'Operação por agente com aprovação humana', en: 'Agent-run operation with human approval' },
      ],
      architecture: [
        {
          category: { pt: 'Plataforma', en: 'Platform' },
          technologies: [
            {
              name: 'Astro',
              description: {
                pt: 'Site público rápido, com categorias, mais vistos e sugestão de ofertas.',
                en: 'Fast public site, with categories, most viewed and offer suggestions.',
              },
            },
            {
              name: 'Fastify + BullMQ/Redis',
              description: {
                pt: 'API e workers que coletam, normalizam e publicam ofertas.',
                en: 'API and workers that collect, normalize and publish offers.',
              },
            },
            {
              name: 'PostgreSQL + Directus',
              description: { pt: 'Dados das ofertas e painel administrativo.', en: 'Offer data and admin panel.' },
            },
            {
              name: 'MCP + CLI',
              description: {
                pt: 'Ferramentas para o agente de IA operar o catálogo e o Telegram.',
                en: 'Tools for the AI agent to run the catalogue and Telegram.',
              },
            },
          ],
        },
      ],
      features: [
        {
          title: { pt: 'Ofertas por categoria', en: 'Offers by category' },
          description: {
            pt: 'Grade de ofertas com desconto, preço anterior e link para a loja.',
            en: 'Offer grid with discount, previous price and a link to the store.',
          },
        },
        {
          title: { pt: 'Mais vistos', en: 'Most viewed' },
          description: {
            pt: 'Ordenação pelos cliques reais dos últimos dias.',
            en: 'Ordering by real clicks over the last few days.',
          },
        },
        {
          title: { pt: 'Sugestões da comunidade', en: 'Community suggestions' },
          description: {
            pt: 'Formulário para enviar um achadinho para a curadoria.',
            en: 'A form to send a deal to the curators.',
          },
        },
        {
          title: { pt: 'Telegram e agente', en: 'Telegram and agent' },
          description: {
            pt: 'Publicação automática no Telegram e um agente de IA que opera o fluxo pelo MCP.',
            en: 'Automatic publishing on Telegram and an AI agent that runs the flow through MCP.',
          },
        },
      ],
      challenges: [
        {
          title: { pt: 'Um monorepo de muitos serviços', en: 'A monorepo with many services' },
          problem: {
            pt: 'Site, API, workers, painel, MCP e agente somam cerca de 18 pacotes; subir tudo para mexer só no site é lento e ruidoso.',
            en: 'Site, API, workers, panel, MCP and agent add up to about 18 packages; starting everything to touch only the site is slow and noisy.',
          },
          solution: {
            pt: 'Turborepo com pnpm e um modo de desenvolvimento que sobe só o site e a API, com Postgres e Redis em Docker.',
            en: 'Turborepo with pnpm and a development mode that starts only the site and the API, with Postgres and Redis in Docker.',
          },
        },
      ],
    },
  },
];
