/**
 * A single renderable region on the map:
 * - `d`: SVG path data (`d` attribute) copied exactly as-is from the source map; draws the region's outline.
 * - `label`: text shown near the shape on the map; short acronyms for long names (e.g. "NSW").
 *
 * The label's position and the shape's fill color are computed automatically
 * (from the shape's center and a warm/cool palette), so there are no hand-picked
 * coordinates or per-region CSS classes to maintain.
 */
export interface RegionShape {
  d: string;
  label: string;
}

/**
 * The parsed, render-ready map for a country:
 * - `viewBox`: `viewBox` attribute (e.g. "0 0 500 600") for the map's root `<svg>`; amCharts SVGs lack one.
 * - `regions`: region name (matches `Region.name` in the country data) -> shape to render.
 */
export interface RegionMap {
  viewBox: string;
  regions: Record<string, RegionShape>;
}

/**
 * The raw config for a country's map (used to build a RegionMap):
 * - `viewBox`: same `viewBox` attribute that ends up on the parsed map.
 * - `svg`: the source SVG file's contents, imported with `?raw`.
 * - `labels`: region name -> label settings (everything of a RegionShape except
 *   the path data `d`). Optional: when a region has no entry, its label falls
 *   back to the region name itself.
 */
export interface RegionMapConfig {
  viewBox: string;
  svg: string;
  labels?: Record<string, Omit<RegionShape, "d">>;
}
