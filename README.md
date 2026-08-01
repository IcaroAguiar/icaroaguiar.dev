# Ícaro Aguiar Portfolio

Site pessoal e estudos de caso de [Ícaro Aguiar](https://icaroaguiar.dev). HTML estático com Astro 7, TypeScript e CSS nativo.

**Live:** https://icaroaguiar.dev

## Stack

- Astro 7.1 + TypeScript estrito
- CSS com tokens semânticos
- Formspree no formulário de contato
- Deploy estático na Vercel

## Desenvolvimento

Requer Node.js 22+ e pnpm 10.

```bash
pnpm install
pnpm dev
```

Servidor local: `http://localhost:4321`.

```bash
pnpm check
pnpm build
```

O build sai em `dist/`.

## Estrutura

```text
src/
├── assets/       # Imagens otimizadas pelo Astro
├── components/   # UI compartilhada
├── config/       # Identidade, e-mail, links e navegação
├── data/         # Conteúdo tipado (cases, catálogo, skills, experiência)
├── layouts/      # HTML base e SEO
├── pages/        # Rotas públicas
├── scripts/      # Tema, idioma, menu e revelações
├── styles/       # Sistema visual
└── utils/        # Destaques, categorias e galerias dos cases
```

## Rotas

- `/` — perfil, destaques e stack
- `/sobre`
- `/projetos` — catálogo visual + ferramentas públicas
- `/projeto/[projectId]` — estudos de caso publicados
- `/contato`

## Conteúdo

Há duas fontes complementares de projetos:

- `src/data/projects.ts` — estudos de caso completos (prerender de `/projeto/[id]`)
- `src/data/projectCatalog.ts` — listagem de `/projetos` e IDs publicados

Screenshots ficam em `public/case-screenshots/<projeto>/`. Imagens importadas pelo Astro ficam em `src/assets/`.

Identidade e contato: `src/config/site.ts`.

## Licença

MIT © Ícaro Aguiar
