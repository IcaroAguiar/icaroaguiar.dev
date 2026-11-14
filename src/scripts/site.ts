const root = document.documentElement;

type Language = 'pt' | 'en';

const languageToggle = document.querySelector<HTMLButtonElement>('[data-language-toggle]');

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

  document.querySelectorAll<HTMLImageElement>('[data-alt-pt][data-alt-en]').forEach((image) => {
    image.alt = (language === 'pt' ? image.dataset.altPt : image.dataset.altEn) ?? '';
  });

  if (languageToggle) languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
  window.dispatchEvent(new CustomEvent('portfolio:language-change', { detail: { language } }));
}

setLanguage(root.dataset.language === 'en' ? 'en' : 'pt');

languageToggle?.addEventListener('click', () => {
  setLanguage(root.dataset.language === 'pt' ? 'en' : 'pt');
});

const header = document.getElementById('hd');
const updateHeader = () => header?.classList.toggle('stuck', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

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
