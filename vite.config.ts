import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
      }
    }
  }
});