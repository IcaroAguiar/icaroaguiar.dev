export const site = {
  name: 'Ícaro Aguiar',
  title: 'Ícaro Aguiar | Desenvolvedor full stack',
  description:
    'Desenvolvedor full stack em Cruz das Almas, BA. Sistemas completos com React, NestJS e AWS, do contrato da API ao deploy.',
  url: 'https://icaroaguiar.dev',
  email: 'icaroaguiar.dev@gmail.com',
  links: {
    github: 'https://github.com/IcaroAguiar',
    linkedin: 'https://www.linkedin.com/in/icaro-aguiar/',
    whatsapp: 'https://wa.me/5571992608397',
  },
} as const;

/** Um currículo por idioma; o link acompanha a troca de idioma do site. */
export const resume = {
  pt: '/curriculo-icaro-aguiar-fullstack-pt.pdf',
  en: '/curriculo-icaro-aguiar-fullstack-en.pdf',
};

/** Atributos lidos por scripts/site.ts para trocar o href junto com o idioma. */
export const resumeLink = { href: resume.pt, 'data-href-pt': resume.pt, 'data-href-en': resume.en, download: true };

export const navigation = [
  { href: '/projetos', label: 'Projetos', labelEn: 'Projects' },
  { href: '/sobre', label: 'Sobre', labelEn: 'About' },
  { href: '/contato', label: 'Contato', labelEn: 'Contact' },
] as const;
