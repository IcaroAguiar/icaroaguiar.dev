import { render, screen, fireEvent } from '@testing-library/react';
import ProjetosPage from '@/app/projetos/page';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, variants, transition, exit, ...safeProps } = props;
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
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

jest.mock('@/hooks', () => ({
  staggerContainerVariants: {},
  itemVariants: {},
  use3DTilt: () => ({ ref: null, style: {} }),
}));

jest.mock('@/hooks/use3DTilt', () => ({
  Card3D: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('@/components/ui', () => ({
  ScrollReveal: ({ children, className }: any) => <div className={className}>{children}</div>,
  GlowButton: ({ children }: any) => <button>{children}</button>,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
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
    // Verifica que o filtro ativo recebe a classe de destaque
    expect(mobileFilter).toHaveClass('bg-text-main');
  });

  it('renders featured badge', () => {
    render(<ProjetosPage />);
    // O badge de destaque agora exibe "Destaque"
    expect(screen.getByText('Destaque')).toBeInTheDocument();
  });

  it('renders GitHub CTA', () => {
    render(<ProjetosPage />);
    expect(screen.getByText('Ver GitHub')).toBeInTheDocument();
  });
});
