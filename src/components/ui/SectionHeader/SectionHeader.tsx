interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  const alignment = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-8 ${alignment}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-main">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-tertiary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
