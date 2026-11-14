import type { Project } from '@/data/projects';
import type { Localized } from '@/utils/copy';

const landingPageIds = new Set(['rosana-site', 'kosmedico-lp', 'tatiane-aguiar']);

const categories = {
  products: { pt: 'Produtos', en: 'Products' },
  landingPages: { pt: 'Landing Pages', en: 'Landing pages' },
  mobile: { pt: 'Mobile', en: 'Mobile' },
  ai: { pt: 'IA/Automação', en: 'AI/Automation' },
  backend: { pt: 'Backend', en: 'Backend' },
  web: { pt: 'Web', en: 'Web' },
} satisfies Record<string, Localized>;

export function projectCategory(project: Project): Localized {
  const tags = project.tags.map((tag) => tag.toLowerCase());
  const searchable = `${project.title} ${project.description.pt}`.toLowerCase();

  if (tags.includes('monorepo') || tags.includes('pwa') || project.id === 'palpitae') {
    return categories.products;
  }

  if (landingPageIds.has(project.id) || tags.some((tag) => tag.includes('landing')) || searchable.includes('landing')) {
    return categories.landingPages;
  }

  if (tags.some((tag) => ['mobile', 'react native', 'expo'].some((value) => tag.includes(value)))) {
    return categories.mobile;
  }

  if (tags.some((tag) => ['python', 'fastapi', 'ml', 'automation'].some((value) => tag.includes(value)))) {
    return categories.ai;
  }

  if (tags.some((tag) => ['api', 'backend', 'node', 'express', 'go'].some((value) => tag.includes(value)))) {
    return categories.backend;
  }

  return categories.web;
}

const tagLabels: Record<string, string> = {
  Conteúdo: 'Content',
  Multilíngue: 'Multilingual',
  Responsivo: 'Responsive',
};

/** Tags são nomes de tecnologia, exceto os poucos termos em português listados em tagLabels. */
export function projectTag(tag: string): Localized {
  return { pt: tag, en: tagLabels[tag] ?? tag };
}

export function projectImage(project: Project) {
  return project.image || '/preview.png';
}

const galleryByProject: Record<string, string[]> = {
  qualityflow: [
    '/case-screenshots/qualityflow/02-indicadores-2026-11.webp',
    '/case-screenshots/qualityflow/03-auditorias-2026-11.webp',
    '/case-screenshots/qualityflow/06-documentos-2026-11.webp',
    '/case-screenshots/qualityflow/07-fornecedores-2026-11.webp',
  ],
  'agents-platform': [
    '/case-screenshots/agents-platform/02-empresas-2026-11.webp',
    '/case-screenshots/agents-platform/03-editor-agente-2026-11.webp',
    '/case-screenshots/agents-platform/04-conversas-2026-11.webp',
  ],
  'maria-comprou': [
    '/case-screenshots/maria-comprou/02-ofertas-2026-11.webp',
    '/case-screenshots/maria-comprou/03-mais-vistos-2026-11.webp',
    '/case-screenshots/maria-comprou/04-sugira-oferta-2026-11.webp',
  ],
  ascend: ['/case-screenshots/ascend/orders-dashboard-wide-2026.png'],
  'rosana-site': ['/case-screenshots/transmutar/screen-01.png'],
  'tatiane-aguiar': ['/case-screenshots/aguiar-ambiental/screen-01.png'],
  'neo-constrictor': [
    '/case-screenshots/neo-constrictor/02-solicitacoes-animais-2026-11.webp',
    '/case-screenshots/neo-constrictor/04-laboratorios-admin-2026-11.webp',
    '/case-screenshots/neo-constrictor/06-submissoes-2026-11.webp',
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
