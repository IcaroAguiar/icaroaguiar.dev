import { render, screen, fireEvent } from '@testing-library/react';
import ProjetosPage from '@/app/projetos/page';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

jest.mock('@/hooks/use3DTilt', () => ({
  Card3D: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
  GlowButton: ({ children }: any) => <button>{children}</button>,
}));

describe('ProjetosPage', () => {
  it('renders projects section header', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('heading', { name: /Projetos/i, level: 1 })).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<ProjetosPage />);
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('AI/ML')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('changes active filter on click', () => {
    render(<ProjetosPage />);
    const mobileFilter = screen.getByText('Mobile');
    fireEvent.click(mobileFilter);
    expect(mobileFilter).toHaveClass('bg-[#2a9d8f]');
  });

  it('renders featured badge', () => {
    render(<ProjetosPage />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders other projects', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('heading', { name: /Face API/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Fixxcapital/i, level: 3 })).toBeInTheDocument();
  });

  it('renders GitHub CTA', () => {
    render(<ProjetosPage />);
    expect(screen.getByText('Ver GitHub')).toBeInTheDocument();
  });
});
