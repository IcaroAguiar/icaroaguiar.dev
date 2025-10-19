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

export interface ProjectDetailed {
  overview: {
    problem: string;
    solution: string;
    role: string;
  };
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
    title: 'Ascend',
    description:
      'App mobile de finanças pessoais com controle de transações, orçamentos e sistema de cobranças recorrentes. Push notifications e sincronização em tempo real.',
    tags: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'JWT'],
    image: '/assets/ascend-hero.png',
    demoUrl: 'https://youtube.com/shorts/P-ANNF2PoFw?feature=share',
    githubUrl: 'https://github.com/IcaroAguiar/financas-app',
    backendUrl: 'https://github.com/IcaroAguiar/financas-api',
    featured: true,
    status: 'Open-Source',
    detailed: {
      overview: {
        problem:
          'A necessidade de ter um aplicativo de finanças pessoais que fosse realmente completo e intuitivo para gerenciar transações, orçamentos e um sistema inovador de cobranças.',
        solution:
          'Desenvolvi o Ascend do zero, focando em criar uma solução robusta para gestão financeira pessoal com interface moderna e funcionalidades avançadas.',
        role: 'Desenvolvedor Full-Stack e Arquiteto de Software',
      },
      architecture: [
        {
          category: 'Frontend Mobile',
          technologies: [
            {
              name: 'React Native',
              description:
                'Desenvolvimento cross-platform para iOS e Android com código único',
            },
            {
              name: 'Expo',
              description:
                'Facilita desenvolvimento, build e deploy com ferramentas integradas',
            },
            {
              name: 'Context API',
              description:
                'Gerenciamento de estado global eficiente sem dependências externas',
            },
          ],
        },
        {
          category: 'Backend',
          technologies: [
            {
              name: 'Node.js & Express',
              description: 'API REST robusta com middleware de autenticação e validação',
            },
            {
              name: 'Prisma ORM',
              description: 'Type-safe database client com migrações automáticas',
            },
            {
              name: 'JWT',
              description: 'Autenticação stateless segura com refresh token automático',
            },
          ],
        },
        {
          category: 'Infraestrutura',
          technologies: [
            {
              name: 'PostgreSQL',
              description:
                'Banco de dados relacional para integridade e consistência dos dados',
            },
            {
              name: 'Docker',
              description: 'Containerização para desenvolvimento e deploy consistentes',
            },
            {
              name: 'Git',
              description: 'Controle de versão com branching strategy e commits semânticos',
            },
          ],
        },
      ],
      features: [
        {
          title: '🔐 Login Biométrico',
          description:
            'Autenticação segura usando biometria do dispositivo para acesso rápido e protegido.',
        },
        {
          title: '📊 Dashboard Mensal',
          description:
            'Visualização clara das finanças com gráficos e resumos mensais personalizados.',
        },
        {
          title: '💰 Gestão de Transações',
          description:
            'Controle completo de receitas e despesas com categorização automática.',
        },
        {
          title: '📝 Sistema de Cobranças',
          description:
            'Gerenciamento inovador de pagamentos parcelados e cobrança de terceiros.',
        },
      ],
      challenges: [
        {
          title: '🛡️ Segurança e Isolamento de Dados',
          problem:
            'Garantir que dados financeiros sensíveis estivessem completamente isolados entre usuários, evitando qualquer vazamento de informações.',
          solution:
            'Implementei um middleware de autenticação robusto com JWT e reforcei todas as queries do Prisma com filtros userId obrigatórios. Além disso, criei testes automatizados para validar o isolamento de dados em todos os endpoints.',
        },
      ],
    },
  },
  {
    id: 'face-api',
    title: 'Face API',
    description:
      'API de reconhecimento facial para registro de presenças e autenticação biométrica. Cadastro facial, verificação em tempo real, anti-spoofing básico e export de relatórios CSV.',
    tags: ['Python', 'FastAPI', 'DeepFace', 'OpenCV', 'PostgreSQL', 'Docker', 'SQLAlchemy'],
    image: '/assets/face-api-case-cover.png',
    demoUrl: '',
    githubUrl: '',
    privateProject: true,
    featured: false,
    status: 'Repositório Privado',
    detailed: {
      overview: {
        problem:
          'Necessidade de sistema de reconhecimento facial confiável para controle de presenças e autenticação biométrica com alta precisão.',
        solution:
          'API REST com FastAPI e DeepFace para cadastro e verificação facial em tempo real, com suporte a múltiplos modelos e detectores.',
        role: 'Desenvolvedor Backend e Especialista em Computer Vision',
      },
      architecture: [
        {
          category: 'Backend',
          technologies: [
            {
              name: 'FastAPI + Uvicorn',
              description: 'Framework moderno para APIs de alta performance com async/await',
            },
            {
              name: 'DeepFace',
              description: 'Framework de deep learning para reconhecimento facial com múltiplos modelos',
            },
            {
              name: 'OpenCV',
              description: 'Processamento de imagens e detecção facial em tempo real',
            },
          ],
        },
        {
          category: 'Banco de Dados',
          technologies: [
            {
              name: 'PostgreSQL',
              description: 'Armazenamento de embeddings faciais e logs de verificação',
            },
            {
              name: 'SQLAlchemy',
              description: 'ORM type-safe para gerenciamento de dados',
            },
          ],
        },
        {
          category: 'Segurança & Deploy',
          technologies: [
            {
              name: 'API Key Authentication',
              description: 'Header x-api-key para controle de acesso aos endpoints',
            },
            {
              name: 'Docker',
              description: 'Containerização para deploy consistente e isolamento',
            },
          ],
        },
      ],
      features: [
        {
          title: '📸 Cadastro Biométrico',
          description:
            'Enroll de usuários com extração e armazenamento de embeddings faciais únicos.',
        },
        {
          title: '✅ Verificação em Tempo Real',
          description:
            'Endpoint /verify para validação facial 1:1 com threshold configurável.',
        },
        {
          title: '🔍 Busca por Similaridade',
          description:
            'Endpoint /find retorna top-K candidatos mais similares para identificação 1:N.',
        },
        {
          title: '📊 Logs e Export CSV',
          description:
            'Histórico completo de verificações com export para análise e auditoria.',
        },
      ],
      challenges: [
        {
          title: '🎯 Precisão vs. Performance',
          problem:
            'Balancear precisão do reconhecimento facial com latência aceitável para uso em produção.',
          solution:
            'Implementei warm-up de modelos na inicialização, cache de embeddings e seleção de modelo/detector otimizado (Facenet512 + RetinaFace) baseado em benchmarks.',
        },
      ],
    },
  },
  {
    id: 'fixxcapital',
    title: 'Fixxcapital',
    description:
      'Landing page institucional para captação de investidores em renda fixa estruturada. Destaque para credenciais CVM, produtos (CRIs, Debêntures, Fundos) e CTAs de conversão.',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Vercel', 'SEO', 'Responsive Design'],
    image: '/assets/fixxcapitalLP.png',
    demoUrl: 'https://fixxcapital-landingpage.vercel.app/',
    liveUrl: 'https://fixxcapital-landingpage.vercel.app/',
    githubUrl: '',
    privateProject: true,
    featured: false,
    status: 'Em Produção',
    detailed: {
      overview: {
        problem:
          'Necessidade de landing page institucional que comunicasse credibilidade (CVM), produtos e convertesse investidores com CTAs claros.',
        solution:
          'Landing page com foco em conversão: hero com credenciais CVM, vitrine de produtos com CTAs diretos, FAQ para redução de objeções e formulário + WhatsApp.',
        role: 'Desenvolvedor Frontend e UI/UX',
      },
      architecture: [
        {
          category: 'Frontend',
          technologies: [
            {
              name: 'Next.js',
              description: 'SSR e SSG para performance e SEO otimizado',
            },
            {
              name: 'Tailwind CSS',
              description: 'Design system consistente e responsivo',
            },
            {
              name: 'React',
              description: 'Componentes reutilizáveis e interatividade',
            },
          ],
        },
        {
          category: 'Deploy & Performance',
          technologies: [
            {
              name: 'Vercel',
              description: 'Deploy automático com edge network global',
            },
            {
              name: 'Image Optimization',
              description: 'Next/Image para lazy loading e formatos modernos (WebP)',
            },
          ],
        },
      ],
      features: [
        {
          title: '🏆 Credenciais CVM',
          description:
            'Selo CVM 000116-3 em destaque no hero e footer para transmitir confiança.',
        },
        {
          title: '📦 Vitrine de Produtos',
          description:
            'Cards de CRIs, Debêntures e Fundos Multimercado com CTAs para investimento.',
        },
        {
          title: '📞 Conversão Multicanal',
          description:
            'Formulário de contato + botão WhatsApp com deep-link para resposta rápida.',
        },
        {
          title: '❓ FAQ Estratégico',
          description:
            'Seção de perguntas frequentes para reduzir objeções e educar investidores.',
        },
      ],
      challenges: [
        {
          title: '🎨 Credibilidade Visual',
          problem:
            'Transmitir confiança e profissionalismo para um público de investidores exigentes.',
          solution:
            'Design clean com destaque para certificações CVM, depoimentos e processo de investimento transparente. Paleta de cores sóbria (azul/verde) e tipografia legível.',
        },
      ],
    },
  },
];

export default projects;
