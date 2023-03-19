import { defineConfig } from 'vite';
import vitePugPlugin from 'vite-plugin-pug-transformer';

export default defineConfig({
  plugins: [vitePugPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: './src/index.html',
      },
    },
  },
  server: {
    open: './src/index.html',
  },
  base: './',
});
