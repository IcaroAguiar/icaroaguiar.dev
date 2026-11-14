export interface Localized {
  pt: string;
  en: string;
}

/** Atributos lidos por scripts/site.ts para trocar o idioma sem recarregar a página. */
export const copy = ({ pt, en }: Localized) => ({ 'data-copy-pt': pt, 'data-copy-en': en });
