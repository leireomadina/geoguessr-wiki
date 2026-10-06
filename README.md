# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Interactive region maps (SVG source)

The interactive maps in the regions section come from [amCharts Free SVG Maps](https://www.amcharts.com/svg-maps/). The raw paths are extracted from the **Low** detail SVG of a country (e.g. `australiaLow.svg`) and stored in [`src/data/regionMaps.ts`](src/data/regionMaps.ts), keyed by the region names used in each country's data file.

- Source directory: `https://www.amcharts.com/lib/3/maps/svg/`
- Example: `https://www.amcharts.com/lib/3/maps/svg/australiaLow.svg`
- Each `<path>` carries an `id` (e.g. `AU-NSW`) and a `title` with the region name that must match the name in the country's `regions` data (e.g. `australia.ts`).
- License: amCharts maps are free for non-commercial use under the [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).

To add a map for a country:
1. Download its `...Low.svg` from amCharts and copy it into `src/assets/maps/` (e.g. `australiaLow.svg`).
2. Import it in `src/data/regionMaps.ts` and add a `MAP_CONFIGS` entry with the `viewBox` (amCharts SVGs have none, so supply it, e.g. `"0 0 500 600"`).
3. Optional: add a `labels` entry per region to override the text shown on the map — the region name is used by default (use an acronym for long names, e.g. `"NSW"`).

Label positions are computed automatically from each shape's main sub-path when the map renders, so no coordinates need to be picked by hand. If a shape is too small to fit its label, the label is placed beside the shape instead of on top of it. Fill colors are assigned automatically too: `assignRegionColors` (in `src/data/regionColors.ts`) picks from warm/cool/neutral palettes so that adjacent shapes never share a color — no per-region CSS classes to maintain.

## Testing

### Strategy

The site is a static, data-driven SPA: most of what can break is **content** (the country files in `src/data/countries/`) and the **interactive region map**, not complex app logic. Tests are therefore split into four layers, weighted towards fast checks that run on every change, with only a thin layer of real-browser tests on top.

| Layer | Purpose | Tools | Status |
|---|---|---|---|
| 1. Unit | Pure logic: utils, SVG map parsing, region color assignment, the theme hook | Vitest | ✅ Done |
| 2. Data integrity | Content can't silently break the site: valid ids, enums and URLs, and region names matching the SVG map shapes | Vitest | ✅ Done |
| 3. Component / integration | Pages and components behave correctly through the real routes: search and filters, region selection, not-found pages, theme toggle | Vitest + Testing Library + user-event (jsdom) | ✅ Done |
| 4. End-to-end | A few critical user journeys in a real browser against the built site, plus what jsdom can't do (SVG layout with `getBBox`) | Playwright (Chromium) | ⏳ Planned |

Guidelines:

- **Test with the real data, not mocks.** Derive expected values from the data (e.g. `countries.filter((c) => c.continent === "Europe")`) instead of hard-coding counts, so adding a country never breaks a test. When a state doesn't exist in the real data yet (e.g. a country with empty `regions`), use a small fixture with `vi.mock("@/data/countries")` in its own test file, like `src/pages/CountryDetail.fixtures.test.tsx`.
- **Name the culprit in data assertions.** Pass a message such as `expect(value, "ES studyLinks[1] url")`, so a failure points straight to the file to fix.
- **Query the way users do:** by role, label or visible text, not by CSS class.
- **Keep E2E small.** Anything that can be checked in jsdom belongs in layers 1–3, and Playwright covers only full journeys and real layout.

Not covered on purpose (for now):
- **Visual regression screenshots:** too brittle while the design changes.
- **Reachability of external study and video links:** network-dependent and flaky.
- **The GitHub Pages `404.html` redirect:** `vite preview` doesn't use it.

### Where tests live

- **Unit, data and component tests:** next to the code they test, as `*.test.ts` or `*.test.tsx` (e.g. `src/utils/countryUtils.test.ts`).
- **End-to-end tests:** in `e2e/*.spec.ts`. Vitest ignores this folder.
- **Shared helpers:** in `src/test-utils/`.
  - `setup.ts` runs before every test file. It adds the jest-dom matchers, mocks `matchMedia` and SVG `getBBox` (which jsdom lacks), and unmounts rendered components and clears `localStorage` after each test.
  - `matchMedia.ts` provides a controllable `matchMedia` mock, used to simulate OS light/dark changes.
  - `renderRoute.tsx` renders the whole app (real routes and `Layout`) at a given path, e.g. `renderRoute("/country/ES")`. Pass several paths to have history to go back to.

### Running the tests

The project uses **pnpm only**. The version is pinned in `package.json` (`packageManager`), so run `corepack enable` once if your pnpm is older.

| Command | What it runs |
|---|---|
| `pnpm test` | Unit, data and component tests, once |
| `pnpm test:watch` | The same, re-running on file changes |
| `pnpm test:coverage` | The same, with a coverage report |
| `pnpm test:e2e` | Playwright end-to-end tests: builds the site and serves it with `vite preview` |
| `pnpm test:all` | Vitest, then Playwright |

### CI

The **CI** workflow (`.github/workflows/ci.yml`) runs lint, the build (including the type-check) and `pnpm test` on every pull request and on every push to `main`. Its `checks` job is a required status check, so a pull request can't be merged into `main` while it's red.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
