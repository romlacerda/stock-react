import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    plugins: [preact()],
    build: {
      outDir: 'dist/widget',
      minify: 'esbuild',
      cssCodeSplit: false,
      lib: {
        entry: 'src/widget/entry.ts',
        name: 'StocksSnapshot',
        formats: ['iife'],
        fileName: () => 'stocks.bundle.js',
      },
      rollupOptions: {
        output: {
          compact: true,
        },
      },
    },
    css: {
      modules: {
        generateScopedName: '[local]',  
      }
    }
  });