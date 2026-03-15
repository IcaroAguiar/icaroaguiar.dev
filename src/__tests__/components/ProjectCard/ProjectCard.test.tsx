import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}));

const mockProject = {
  id: 'test-project',
  title: 'Sistema de Teste',
  description: 'Uma descrição legal para SEO',
  year: '2026',
  image: '/images/test.jpg',
  link: 'https://exemplo.com',
  status: 'Em Produção',
  tags: ['SaaS', 'React', 'NodeJS'],
  detailed: {
    overview: {
      problem: 'O contexto original do problema',
      solution: 'A solução implementada com excelência',
      role: 'Full-Stack',
      timeline: '2 Meses'
    },
    features: [],
    architecture: {
      description: '',
      techStack: []
    },
    results: []
  }
};

describe('ProjectCard Component', () => {
  it('renders the project properties correctly', () => {
    render(<ProjectCard project={mockProject as any} />);
    
    expect(screen.getByText('Sistema de Teste')).toBeInTheDocument();
    expect(screen.getAllByText('SaaS').length).toBeGreaterThan(0); // Primeira tag principal
    expect(screen.getByText('O contexto original do problema')).toBeInTheDocument();
  });

  it('renders the design tokens correctly in styling classes', () => {
    const { container } = render(<ProjectCard project={mockProject as any} />);

    // Glow token testing
    const glowDiv = container.querySelector('.from-accent-primary\\/5');
    expect(glowDiv).toBeInTheDocument();

    // Check Live badge that uses text-status-success
    const liveBadge = screen.getByText('Live').closest('span');
    expect(liveBadge).toHaveClass('text-status-success');
    expect(liveBadge).toHaveClass('bg-status-success/10');
  });

  it('prioritizes explicit context and solution messages over detailed.overview', () => {
    render(
      <ProjectCard 
        project={mockProject as any} 
        contextMessage="Mensagem customizada do page.tsx" 
        solutionMessage="Solução customizada do page.tsx" 
      />
    );
    
    expect(screen.getByText('Mensagem customizada do page.tsx')).toBeInTheDocument();
    expect(screen.getByText('Solução customizada do page.tsx')).toBeInTheDocument();
    expect(screen.queryByText('O contexto original do problema')).not.toBeInTheDocument();
  });
});
