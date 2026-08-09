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
2. Add a `MAP_CONFIGS` entry in `src/data/regionMaps.ts` with the `viewBox` (amCharts SVGs have none, so supply it, e.g. `"0 0 500 600"`) and a `labels` entry per region: the text to show (use an acronym for long names, e.g. `"NSW"`).
3. Enable it via `hasRegionMap` in `src/pages/CountryDetail.tsx`.

Label positions are computed automatically from each shape's main sub-path when the map renders, so no coordinates need to be picked by hand. If a shape is too small to fit its label, the label is placed beside the shape instead of on top of it. Fill colors are assigned automatically too: `assignRegionColors` (in `src/data/regionColors.ts`) picks from warm/cool/neutral palettes so that adjacent shapes never share a color — no per-region CSS classes to maintain.

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
