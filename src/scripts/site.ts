const root = document.documentElement;

const copy = {
  pt: {
    role: 'engenheiro full-stack',
    contact: 'Falar comigo ↗',
    footerDescription: 'Engenharia full-stack, arquitetura de produto e IA aplicada para sistemas que precisam sair do papel com qualidade.',
    rights: 'Todos os direitos reservados.',
    resume: 'Currículo',
    heroEyebrow: 'Engenharia, produto e IA aplicada',
    heroTitle: 'Software confiável. Problemas reais.',
    heroIntro: 'Arquitetura clara, interfaces cuidadosas e execução técnica para produtos que precisam funcionar no mundo real.',
    heroPrimary: 'Ver projetos ↗',
    heroSecondary: 'Sobre meu trabalho',
  },
  en: {
    role: 'full-stack engineer',
    contact: 'Contact me ↗',
    footerDescription: 'Full-stack engineering, product architecture, and applied AI for systems that need to leave the idea stage with quality.',
    rights: 'All rights reserved.',
    resume: 'Resume',
    heroEyebrow: 'Engineering, product and applied AI',
    heroTitle: 'Reliable software. Real problems.',
    heroIntro: 'Clear architecture, thoughtful interfaces, and technical execution for products that need to work in the real world.',
    heroPrimary: 'View projects ↗',
    heroSecondary: 'About my work',
  },
} as const;

type Language = keyof typeof copy;

function setLanguage(language: Language) {
  root.dataset.language = language;
  root.lang = language === 'pt' ? 'pt-BR' : 'en';
  localStorage.setItem('portfolio-language', language);

  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((element) => {
    const key = element.dataset.copy as keyof (typeof copy)['pt'];
    if (copy[language][key]) element.textContent = copy[language][key];
  });

  document.querySelectorAll<HTMLElement>('[data-copy-pt][data-copy-en]').forEach((element) => {
    element.textContent = language === 'pt' ? element.dataset.copyPt ?? '' : element.dataset.copyEn ?? '';
  });

  const toggle = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
  if (toggle) toggle.textContent = language === 'pt' ? 'EN' : 'PT';
}

setLanguage(root.dataset.language === 'en' ? 'en' : 'pt');

document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
  setLanguage(root.dataset.language === 'pt' ? 'en' : 'pt');
});

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
});

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const navigation = document.querySelector<HTMLElement>('[data-navigation]');

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation?.toggleAttribute('data-open', open);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    navigation.removeAttribute('data-open');
  });
});

const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-project-filter]');
const projectCards = document.querySelectorAll<HTMLElement>('[data-project-card]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.projectFilter;
    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    projectCards.forEach((card) => {
      card.hidden = category !== 'Todos' && card.dataset.category !== category;
    });
  });
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-visible', '');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}
