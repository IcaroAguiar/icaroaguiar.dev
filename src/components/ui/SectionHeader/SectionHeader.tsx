interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  const alignment = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-6 ${alignment}`}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
