import { render, screen } from '@testing-library/react';
import ProjetosPage from '@/app/projetos/page';
import '@testing-library/jest-dom';

describe('ProjetosPage', () => {
  it('renders projects section header', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('heading', { name: /Projetos/i, level: 1 })).toBeInTheDocument();
  });

  it('renders featured project', () => {
    render(<ProjetosPage />);
    expect(screen.getAllByText(/Featured/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /Ascend/i, level: 3 })).toBeInTheDocument();
  });

  it('renders other projects', () => {
    render(<ProjetosPage />);
    expect(screen.getByRole('heading', { name: /Face API/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Fixxcapital/i, level: 3 })).toBeInTheDocument();
  });
});
