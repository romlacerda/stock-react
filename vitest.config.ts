import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';
import { PluginOption } from 'vite';

export default defineConfig({
  plugins: [preact() as PluginOption],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/testing/setup.ts'],
  },
});

