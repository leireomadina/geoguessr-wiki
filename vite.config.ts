// Adds Vitest's types for the `test` key below to Vite's UserConfig.
/// <reference types="vitest/config" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
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
      '@': resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    // Runs once per test file: imports jest-dom matchers, mocks matchMedia,
    // resets localStorage between tests.
    setupFiles: ['./src/test/setup.ts'],
    // Mock CSS imports instead of processing them: components import *.css but
    // tests never assert on styles, and parsing every stylesheet slows runs.
    css: false
  }
})
