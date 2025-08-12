// src/data/projects.js
export const projects = [
  {
    id: "ascend",
    title: "Ascend - App de Finanças Pessoais",
    description:
      "Um aplicativo mobile completo de gestão financeira, construído do zero com React Native e Node.js. Ascend permite o controle de transações, orçamentos, e um sistema inovador para gerenciar cobranças e pagamentos parcelados.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Docker", "Prisma", "Expo", "JWT"],
    image: "/assets/ascend-hero.png",
    demoUrl: "https://youtube.com/shorts/P-ANNF2PoFw?feature=share",
    githubUrl: "https://github.com/IcaroAguiar/financas-app",
    backendUrl: "https://github.com/IcaroAguiar/financas-api",
    featured: true, // Projeto em destaque
    status: "Em fase Alpha de testes",
    // Dados detalhados para case study
    detailed: {
      overview: {
        problem: "A necessidade de ter um aplicativo de finanças pessoais que fosse realmente completo e intuitivo para gerenciar transações, orçamentos e um sistema inovador de cobranças.",
        solution: "Desenvolvi o Ascend do zero, focando em criar uma solução robusta para gestão financeira pessoal com interface moderna e funcionalidades avançadas.",
        role: "Desenvolvedor Full-Stack e Arquiteto de Software"
      },
      architecture: [
        {
          category: "Frontend Mobile",
          technologies: [
            {
              name: "React Native",
              description: "Desenvolvimento cross-platform para iOS e Android com código único"
            },
            {
              name: "Expo",
              description: "Facilita desenvolvimento, build e deploy com ferramentas integradas"
            },
            {
              name: "Context API",
              description: "Gerenciamento de estado global eficiente sem dependências externas"
            }
          ]
        },
        {
          category: "Backend",
          technologies: [
            {
              name: "Node.js & Express",
              description: "API REST robusta com middleware de autenticação e validação"
            },
            {
              name: "Prisma ORM",
              description: "Type-safe database client com migrações automáticas"
            },
            {
              name: "JWT",
              description: "Autenticação stateless segura com refresh token automático"
            }
          ]
        },
        {
          category: "Infraestrutura",
          technologies: [
            {
              name: "PostgreSQL",
              description: "Banco de dados relacional para integridade e consistência dos dados"
            },
            {
              name: "Docker",
              description: "Containerização para desenvolvimento e deploy consistentes"
            },
            {
              name: "Git",
              description: "Controle de versão com branching strategy e commits semânticos"
            }
          ]
        }
      ],
      features: [
        {
          title: "🔐 Login Biométrico",
          description: "Autenticação segura usando biometria do dispositivo para acesso rápido e protegido."
        },
        {
          title: "📊 Dashboard Mensal",
          description: "Visualização clara das finanças com gráficos e resumos mensais personalizados."
        },
        {
          title: "💰 Gestão de Transações",
          description: "Controle completo de receitas e despesas com categorização automática."
        },
        {
          title: "📝 Sistema de Cobranças",
          description: "Gerenciamento inovador de pagamentos parcelados e cobrança de terceiros."
        }
      ],
      challenges: [
        {
          title: "🛡️ Segurança e Isolamento de Dados",
          problem: "Garantir que dados financeiros sensíveis estivessem completamente isolados entre usuários, evitando qualquer vazamento de informações.",
          solution: "Implementei um middleware de autenticação robusto com JWT e reforcei todas as queries do Prisma com filtros userId obrigatórios. Além disso, criei testes automatizados para validar o isolamento de dados em todos os endpoints."
        }
      ]
    }
  }
];

export default projects;