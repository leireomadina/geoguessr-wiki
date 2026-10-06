import { describe, expect, it, vi } from "vitest";
import { countries } from "@/data/countries";
import {
  getRegionMap,
  hasRegionMap,
  MAP_CONFIGS,
  matchLabels,
  parseSvgRegions,
} from "@/data/regionMaps";

const svg = (paths: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg">${paths}</svg>`;

describe("parseSvgRegions", () => {
  it("maps each path's title to its d attribute", () => {
    const regions = parseSvgRegions(
      svg(`
        <path title="Alpha" d="M0 0 L10 0 Z" />
        <path title="Beta" d="M5 5 L15 5 Z" />
      `),
    );

    expect(regions).toEqual({
      Alpha: "M0 0 L10 0 Z",
      Beta: "M5 5 L15 5 Z",
    });
  });

  it("skips paths without a title or without shape data", () => {
    const regions = parseSvgRegions(
      svg(`
        <path d="M0 0 L10 0 Z" />
        <path title="No shape" />
        <path title="" d="M1 1 L2 2 Z" />
        <path title="Kept" d="M3 3 L4 4 Z" />
      `),
    );

    expect(regions).toEqual({ Kept: "M3 3 L4 4 Z" });
  });

  it("keeps non-ASCII region names as-is", () => {
    // Real maps use accented names (e.g. Polish voivodeships)
    const regions = parseSvgRegions(svg(`<path title="Łódzkie" d="M0 0 Z" />`));

    expect(regions).toEqual({ Łódzkie: "M0 0 Z" });
  });

  it("strips a leading byte-order mark (BOM) before parsing", () => {
    // amCharts SVGs start with a BOM. Browsers reject XML with anything before
    // `<?xml` (so the map showed no regions), but jsdom accepts it, so check what
    // reaches the parser instead of the result. e2e/region-map.spec.ts covers the browser.
    const parse = vi.spyOn(DOMParser.prototype, "parseFromString");
    const bomSvg = `\uFEFF<?xml version="1.0" encoding="utf-8"?>${svg(`<path title="Alpha" d="M0 0 Z" />`)}`;

    const regions = parseSvgRegions(bomSvg);

    expect(parse.mock.calls[0][0].startsWith("\uFEFF")).toBe(false);
    expect(regions).toEqual({ Alpha: "M0 0 Z" });
    parse.mockRestore();
  });

  it("returns an empty object for an SVG without paths", () => {
    expect(parseSvgRegions(svg(""))).toEqual({});
  });
});

describe("matchLabels", () => {
  const shapes = { Alpha: "M0 0 Z", Beta: "M1 1 Z" };

  it("uses the configured label for a shape", () => {
    const regions = matchLabels(shapes, { Alpha: { label: "A" } });

    expect(regions.Alpha).toEqual({ d: "M0 0 Z", label: "A" });
  });

  it("falls back to the region name when no label is configured", () => {
    const regions = matchLabels(shapes, { Alpha: { label: "A" } });

    expect(regions.Beta).toEqual({ d: "M1 1 Z", label: "Beta" });
  });

  it("falls back for every shape when no labels are given", () => {
    expect(matchLabels(shapes)).toEqual({
      Alpha: { d: "M0 0 Z", label: "Alpha" },
      Beta: { d: "M1 1 Z", label: "Beta" },
    });
  });

  it("ignores labels that have no matching shape", () => {
    const regions = matchLabels(shapes, { Gamma: { label: "G" } });

    expect(Object.keys(regions)).toEqual(["Alpha", "Beta"]);
  });
});

describe("hasRegionMap", () => {
  it.each(["AU", "CZ", "PL"])("is true for %s, which has a map", (id) => {
    expect(hasRegionMap(id)).toBe(true);
  });

  it("is false for a country without a map", () => {
    expect(hasRegionMap("ES")).toBe(false);
  });

  it("is case-sensitive (country ids are uppercase)", () => {
    expect(hasRegionMap("pl")).toBe(false);
  });

  it("is false for an empty id", () => {
    expect(hasRegionMap("")).toBe(false);
  });
});

describe("getRegionMap", () => {
  it("returns undefined for a country without a map", () => {
    expect(getRegionMap("ES")).toBeUndefined();
  });

  it("returns the configured viewBox and the parsed regions with labels", () => {
    const map = getRegionMap("AU");

    expect(map?.viewBox).toBe("0 0 500 600");
    expect(map?.regions["New South Wales"]).toMatchObject({ label: "NSW" });
    expect(map?.regions["New South Wales"].d).not.toBe("");
  });

  it("caches the parsed map and returns the same object on later calls", () => {
    expect(getRegionMap("PL")).toBe(getRegionMap("PL"));
  });
});

// Data integrity: a region only appears on the map when its name exactly
// matches an SVG <path title>. RegionMap only warns about mismatches in dev, so
// these checks make the same mistakes (typos, accents, whitespace) fail CI.
describe.each(Object.keys(MAP_CONFIGS))("region map data for %s", (id) => {
  const config = MAP_CONFIGS[id];
  const country = countries.find((c) => c.id === id);
  const shapeNames = Object.keys(parseSvgRegions(config.svg));
  const regionNames = country?.regions?.map((region) => region.name) ?? [];

  it("belongs to an existing country with regions", () => {
    expect(country, `${id} is not in the country data`).toBeDefined();
    expect(regionNames.length, `${id} has a map but no regions`).toBeGreaterThan(0);
  });

  it("has a map shape for every region", () => {
    const shapes = new Set(shapeNames);
    for (const name of regionNames) {
      expect(shapes.has(name), `${id} region "${name}" has no SVG <path title>`).toBe(true);
    }
  });

  it("has a region for every map shape", () => {
    const regions = new Set(regionNames);
    for (const name of shapeNames) {
      expect(regions.has(name), `${id} SVG shape "${name}" has no region in the country data`).toBe(true);
    }
  });

  it("only configures labels for existing map shapes", () => {
    const shapes = new Set(shapeNames);
    for (const [name, { label }] of Object.entries(config.labels ?? {})) {
      expect(shapes.has(name), `${id} label for "${name}" matches no SVG shape`).toBe(true);
      expect(label.trim(), `${id} label for "${name}"`).not.toBe("");
    }
  });

  it("has a viewBox of 4 numbers with a positive width and height", () => {
    const parts = config.viewBox.trim().split(/\s+/).map(Number);
    expect(parts, `${id} viewBox "${config.viewBox}"`).toHaveLength(4);
    expect(parts.every(Number.isFinite), `${id} viewBox "${config.viewBox}"`).toBe(true);
    expect(parts[2], `${id} viewBox width`).toBeGreaterThan(0);
    expect(parts[3], `${id} viewBox height`).toBeGreaterThan(0);
  });
});
