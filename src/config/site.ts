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
    resume: '/curriculo-icaro-aguiar-fullstack-pt.pdf',
  },
} as const;

export const resumes = [
  {
    id: 'fullstack-pt',
    titlePt: 'Full stack',
    titleEn: 'Full stack',
    detailPt: 'Português · PDF · 2 páginas',
    detailEn: 'Portuguese · PDF · 2 pages',
    href: '/curriculo-icaro-aguiar-fullstack-pt.pdf',
  },
  {
    id: 'backend-pt',
    titlePt: 'Back-end',
    titleEn: 'Back-end',
    detailPt: 'Português · PDF · 2 páginas',
    detailEn: 'Portuguese · PDF · 2 pages',
    href: '/curriculo-icaro-aguiar-backend-pt.pdf',
  },
  {
    id: 'fullstack-en',
    titlePt: 'Full stack',
    titleEn: 'Full stack',
    detailPt: 'English · PDF · 2 pages',
    detailEn: 'English · PDF · 2 pages',
    href: '/curriculo-icaro-aguiar-fullstack-en.pdf',
  },
] as const;

export const navigation = [
  { href: '/projetos', label: 'Projetos', labelEn: 'Projects' },
  { href: '/sobre', label: 'Sobre', labelEn: 'About' },
  { href: '/contato', label: 'Contato', labelEn: 'Contact' },
] as const;
