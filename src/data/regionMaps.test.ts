import { describe, expect, it } from "vitest";
import {
  getRegionMap,
  hasRegionMap,
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
