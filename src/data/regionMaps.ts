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

// Caches parsed maps so the SVG is only parsed once per country.
const parsedCache = new Map<string, RegionMap>();

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

  const doc = new DOMParser().parseFromString(config.svg, "image/svg+xml");
  const regions: Record<string, RegionShape> = {};

  for (const path of Array.from(doc.querySelectorAll("path"))) {
    const name = path.getAttribute("title"); // e.g. "New South Wales" (from the amCharts file)
    const d = path.getAttribute("d");
    const label = name ? config.labels[name] : undefined; // e.g. { label: "NSW" }

    if (name && d && label) {
      regions[name] = { d, ...label };
    }
  }

  const map = { viewBox: config.viewBox, regions };
  parsedCache.set(countryId, map);
  return map;
}
