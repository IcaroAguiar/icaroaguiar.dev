import type { Project } from '@/data/projects';

export const featuredProjectIds = ['ascend', 'neo-constrictor', 'bluefit-mvp'] as const;

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

  if (featuredProjectIds.includes(project.id as (typeof featuredProjectIds)[number]) || tags.includes('monorepo')) {
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
