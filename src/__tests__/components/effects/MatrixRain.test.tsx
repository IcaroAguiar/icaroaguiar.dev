import { render, screen } from '@testing-library/react';
import { MatrixRain } from '@/components/effects/MatrixRain';
import { ParticleNetwork } from '@/components/effects/ParticleNetwork';
import '@testing-library/jest-dom';

// Mock canvas
const mockContext = {
  fillRect: jest.fn(),
  clearRect: jest.fn(),
  fillText: jest.fn(),
  getImageData: jest.fn(),
  putImageData: jest.fn(),
  createImageData: jest.fn(),
  setTransform: jest.fn(),
  drawImage: jest.fn(),
  save: jest.fn(),
  fill: jest.fn(),
  scale: jest.fn(),
  restore: jest.fn(),
  translate: jest.fn(),
  transform: jest.fn(),
  rotate: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  stroke: jest.fn(),
  strokeRect: jest.fn(),
  clip: jest.fn(),
  quadraticCurveTo: jest.fn(),
  bezierCurveTo: jest.fn(),
  arc: jest.fn(),
  arcTo: jest.fn(),
  ellipse: jest.fn(),
  rect: jest.fn(),
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 0,
  font: '',
  canvas: null as any,
  globalAlpha: 1,
  globalCompositeOperation: 'source-over',
};

HTMLCanvasElement.prototype.getContext = jest.fn(() => mockContext as any);

describe('MatrixRain Component', () => {
  it('renders canvas element', () => {
    render(<MatrixRain />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('applies custom opacity', () => {
    render(<MatrixRain opacity={0.3} />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toHaveStyle({ opacity: '0.3' });
  });

  it('applies custom className', () => {
    render(<MatrixRain className="custom-class" />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toHaveClass('custom-class');
  });

  it('has fixed positioning and pointer-events-none', () => {
    render(<MatrixRain />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toHaveClass('fixed', 'inset-0', 'pointer-events-none', 'z-0');
  });
});

describe('ParticleNetwork Component', () => {
  it('renders canvas element', () => {
    render(<ParticleNetwork />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ParticleNetwork className="custom-particles" />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toHaveClass('custom-particles');
  });

  it('has fixed positioning and pointer-events-none', () => {
    render(<ParticleNetwork />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toHaveClass('fixed', 'inset-0', 'pointer-events-none', 'z-0');
  });
});
