import React from "react";
import "./sobre.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

function Sobre() {
  const experiences = [
    {
      role: "Desenvolvedor de Software",
      company: "ATSD IT Solutions",
      period: "Junho de 2025 - Presente",
      tasks: [
        "Desenvolvimento e modernização de aplicações web e mobile.",
        "Criação de APIs e back-end com foco em C#.",
        "Suporte a sistemas e bancos de dados da empresa.",
        "Colaboração na melhoria de processos e criação de novos sistemas.",
      ],
    },
    {
      role: "AI Programmer",
      company: "Outlier",
      period: "Março de 2025 - Presente",
      tasks: [
        "Atuação como programador freelancer em projetos de Inteligência Artificial.",
        "Desenvolvimento e programação de novas IAs.",
        "Aplicação de expertise em desenvolvimento para aprimorar produtos de IA.",
      ],
    },
    {
      role: "Estagiário de Desenvolvimento",
      company: "Oi S.A.",
      period: "Abril de 2023 - Abril de 2025",
      tasks: [
        "Desenvolvimento Full-Stack com React e Node.js em sistemas internos.",
        "Manutenção e otimização de APIs em ambiente REST.",
        "Gerenciamento de ambientes SOA e suporte técnico avançado.",
      ],
    },
    {
      role: "Aprendiz Técnico",
      company: "Oi S.A.",
      period: "Abril de 2022 - Fevereiro de 2023",
      tasks: [
        "Desenvolvimento de sistemas internos com Angular e Python.",
        "Automação de tarefas em Linux e gerenciamento de ambientes SOA.",
      ],
    },
  ];

  // --- DADOS COMPLETOS E CORRIGIDOS ---
  const skills = {
    Linguagens: ["C#", "JavaScript/TypeScript", "Python"],
    "Front-end": ["React", "Angular", "HTML5", "CSS3"],
    "Back-end": [".NET", "Node.js", "APIs REST"],
    Mobile: ["React Native"],
    "Bancos de Dados": ["Microsoft SQL Server", "Oracle"],
    "DevOps & Cloud": ["Azure DevOps", "CI/CD", "Git", "Linux"],
    Metodologias: ["Scrum", "Desenvolvimento Ágil"],
  };

  const education = [
    {
      course: "Engenharia da Computação",
      institution: "Universidade Federal do Recôncavo da Bahia (UFRB)",
      status: "Em andamento",
    },
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Salvador (UNIFACS)",
      status: "Conclusão prevista: Dezembro de 2025",
    },
    {
      course: "Técnico em Programação Full-Stack",
      institution: "SENAI-SP",
      status: "Concluído em Fevereiro de 2023",
    },
  ];

  return (
    <div className="sobre-container">
      <h1 className="section-title">Sobre Mim</h1>

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
  );
}

export default Sobre;
