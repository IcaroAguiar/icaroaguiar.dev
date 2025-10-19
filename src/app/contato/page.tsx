'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AnimatedCard from '@/components/AnimatedCard/AnimatedCard';
import '@/components/Contato/Contato.css';

export default function ContatoPage() {
  const [state, handleSubmit] = useForm('xblyeyez');

  if (state.succeeded) {
    return (
      <section className="container">
        <div className="contato-container success-message">
          <h1 className="section-title">Vamos Construir Juntos?</h1>
          <p>Obrigado pelo seu contato! Responderei em breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="contato-container">
        <h1 className="section-title">Vamos Construir Juntos?</h1>
        <p className="intro-paragraph">
          Estou buscando ativamente novas oportunidades e projetos freelance. Se você tem
          uma ideia que precisa ganhar vida ou uma equipe que precisa de um desenvolvedor
          dedicado e focado em resultados, adoraria conversar. Envie-me uma mensagem abaixo
          para iniciarmos o diálogo.
        </p>
        <AnimatedCard customClass="form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className="btn btn-primary">
              {state.submitting ? 'Enviando...' : 'Iniciar Conversa'}
            </button>
          </form>
        </AnimatedCard>

        <div className="alternative-contact">
          <p>Prefere outro meio? Conecte-se comigo:</p>
          <div className="contact-links">
            <a
              href="https://wa.me/5571992608397"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com/in/icaro-aguiar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:icaroaguiar14@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
