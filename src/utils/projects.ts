import type { Project } from '@/data/projects';

export const featuredProjectIds = ['ascend', 'neo-constrictor', 'palpitae'] as const;

const landingPageIds = new Set(['rosana-site', 'kosmedico-lp', 'tatiane-aguiar']);

export function projectCategory(project: Project): string {
  const tags = project.tags.map((tag) => tag.toLowerCase());
  const searchable = `${project.title} ${project.description}`.toLowerCase();

  if (tags.includes('monorepo') || tags.includes('pwa') || project.id === 'palpitae') {
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

  if (tags.some((tag) => ['api', 'backend', 'node', 'express', 'go'].some((value) => tag.includes(value)))) {
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
  'tatiane-aguiar': ['/case-screenshots/aguiar-ambiental/screen-01.png'],
  'neo-constrictor': [
    '/case-screenshots/neo-constrictor/project-dossier-2026.png',
    '/case-screenshots/neo-constrictor/project-timeline-2026.png',
  ],
  palpitae: [
    '/case-screenshots/palpitae/03-dashboard.webp',
    '/case-screenshots/palpitae/04-matches.webp',
    '/case-screenshots/palpitae/05-match-detail.webp',
    '/case-screenshots/palpitae/08-ranking.webp',
  ],
};

export function projectGallery(project: Project) {
  return galleryByProject[project.id] ?? [];
}
