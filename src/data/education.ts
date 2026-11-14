import type { Localized } from '@/utils/copy';

export interface Education {
  course: Localized;
  institution: Localized;
  status: Localized;
}

const inProgress: Localized = { pt: 'Em andamento', en: 'In progress' };

export const education: Education[] = [
  {
    course: { pt: 'Engenharia da Computação', en: 'Computer Engineering' },
    institution: {
      pt: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
      en: 'Federal University of Recôncavo da Bahia (UFRB)',
    },
    status: inProgress,
  },
  {
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
    institution: { pt: 'Universidade Salvador (UNIFACS)', en: 'Salvador University (UNIFACS)' },
    status: inProgress,
  },
  {
    course: { pt: 'Programação Full Stack', en: 'Full Stack Programming' },
    institution: { pt: 'SENAI São Paulo', en: 'SENAI São Paulo' },
    status: { pt: 'Concluído', en: 'Completed' },
  },
];
