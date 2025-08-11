import React, { useState } from "react";
import "./Projetos.css";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import ProjectModal from "../ProjectModal/ProjectModal";

function Projetos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Ascend - App de Finanças Pessoal",
      description:
        "Um aplicativo mobile completo de gestão financeira, construído do zero com React Native e Node.js. Ascend permite o controle de transações, orçamentos, e um sistema inovador para gerenciar cobranças e pagamentos parcelados.",
      tags: ["React Native", "Node.js", "PostgreSQL", "Docker", "Prisma", "Expo", "JWT"],
      image: "/assets/ascend-hero.png",
      demoUrl: "https://youtube.com/shorts/P-ANNF2PoFw?feature=share",
      githubUrl: "https://github.com/IcaroAguiar/financas-app",
    },
  ];

  return (
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
                  <button
                    onClick={() => openModal(project)}
                    className="projeto-button"
                    title="Ver Mais Detalhes"
                  >
                    <FaInfoCircle /> Ver Mais
                  </button>
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default Projetos;
