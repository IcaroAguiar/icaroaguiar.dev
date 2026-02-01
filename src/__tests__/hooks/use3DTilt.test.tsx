import { render, screen, fireEvent } from '@testing-library/react';
import { Card3D } from '@/hooks/use3DTilt';
import '@testing-library/jest-dom';

describe('Card3D Component', () => {
  it('renders children correctly', () => {
    render(<Card3D>Content</Card3D>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card3D className="custom-class">Content</Card3D>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies initial transform styles', () => {
    const { container } = render(<Card3D>Content</Card3D>);
    const card = container.firstChild as HTMLElement;
    // Initial state should have 0 rotation
    expect(card).toHaveStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
  });

  it('responds to mouse leave by resetting transform', () => {
    const { container } = render(<Card3D>Content</Card3D>);
    const card = container.firstChild as HTMLElement;
    
    // After mouse leave, should reset to 0
    fireEvent.mouseLeave(card);
    expect(card).toHaveStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });
  });

  it('has correct initial tilt style object structure', () => {
    // Test the hook behavior indirectly through the component
    const { container } = render(<Card3D>Content</Card3D>);
    const card = container.firstChild as HTMLElement;
    
    // Should have perspective and transition styles
    expect(card.style.transform).toContain('perspective');
    expect(card.style.transition).toContain('transform');
  });
});
