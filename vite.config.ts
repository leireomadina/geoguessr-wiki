import { resolve } from 'path'
import { defineConfig } from 'vite'
// Importing from vitest/config also adds Vitest's types for the `test` key below.
import { configDefaults } from 'vitest/config'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // If you change this, also update `base` in public/404.html (not processed by Vite)
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
    css: false,
    coverage: {
      // List every source file, so untested files show up as 0% instead of
      // being missing from the report.
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/test-utils/**',
        // Content, not logic: importing a country file would count it as covered
        'src/data/countries/**',
        // Type-only files, and the browser entry point (covered by e2e tests)
        'src/types/**',
        'src/main.tsx',
        'src/vite-env.d.ts'
      ],
      // `pnpm test:coverage` fails below these. Set a few points under the
      // measured values (Oct 2026) to catch untested additions, not noise.
      // Branch numbers include the React Compiler's hidden memo branches, so
      // they can't reach 100% and shouldn't be chased.
      thresholds: {
        statements: 88,
        branches: 80,
        functions: 95,
        lines: 94
      }
    }
  }
})
