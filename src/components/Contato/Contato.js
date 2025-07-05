import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contato.css';
import AnimatedCard from '../AnimatedCard/AnimatedCard';

function Contato() {
  const [state, handleSubmit] = useForm("xblyeyez"); 

  if (state.succeeded) {
      return (
        <div className="contato-container success-message">
            <h1 className="section-title">Contato</h1>
            <p>Obrigado pelo seu contato! Responderei em breve.</p>
        </div>
      );
  }

  return (
    <div className="contato-container">
      <h1 className="section-title">Entre em Contato</h1>
      <AnimatedCard customClass="form-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="btn btn-primary">
            {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </AnimatedCard>
    </div>
  );
}

export default Contato;