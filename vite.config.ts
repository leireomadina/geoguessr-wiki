import { resolve } from 'path'
import { defineConfig } from 'vite'
// Importing from vitest/config also adds Vitest's types for the `test` key below.
import { configDefaults } from 'vitest/config'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/geoguessr-wiki/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    // Runs once per test file: imports jest-dom matchers, mocks matchMedia,
    // resets localStorage between tests.
    setupFiles: ['./src/test-utils/setup.ts'],
    // e2e/*.spec.ts are Playwright tests (run by `pnpm test:e2e`), not Vitest's.
    exclude: [...configDefaults.exclude, 'e2e/**'],
    // Mock CSS imports instead of processing them: components import *.css but
    // tests never assert on styles, and parsing every stylesheet slows runs.
    css: false
  }
})
