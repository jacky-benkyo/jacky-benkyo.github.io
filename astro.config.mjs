import { defineConfig } from 'astro/config';

// Static output, deployed to GitHub Pages as a user site (served from the domain root, so no `base`).
export default defineConfig({
  output: 'static',
  site: 'https://jacky-chow.github.io',
});
