import type { Localized } from '@/utils/copy';

export const sections: { id: string; label: Localized }[] = [
  { id: 'projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { id: 'sites', label: { pt: 'Sites', en: 'Websites' } },
  { id: 'experiencia', label: { pt: 'Experiência', en: 'Experience' } },
  { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
  { id: 'contato', label: { pt: 'Contato', en: 'Contact' } },
];

/** Âncoras da home; fora dela, o link volta para a home. */
export const sectionHref = (pathname: string, id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);
