import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://icaroaguiar.dev',
  output: 'static',
  trailingSlash: 'never',
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
