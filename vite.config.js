import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react({
      devTools: true
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      include: /\.(js|css|html|svg)$/,
    })
  ],
  base: '/',
  build: {
    target: 'es2015',
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://backend:3000'
    }
  }
});
