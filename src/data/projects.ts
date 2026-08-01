// src/data/projects.ts

export interface Technology {
  name: string;
  description: string;
}

export interface ArchitectureCategory {
  category: string;
  technologies: Technology[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectSummary {
  what: string;
  audience: string;
  value: string;
}

export interface ProjectContext {
  problem: string;
  motivation: string;
}

export interface ProjectStage {
  label: string;
  items: string[];
}

export interface ProjectDetailed {
  summary?: ProjectSummary;
  context?: ProjectContext;
  overview: {
    problem: string;
    solution: string;
    role: string;
  };
  roleAreas?: string[];
  valueFocus?: string[];
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
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  backendUrl?: string;
  featured?: boolean;
  status: string;
  privateProject?: boolean;
  detailed: ProjectDetailed;
}

export const projects: Project[] = [
  {
    id: 'ascend',
    title: 'ASCEND',
    description:
      'Plataforma de gestão financeira com transações, relatórios, projeções de saldo e um centro para organizar contas e clientes.',
    tags: ['Monorepo', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'Prisma', 'Turbo'],
    image: '/case-screenshots/ascend/orders-dashboard-wide-2026.png',
    liveUrl: 'https://ascend-web-psi.vercel.app',
    githubUrl: 'https://github.com/IcaroAguiar/ASCEND',
    featured: true,
    privateProject: true,
    status: 'Em Evolução',
    detailed: {
      summary: {
        what:
          'Produto financeiro multi-superfície que centraliza operação de recebíveis, gestão de clientes, transações, recorrência, billing e emissão fiscal.',
        audience:
          'Profissionais liberais, pequenas operações B2B e equipes que precisam tratar cobrança, caixa e operação em um único sistema.',
        value:
          'Reduz fricção operacional, substitui o legado instável e cria uma base única de verdade para finanças, cobrança e expansão de módulos.',
      },
      context: {
        problem:
          'O produto nasceu para substituir um sistema legado instável e fragmentado que já não sustentava cobrança, recebíveis e operação financeira com confiança.',
        motivation:
          'A nova versão precisava suportar crescimento real de produto, web e mobile convivendo com a mesma base de domínio, além de abrir espaço para billing, fiscal e governança de workspace.',
      },
      overview: {
        problem:
          'Era necessário sair de um app de finanças isolado para uma plataforma mais robusta, com gestão de recebíveis, cobrança B2B, fluxo de caixa e evolução controlada do domínio.',
        solution:
          'Estruturei um monorepo com apps separados para web, mobile e API, contratos compartilhados e módulos de domínio que sustentam cobrança, transações, billing, fiscal e administração.',
        role: 'Produto, arquitetura, backend, frontend web, mobile, design system e operação técnica.',
      },
      roleAreas: [
        'Product discovery e definição de escopo',
        'Arquitetura do monorepo',
        'Backend NestJS + Prisma',
        'Frontend web em Next.js',
        'App mobile em Expo/React Native',
        'Billing, fiscal e observabilidade',
      ],
      valueFocus: [
        'Modernização segura do legado',
        'Centralização de fluxos financeiros e de cobrança',
        'Base de produto preparada para novos módulos',
        'Redução de atrito operacional no dia a dia',
      ],
      stage: {
        label: 'Monorepo ativo e em evolução contínua',
        items: [
          'apps/api com módulos financeiros, billing, fiscal e admin',
          'apps/web com landing, área autenticada, workspace e painéis administrativos',
          'apps/mobile mantendo operação mobile complementar via Expo',
          'packages/shared para reutilização de contratos e tipos',
        ],
      },
      architecture: [
        {
          category: 'Monorepo e superfícies',
          technologies: [
            {
              name: 'pnpm + Turborepo',
              description:
                'Coordena apps e pacote compartilhado com pipelines de build, lint, typecheck e testes.',
            },
            {
              name: 'Next.js 16 no web',
              description:
                'Camada pública, autenticada e administrativa com foco em densidade operacional e performance.',
            },
            {
              name: 'Expo / React Native no mobile',
              description:
                'App complementar com autenticação, transações, devedores, contas, assinaturas e notificações.',
            },
          ],
        },
        {
          category: 'Core de domínio',
          technologies: [
            {
              name: 'NestJS + Prisma + PostgreSQL',
              description:
                'Base transacional para clientes, dívidas, alocações, convites, categorias, metas e workspace.',
            },
            {
              name: 'Better Auth + tenancy',
              description:
                'Camada de autenticação e controle de acesso preparada para workspaces, membros e contexto administrativo.',
            },
            {
              name: 'Packages compartilhados',
              description:
                'Tipos e contratos reaproveitados entre apps para reduzir divergência e custo de manutenção.',
            },
          ],
        },
        {
          category: 'Expansão operacional',
          technologies: [
            {
              name: 'Billing e feature flags',
              description:
                'Módulos de assinatura, entitlements, flags e planos em runtime para crescimento comercial do produto.',
            },
            {
              name: 'Fiscal + OTel',
              description:
                'Camada fiscal com emissão, reconciliação e diagnósticos, além de observabilidade estruturada.',
            },
          ],
        },
      ],
      modules: [
        {
          title: 'Workspace financeiro e clientes',
          description:
            'Fluxos para clientes, transações, dívidas, alocações em cascata, metas, membros e centro financeiro.',
        },
        {
          title: 'Cobrança, billing e mensageria',
          description:
            'Regras para cobrança, templates, mensagens agendadas, assinatura, entitlements e billing runtime.',
        },
        {
          title: 'Operação fiscal e administração',
          description:
            'Módulos de fiscal, auditoria, observabilidade, feature flags e gestão administrativa do ambiente.',
        },
      ],
      decisions: [
        {
          title: 'Monorepo em vez de repositórios soltos',
          description:
            'A decisão reduz divergência entre web, mobile e API e permite evolução coordenada do produto.',
        },
        {
          title: 'Web como centro operacional',
          description:
            'O produto foi reposicionado para fluxo financeiro e cobrança com mais densidade, mantendo o mobile como extensão valiosa.',
        },
        {
          title: 'Fiscal, billing e tenancy como blocos de plataforma',
          description:
            'Esses módulos deixam claro que o ASCEND não é só um CRUD financeiro, mas uma base expandível de produto.',
        },
      ],
      features: [
        {
          title: 'Fluxo de recebíveis e cobrança',
          description:
            'Clientes, dívidas, alocações, cobrança e mensageria organizados para operação diária com menos atrito.',
        },
        {
          title: 'Workspace com billing e governança',
          description:
            'Estrutura de workspaces, produtos, pedidos, membros, client accounts, entitlements e feature flags.',
        },
        {
          title: 'Camada fiscal especializada',
          description:
            'Emissão, certificados, pré-visualização, reconciliação e trilha técnica para operação fiscal controlada.',
        },
        {
          title: 'Web + mobile + observabilidade',
          description:
            'O produto já opera com múltiplas superfícies e documentação de observabilidade para crescimento com menos cegueira operacional.',
        },
      ],
      challenges: [
        {
          title: 'Reposicionamento de produto',
          problem:
            'Era preciso sair de um app mais restrito e reconstruir o produto como plataforma, sem repetir limitações do legado.',
          solution:
            'Defini um monorepo com fronteiras claras e módulos capazes de sustentar billing, fiscal, administração e novas trilhas de crescimento.',
        },
        {
          title: 'Convivência entre simplicidade e profundidade operacional',
          problem:
            'O produto precisava continuar usável no dia a dia, mas sem sacrificar regras críticas de cobrança, auditoria e governança.',
          solution:
            'A interface web foi organizada por áreas operacionais e a API foi estruturada por módulos, isolando complexidade sem espalhar acoplamento.',
        },
      ],
    },
  },
  {
    id: 'rosana-site',
    title: 'Transmutar',
    description:
      'Website institucional para apresentar processos terapêuticos, explicar a abordagem e conduzir visitantes ao agendamento.',
    tags: ['Web', 'SEO', 'Conteúdo', 'Responsivo'],
    image: '/case-screenshots/transmutar/cover-public-2026.png',
    liveUrl: 'https://academiatransmutar.com.br/',
    privateProject: true,
    status: 'Projeto Privado',
    featured: false,
    detailed: {
      summary: {
        what:
          'Site institucional focado em presença digital, posicionamento de marca e captação de contatos qualificados.',
        audience:
          'Pessoas e empresas que precisam entender rapidamente a proposta da marca e avançar para contato ou agendamento.',
        value:
          'Organiza credibilidade, mensagem e CTA em uma superfície enxuta, preparada para descoberta orgânica e conversão.',
      },
      context: {
        problem:
          'A marca precisava de uma presença digital mais clara, confiável e orientada a contato, sem cair em um institucional frio ou genérico.',
        motivation:
          'O objetivo era consolidar serviços, autoridade e fluxo de contato em uma única página, com leitura rápida e tom mais maduro.',
      },
      overview: {
        problem:
          'A marca precisava de presença digital que transmitisse confiança e convertesse para agendamentos e contatos.',
        solution:
          'Desenvolvi uma landing page orientada para clareza de mensagem, storytelling curto e CTAs diretos em pontos estratégicos.',
        role: 'Desenvolvedor Frontend',
      },
      roleAreas: [
        'Arquitetura de landing page',
        'Frontend em Next.js',
        'Estrutura de SEO',
        'Direcao visual e hierarquia editorial',
      ],
      valueFocus: [
        'Credibilidade digital imediata',
        'Mensagem mais clara sobre servicos',
        'Conversao para contato sem friccao',
      ],
      stage: {
        label: 'Projeto entregue e orientado para presenca institucional',
        items: [
          'Pagina inicial com narrativa de autoridade e servicos',
          'Fluxo de CTA distribuido ao longo da leitura',
          'Base de SEO para descoberta organica',
          'Estrutura leve para futuras expansoes de conteudo',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'Next.js',
              description: 'Roteamento e SSR para SEO de página institucional.',
            },
            {
              name: 'Tailwind CSS',
              description: 'Tokenização visual com componentes consistentes para rapidez de evolução.',
            },
            {
              name: 'Acessibilidade',
              description: 'Hierarquia semântica, contraste e navegação eficiente por teclado.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Posicionamento Institucional',
          description: 'Seções de autoridade, serviços e diferenciação com narrativa objetiva.',
        },
        {
          title: 'Fluxo de Contato',
          description: 'CTA principal no topo e no final para aumentar conversões de demanda.',
        },
        {
          title: 'SEO Editorial',
          description:
            'Estrutura semântica otimizada para buscas locais e relevância de página inicial.',
        },
        {
          title: 'Design Direto',
          description: 'Componentes de baixo ruído visual com forte foco em leitura e clareza.',
        },
      ],
      modules: [
        {
          title: 'Apresentacao da proposta',
          description:
            'Hero, blocos de autoridade e secoes de servicos organizados para explicar rapidamente o valor do trabalho.',
        },
        {
          title: 'Captura de demanda',
          description:
            'CTAs curtos e distribuicao de pontos de contato para reduzir hesitacao do usuario ao longo da pagina.',
        },
      ],
      decisions: [
        {
          title: 'Landing enxuta em vez de site extenso',
          description:
            'A estrutura foi concentrada em uma unica entrada para evitar dispersao e melhorar a taxa de contato.',
        },
        {
          title: 'Tom institucional com leitura curta',
          description:
            'O conteudo evita excesso de texto e usa hierarquia editorial para passar confianca sem cansar o usuario.',
        },
      ],
      challenges: [
        {
          title: '👁️ Distintividade Visual',
          problem:
            'Evitar páginas muito genéricas e criar identidade visual percebida em poucos segundos.',
          solution:
            'Criei uma hierarquia editorial com tipografia de impacto, contraste controlado e espaçamento generoso.',
        },
      ],
    },
  },
  {
    id: 'kosmedico-lp',
    title: 'Kosmedico',
    description:
      'Experiência multilíngue para avaliação estética, apresentação de tratamentos e captação de contatos em Zürich.',
    tags: ['Web', 'Multilíngue', 'SEO', 'Responsivo'],
    image: '/case-screenshots/kosmedico/cover-public-2026.png',
    liveUrl: 'https://kosmedico.ch',
    status: 'Em Produção',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Landing page institucional para apresentar servicos, autoridade e pontos de contato em um fluxo unico.',
        audience:
          'Leads que chegam por busca, indicacao ou trafego de campanhas e precisam entender rapidamente o posicionamento da marca.',
        value:
          'Combina clareza comercial, prova social e estrutura responsiva para apoiar descoberta e conversao.',
      },
      context: {
        problem:
          'Era preciso apresentar servicos e credibilidade em uma unica superficie, sem transformar a pagina em um catalogo pesado.',
        motivation:
          'O projeto exigia leitura objetiva, boa presenca mobile e base de SEO para manter descoberta organica consistente.',
      },
      overview: {
        problem:
          'Unificar posicionamento e conversão em uma única página de entrada para novos clientes.',
        solution:
          'Desenvolvi narrativa visual por seções com micro-histórias e prova de autoridade clínica.',
        role: 'Desenvolvedor Frontend',
      },
      roleAreas: [
        'Frontend institucional',
        'Arquitetura de secoes',
        'Responsividade',
        'SEO on-page',
      ],
      valueFocus: [
        'Leitura orientada a conversao',
        'Clareza comercial da proposta',
        'Descoberta organica com base semantica',
      ],
      stage: {
        label: 'Landing entregue e operando como ponto principal de entrada',
        items: [
          'Secoes de servicos e autoridade consolidadas',
          'CTAs contextuais ao longo do fluxo',
          'Estrutura responsiva e otimizada para leitura mobile',
          'Base de SEO implementada para indexacao institucional',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'Next.js',
              description: 'Performance e estrutura SSR para páginas institucionais.',
            },
            {
              name: 'Design Tokens',
              description: 'Padronização visual para manter consistência entre blocos e dispositivos.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Arquitetura de Seções',
          description: 'Roteiro de leitura com progressão de confiança do lead.',
        },
        {
          title: 'Perfis e Prova Social',
          description:
            'Área dedicada para apresentar serviços, experiência e credenciais do projeto.',
        },
        {
          title: 'CTAs Contextuais',
          description: 'Convite ao contato em momentos estratégicos do fluxo de leitura.',
        },
      ],
      modules: [
        {
          title: 'Sequencia de descoberta',
          description:
            'A pagina conduz o usuario por valor percebido, confianca e convite ao contato sem excesso de blocos concorrendo.',
        },
        {
          title: 'Blocos de conversao',
          description:
            'Chamadas estrategicas para contato entram nos pontos em que a proposta ja foi suficientemente entendida.',
        },
      ],
      decisions: [
        {
          title: 'Narrativa por secoes em vez de texto corrido',
          description:
            'A organizacao em blocos melhora escaneabilidade e reduz abandono em trafego frio.',
        },
        {
          title: 'Prova social inserida na jornada',
          description:
            'Autoridade e contexto entram no momento certo da leitura, sem parecer apendice decorativo.',
        },
      ],
      challenges: [
        {
          title: 'Jornada de Conteúdo',
          problem: 'Evitar sobrecarga de conteúdo com mensagem coerente para públicos distintos.',
          solution:
            'Organizei blocos por intenção do usuário: compreender, confiar e agir.',
        },
      ],
    },
  },
  {
    id: 'tatiane-aguiar',
    title: 'Aguiar Ambiental',
    description:
      'Website institucional com foco em posicionamento da marca, apresentacao de servicos e conversao para contato.',
    tags: ['React', 'SEO', 'Personal Brand', 'Landing Page', 'Vercel'],
    image: '/case-screenshots/aguiar-ambiental/cover.png',
    status: 'Em Produção',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Website institucional focado em posicionamento da marca, apresentacao de servicos e captacao de contatos.',
        audience:
          'Clientes e parceiros que precisam entender rapidamente a proposta da marca, os servicos e a forma de contato.',
        value:
          'Transforma a apresentacao da marca em uma superficie mais clara, confiavel e util para novas oportunidades.',
      },
      context: {
        problem:
          'A marca precisava de uma apresentacao mais clara e profissional sem perder objetividade comercial.',
        motivation:
          'O site foi desenhado para funcionar como vitrine institucional e ao mesmo tempo como ponto de entrada para novas demandas.',
      },
      overview: {
        problem:
          'Apresentar a marca com clareza e manter o site util para captacao de contatos.',
        solution:
          'Criei uma estrutura editorial com hierarquia entre contexto, servicos e chamada a acao.',
        role: 'Desenvolvedor Frontend',
      },
      roleAreas: [
        'Frontend em React',
        'Estrutura de personal brand',
        'SEO basico institucional',
        'Hierarquia editorial',
      ],
      valueFocus: [
        'Posicionamento institucional mais claro',
        'Melhor leitura de servicos e diferenciais',
        'Canal direto para oportunidades',
      ],
      stage: {
        label: 'Projeto publicado para presenca institucional e conversao de contatos',
        items: [
          'Secoes de apresentacao e autoridade',
          'Blocos de servicos e contexto da marca',
          'CTA direto para contato',
          'Estrutura leve e responsiva',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'React',
              description: 'Blocos semânticos para leitura por recrutadores e clientes.',
            },
            {
              name: 'SEO',
              description: 'Metadados e estrutura para rastreamento orgânico correto.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Portfólio de Impacto',
          description: 'Destaque de entregas e narrativa curta de autoridade.',
        },
        {
          title: 'Contato Direto',
          description: 'Canal de mensagem com proposta clara para próximos passos.',
        },
      ],
      modules: [
        {
          title: 'Marca e narrativa institucional',
          description:
            'A pagina organiza tom, proposta e servicos sem depender de textos longos ou estruturas excessivamente corporativas.',
        },
        {
          title: 'Contato e proximos passos',
          description:
            'O fluxo final reduz atrito para quem deseja iniciar conversa profissional ou comercial.',
        },
      ],
      decisions: [
        {
          title: 'Tono pessoal com estrutura objetiva',
          description:
            'A pagina evita tanto o excesso de formalidade quanto o excesso de informalidade para manter utilidade real.',
        },
        {
          title: 'Foco em leitura rapida',
          description:
            'A informacao principal foi organizada para ser entendida em poucos segundos por recrutadores e clientes.',
        },
      ],
      challenges: [
        {
          title: 'Posicionamento Pessoal',
          problem:
            'Equilibrar tom pessoal e profissional sem perder objetividade de negócio.',
          solution:
            'Usei seções curtas, copy direta e fluxo de contato único com forte direcionamento.',
        },
      ],
    },
  },
  {
    id: 'neo-constrictor',
    title: 'Neo Constrictor',
    description:
      'Plataforma auditável de workflow documental e tramitação interinstitucional, construída em monorepo com API NestJS, área do pesquisador e painel administrativo.',
    tags: ['Monorepo', 'NestJS', 'React', 'Vite', 'Prisma', 'Zod', 'Workflow'],
    image: '/case-screenshots/neo-constrictor/projects-workspace-2026.png',
    githubUrl: 'https://github.com/INPA-Constrictor/neo-constrictor',
    featured: true,
    status: 'Repositório Privado',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Plataforma para submissão, tramitação e acompanhamento de processos de pesquisa com auditoria ponta a ponta e evolução controlada.',
        audience:
          'Pesquisadores, administradores e atores institucionais que precisam operar workflows documentais com rastreabilidade.',
        value:
          'Tira o domínio da lógica de CRUD simples e o reposiciona como plataforma auditável de workflow, com fundação adequada para autorização contextual.',
      },
      context: {
        problem:
          'O legado Scriptcase não podia continuar sendo a referência estrutural de um domínio que exige histórico, identidade forte e rastreabilidade interinstitucional.',
        motivation:
          'A construção do MVP precisava nascer com fronteiras corretas de auth, identidade, contratos e workflow para não deformar o domínio no início.',
      },
      overview: {
        problem:
          'A plataforma precisava tratar tramitação documental e autorização contextual como problema de produto e arquitetura, não como um conjunto simples de telas administrativas.',
        solution:
          'Modelei uma fundação de monorepo com monólito modular no backend, contratos compartilhados, auth dual e trilha documental forte para auditoria e evolução incremental.',
        role: 'Arquitetura, backend, frontend do pesquisador, contratos e direção técnica do MVP.',
      },
      roleAreas: [
        'Arquitetura e modelagem de domínio',
        'Backend NestJS + Prisma',
        'Frontend researcher e admin',
        'Contratos compartilhados com Zod',
        'Fundação de auth, identidade e RBAC contextual',
      ],
      valueFocus: [
        'Modernização estruturada do legado',
        'Auditoria ponta a ponta',
        'Autorização contextual em vez de role simplista',
        'Evolução segura do workflow documental',
      ],
      stage: {
        label: 'Fundação do MVP em construção com decisões estruturais travadas',
        items: [
          'apps/api, web-researcher e web-admin no mesmo monorepo',
          'roadmap-base, ADRs e planos de auth/onboarding já documentados',
          'fluxos iniciais de login, retorno auth e onboarding do pesquisador',
          'contratos compartilhados e UI package para consistência entre superfícies',
        ],
      },
      architecture: [
        {
          category: 'Fundação da plataforma',
          technologies: [
            {
              name: 'Monorepo com pnpm + turbo',
              description:
                'Organiza apps, contratos e UI compartilhada para crescimento controlado do MVP.',
            },
            {
              name: 'NestJS + Prisma + PostgreSQL',
              description:
                'Monólito modular responsável por auth, identidade, vínculo institucional e evolução do workflow.',
            },
            {
              name: 'React + Vite nos frontends',
              description:
                'Áreas separadas para pesquisador e administração, consumindo contratos estáveis do backend.',
            },
          ],
        },
        {
          category: 'Domínio e governança',
          technologies: [
            {
              name: 'Contracts com Zod',
              description:
                'Padronizam payloads e preservam fronteiras públicas entre backend e frontends.',
            },
            {
              name: 'Auth dual e RBAC contextual',
              description:
                'Login interno, preparação para GOV.br e autorização baseada em perfil, escopo, estado e vínculo.',
            },
            {
              name: 'ADR + roadmap-base',
              description:
                'As decisões arquiteturais mais sensíveis já nascem documentadas para evitar deriva de produto.',
            },
          ],
        },
      ],
      modules: [
        {
          title: 'Auth, identidade e onboarding',
          description:
            'Fluxos de entrada, retorno de autenticação, assurance de identidade e onboarding do pesquisador.',
        },
        {
          title: 'Contratos e fronteiras públicas',
          description:
            'Packages compartilhados com contratos e UI separam o domínio da implementação visual e reduzem acoplamento.',
        },
        {
          title: 'Fundação para workflow e auditoria',
          description:
            'A plataforma já nasce como workflow auditável, preparada para submissão, tramitação, revisão e histórico documental.',
        },
      ],
      decisions: [
        {
          title: 'Tratar o produto como plataforma auditável',
          description:
            'O roadmap trava a visão correta do domínio e impede que o sistema seja modelado como CRUD simplista.',
        },
        {
          title: 'Autorização contextual desde o início',
          description:
            'A fórmula de permissão combina perfil, escopo organizacional, estado, ação e vínculo com o processo.',
        },
        {
          title: 'Separação explícita entre identidade, vínculo e autorização',
          description:
            'A ADR de auth evita que o legado dite o modelo novo e preserva evolução segura do domínio.',
        },
      ],
      features: [
        {
          title: 'Base de auth e identidade',
          description:
            'Fluxos locais, preparação para GOV.br, status de identidade e reconciliação segura com o domínio.',
        },
        {
          title: 'Researcher portal e admin separados',
          description:
            'Duas superfícies dedicadas a personas diferentes, compartilhando contratos e linguagem visual.',
        },
        {
          title: 'Documentação estrutural forte',
          description:
            'Roadmap, ADRs, planos e guias tornam a evolução do MVP mais previsível e menos arbitrária.',
        },
        {
          title: 'Foco em histórico e auditabilidade',
          description:
            'O produto foi desenhado para preservar trilha de processo e evitar perda silenciosa de histórico.',
        },
      ],
      challenges: [
        {
          title: 'Modelar corretamente um domínio sensível',
          problem:
            'Workflow documental interinstitucional exige rigor em identidade, permissão e histórico; um desenho apressado comprometeria o produto desde a base.',
          solution:
            'As decisões mais sensíveis foram travadas por roadmap e ADR, com fronteiras explícitas para backend, contratos e frontends.',
        },
        {
          title: 'Não repetir o legado como arquitetura',
          problem:
            'A tentação natural seria migrar a lógica antiga para um stack novo sem reestruturar o domínio.',
          solution:
            'A plataforma foi tratada como uma base nova de workflow auditável, com auth dual, contratos estáveis e postura de evolução incremental.',
        },
      ],
    },
  },
  {
    id: 'palpitae',
    title: 'Palpitaê 26',
    description:
      'PWA mobile-first de palpites entre amigos para a Copa de 2026, com grupos privados, ranking determinístico, Pix e trilha de auditoria — desenhada para não ser um produto de aposta.',
    tags: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'PWA', 'Docker'],
    image: '/case-screenshots/palpitae/01-landing-hero.webp',
    githubUrl: 'https://github.com/IcaroAguiar/palpitae',
    featured: true,
    status: 'Open source · arquivado',
    detailed: {
      summary: {
        what:
          'Produto full-stack solo que substituiu bolões em planilha por um app web com grupos, palpites, ranking automático, pagamentos Pix e painel administrativo.',
        audience:
          'Grupos de amigos e colegas que queriam palpitar a Copa juntos, sem prêmios, apostas ou sorteios.',
        value:
          'Entrega uma vitrine de engenharia open source: domínio Go modular, SQL explícito, idempotência financeira e compliance tratado como regra de produto.',
      },
      context: {
        problem:
          'Toda Copa alguém organiza o bolão no chat e gasta o torneio copiando placares para planilha, com discussões sobre palpites atrasados e ranking recalculado na mão.',
        motivation:
          'O Brasil regula apostas e promoções com prêmio. O produto precisava ser inequivocamente um jogo social — e essa restrição tinha que viver no modelo de dados, no vocabulário e na revisão de código.',
      },
      overview: {
        problem:
          'Era preciso um app mobile-first de palpites com grupos privados, ranking confiável e acesso pago, sem cruzar a linha de produto de aposta.',
        solution:
          'Construí uma PWA React com API e worker em Go, PostgreSQL SQL-first, adapters para Pix e calendário, sessões no servidor e políticas determinísticas de pontuação e indicação.',
        role: 'Produto, arquitetura, backend Go, frontend React, operação e documentação do case study.',
      },
      roleAreas: [
        'Produto e PRD até produção',
        'API e worker em Go com pacotes de domínio',
        'PWA React com TanStack Router/Query',
        'Pagamentos Pix, indicações e saques',
        'Admin, auditoria e compliance',
      ],
      valueFocus: [
        'Constraint regulatória como regra de engenharia',
        'Idempotência em webhooks e pontuação',
        'SQL explícito e adapters nas fronteiras externas',
        'Produto completo, não protótipo',
      ],
      stage: {
        label: 'Rodou em produção durante a Copa; hoje arquivado e publicado sob MIT',
        items: [
          'apps/web — React 19 PWA mobile-first',
          'apps/api — API Go (chi), worker e CLIs',
          'PostgreSQL 17 com goose + sqlc',
          'docs/case-study, ADRs e checklist de compliance',
        ],
      },
      architecture: [
        {
          category: 'Backend e domínio',
          technologies: [
            {
              name: 'Go 1.26 + chi',
              description:
                'API HTTP com pacotes de domínio (identity, payments, groups, predictions, scoring, referrals, admin, audit) e regras explícitas de dependência.',
            },
            {
              name: 'PostgreSQL + pgx + sqlc + goose',
              description:
                'SQL explícito sem ORM, migrations versionadas e acessos tipados — priorizando auditabilidade financeira sobre conveniência.',
            },
            {
              name: 'Worker dedicado',
              description:
                'Binário separado para jobs agendados: sincronização de calendário, liberação de comissões e recálculo pós-partida.',
            },
          ],
        },
        {
          category: 'Frontend e entrega',
          technologies: [
            {
              name: 'React 19 + Vite + TanStack',
              description:
                'PWA mobile-first com Router, Query e Zod; fundação de rotas e contratos introduzida antes do checkout.',
            },
            {
              name: 'Sessões no servidor',
              description:
                'Cookies HttpOnly com sessões no PostgreSQL e Argon2id — reembolso e bloqueio com efeito imediato.',
            },
            {
              name: 'Docker Compose + Caddy',
              description:
                'Deploy em VPS única com HTTPS, estáticos e API atrás do Caddy; ambiente local offline com gateway Pix falso.',
            },
          ],
        },
        {
          category: 'Integrações e qualidade',
          technologies: [
            {
              name: 'Adapters externos',
              description:
                'Pix, calendário de jogos, e-mail e auditoria atrás de interfaces; o domínio nunca importa SDK de fornecedor.',
            },
            {
              name: 'Testes e CI',
              description:
                'go test, Vitest, Testing Library e Playwright; CI com lint, testes, build e E2E em cada pull request.',
            },
          ],
        },
      ],
      modules: [
        {
          title: 'Grupos e convites privados',
          description:
            'Grupos só por convite, com entrada pendente resolvida automaticamente quando o pagamento é confirmado.',
        },
        {
          title: 'Palpites com trava no kickoff',
          description:
            'Um palpite por partida, válido em todos os grupos do usuário; a API decide a trava pelo horário do jogo.',
        },
        {
          title: 'Pontuação e ranking determinísticos',
          description:
            'Política aditiva com crédito parcial e desempates documentados; correção de resultado substitui scores versionados.',
        },
        {
          title: 'Indicações, comissões e saques',
          description:
            'Atribuição de primeiro nível com janela, anti-autoindicação e carência antes do saque manual via Pix.',
        },
      ],
      decisions: [
        {
          title: 'Jogo social, não aposta',
          description:
            'Ranking sem prêmio, plano pago compra acesso ao software, vocabulário controlado e checklist de compliance em toda mudança.',
        },
        {
          title: 'Idempotência como preocupação de primeira classe',
          description:
            'Webhooks persistidos e reprocessáveis; pagamento confirmado dispara efeitos que não podem duplicar em reentrega.',
        },
        {
          title: 'Allowlist no provedor de jogos',
          description:
            'O adapter importa só partidas, status, placares e times — excluindo odds e dados de bookmaker na fronteira de integração.',
        },
      ],
      features: [
        {
          title: 'Contas e acesso',
          description:
            'Auth e-mail/senha, aceite versionado de termos, rate limit e planos Free (1 grupo) ou Passe Mundial (Pix único).',
        },
        {
          title: 'Visão semanal e partidas',
          description:
            'Painel que responde “tenho algo para palpitar agora?”, lista de jogos e detalhe com countdown e palpites do grupo.',
        },
        {
          title: 'Admin e auditoria',
          description:
            'Painel operacional para pagamentos, resultados, comissões e saques, com trilha de auditoria em ações críticas.',
        },
        {
          title: 'Documentação open source',
          description:
            'Case study, ADRs, glossário de domínio, CONTRIBUTING e LICENSE MIT para leitura e reuso do código.',
        },
      ],
      challenges: [
        {
          title: 'Constraint regulatória no código',
          problem:
            'Um produto de palpites fica perto da linha de apostas; marketing sozinho não bastava para manter a fronteira clara.',
          solution:
            'A restrição virou regras de domínio, vocabulário banido, checklist de compliance e allowlist na integração de jogos.',
        },
        {
          title: 'Dinheiro e ranking sem corrupção',
          problem:
            'Webhooks fora de ordem e correções de placar podem duplicar efeitos ou distorcer classificação.',
          solution:
            'Idempotência por id de pagamento, scores versionados pela política e saques manuais com comprovante para o volume real.',
        },
        {
          title: 'Projeto solo sem virar um monólito acoplado',
          problem:
            'Treze áreas de domínio num único autor tendem a virar um pacote mutuamente dependente.',
          solution:
            'Pacotes Go com dependências explícitas, adapters nas bordas e ADRs antes das fases sensíveis (checkout e calendário).',
        },
      ],
    },
  },
];
