import type { Metadata } from 'next';
import AnimatedCard from '@/components/AnimatedCard/AnimatedCard';
import '@/components/Sobre/sobre.css';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Desenvolvedor Full-Stack com experiência em React, Node.js, C# e React Native. Confira minha trajetória profissional, habilidades técnicas e formação acadêmica.',
};

export default function SobrePage() {
  const experiences = [
    {
      role: 'Desenvolvedor Full-Stack',
      company: 'Star Agency',
      period: 'Setembro de 2025 - Presente',
      tasks: [
        'Sites e sistemas em WordPress/Next.js com UI React + Tailwind.',
        'Desenvolvimento de aplicativos React Native (Expo).',
        'CI/CD com GitHub Actions para deploy automatizado.',
      ],
    },
    {
      role: 'Desenvolvedor de Software',
      company: 'ATSD IT Solutions',
      period: 'Junho de 2025 - Presente',
      tasks: [
        'APIs em C#/.NET para modernização de sistemas web/mobile.',
        'Suporte a bancos de dados e infraestrutura.',
        'Azure DevOps (pipelines CI/CD) e gestão de processos.',
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
      role: 'Estagiário de Desenvolvimento',
      company: 'Oi S.A.',
      period: 'Abril de 2023 - Abril de 2025',
      tasks: [
        'Full-Stack com React/Node.js e aplicações mobile React Native.',
        'Otimização de APIs REST e suporte a ambientes SOA.',
      ],
    },
    {
      role: 'Aprendiz Técnico',
      company: 'Oi S.A.',
      period: 'Abril de 2022 - Fevereiro de 2023',
      tasks: [
        'Desenvolvimento de sistemas internos com Angular/Python.',
        'Automação de tarefas em Linux e rotinas SOA.',
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

  const skills = {
    Linguagens: ['C#', 'JavaScript/TypeScript', 'Python'],
    'Front-end': ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'HTML5/CSS3', 'WordPress'],
    'Back-end': ['.NET', 'Node.js', 'APIs REST'],
    Mobile: ['React Native', 'Expo'],
    'Bancos de Dados': ['SQL Server', 'Oracle', 'PostgreSQL'],
    'DevOps & Cloud': ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'Linux', 'Docker'],
    Metodologias: ['Scrum', 'Desenvolvimento Ágil'],
  };

  const education = [
    {
      course: 'Engenharia da Computação',
      institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
      status: 'Em andamento',
    },
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Salvador (UNIFACS)',
      status: 'Conclusão prevista: Dezembro de 2025',
    },
    {
      course: 'Técnico em Programação Full-Stack',
      institution: 'SENAI-SP',
      status: 'Concluído em Fevereiro de 2023',
    },
  ];

  return (
    <section className="container">
      <div className="sobre-container">
        <h1 className="section-title">Desenvolvedor de Software</h1>

        <AnimatedCard customClass="bio-card">
          <p className="bio-description">
            Sou <strong>Desenvolvedor Full-Stack</strong> focado em transformar requisitos em
            produtos funcionais. Trabalho com <strong>React/Next.js</strong> no frontend e{' '}
            <strong>.NET / Node.js</strong> no backend, entregando interfaces claras, APIs
            confiáveis e deploy com <strong>CI/CD</strong>. Curto ciclos curtos, versionamento
            bem feito e comunicação direta.
          </p>

          <h3>O Que Eu Faço</h3>
          <ul className="services-list">
            <li>
              <strong>Frontend:</strong> React/Next.js, Tailwind, acessibilidade e responsividade.
            </li>
            <li>
              <strong>Backend:</strong> .NET e Node.js com APIs REST; integrações e automações.
            </li>
            <li>
              <strong>Mobile:</strong> React Native (Expo) para apps multiplataforma.
            </li>
            <li>
              <strong>Dados & Infra:</strong> SQL Server, Oracle, PostgreSQL; CI/CD (GitHub Actions/Azure DevOps) e Docker/Linux.
            </li>
          </ul>
        </AnimatedCard>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} customClass="experience-card">
              <h3>{exp.role}</h3>
              <h4>
                {exp.company} | {exp.period}
              </h4>
              {exp.tasks.length > 0 && (
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              )}
            </AnimatedCard>
          ))}
        </div>

        <div className="sobre-details-grid">
          <AnimatedCard customClass="skills-card">
            <h2>Habilidades</h2>
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="skill-category">
                <strong>{category}</strong>
                <div className="tags-container">
                  {list.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedCard>

          <AnimatedCard>
            <h2>Formação</h2>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.course}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.status}</p>
              </div>
            ))}
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
