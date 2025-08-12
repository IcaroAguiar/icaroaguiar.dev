import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import { projects } from "../../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  // Se o projeto não for encontrado, redireciona para a página de projetos
  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const { detailed } = project;

  return (
    <div className="project-detail-container">
      {/* Header Navigation */}
      <div className="project-detail-header">
        <Link to="/projetos" className="back-button">
          <FaArrowLeft /> Voltar aos Projetos
        </Link>
      </div>

      {/* Hero Section */}
      <AnimatedCard customClass="project-hero">
        <div className="project-hero-content">
          <div className="project-hero-text">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-status">
              <span className="status-badge">{project.status}</span>
            </div>
            <div className="project-tags-hero">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-hero">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </AnimatedCard>

      {/* Overview Section */}
      <AnimatedCard customClass="project-section">
        <h2 className="section-title">Visão Geral do Projeto</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <h3>O Problema</h3>
            <p>{detailed.overview.problem}</p>
          </div>
          <div className="overview-item">
            <h3>A Solução</h3>
            <p>{detailed.overview.solution}</p>
          </div>
          <div className="overview-item">
            <h3>Minha Função</h3>
            <p>{detailed.overview.role}</p>
          </div>
        </div>
      </AnimatedCard>

      {/* Skills in Action Section */}
      <AnimatedCard customClass="project-section">
        <h2 className="section-title">Arquitetura e Soluções</h2>
        <p className="section-subtitle">
          Tecnologias aplicadas para resolver desafios específicos do projeto
        </p>
        
        {detailed.architecture.map((category, index) => (
          <div key={index} className="architecture-category">
            <h3 className="architecture-category-title">{category.category}</h3>
            <div className="architecture-tech-grid">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="tech-card">
                  <h4 className="tech-name">{tech.name}</h4>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </AnimatedCard>

      {/* Features Section */}
      <AnimatedCard customClass="project-section">
        <h2 className="section-title">Funcionalidades Principais</h2>
        <div className="features-grid">
          {detailed.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* Technical Challenges Section */}
      <AnimatedCard customClass="project-section">
        <h2 className="section-title">Desafios Técnicos</h2>
        {detailed.challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <h3 className="challenge-title">{challenge.title}</h3>
            <div className="challenge-content">
              <div className="challenge-problem">
                <h4>Desafio:</h4>
                <p>{challenge.problem}</p>
              </div>
              <div className="challenge-solution">
                <h4>Solução:</h4>
                <p>{challenge.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </AnimatedCard>

      {/* CTA Section */}
      <AnimatedCard customClass="project-cta-section">
        <h2 className="section-title">Explore o Projeto</h2>
        <p className="cta-description">
          Veja o Ascend em ação e explore o código fonte nos repositórios GitHub
        </p>
        <div className="project-cta-links">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button demo-button"
          >
            <FaExternalLinkAlt /> Ver Vídeo Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button github-button"
          >
            <FaGithub /> Frontend (App)
          </a>
          <a
            href={project.backendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button github-button"
          >
            <FaGithub /> Backend (API)
          </a>
        </div>
      </AnimatedCard>
    </div>
  );
}

export default ProjectDetail;