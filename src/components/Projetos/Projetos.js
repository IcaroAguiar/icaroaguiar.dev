import React from "react";
import { Link } from "react-router-dom";
import "./Projetos.css";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import { projects } from "../../data/projects";

function Projetos() {
  // Projects data is imported from src/data/projects.js

  return (
    <section className="container">
      <div className="projetos-container">
        <h1 className="section-title">Meus Projetos</h1>

      {/* --- MENSAGEM DE AVISO AQUI --- */}
      <p className="projetos-disclaimer">
        Projeto destaque: Ascend, um aplicativo mobile de gestão financeira desenvolvido
        completamente do zero. Mais projetos autorais estão sendo desenvolvidos e serão
        adicionados em breve.
      </p>

      <div className="projetos-grid">
        {projects.map((project, index) => (
          <AnimatedCard key={index}>
            <div className="projeto-card">
              {project.image ? (
                <div className="projeto-img">
                  <img src={project.image} alt={project.title} />
                </div>
              ) : (
                <div className="placeholder-img">
                  <span>Imagem do Projeto</span>
                </div>
              )}
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
                  <Link
                    to={`/projeto/${project.id}`}
                    className="projeto-button"
                    title="Ver Case Study Completo"
                  >
                    <FaInfoCircle /> Ver Case Study
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Código no GitHub"
                  >
                    <FaGithub /> Código
                  </a>
                  <a
                    href={project.demoUrl || project.liveUrl}
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
    </section>
  );
}

export default Projetos;
