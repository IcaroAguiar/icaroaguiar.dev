export const site = {
  name: 'Ícaro Aguiar',
  title: 'Ícaro Aguiar | Engenheiro de software',
  description:
    'Engenheiro de software. Arquitetura, interfaces e operação para transformar ideias complexas em software confiável.',
  url: 'https://icaroaguiar.dev',
  email: 'icaroaguiar14@gmail.com',
  links: {
    github: 'https://github.com/IcaroAguiar',
    linkedin: 'https://www.linkedin.com/in/icaro-aguiar/',
    whatsapp: 'https://wa.me/5571992608397',
    resume: '/Icaro_Aguiar_Curriculo_2026_PTBR.pdf',
  },
} as const;

export const navigation = [
  { href: '/projetos', label: 'Projetos', labelEn: 'Projects' },
  { href: '/sobre', label: 'Sobre', labelEn: 'About' },
  { href: '/contato', label: 'Contato', labelEn: 'Contact' },
] as const;
