import { render, screen } from '@testing-library/react';
import SobrePage from '@/app/sobre/page';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
  GlowButton: ({ children, href }: any) => <a href={href || '#'}>{children}</a>,
  StatCard: ({ value, label }: any) => <div>{value} {label}</div>,
}));

describe('SobrePage', () => {
  it('renders name and title', () => {
    render(<SobrePage />);
    expect(screen.getByText('Ícaro Aguiar')).toBeInTheDocument();
    // Check for the title in the hero section specifically
    expect(screen.getAllByText('Desenvolvedor Full-Stack').length).toBeGreaterThanOrEqual(1);
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
    const buttons = screen.getAllByRole('link');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
