import { render, screen } from '@testing-library/react';
import ContatoPage from '@/app/contato/page';
import '@testing-library/jest-dom';

// Mock Formspree
jest.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, jest.fn()],
  ValidationError: () => null,
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, variants, transition, ...safeProps } = props;
      return <div {...safeProps}>{children}</div>;
    },
    p: ({ children, ...props }: any) => {
      const { initial, animate, variants, transition, ...safeProps } = props;
      return <p {...safeProps}>{children}</p>;
    },
    h1: ({ children, ...props }: any) => {
      const { initial, animate, variants, transition, ...safeProps } = props;
      return <h1 {...safeProps}>{children}</h1>;
    },
    span: ({ children, ...props }: any) => {
      const { initial, animate, variants, transition, ...safeProps } = props;
      return <span {...safeProps}>{children}</span>;
    },
  },
}));

// Mock @/hooks
jest.mock('@/hooks', () => ({
  staggerContainerVariants: {},
  itemVariants: {},
}));

// Mock components from @/components/ui
jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children, className }: any) => <div className={className}>{children}</div>,
}));

describe('ContatoPage', () => {
  it('renders contact form correctly', () => {
    render(<ContatoPage />);
    
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/seu@email.com/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar mensagem/i })).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ContatoPage />);
    
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Redes Sociais/i })).toBeInTheDocument();
    // Verifica se existe pelo menos um link para LinkedIn (pelo URL)
    const linkedinLink = screen.getAllByRole('link').find(
      link => link.getAttribute('href')?.includes('linkedin')
    );
    expect(linkedinLink).toBeDefined();
    // Verifica se existe pelo menos um link com href mailto
    const emailLinks = screen.getAllByRole('link').filter(
      link => link.getAttribute('href')?.includes('mailto')
    );
    expect(emailLinks.length).toBeGreaterThan(0);
  });
});
