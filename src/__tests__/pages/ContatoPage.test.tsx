import { render, screen } from '@testing-library/react';
import ContatoPage from '@/app/contato/page';
import '@testing-library/jest-dom';

// Mock Formspree
jest.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, jest.fn()],
  ValidationError: () => null,
}));

describe('ContatoPage', () => {
  it('renders contact form correctly', () => {
    render(<ContatoPage />);
    
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    // Usa o placeholder para diferenciar do link de email
    expect(screen.getByPlaceholderText(/seuemail@exemplo.com/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Solicitar proposta/i })).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ContatoPage />);
    
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    // Verifica se existe pelo menos um link com aria-label Email
    const emailLinks = screen.getAllByLabelText(/Email/i);
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
