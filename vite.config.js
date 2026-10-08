import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  root: '.',
  publicDir: 'public',
  resolve: { alias: { '@game': resolve(process.cwd(), '.') } },
  build: { outDir: 'dist', emptyOutDir: true },
});
