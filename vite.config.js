import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    devTools: true
  })],
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
