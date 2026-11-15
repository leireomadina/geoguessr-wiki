/**
 * A single renderable region on the map:
 * - `d`: SVG path data (`d` attribute) copied exactly as-is from the source map; draws the region's outline.
 * - `label`: text shown near the shape on the map; short acronyms for long names (e.g. "NSW").
 * - `labelPosition` (optional): where to center the label, in the map's viewBox
 *   coordinates. Only for the few labels the automatic placement gets wrong
 *   (e.g. Prague, which sits inside Central Bohemia).
 *
 * The label's position and the shape's fill color are otherwise computed
 * automatically (from the shape's center and a warm/cool palette), so there are
 * no per-region CSS classes to maintain.
 */
export interface RegionShape {
  d: string;
  label: string;
  labelPosition?: { x: number; y: number };
}

/**
 * The parsed, render-ready map for a country:
 * - `viewBox`: `viewBox` attribute (e.g. "0 0 500 600") for the map's root `<svg>`; amCharts SVGs lack one.
 * - `regions`: region name (matches `Region.name` in the country data) -> shape to render.
 * - `labelsBesideShapes`: whether a label too big for its shape is placed next to it.
 * - `labelScale`: multiplier for every label's font size (1 = default).
 * - `wide`: whether the map gets the wide layout on the country page.
 * - `labelsOnPhones`: whether labels are shown on phone-sized screens.
 */
export interface RegionMap {
  viewBox: string;
  regions: Record<string, RegionShape>;
  labelsBesideShapes: boolean;
  labelScale: number;
  wide: boolean;
  labelsOnPhones: boolean;
}

/**
 * The raw config for a country's map (used to build a RegionMap):
 * - `viewBox`: same `viewBox` attribute that ends up on the parsed map.
 * - `svg`: the source SVG file's contents, imported with `?raw`.
 * - `labels`: region name -> label settings (everything of a RegionShape except
 *   the path data `d`). Optional: when a region has no entry, its label falls
 *   back to the region name itself.
 * - `labelsBesideShapes` (optional): set to false on dense maps (e.g. Russia)
 *   to hide a label that doesn't fit inside its shape instead of placing it
 *   next to it. Defaults to true.
 * - `labelScale` (optional): shrinks or grows every label, for maps whose
 *   viewBox units are much bigger or smaller on screen (e.g. 0.3 for Russia).
 *   Defaults to 1.
 * - `wide` (optional): for very wide maps (e.g. Russia, about 3:1), give the
 *   map most of the row next to the region panel instead of a third of it.
 *   Defaults to false.
 * - `labelsOnPhones` (optional): set to false on dense maps (e.g. Russia)
 *   whose labels are too small to read on a phone. The selected region's name
 *   still shows in the region panel. Defaults to true.
 */
export interface RegionMapConfig {
  viewBox: string;
  svg: string;
  labels?: Record<string, Omit<RegionShape, "d">>;
  labelsBesideShapes?: boolean;
  labelScale?: number;
  wide?: boolean;
  labelsOnPhones?: boolean;
}
