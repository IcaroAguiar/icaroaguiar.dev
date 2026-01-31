import { render, screen, fireEvent } from '@testing-library/react';
import { Card3D } from '@/hooks/use3DTilt';
import '@testing-library/jest-dom';

describe('Card3D Component', () => {
  it('renders children correctly', () => {
    render(<Card3D>Content</Card3D>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card3D className="custom-class">Content</Card3D>);
    expect(screen.getByText('Content').parentElement).toHaveClass('custom-class');
  });

  it('responds to mouse events', () => {
    render(<Card3D>Content</Card3D>);
    const card = screen.getByText('Content').parentElement;
    
    fireEvent.mouseMove(card!, { clientX: 100, clientY: 100 });
    expect(card).toHaveStyle({ transform: expect.stringContaining('rotateX') });
    
    fireEvent.mouseLeave(card!);
    expect(card).toHaveStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
  });
});
