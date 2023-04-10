import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  root: path.join(__dirname, '/src'),
  build: {
    outDir: `${__dirname}/dist`,
    sourcemap: true,
    rollupOptions: {
      input: path.join(__dirname, '/src/main.ts'),
      output: {
        assetFileNames: 'assets/css/[name].[ext]',
        entryFileNames: 'assets/js/[name].js',
      },
    },
    manifest: true,
  },
  plugins: [
    react(),
    // https://github.com/vbenjs/vite-plugin-html
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          filename: 'index.html',
          template: './index.html',
          injectOptions: {
            data: {
              title: 'Vanilla bundle',
              // injectScript: `<script src="./inject.js"></script>`,
            },
          },
        },
      ],
    }),
  ],
});
