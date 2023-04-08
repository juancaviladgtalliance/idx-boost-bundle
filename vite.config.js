/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

export default defineConfig({
 base: '/',
 root: path.join(__dirname, '/src'),
 build: {
  input: path.join(__dirname, '/src'),
  outDir: `${__dirname}/dist`,
  sourcemap: true,
  rollupOptions: {
   input: path.join(__dirname, '/src/main.js'),
   output: {
    assetFileNames: 'assets/css/[name].[ext]',
    entryFileNames: 'assets/js/[name].js',
   },
  },
  manifest: true,
 },
 emitIndex: true,
 plugins: [
  // https://github.com/vbenjs/vite-plugin-html
  createHtmlPlugin({
   minify: false,
   pages: [
    {
     path: '/',
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
