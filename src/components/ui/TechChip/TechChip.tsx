interface TechChipProps {
  label: string;
  variant?: 'default' | 'outlined' | 'accent';
}

export function TechChip({ label, variant = 'default' }: TechChipProps) {
  const variantStyles = {
    default: 'bg-surface-3 text-tertiary border-border-default',
    outlined: 'bg-transparent text-secondary border-border-default',
    accent: 'bg-accent-subtle text-accent border-accent-primary/20',
  };
  
  const baseStyles = 'px-3 py-1 text-xs font-medium rounded-md border';
  const hoverStyles = 'hover:border-border-strong transition-colors duration-150';
  
  return (
    <span className={`${baseStyles} ${hoverStyles} ${variantStyles[variant]}`}>
      {label}
    </span>
  );
}
