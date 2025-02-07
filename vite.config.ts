import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',
          dest: '',
        },
        {
          src: 'src/manifest.json',
          dest: '',
        },
      ],
    })
  ],
});