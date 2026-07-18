# Ícaro Aguiar Portfolio

Portfolio pessoal e estudos de caso de Ícaro Aguiar. O site é gerado como HTML estático com Astro 7.1 e usa JavaScript no cliente apenas para tema, idioma, navegação móvel, filtros e revelações progressivas.

## Stack

- Astro 7.1
- TypeScript em modo estrito
- CSS nativo com tokens semânticos
- Formspree para o formulário de contato
- Vercel para hospedagem estática

## Desenvolvimento

Requer Node.js 22 ou superior e pnpm 10.

```bash
pnpm install
pnpm dev
```

O servidor local usa `http://localhost:4321` por padrão.

## Verificação

```bash
pnpm check
pnpm build
```

O build estático é gerado em `dist/`.

## Estrutura

```text
src/
├── assets/       # Imagens processadas pelo Astro
├── components/   # Módulos visuais compartilhados
├── config/       # Identidade, links e navegação
├── data/         # Conteúdo tipado do portfolio
├── layouts/      # Documento HTML e SEO compartilhado
├── pages/        # Rotas públicas
├── scripts/      # Interações progressivas sem framework
├── styles/       # Sistema visual global
└── utils/        # Regras de apresentação dos projetos
```

## Rotas

- `/`
- `/sobre`
- `/projetos`
- `/projeto/[projectId]`
- `/contato`

Os cases são prerenderizados a partir de `src/data/projects.ts`.

## Conteúdo e assets

- Atualize projetos em `src/data/projects.ts`.
- Use `public/case-screenshots/<projeto>/` para screenshots que devem manter o nome original.
- Use `src/assets/` para imagens importadas e otimizadas pelo Astro.
- Nunca adicione credenciais ou dados privados ao repositório.
