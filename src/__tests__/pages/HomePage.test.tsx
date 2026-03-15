import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import '@testing-library/jest-dom';

jest.mock('@/components/Hero/Hero', () => () => <div data-testid="hero" />);
jest.mock('@/components/ExpertiseBar/ExpertiseBar', () => ({
  ExpertiseBar: () => <div data-testid="expertise-bar" />,
}));
jest.mock('@/components/BuildingPrinciples/BuildingPrinciples', () => ({
  BuildingPrinciples: () => <div data-testid="building-principles" />,
}));
jest.mock('@/components/ProjectCard/ProjectCard', () => ({
  ProjectCard: ({ project }: any) => <div data-testid="project-card">{project.title}</div>,
}));

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

  it('renders projects preview section', () => {
    render(<HomePage />);
    expect(screen.getByText('Projetos Selecionados')).toBeInTheDocument();
  });

  it('renders stats section', () => {
    render(<HomePage />);
    expect(screen.getByText('Evidências de execução')).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Tem uma feature complexa/i)).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<HomePage />);
    expect(screen.getAllByTestId('project-card').length).toBeGreaterThan(0);
  });
});
