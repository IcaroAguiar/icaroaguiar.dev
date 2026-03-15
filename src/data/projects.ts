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
      'Plataforma de gestão financeira e recebíveis construída em monorepo, combinando web, mobile e API para fluxo de caixa, cobrança, billing e operação fiscal.',
    tags: ['Monorepo', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'Prisma', 'Turbo'],
    image: '/case-screenshots/ascend/cover.png',
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
      'Website institucional com foco em posicionamento de marca, clareza de serviços e captação de contatos qualificados.',
    tags: ['Next.js', 'TypeScript', 'SEO', 'Landing Page', 'Vercel'],
    image: '/case-screenshots/transmutar/cover.png',
    liveUrl: '',
    demoUrl: '',
    githubUrl: '',
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
    id: 'bluefit-mvp',
    title: 'Bluefit',
    description:
      'Plataforma MVP para operação de agenda, reagendamento, catálogo, inbox e administração de rotinas Bluefit, construída em monorepo com web, API e worker.',
    tags: ['Monorepo', 'Next.js', 'NestJS', 'Worker', 'PostgreSQL', 'Prisma', 'Turbo'],
    image: '/case-screenshots/bluefit-mvp/cover.png',
    liveUrl: 'https://bluefit-beta.vercel.app',
    githubUrl: 'https://github.com/IcaroAguiar/bluefit-mvp',
    featured: true,
    status: 'MVP Operacional',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'MVP operacional para alunos e administradores com foco em autenticação, agenda, reagendamento, catálogo, inbox e sincronização com legado.',
        audience:
          'Operação Bluefit com perfis distintos de aluno e admin, exigindo controle de sessão, regras de reagendamento e backoffice funcional.',
        value:
          'Centraliza fluxos críticos do produto, reduz dependência manual e cria uma base sustentável para evolução do serviço.',
      },
      context: {
        problem:
          'O produto precisava validar operações reais sem depender de uma arquitetura improvisada ou de importações contínuas do legado.',
        motivation:
          'A meta era construir um MVP que já operasse com autenticação, agenda, suporte e camada administrativa suficientes para ciclos reais de uso.',
      },
      overview: {
        problem:
          'Não bastava validar uma interface simples. O MVP precisava sustentar agenda, suporte, administração e sincronização com o legado sem colapsar ao primeiro ciclo operacional.',
        solution:
          'Estruturei um monorepo com API NestJS, frontend web em Next.js e worker dedicado ao processamento assíncrono de integrações e outbox.',
        role: 'Arquitetura, backend, frontend web, integrações e organização operacional do MVP.',
      },
      roleAreas: [
        'Arquitetura de monorepo',
        'Backend NestJS + Prisma',
        'Frontend web em Next.js',
        'Worker de sincronização',
        'RBAC, inbox e operações admin',
      ],
      valueFocus: [
        'Validação de MVP com estrutura sustentável',
        'Redução de atrito entre aluno e operação interna',
        'Sincronização controlada com legado',
        'Base preparada para evolução sem refazer o produto',
      ],
      stage: {
        label: 'MVP operacional com fluxos críticos definidos',
        items: [
          'apps/api, apps/web e apps/worker rodando no mesmo monorepo',
          'RBAC por role com rotas distintas para student e admin',
          'Outbox de sincronização e docs de deploy/go-live',
          'Fluxos documentados de auth, inbox, reagendamento e operação de sessões',
        ],
      },
      architecture: [
        {
          category: 'Monorepo operacional',
          technologies: [
            {
              name: 'pnpm + Turborepo',
              description:
                'Unifica apps, cache de pipeline e execução consistente entre API, web e worker.',
            },
            {
              name: 'Next.js no web',
              description:
                'Interface para student e admin com shell compartilhado, command palette e rotas de operação.',
            },
            {
              name: 'NestJS no backend',
              description:
                'API com autenticação, catálogo, reagendamentos, inbox, suporte e operação de sessões.',
            },
          ],
        },
        {
          category: 'Domínio e integração',
          technologies: [
            {
              name: 'Prisma + PostgreSQL',
              description:
                'Fonte principal de dados com rotas de catálogo, bookings, package swaps e histórico operacional.',
            },
            {
              name: 'Worker + outbox',
              description:
                'Fila assíncrona para sincronização com legado, retries e visibilidade operacional do processamento.',
            },
            {
              name: 'Packages compartilhados',
              description:
                'Contracts, db, legacy e shared mantêm coesão entre os serviços do produto.',
            },
          ],
        },
      ],
      modules: [
        {
          title: 'Auth e perfis distintos',
          description:
            'Login, reset de senha, perfil e roteamento específico para student e admin via JWT com role.',
        },
        {
          title: 'Agenda e reagendamento',
          description:
            'Fluxos de bookings, eligible reschedules e atualização de capacidade/bloqueio de sessões no admin.',
        },
        {
          title: 'Inbox, suporte e operação',
          description:
            'Comunicação entre aluno e time operacional, além de catálogo, sessões e visão do outbox legado.',
        },
      ],
      decisions: [
        {
          title: 'Worker separado para sincronização',
          description:
            'Evita empurrar toda a complexidade do legado para a API síncrona e melhora previsibilidade operacional.',
        },
        {
          title: 'RBAC simples no MVP, mas explícito',
          description:
            'A distinção entre student e admin já nasce clara, reduzindo ambiguidades na operação diária.',
        },
        {
          title: 'Documentação de go-live desde cedo',
          description:
            'Os documentos de deploy, handoff e pre-go-live mostram um MVP pensado para operação real, não só para demo.',
        },
      ],
      features: [
        {
          title: 'Autenticação e perfil por papel',
          description:
            'Fluxos de login, reset, forgot password e perfil com distinção clara entre student e admin.',
        },
        {
          title: 'Agenda, reagendamento e operações de sessão',
          description:
            'Bookings, opções elegíveis de reagendamento, bloqueio de sessão e override de capacidade.',
        },
        {
          title: 'Inbox, suporte e catálogo',
          description:
            'Fluxos de mensagens, suporte, catálogo de locais/pacotes/turmas e geração operacional de bookings.',
        },
        {
          title: 'Sync com legado via outbox',
          description:
            'Alterações relevantes entram em fila de sincronização com processamento assíncrono e observação administrativa.',
        },
      ],
      challenges: [
        {
          title: 'MVP sem virar protótipo descartável',
          problem:
            'Era fácil cair em um MVP rápido, mas estruturalmente frágil para reagendamento, suporte e catálogo.',
          solution:
            'Escolhi um monorepo com fronteiras claras, docs de arquitetura e responsabilidades separadas por app.',
        },
        {
          title: 'Integração com legado sem contaminar o núcleo',
          problem:
            'A sincronização com sistema anterior poderia poluir a API principal e tornar o produto instável.',
          solution:
            'A fila de outbox e o worker isolam essa responsabilidade e mantêm o fluxo principal mais previsível.',
        },
      ],
    },
  },
  {
    id: 'kosmedico-lp',
    title: 'Kosmedico',
    description:
      'Landing page institucional para apresentar servicos, autoridade e facilitar descoberta organica.',
    tags: ['Next.js', 'Landing Page', 'SEO', 'Design System', 'Responsivo'],
    image: '/case-screenshots/kosmedico/cover.png',
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
          title: '🧭 Jornada de Conteúdo',
          problem: 'Evitar sobrecarga de conteúdo com mensagem coerente para públicos distintos.',
          solution:
            'Organizei blocos por intenção do usuário: compreender, confiar e agir.',
        },
      ],
    },
  },
  {
    id: 'picanhabrasil',
    title: 'Picanha Brasil',
    description:
      'Site promocional para divulgação de marca com foco em produtos gastronômicos e captação de tráfego.',
    tags: ['React', 'Landing Page', 'SEO', 'Performance', 'Vercel'],
    image: '/case-screenshots/picanha-brasil/cover.png',
    status: 'Em Produção',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Site promocional de marca com foco em campanhas, identidade visual forte e direcionamento para contato ou pedido.',
        audience:
          'Publico impactado por campanhas e canais digitais que precisa entender a marca e agir rapido.',
        value:
          'Transforma identidade gastronomica em uma pagina de impacto, mais clara para trafego pago e descoberta inicial.',
      },
      context: {
        problem:
          'A marca precisava de uma pagina mais forte para campanhas, com leitura imediata da proposta e melhor orientacao de acao.',
        motivation:
          'O projeto demandava comunicar produto e marca em poucos segundos, sem diluir a mensagem em uma estrutura confusa.',
      },
      overview: {
        problem:
          'A marca precisava de página forte para campanhas e comunicação de cardápio com identidade visual consistente.',
        solution:
          'Modelei estrutura com blocos visuais fortes e chamadas claras para ação de contato e pedidos.',
        role: 'Arquiteto e Desenvolvedor Frontend',
      },
      roleAreas: [
        'Direcao visual da landing',
        'Frontend em React',
        'Performance para campanhas',
        'Copy e hierarquia de oferta',
      ],
      valueFocus: [
        'Impacto visual imediato',
        'Mensagem clara para trafego frio',
        'Conversao por canais de contato e venda',
      ],
      stage: {
        label: 'Projeto promocional entregue para uso em campanhas e posicionamento de marca',
        items: [
          'Pagina de apresentacao da marca e oferta',
          'Canais de contato destacados em multiplos pontos',
          'Estrutura otimizada para navegacao rapida',
          'Base visual forte para campanhas sazonais',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'React',
              description: 'Componentização de blocos com foco em manutenção e legibilidade.',
            },
            {
              name: 'Performance Web',
              description: 'Imagens otimizadas e carregamento progressivo para campanhas.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Navegação Direta',
          description: 'Conteúdo direto em blocos curtos para reduzir abandono.',
        },
        {
          title: 'Apelo de Marca',
          description: 'Paleta e componentes de impacto para reforço de identidade.',
        },
        {
          title: 'Ações de Conversão',
          description: 'Botões de contato e destaque de canais de venda em todos os blocos.',
        },
      ],
      modules: [
        {
          title: 'Hero e marca',
          description:
            'Abertura visual forte para fixar proposta e identidade do negocio nos primeiros segundos.',
        },
        {
          title: 'Oferta e acao',
          description:
            'Secoes curtas explicam diferencial e levam rapidamente para os canais de pedido ou contato.',
        },
      ],
      decisions: [
        {
          title: 'Visual de campanha acima de estrutura institucional',
          description:
            'A pagina foi pensada para vender impacto e lembranca de marca, nao para funcionar como site corporativo tradicional.',
        },
        {
          title: 'Copy objetiva para baixa paciencia de leitura',
          description:
            'O texto foi reduzido ao essencial para funcionar melhor em trafego de redes e anuncios.',
        },
      ],
      challenges: [
        {
          title: '🍽️ Mensagem de Oferta',
          problem: 'Traduzir proposta de valor em poucos segundos para campanhas digitais.',
          solution:
            'Criei copy mais objetiva com hierarquia de valor e foco em diferencial competitivo.',
        },
      ],
    },
  },
  {
    id: 'daniele-landingpage',
    title: 'Daniele Wigstrom',
    description:
      'Landing page de captura com foco em conversao, lead magnet e cadastro inicial para servicos personalizados.',
    tags: ['React', 'Landing Page', 'Copy', 'Marketing', 'Forms'],
    image: '/case-screenshots/daniele-wigstrom/cover.png',
    status: 'Em Produção',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Landing page de captura com foco em lead magnet, formulario e conversao inicial para servicos personalizados.',
        audience:
          'Usuarios que chegam por campanha, conteudo ou indicacao e ainda precisam ganhar confianca antes de entrar em contato.',
        value:
          'Melhora a passagem entre interesse e cadastro com uma arquitetura de oferta mais clara e menos friccao no formulario.',
      },
      context: {
        problem:
          'A oferta nao estava bem estruturada para conversao e o formulario adicionava barreiras desnecessarias.',
        motivation:
          'Era preciso transformar a pagina em um fluxo mais eficiente de captura, com microcopy mais precisa e etapas mais leves.',
      },
      overview: {
        problem:
          'A conversão orgânica era baixa por falta de arquitetura de oferta clara e fluxo de captura.',
        solution:
          'Estructurei microcopy e CTA em etapas para reduzir dúvidas e aumentar intenção de contato.',
        role: 'Product Designer e Desenvolvedor Frontend',
      },
      roleAreas: [
        'Estruturacao de oferta',
        'Copy de conversao',
        'Frontend em React',
        'Formulario e UX de captura',
      ],
      valueFocus: [
        'Reducao de friccao no cadastro',
        'Mais clareza de beneficio',
        'Melhor transicao entre interesse e contato',
      ],
      stage: {
        label: 'Landing entregue com foco direto em captacao de leads',
        items: [
          'Hero orientado por promessa e CTA',
          'Formulario simplificado com validacao',
          'Blocos de prova e objecao antecipada',
          'Fluxo preparado para campanhas e aquisicao direta',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'React',
              description: 'Componentes reutilizáveis para blocos de oferta e formulários.',
            },
            {
              name: 'Validação de Formulário',
              description:
                'Campos orientados para reduzir erros e aumentar taxa de finalização.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Copy de Conversão',
          description: 'Texto de alto impacto com objeção antecipada e prova de contexto.',
        },
        {
          title: 'Formulário Inteligente',
          description: 'Campos progressivos e feedback imediato do estado de envio.',
        },
        {
          title: 'Design para Leads',
          description: 'Layout limpo com foco em escaneabilidade e ação rápida.',
        },
      ],
      modules: [
        {
          title: 'Promessa e proposta',
          description:
            'A abertura concentra valor percebido e objecoes principais para preparar o usuario para a captura.',
        },
        {
          title: 'Formulario e fechamento',
          description:
            'A experiencia de preenchimento foi tratada como parte central da conversao, nao como bloco secundario.',
        },
      ],
      decisions: [
        {
          title: 'Menos campos, mais contexto',
          description:
            'A reducao de friccao no formulario foi combinada com copy mais forte para sustentar a decisao de cadastro.',
        },
        {
          title: 'Design a servico da acao',
          description:
            'A hierarquia visual foi desenhada para levar o olhar ao CTA e manter a pagina util para trafego de campanha.',
        },
      ],
      challenges: [
        {
          title: '🧪 Otimização de Conversão',
          problem: 'Aumentar taxa de captura sem aumentar fricção de preenchimento.',
          solution:
            'Simplifiquei etapas, reduzi campos e destaquei benefícios no momento certo.',
        },
      ],
    },
  },
  {
    id: 'fixxcapital',
    title: 'Fixxcapital',
    description:
      'Landing page institucional para captação de investidores em renda fixa estruturada, com foco em credibilidade e conversão.',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Vercel', 'SEO', 'Conversão'],
    image: '/assets/fixxcapitalLP.png',
    demoUrl: 'https://fixxcapital-landingpage.vercel.app/',
    liveUrl: 'https://fixxcapital-landingpage.vercel.app/',
    githubUrl: '',
    privateProject: true,
    status: 'Em Produção',
    featured: false,
    detailed: {
      summary: {
        what:
          'Landing page institucional para mercado financeiro com foco em confianca, explicacao de oferta e captacao de leads.',
        audience:
          'Investidores e interessados em produtos de renda fixa estruturada que precisam perceber seguranca e clareza rapidamente.',
        value:
          'Converte uma oferta sensivel e regulada em uma experiencia mais confiavel, clara e comercialmente madura.',
      },
      context: {
        problem:
          'O projeto precisava comunicar credibilidade e produtos financeiros sem cair em excesso de ruido ou linguagem confusa.',
        motivation:
          'A pagina deveria ajudar o usuario a entender a proposta, reduzir receio e abrir caminho para conversa comercial qualificada.',
      },
      overview: {
        problem:
          'Necessidade de página institucional que comunicasse credibilidade (CVM), produtos e convertesse leads qualificados.',
        solution:
          'Consolidei seções de confiança, vitrine de produtos e CTA de contato com linguagem regulatória segura.',
        role: 'Desenvolvedor Frontend e UI/UX',
      },
      roleAreas: [
        'Frontend em Next.js',
        'UI/UX para mercado financeiro',
        'SEO institucional',
        'Arquitetura de conversao',
      ],
      valueFocus: [
        'Aumento de confianca percebida',
        'Apresentacao clara de produtos',
        'Conversao multicanal mais fluida',
      ],
      stage: {
        label: 'Landing publicada com foco comercial e institucional',
        items: [
          'Hero institucional com proposta clara',
          'Secoes de produtos e credenciais',
          'FAQ estrategico e pontos de objecao cobertos',
          'Canais de contato e captura ativos',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'Next.js',
              description: 'SSR/SSG para SEO institucional e carregamento eficiente.',
            },
            {
              name: 'Tailwind CSS',
              description: 'Sistema de tokens para manter consistência entre cards e blocos.',
            },
            {
              name: 'React',
              description: 'Componentização de blocos de conversão e FAQ.',
            },
          ],
        },
        {
          category: 'Deploy & Performance',
          technologies: [
            {
              name: 'Vercel',
              description: 'Entrega global com cache eficiente e monitoramento simplificado.',
            },
          ],
        },
      ],
      features: [
        {
          title: '🏆 Selo de Credibilidade',
          description: 'Destaques de credenciais e certificações para reduzir risco percebido.',
        },
        {
          title: '📦 Vitrine de Produtos',
          description:
            'CRIs, Debêntures e Fundos em cards objetivos com trilha clara de decisão.',
        },
        {
          title: '❓ FAQ Estratégico',
          description: 'Resposta a objeções recorrentes com linguagem acessível e objetiva.',
        },
        {
          title: '📞 Conversão Multicanal',
          description: 'Contato rápido por formulário e WhatsApp para acelerar atendimento.',
        },
      ],
      modules: [
        {
          title: 'Credibilidade e prova',
          description:
            'A pagina sustenta confianca por meio de linguagem, credenciais e apresentacao formal dos blocos principais.',
        },
        {
          title: 'Oferta e captacao',
          description:
            'Produtos e canais de contato aparecem de forma organizada para facilitar a progressao para atendimento.',
        },
      ],
      decisions: [
        {
          title: 'Sobriedade acima de efeitos visuais excessivos',
          description:
            'O contexto financeiro exigia uma interface mais controlada para aumentar confianca e reduzir ruido.',
        },
        {
          title: 'FAQ como ferramenta comercial',
          description:
            'As objecoes mais comuns foram tratadas como parte da arquitetura de conversao e nao como apendice.',
        },
      ],
      challenges: [
        {
          title: '🎯 Confiança para o Mercado Financeiro',
          problem: 'Conquistar confiança do público em ambiente com alto viés de risco e regulamentação.',
          solution:
            'Usei linguagem profissional, hierarquia visual sóbria e prova social institucional para elevar credibilidade.',
        },
      ],
    },
  },
  {
    id: 'star-agency-v2',
    title: 'Star Agency',
    description:
      'Website de agencia digital com foco em posicionamento premium, clareza comercial e captacao de clientes para projetos de alta margem.',
    tags: ['Next.js', 'Agency', 'Branding', 'Responsivo', 'SEO'],
    image: '/case-screenshots/star-agency/cover.png',
    status: 'Em Produção',
    privateProject: true,
    detailed: {
      summary: {
        what:
          'Website de agencia digital reposicionado para parecer mais premium, claro e orientado a fechamento de projetos.',
        audience:
          'Empresas e clientes em busca de servicos digitais com maior percepcao de qualidade e curadoria.',
        value:
          'Eleva posicionamento de marca e melhora a apresentacao comercial da agencia sem sacrificar velocidade e clareza.',
      },
      context: {
        problem:
          'A versao anterior precisava amadurecer percepcao visual e narrativa para competir em um mercado saturado de agencias parecidas.',
        motivation:
          'A nova versao foi pensada para comunicar mais criterio, melhor portfolio e um fluxo de contato mais eficiente para servicos de maior margem.',
      },
      overview: {
        problem: 'A nova versão precisava parecer premium sem sacrificar velocidade e clareza de oferta.',
        solution:
          'Desenvolvi uma nova versao com identidade visual mais agressiva, secao de cases e fluxos de contato simplificados.',
        role: 'Desenvolvedor e UI Designer',
      },
      roleAreas: [
        'Redesign de posicionamento',
        'Frontend em Next.js',
        'UI visual e hierarquia editorial',
        'Estrutura comercial da pagina',
      ],
      valueFocus: [
        'Reposicionamento premium da marca',
        'Clareza comercial dos servicos',
        'Melhor leitura para cold traffic',
      ],
      stage: {
        label: 'Projeto publicado com linguagem mais premium e comercial',
        items: [
          'Nova hero e secoes de servicos',
          'Blocos de prova e portfolio reorganizados',
          'Fluxos de contato simplificados',
          'Base de SEO e responsividade preservadas',
        ],
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'Next.js',
              description:
                'Navegação performática e estrutura pronta para expansão de conteúdo editorial.',
            },
            {
              name: 'Visual Language',
              description: 'Composição editorial com ritmo visual e acentos de contraste.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Página de Serviços',
          description:
            'Catálogo visual por serviço com descrição objetiva de benefício e entregável.',
        },
        {
          title: 'Sessões de Prova',
          description: 'Blocos de evidência para aumentar taxa de contato em cold traffic.',
        },
        {
          title: 'Contato guiado',
          description: 'Chamadas à ação orientadas para projeto mais provável de fechamento.',
        },
      ],
      modules: [
        {
          title: 'Oferta da agencia',
          description:
            'A estrutura principal organiza servicos e valor percebido para reduzir ambiguidade sobre o que a agencia entrega.',
        },
        {
          title: 'Prova e conversao',
          description:
            'Cases, argumentos de autoridade e CTA trabalham juntos para tornar o contato uma decisao mais natural.',
        },
      ],
      decisions: [
        {
          title: 'Editorial premium em vez de layout padrao de agencia',
          description:
            'A composicao visual busca assinatura propria e evita o padrao previsivel de templates do segmento.',
        },
        {
          title: 'Menos ruido, mais posicionamento',
          description:
            'A versao nova reduziu excesso de blocos e fortaleceu a mensagem central para clientes de maior ticket.',
        },
      ],
      challenges: [
        {
          title: '🧱 Diferenciação visual',
          problem:
            'Concorrer em um mercado saturado de páginas "parecidas" no estilo de agência.',
          solution:
            'Apliquei contraste de ritmo, micro-animações pontuais e linguagem editorial com assinatura própria.',
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
          title: '🧭 Posicionamento Pessoal',
          problem:
            'Equilibrar tom pessoal e profissional sem perder objetividade de negócio.',
          solution:
            'Usei seções curtas, copy direta e fluxo de contato único com forte direcionamento.',
        },
      ],
    },
  },
  {
    id: 'financas-api',
    title: 'Finanças API',
    description:
      'Projeto backend descontinuado que estruturou o core financeiro inicial e serviu como base para a evolucao do ASCEND.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Docker'],
    image: '/case-screenshots/neo-constrictor/cover.png',
    demoUrl: 'https://github.com/IcaroAguiar/financas-api',
    githubUrl: 'https://github.com/IcaroAguiar/financas-api',
    status: 'Open-Source',
    detailed: {
      summary: {
        what:
          'API financeira open-source descontinuada, responsavel por autenticao, regras de negocio, cobrancas e operacao transacional na fase anterior do produto.',
        audience:
          'Aplicacoes cliente e fluxos financeiros que precisavam de uma base segura para operacao de usuarios, transacoes e recorrencia na fase inicial da plataforma.',
        value:
          'Consolidou a logica financeira inicial em um backend mais previsivel e serviu como fundacao tecnica para a evolucao posterior do ASCEND.',
      },
      context: {
        problem:
          'Era necessario sair de uma logica financeira dispersa para um backend claro, seguro e mais facil de evoluir.',
        motivation:
          'A API nasceu para sustentar regras de dominio, autenticacao e recorrencia sem depender de logica espalhada no cliente, antes da consolidacao do ASCEND em monorepo.',
      },
      overview: {
        problem:
          'Havia necessidade de uma API segura e estável para suportar movimentações financeiras, recorrência e regras de cobrança.',
        solution:
          'Implementei contratos claros, validacao de payloads criticos e isolamento de contexto por usuario, criando a base tecnica que depois foi incorporada e expandida no ASCEND.',
        role: 'Desenvolvedor Backend',
      },
      roleAreas: [
        'Arquitetura backend',
        'Express e modelagem HTTP',
        'Prisma e PostgreSQL',
        'Autenticacao e regras de dominio',
      ],
      valueFocus: [
        'Seguranca de dados financeiros',
        'Separacao de contexto por usuario',
        'Base confiavel para recorrencia e cobranca',
        'Fundacao tecnica para a evolucao do ASCEND',
      ],
      stage: {
        label: 'Projeto open-source descontinuado e sucedido pela nova arquitetura do ASCEND',
        items: [
          'Rotas autenticadas e validacao por contexto',
          'Modelo relacional para transacoes e cobrancas',
          'Base dockerizada para execucao local',
          'Repositorio publico mantido como referencia tecnica da fase anterior',
        ],
      },
      architecture: [
        {
          category: 'Camada de API',
          technologies: [
            {
              name: 'Express',
              description: 'Camada HTTP modular com middlewares de autenticação e validação.',
            },
            {
              name: 'Prisma + PostgreSQL',
              description: 'Modelo relacional forte para transações, vínculos e cobranças.',
            },
          ],
        },
        {
          category: 'Segurança',
          technologies: [
            {
              name: 'JWT + RBAC',
              description: 'Camada de acesso segura para rotas sensíveis e operação de dados.',
            },
            {
              name: 'Validação de domínio',
              description: 'Checagens de regra por endpoint para evitar vazamentos e inconsistências.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Isolamento de usuário',
          description:
            'Política de consulta e gravação por tenant garantindo separação total dos dados.',
        },
        {
          title: 'Cobranças recorrentes',
          description:
            'Lógica de parcelamentos e vencimentos com histórico auditável por status.',
        },
        {
          title: 'Modelo de dados sólido',
          description: 'Entidades normalizadas para operação financeira e evolução futura.',
        },
      ],
      modules: [
        {
          title: 'Auth e protecao de acesso',
          description:
            'JWT, isolamento por usuario e middlewares de validacao seguram as fronteiras sensiveis da API.',
        },
        {
          title: 'Core financeiro',
          description:
            'As regras de transacao, cobranca e recorrencia ficaram centralizadas no backend em vez de espalhadas pelo cliente.',
        },
      ],
      decisions: [
        {
          title: 'Express modular com validacao explicita',
          description:
            'A API foi organizada para manter clareza de rotas e regras sem acoplamento excessivo.',
        },
        {
          title: 'Modelo de dados preparado para crescimento',
          description:
            'A estrutura relacional suportou o crescimento inicial do produto e ajudou a pavimentar a transicao para a arquitetura mais ampla do ASCEND.',
        },
        {
          title: 'Encerrar o projeto em favor do ASCEND',
          description:
            'Com a evolucao para um produto maior em monorepo, a continuidade passou a acontecer no ASCEND, e esta API ficou como referencia da fundacao anterior.',
        },
      ],
      challenges: [
        {
          title: '🧪 Qualidade de dados',
          problem: 'Evitar inconsistência entre transações, receitas e parcelamentos em cenários concorrentes.',
          solution:
            'Implementei validações de domínio e regras transacionais para preservar integridade.',
        },
      ],
    },
  },
  {
    id: 'face-api',
    title: 'Face API',
    description:
      'API de reconhecimento facial para registro de presenças e autenticação biométrica em tempo real.',
    tags: ['Python', 'FastAPI', 'DeepFace', 'OpenCV', 'PostgreSQL', 'Docker', 'SQLAlchemy'],
    image: '/assets/face-api-case-cover.png',
    demoUrl: '',
    githubUrl: '',
    privateProject: true,
    status: 'Repositório Privado',
    detailed: {
      summary: {
        what:
          'API de reconhecimento facial para autenticacao e presenca, com foco em verificacao rapida e trilha auditavel.',
        audience:
          'Fluxos operacionais que dependem de biometria facial com resposta em tempo real e historico confiavel.',
        value:
          'Aproxima computer vision de uso operacional real, equilibrando precisao, latencia e estrutura de backend.',
      },
      context: {
        problem:
          'O sistema precisava reconhecer usuarios com boa confianca, sem perder tempo de resposta e sem abrir mao de auditoria.',
        motivation:
          'A implementacao exigia uma base tecnica capaz de sustentar cadastro, verificacao e busca por similaridade em cenarios reais.',
      },
      overview: {
        problem:
          'Necessidade de sistema de reconhecimento facial confiável com resposta rápida e auditoria completa.',
        solution:
          'Implementei endpoints de verificação e busca por similaridade com foco em precisão e latência.',
        role: 'Desenvolvedor Backend e Especialista em Computer Vision',
      },
      roleAreas: [
        'Backend em FastAPI',
        'Integracao com DeepFace e OpenCV',
        'Modelagem de persistencia',
        'Ajuste de thresholds e performance',
      ],
      valueFocus: [
        'Reconhecimento biometrico aplicavel',
        'Baixa latencia operacional',
        'Auditoria de verificacoes e cadastros',
      ],
      stage: {
        label: 'Projeto privado com base completa para cadastro e verificacao facial',
        items: [
          'Endpoints de cadastro e verificacao implementados',
          'Busca por similaridade para identificacao 1:N',
          'Persistencia de embeddings e logs',
          'Estrutura dockerizada para execucao controlada',
        ],
      },
      architecture: [
        {
          category: 'Backend',
          technologies: [
            {
              name: 'FastAPI + Uvicorn',
              description:
                'Framework assíncrono para API com performance robusta em cenários de verificação contínua.',
            },
            {
              name: 'DeepFace',
              description: 'Reconhecimento facial com seleção de modelos por caso de uso.',
            },
            {
              name: 'OpenCV',
              description: 'Detecção de rosto e pré-processamento de imagens em tempo real.',
            },
          ],
        },
        {
          category: 'Banco de Dados',
          technologies: [
            {
              name: 'PostgreSQL',
              description: 'Armazenamento seguro de embeddings, usuários e logs.',
            },
            {
              name: 'SQLAlchemy',
              description: 'Camada ORM com contratos explícitos para consultas críticas.',
            },
          ],
        },
      ],
      features: [
        {
          title: 'Cadastro Biométrico',
          description:
            'Coleta de dados faciais com tratamento para robustez do embedding.',
        },
        {
          title: 'Verificação em tempo real',
          description:
            'Endpoint de validação 1:1 com thresholds ajustáveis por operação.',
        },
        {
          title: 'Busca por similaridade',
          description: 'Identificação 1:N com retorno das melhores correspondências.',
        },
      ],
      modules: [
        {
          title: 'Cadastro e embeddings',
          description:
            'O fluxo de entrada prepara e armazena dados biometricos para consultas futuras com melhor robustez.',
        },
        {
          title: 'Verificacao e busca',
          description:
            'A API atende tanto validacao direta quanto busca por melhores correspondencias em cenarios de identificacao.',
        },
      ],
      decisions: [
        {
          title: 'FastAPI para operacao assincorna e clara',
          description:
            'A stack favorece performance de API e manutencao mais simples em operacoes de inferencia.',
        },
        {
          title: 'Cache e warm-up para reduzir latencia',
          description:
            'A inicializacao e o reaproveitamento de embeddings ajudam a manter uso pratico do sistema.',
        },
      ],
      challenges: [
        {
          title: '🎯 Precisão vs Performance',
          problem: 'Alta precisão com latência aceitável para uso prático.',
          solution:
            'Usei warm-up de modelos e cache de embeddings para equilibrar resposta e custo computacional.',
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
    image: '',
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
];

export default projects;
