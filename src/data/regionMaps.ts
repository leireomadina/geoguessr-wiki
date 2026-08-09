import australiaLow from "@/assets/maps/australiaLow.svg?raw";
import czechiaLow from "@/assets/maps/czechiaLow.svg?raw";
import type { RegionMap, RegionMapConfig, RegionShape } from "@/types/regionMap";

const MAP_CONFIGS: Record<string, RegionMapConfig> = {
  AU: {
    viewBox: "0 0 500 600",
    svg: australiaLow,
    labels: {
      "Northern Territory": { label: "NT" },
      "Western Australia": { label: "WA" },
      "Australian Capital Territory": { label: "ACT" },
      "New South Wales": { label: "NSW" },
      "South Australia": { label: "SA" },
      "Victoria": { label: "Victoria" },
      "Queensland": { label: "Queensland" },
      "Tasmania": { label: "Tasmania" },
    },
  },
  CZ: {
    viewBox: "0 440 612 355",
    svg: czechiaLow,
    labels: {
      "Praha": { label: "Prague" },
      "Středočeský kraj": { label: "Středoč." },
      "Jihočeský kraj": { label: "Jihoč." },
      "Plzeňský kraj": { label: "Plzeň" },
      "Karlovarský kraj": { label: "Karl. Vary" },
      "Ústecký kraj": { label: "Ústí n.L." },
      "Liberecký kraj": { label: "Liberec" },
      "Královéhradecký kraj": { label: "Hr. Králové" },
      "Pardubický kraj": { label: "Pardubice" },
      "Vysočina": { label: "Vysočina" },
      "Jihomoravský kraj": { label: "Jihomor." },
      "Olomoucký kraj": { label: "Olom." },
      "Zlínský kraj": { label: "Zlín" },
      "Moravskoslezský kraj": { label: "Morav." },
    },
  },
};

// True when a country has a map configured. Single source of truth so callers
// don't hardcode country IDs.
export function hasRegionMap(countryId: string): boolean {
  return countryId in MAP_CONFIGS;
}

// Caches parsed maps so the SVG is only parsed once per country.
const parsedCache = new Map<string, RegionMap>();

// Extracts each `<path>`'s `title` (region name) and `d` (shape data) from a
// raw SVG string. Knows nothing about labels or configs.
export function parseSvgRegions(svg: string): Record<string, string> {
  const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
  const regions: Record<string, string> = {};

  for (const path of Array.from(doc.querySelectorAll("path"))) {
    const name = path.getAttribute("title");
    const d = path.getAttribute("d");
    if (name && d) {
      regions[name] = d;
    }
  }

  return regions;
}

// Merges each shape's `d` with its configured label, keeping only names
// that have both a shape and a label.
export function matchLabels(
  shapes: Record<string, string>,
  labels: Record<string, Omit<RegionShape, "d">>,
): Record<string, RegionShape> {
  const regions: Record<string, RegionShape> = {};

  for (const [name, d] of Object.entries(shapes)) {
    const label = labels[name];
    if (label) {
      regions[name] = { d, ...label };
    }
  }

  return regions;
}

/**
 * Parses a country's raw SVG text into a render-ready RegionMap:
 * - Reads each `<path>` and matches it by its `title` (region name) to the config's labels.
 * - Keeps regions that have a name, shape data (`d`), and a label.
 * - Caches the result per country so the SVG is only parsed once.
 */
export function getRegionMap(countryId: string): RegionMap | undefined {
  const cached = parsedCache.get(countryId);
  if (cached) return cached;

  const config = MAP_CONFIGS[countryId];
  if (!config) return undefined; // no map configured for this country

  const map = {
    viewBox: config.viewBox,
    regions: matchLabels(parseSvgRegions(config.svg), config.labels),
  };
  parsedCache.set(countryId, map);
  return map;
}
