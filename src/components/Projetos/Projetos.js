import React from "react";
import "./Projetos.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedCard from "../AnimatedCard/AnimatedCard"; // Importe o componente de animação

// Quando tiver imagens, você pode importá-las assim:
// import projImg1 from '../../assets/proj1.png';

function Projetos() {
  const projects = [
    {
      title: "Sistema de Gestão de Tarefas",
      description:
        "Uma aplicação web completa para gerenciamento de tarefas (To-Do List) com autenticação de usuário, criação, edição e exclusão de tarefas, e filtros por status.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Buscador de Filmes com API",
      description:
        "Um aplicativo que consome a API do The Movie Database (TMDB) para permitir que os usuários pesquisem filmes, vejam detalhes, avaliações e trailers.",
      tags: ["React", "API REST", "CSS Modules"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Clone de UI - Landing Page",
      description:
        "Recriação fiel da interface de uma landing page de um produto conhecido, com foco em aprimorar as habilidades de estilização com CSS, responsividade e atenção aos detalhes.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="projetos-container">
      <h1 className="section-title">Meus Projetos</h1>
      <div className="projetos-grid">
        {projects.map((project, index) => (
          // Cada card é agora um AnimatedCard
          <AnimatedCard key={index}>
            <div className="projeto-card">
              <div className="placeholder-img">
                <span>Imagem do Projeto</span>
              </div>
              <div className="projeto-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projeto-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="projeto-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Código no GitHub"
                  >
                    <FaGithub /> Código
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver Demonstração"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
