import type { Project } from '@/data/projects';

export const featuredProjectIds = ['ascend', 'neo-constrictor'] as const;

export const projectCategories = [
  'Todos',
  'Produtos',
  'Web',
  'Mobile',
  'Backend',
  'IA/Automação',
  'Landing Pages',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

const landingPageIds = new Set([
  'rosana-site',
  'kosmedico-lp',
  'picanhabrasil',
  'daniele-landingpage',
  'fixxcapital',
  'star-agency-v2',
  'tatiane-aguiar',
]);

export function projectCategory(project: Project): Exclude<ProjectCategory, 'Todos'> {
  const tags = project.tags.map((tag) => tag.toLowerCase());
  const searchable = `${project.title} ${project.description}`.toLowerCase();

  if (tags.includes('monorepo')) {
    return 'Produtos';
  }

  if (landingPageIds.has(project.id) || tags.some((tag) => tag.includes('landing')) || searchable.includes('landing')) {
    return 'Landing Pages';
  }

  if (tags.some((tag) => ['mobile', 'react native', 'expo'].some((value) => tag.includes(value)))) {
    return 'Mobile';
  }

  if (tags.some((tag) => ['python', 'fastapi', 'ml', 'automation'].some((value) => tag.includes(value)))) {
    return 'IA/Automação';
  }

  if (tags.some((tag) => ['api', 'backend', 'node', 'express'].some((value) => tag.includes(value)))) {
    return 'Backend';
  }

  return 'Web';
}

export function projectImage(project: Project) {
  return project.image || '/preview.png';
}

const galleryByProject: Record<string, string[]> = {
  ascend: ['/case-screenshots/ascend/orders-dashboard-wide-2026.png'],
  'rosana-site': ['/case-screenshots/transmutar/screen-01.png'],
  'bluefit-mvp': ['/case-screenshots/bluefit-mvp/screen-01.png'],
  picanhabrasil: ['/case-screenshots/picanha-brasil/screen-01.png'],
  'daniele-landingpage': ['/case-screenshots/daniele-wigstrom/screen-01.png'],
  'star-agency-v2': ['/case-screenshots/star-agency/screen-01.png'],
  'tatiane-aguiar': ['/case-screenshots/aguiar-ambiental/screen-01.png'],
  'financas-api': ['/case-screenshots/neo-constrictor/screen-01.png'],
  'neo-constrictor': [
    '/case-screenshots/neo-constrictor/project-dossier-2026.png',
    '/case-screenshots/neo-constrictor/project-timeline-2026.png',
  ],
};

export function projectGallery(project: Project) {
  return galleryByProject[project.id] ?? [];
}
