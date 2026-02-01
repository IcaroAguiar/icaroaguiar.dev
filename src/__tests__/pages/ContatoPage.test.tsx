import { render, screen } from '@testing-library/react';
import ContatoPage from '@/app/contato/page';
import '@testing-library/jest-dom';

// Mock Formspree
jest.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, jest.fn()],
  ValidationError: () => null,
}));

// Mock components from @/components/ui
jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
  GlowButton: ({ children, href, type, variant }: any) => {
    if (href) {
      return <a href={href}>{children}</a>;
    }
    return <button type={type}>{children}</button>;
  },
}));

describe('ContatoPage', () => {
  it('renders contact form correctly', () => {
    render(<ContatoPage />);
    
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    // Usa o placeholder para diferenciar do link de email
    expect(screen.getByPlaceholderText(/seu@email.com/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar mensagem/i })).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ContatoPage />);
    
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
    // Look for LinkedIn by text content in the heading instead of aria-label
    expect(screen.getByRole('heading', { name: /Redes Sociais/i })).toBeInTheDocument();
    // Verifica se existe pelo menos um link para LinkedIn (pelo URL)
    const linkedinLink = screen.getAllByRole('link').find(
      link => link.getAttribute('href')?.includes('linkedin')
    );
    expect(linkedinLink).toBeDefined();
    // Verifica se existe pelo menos um link com texto Email ou ícone de email
    const emailLinks = screen.getAllByRole('link').filter(
      link => link.getAttribute('href')?.includes('mailto')
    );
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
