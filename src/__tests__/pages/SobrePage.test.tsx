import { render, screen } from '@testing-library/react';
import SobrePage from '@/app/sobre/page';
import '@testing-library/jest-dom';

describe('SobrePage', () => {
  it('renders about section correctly', () => {
    render(<SobrePage />);
    
    expect(screen.getByRole('heading', { name: /Sobre mim/i, level: 1 })).toBeInTheDocument();
  });

  it('renders experiences', () => {
    render(<SobrePage />);
    expect(screen.getByRole('heading', { name: /Experiência/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Star Agency/i)).toBeInTheDocument();
  });

  it('renders skills categories', () => {
    render(<SobrePage />);
    expect(screen.getByRole('heading', { name: /Habilidades/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/Linguagens/i)).toBeInTheDocument();
  });
});
