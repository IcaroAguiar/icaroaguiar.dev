import React from "react";
import "./ProjectModal.css";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectModal({ isOpen, onClose, project }) {
  // Fechar modal ao clicar no overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Fechar modal com ESC
  React.useEffect(() => {
    if (!isOpen) return;
    
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Caso especial para Ascend - conteúdo detalhado
  const renderAscendCaseStudy = () => (
    <div className="case-study-content">
      <div className="case-study-header">
        <h1>{project.title}</h1>
        <p className="project-summary">
          {project.description}
        </p>
        <div className="project-tags-modal">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-modal">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="case-study-section">
        <h2>Visão Geral do Projeto</h2>
        <p>
          O Ascend nasceu da necessidade de ter um aplicativo de finanças pessoais que fosse 
          realmente completo e intuitivo. Desenvolvi este projeto do zero, desde a concepção 
          da arquitetura até a implementação final, focando em criar uma solução robusta 
          para gestão financeira pessoal.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Minha Função & Tecnologias Utilizadas</h2>
        <p>
          <strong>Função:</strong> Desenvolvedor Full-Stack e Arquiteto de Software
        </p>
        <div className="tech-grid">
          <div className="tech-category">
            <h4>Frontend Mobile</h4>
            <ul>
              <li>React Native para desenvolvimento cross-platform</li>
              <li>Expo para facilitar desenvolvimento e deployment</li>
              <li>Autenticação biométrica nativa</li>
            </ul>
          </div>
          <div className="tech-category">
            <h4>Backend</h4>
            <ul>
              <li>Node.js com Express para API REST</li>
              <li>Prisma como ORM para PostgreSQL</li>
              <li>JWT para autenticação segura</li>
            </ul>
          </div>
          <div className="tech-category">
            <h4>Infraestrutura</h4>
            <ul>
              <li>PostgreSQL para banco de dados</li>
              <li>Docker para containerização</li>
              <li>Git para controle de versão</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Funcionalidades Principais</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h4>🔐 Login Biométrico</h4>
            <p>Autenticação segura usando biometria do dispositivo para acesso rápido e protegido.</p>
          </div>
          <div className="feature-item">
            <h4>📊 Dashboard Mensal</h4>
            <p>Visualização clara das finanças com gráficos e resumos mensais personalizados.</p>
          </div>
          <div className="feature-item">
            <h4>💰 Gestão de Transações</h4>
            <p>Controle completo de receitas e despesas com categorização automática.</p>
          </div>
          <div className="feature-item">
            <h4>📝 Sistema de Cobranças</h4>
            <p>Gerenciamento inovador de pagamentos parcelados e cobrança de terceiros.</p>
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Desafios Técnicos</h2>
        <div className="challenge-item">
          <h4>🛡️ Segurança e Isolamento de Dados</h4>
          <p>
            <strong>Desafio:</strong> Garantir que dados financeiros sensíveis estivessem completamente 
            isolados entre usuários, evitando qualquer vazamento de informações.
          </p>
          <p>
            <strong>Solução:</strong> Implementei um middleware de autenticação robusto com JWT e 
            reforcei todas as queries do Prisma com filtros userId obrigatórios. Além disso, 
            criei testes automatizados para validar o isolamento de dados em todos os endpoints.
          </p>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Resultados & Status</h2>
        <p>
          O Ascend está atualmente em <strong>fase Alpha de testes</strong>, com as funcionalidades 
          principais implementadas e testadas. O projeto demonstra minha capacidade de desenvolver 
          aplicações mobile completas, desde o backend até a interface do usuário.
        </p>
        
        <div className="project-links-modal">
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
            <FaGithub /> Código no GitHub
          </a>
        </div>
      </section>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-body">
          {project.title === "Ascend - App de Finanças Pessoal" 
            ? renderAscendCaseStudy()
            : (
              // Conteúdo genérico para outros projetos
              <div className="case-study-content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;