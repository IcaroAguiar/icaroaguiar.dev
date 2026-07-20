const root = document.documentElement;

type Language = 'pt' | 'en';
type Theme = 'dark' | 'light';

const languageToggle = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
const themeToggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

function setLanguage(language: Language) {
  root.dataset.language = language;
  root.lang = language === 'pt' ? 'pt-BR' : 'en';
  localStorage.setItem('portfolio-language', language);

  document.querySelectorAll<HTMLElement>('[data-copy-pt][data-copy-en]').forEach((element) => {
    element.textContent = language === 'pt' ? element.dataset.copyPt ?? '' : element.dataset.copyEn ?? '';
  });

  document.querySelectorAll<HTMLElement>('[data-label-pt][data-label-en]').forEach((element) => {
    element.setAttribute('aria-label', language === 'pt' ? element.dataset.labelPt ?? '' : element.dataset.labelEn ?? '');
  });

  if (languageToggle) languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
  window.dispatchEvent(new CustomEvent('portfolio:language-change', { detail: { language } }));
}

function setTheme(theme: Theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  const language = root.dataset.language === 'en' ? 'en' : 'pt';
  themeToggle?.setAttribute('aria-label', theme === 'dark'
    ? language === 'pt' ? 'Usar tema claro' : 'Use light theme'
    : language === 'pt' ? 'Usar tema escuro' : 'Use dark theme');
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0c0b' : '#f5f4f0');
  window.dispatchEvent(new CustomEvent('portfolio:theme-change', { detail: { theme } }));
}

setLanguage(root.dataset.language === 'en' ? 'en' : 'pt');
setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');

languageToggle?.addEventListener('click', () => {
  setLanguage(root.dataset.language === 'pt' ? 'en' : 'pt');
  setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
});

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const navigation = document.querySelector<HTMLElement>('[data-navigation]');

function closeNavigation() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  navigation?.removeAttribute('data-open');
  document.body.removeAttribute('data-menu-open');
}

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation?.toggleAttribute('data-open', open);
  document.body.toggleAttribute('data-menu-open', open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

const sectionLinks = [...(navigation?.querySelectorAll<HTMLAnchorElement>('a') ?? [])]
  .map((link) => ({ link, url: new URL(link.href) }))
  .filter(({ url }) => url.pathname === window.location.pathname && url.hash);

const sectionById = new Map(
  sectionLinks
    .map(({ link, url }) => {
      const section = document.querySelector<HTMLElement>(url.hash);
      return section ? [section.id, { link, section }] as const : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null),
);

if (sectionById.size > 0) {
  const setActiveSection = (id: string) => {
    sectionById.forEach(({ link }, sectionId) => {
      if (sectionId === id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const navigationObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target.id) setActiveSection(visible.target.id);
  }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, .2, .6] });

  sectionById.forEach(({ section }) => navigationObserver.observe(section));
}

const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-project-filter]');
const projectCards = document.querySelectorAll<HTMLElement>('[data-project-card]');
const emptyState = document.querySelector<HTMLElement>('[data-project-empty]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.projectFilter;
    let visible = 0;

    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    projectCards.forEach((card) => {
      const hidden = category !== 'Todos' && card.dataset.category !== category;
      card.hidden = hidden;
      if (!hidden) visible += 1;
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  });
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-visible', '');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}
