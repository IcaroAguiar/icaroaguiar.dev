import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import '@testing-library/jest-dom';

jest.mock('@/components/effects', () => ({
  MatrixRain: () => <div data-testid="matrix-rain" />,
  ParticleNetwork: () => <div data-testid="particle-network" />,
}));

jest.mock('@/components/Hero/Hero', () => () => <div data-testid="hero" />);

jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children }: any) => <div>{children}</div>,
  GlowButton: ({ children, href }: any) => <a href={href}>{children}</a>,
  StatCard: ({ value, label }: any) => <div>{value} {label}</div>,
  BentoCard: ({ children }: any) => <div>{children}</div>,
}));

describe('HomePage', () => {
  it('renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders background effects', () => {
    render(<HomePage />);
    expect(screen.getByTestId('matrix-rain')).toBeInTheDocument();
    expect(screen.getByTestId('particle-network')).toBeInTheDocument();
  });

  it('renders projects preview section', () => {
    render(<HomePage />);
    expect(screen.getByText('Projetos em Destaque')).toBeInTheDocument();
  });

  it('renders stats section', () => {
    render(<HomePage />);
    expect(screen.getByText('Experiência em Números')).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Vamos construir algo/)).toBeInTheDocument();
  });
});
