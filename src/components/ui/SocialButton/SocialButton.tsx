import { ReactNode } from 'react';

type SocialPlatform = 'linkedin' | 'github' | 'whatsapp' | 'email';

interface SocialButtonProps {
  href: string;
  platform: SocialPlatform;
  children: ReactNode;
  label: string;
}

const platformStyles: Record<SocialPlatform, string> = {
  linkedin: 'hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50',
  github: 'hover:text-slate-800 hover:border-slate-400 hover:bg-slate-50',
  whatsapp: 'hover:text-green-600 hover:border-green-300 hover:bg-green-50',
  email: 'hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50',
};

export function SocialButton({ href, platform, children, label }: SocialButtonProps) {
  const isEmail = platform === 'email';
  const linkHref = isEmail ? `mailto:${href}` : href;
  
  return (
    <a
      href={linkHref}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className={`w-11 h-11 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-600 transition ${platformStyles[platform]}`}
      aria-label={label}
    >
      {children}
    </a>
  );
}
