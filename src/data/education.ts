export interface Education {
  course: string;
  institution: string;
  status: string;
}

export const education: Education[] = [
  {
    course: 'Engenharia da Computação',
    institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
    status: 'Em andamento',
  },
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Salvador (UNIFACS)',
    status: 'Em andamento',
  },
  {
    course: 'Programação Full Stack',
    institution: 'SENAI São Paulo',
    status: 'Concluído',
  },
  {
    course: 'Técnico em Mecatrônica',
    institution: 'SENAI CIMATEC',
    status: 'Concluído',
  },
];
