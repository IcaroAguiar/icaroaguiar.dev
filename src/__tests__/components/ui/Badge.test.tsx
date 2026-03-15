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
    expect(container.firstChild).toHaveClass('bg-accent-subtle');
    expect(container.firstChild).toHaveClass('text-accent');
  });

  it('applies default variant when no variant specified', () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    expect(container.firstChild).toHaveClass('bg-surface-3');
    expect(container.firstChild).toHaveClass('text-tertiary');
  });

  it('applies success variant styles', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    expect(container.firstChild).toHaveClass('text-[#22c55e]');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveClass('custom-class');
  });

  it('renders with rounded-md style', () => {
    const { container } = render(<Badge>Badge</Badge>);
    expect(container.firstChild).toHaveClass('rounded-md');
  });
});
