import { render, screen } from '@testing-library/react';
import SobrePage from '@/app/sobre/page';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}));

jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
  GlowButton: ({ children }: any) => <button>{children}</button>,
  StatCard: ({ value, label }: any) => <div>{value} {label}</div>,
}));

describe('SobrePage', () => {
  it('renders name and title', () => {
    render(<SobrePage />);
    expect(screen.getByText('Ícaro Aguiar')).toBeInTheDocument();
    expect(screen.getByText('Desenvolvedor Full-Stack')).toBeInTheDocument();
  });

  it('renders professional experience section', () => {
    render(<SobrePage />);
    expect(screen.getByRole('heading', { name: /Experiência Profissional/i })).toBeInTheDocument();
  });

  it('renders skills section', () => {
    render(<SobrePage />);
    expect(screen.getByRole('heading', { name: /Habilidades Técnicas/i })).toBeInTheDocument();
  });

  it('renders education section', () => {
    render(<SobrePage />);
    expect(screen.getByRole('heading', { name: /Formação Acadêmica/i })).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<SobrePage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
