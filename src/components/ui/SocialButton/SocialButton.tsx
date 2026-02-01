import { ReactNode } from 'react';

type SocialPlatform = 'linkedin' | 'github' | 'whatsapp' | 'email';

interface SocialButtonProps {
  href: string;
  platform: SocialPlatform;
  children: ReactNode;
  label: string;
}

const platformStyles: Record<SocialPlatform, string> = {
  linkedin: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10',
  github: 'hover:text-text-main hover:border-border-strong hover:bg-surface-3',
  whatsapp: 'hover:text-[#25D366] hover:border-[#25D366]/30 hover:bg-[#25D366]/10',
  email: 'hover:text-accent hover:border-accent/30 hover:bg-accent-subtle',
};

export function SocialButton({ href, platform, children, label }: SocialButtonProps) {
  const isEmail = platform === 'email';
  const linkHref = isEmail ? `mailto:${href}` : href;
  
  return (
    <a
      href={linkHref}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className={`w-11 h-11 rounded-lg border border-border-default bg-surface-2 flex items-center justify-center text-tertiary transition-all duration-150 ${platformStyles[platform]}`}
      aria-label={label}
    >
      {children}
    </a>
  );
}
