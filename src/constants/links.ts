export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/IcaroAguiar',
  LINKEDIN: 'https://www.linkedin.com/in/icaro-aguiar/',
  WHATSAPP: 'https://wa.me/5571992608397',
  EMAIL: 'icaroaguiar14@gmail.com',
} as const;

export type SocialLinkKey = keyof typeof SOCIAL_LINKS;
