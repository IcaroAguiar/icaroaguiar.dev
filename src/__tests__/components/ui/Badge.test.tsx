import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/Badge';
import '@testing-library/jest-dom';

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies correct variant styles', () => {
    const { container } = render(<Badge variant="primary">Primary Badge</Badge>);
    expect(container.firstChild).toHaveClass('bg-emerald-100');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveClass('custom-class');
  });
});
