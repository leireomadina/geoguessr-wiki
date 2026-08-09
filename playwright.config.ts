import { defineConfig, devices } from '@playwright/test'

// https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4173/geoguessr-wiki/',
    trace: 'on-first-retry'
  },
  // Chromium only: the app uses only cross-engine web APIs (localStorage,
  // matchMedia, DOMParser, SVG), so there's no engine-specific bug class to
  // catch. One browser keeps installs and CI fast. Adding firefox/webkit later
  // is just another entry in this array.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    // The site is a static SPA served from /geoguessr-wiki/, so `vite preview`
    // (which serves the built dist/ with that base path) is the test target.
    command: 'pnpm run build && pnpm run preview',
    port: 4173,
    reuseExistingServer: !process.env.CI
  }
})
