interface TechChipProps {
  label: string;
  variant?: 'default' | 'outlined';
}

export function TechChip({ label, variant = 'default' }: TechChipProps) {
  const styles = variant === 'default'
    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
    : 'border-slate-200 bg-slate-50 text-slate-700';
    
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${styles}`}>
      {label}
    </span>
  );
}
