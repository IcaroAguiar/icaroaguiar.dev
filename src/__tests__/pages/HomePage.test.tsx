import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
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

jest.mock('@/components/Hero/Hero', () => () => <div data-testid="hero" />);
jest.mock('@/components/ExpertiseBar/ExpertiseBar', () => ({
  ExpertiseBar: () => <div data-testid="expertise-bar" />,
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
    expect(screen.getByText(/Projetos selecionados/i)).toBeInTheDocument();
  });

  it('renders narrative section', () => {
    render(<HomePage />);
    expect(screen.getByText('Como construo')).toBeInTheDocument();
    expect(screen.getByText('Como ler este portfólio')).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Vamos construir algo difícil/i)).toBeInTheDocument();
  });

  it('renders selected project content', () => {
    render(<HomePage />);
    expect(screen.getByText('ASCEND')).toBeInTheDocument();
    expect(screen.getByText('Neo Constrictor')).toBeInTheDocument();
  });
});
