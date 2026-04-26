import { fireEvent, render, screen } from '@testing-library/react';
import ProjetosPage from '@/app/projetos/page';
import '@testing-library/jest-dom';

jest.mock('@gsap/react', () => ({
  useGSAP: jest.fn(),
}));

jest.mock('gsap', () => ({
  __esModule: true,
  default: {
    registerPlugin: jest.fn(),
    from: jest.fn(),
    fromTo: jest.fn(),
    utils: {
      toArray: jest.fn(() => []),
    },
  },
}));

jest.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, priority, sizes, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} alt={props.alt} />;
  },
}));

describe('ProjetosPage', () => {
  it('renders the redesigned projects hero', () => {
    render(<ProjetosPage />);

    expect(screen.getByRole('heading', { name: /Projetos que mostram execução real/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/sem inventar métricas/i)).toBeInTheDocument();
  });

  it('renders category filters with the approved taxonomy', () => {
    render(<ProjetosPage />);

    expect(screen.getByRole('button', { name: /Todos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Produtos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mobile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /IA\/Automação/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Backend/i })).toBeInTheDocument();
  });

  it('changes active filter on click', () => {
    render(<ProjetosPage />);

    const mobileFilter = screen.getByRole('button', { name: /Mobile/i });
    fireEvent.click(mobileFilter);

    expect(mobileFilter).toHaveClass('active');
  });

  it('renders selected project rows and GitHub CTA', () => {
    render(<ProjetosPage />);

    expect(screen.getByText('ASCEND')).toBeInTheDocument();
    expect(screen.getByText('Neo Constrictor')).toBeInTheDocument();
    expect(screen.getByText('Bluefit')).toBeInTheDocument();
    expect(screen.getByText('Ver GitHub')).toBeInTheDocument();
  });
});
